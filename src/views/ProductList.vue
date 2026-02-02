<!-- src/views/ProductList.vue -->
<template>
  <v-container>
    <v-sheet class="filter-shell" elevation="0">
      <v-row class="filter-row" align="center" justify="space-between">
        <v-col cols="12" md="6">
          <v-text-field v-model="ui.searchQuery" label="Search products" variant="outlined" density="compact" clearable
            prepend-inner-icon="mdi-magnify" @click:clear="ui.setSearch('')" />
        </v-col>

        <v-col cols="12" md="4">
          <v-select v-model="categoryFilter" :items="categories" label="Filter by category" variant="outlined"
            density="compact" clearable />
        </v-col>

        <v-col cols="12" class="filter-actions">
          <v-btn variant="text" color="primary" size="small" @click="ui.setSearch('')">
            Clear search
          </v-btn>
          <v-btn variant="text" color="primary" size="small" @click="categoryFilter = null">
            Clear category
          </v-btn>
        </v-col>
      </v-row>
    </v-sheet>

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

<style scoped>
.filter-shell {
  border-radius: 16px;
  padding: 10px 10px 6px;
  border: 1px solid rgba(148, 163, 184, 0.36);
  background: #020617;
}

.filter-row {
  row-gap: 8px;
}

.filter-actions {
  display: flex;
  justify-content: flex-end;
  gap: 6px;
}

/* Mobile spacing */
@media (max-width: 599px) {
  .filter-shell {
    padding: 8px 8px 4px;
  }

  .filter-actions {
    justify-content: flex-start;
    flex-wrap: wrap;
  }
}
</style>