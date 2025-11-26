<!-- src/views/ProductList.vue -->
<template>
  <v-container>
    <v-row class="mb-4" style="text-align: center">
      <v-col cols="12" md="6">
        <!-- Search is now global; clear button also updates store -->
        <v-text-field v-model="ui.searchQuery" label="Search products" clearable @click:clear="ui.setSearch('')" />
        <v-btn class="mt-2" text color="primary" @click="ui.setSearch('')">Reset Search</v-btn>
      </v-col>

      <v-col cols="12" md="4">
        <v-select v-model="categoryFilter" :items="categories" label="Filter by Category" clearable />
        <v-btn class="mt-2" text color="primary" @click="categoryFilter = null">Reset Category Filter</v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="product in pagedProducts" :key="product.id" cols="12" sm="6" md="3">
        <ProductCard :product="product" />
      </v-col>
    </v-row>

    <v-row class="mt-6" justify="center">
      <v-col cols="auto">
        <!-- <v-pagination v-model="ui.page" :length="pageCount" :total-visible="7" /> -->
        <!-- <Pagination v-model="ui.page" :total-items="filteredProducts.length" :items-per-page="ui.itemsPerPage" /> -->
        <VPaginationWithText v-model="ui.page" :length="pageCount" :total-visible="7" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useUIStore } from "@/stores/uiStore";
import { useProductStore } from "@/stores/productStore";
import ProductCard from "@/components/ProductCard.vue";
// import Pagination from "@/components/Pagination.vue";
import VPaginationWithText from "@/components/VPaginationWithText.vue";

const ui = useUIStore();
const store = useProductStore();

// local category filter is fine as component-specific state
const categoryFilter = ref<string | null>(null);

const categories = computed(() => {
  return [...new Set(store.productList.map((p) => p.category))];
});

function matchesSearch(p: any, q: string | undefined) {
  const s = (q || "").trim().toLowerCase();
  if (!s) return true;
  return p.name.toLowerCase().includes(s);
}

const filteredProducts = computed(() => {
  const q = ui.searchQuery;
  return store.productList.filter((p) => {
    const matchesQ = matchesSearch(p, q);
    const matchesCategory = !categoryFilter.value || p.category === categoryFilter.value;
    return matchesQ && matchesCategory;
  });
});

// Pagination: compute pageCount and slice
const pageCount = computed(() => {
  return Math.max(1, Math.ceil(filteredProducts.value.length / ui.itemsPerPage));
});

// Ensure ui.page is within bounds if filters change
watch([filteredProducts, () => ui.itemsPerPage], () => {
  if (ui.page > pageCount.value) ui.setPage(1);
});

// slice for the current page
const pagedProducts = computed(() => {
  const start = (ui.page - 1) * ui.itemsPerPage;
  return filteredProducts.value.slice(start, start + ui.itemsPerPage);
});
</script>
