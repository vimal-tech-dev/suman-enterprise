<!-- src/views/ProductList.vue -->
<template>
  <v-container>
    <!-- Premium filter shell -->
    <v-sheet class="filter-premium" elevation="0">
      <v-row class="filter-row" align="center">
        <v-col cols="12" md="6">
          <v-text-field
            v-model="ui.searchQuery"
            label="Search products"
            variant="outlined"
            density="compact"
            clearable
            prepend-inner-icon="mdi-magnify"
            @click:clear="ui.setSearch('')"
          />
        </v-col>

        <v-col cols="12" md="4">
          <v-select
            v-model="categoryFilter"
            :items="categories"
            label="Filter by category"
            variant="outlined"
            density="compact"
            clearable
          />
        </v-col>

        <v-col cols="12" class="filter-actions">
          <v-btn variant="text" color="primary" size="small" @click="ui.setSearch('')">
            Clear search
          </v-btn>
          <v-btn
            variant="text"
            color="primary"
            size="small"
            @click="categoryFilter = null"
          >
            Clear category
          </v-btn>
        </v-col>
      </v-row>
    </v-sheet>

    <!-- Product grid -->
    <v-row class="mt-6">
      <v-col
        v-for="product in pagedProducts"
        :key="product.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <ProductCard :product="product" />
      </v-col>
    </v-row>

    <!-- Pagination -->
    <v-row class="mt-6" justify="center">
      <v-col cols="auto">
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
import VPaginationWithText from "@/components/VPaginationWithText.vue";
import type { Product } from "@/data/products";

const ui = useUIStore();
const store = useProductStore();

const categoryFilter = ref<string | null>(null);

const categories = computed(() => {
  return [...new Set(store.productList.map((p) => p.category))];
});

function matchesSearch(p: Product, q?: string): boolean {
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

const pageCount = computed(() => {
  return Math.max(1, Math.ceil(filteredProducts.value.length / ui.itemsPerPage));
});

watch([filteredProducts, () => ui.itemsPerPage], () => {
  if (ui.page > pageCount.value) ui.setPage(1);
});

const pagedProducts = computed(() => {
  const start = (ui.page - 1) * ui.itemsPerPage;
  return filteredProducts.value.slice(start, start + ui.itemsPerPage);
});
</script>

<style scoped>
.filter-premium {
  border-radius: var(--radius-md);
  padding: 14px 12px 10px;
  background: radial-gradient(circle at top left, #052238 0, #020816 60%);
  border: 1px solid var(--border-subtle);
  box-shadow: var(--shadow-subtle);
}

.filter-row {
  row-gap: 10px;
}

.filter-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

/* Mobile */
@media (max-width: 600px) {
  .filter-premium {
    padding: 10px 10px 8px;
  }

  .filter-actions {
    justify-content: flex-start;
    flex-wrap: wrap;
  }
}
</style>
