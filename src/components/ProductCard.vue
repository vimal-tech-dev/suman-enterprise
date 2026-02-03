<!-- src/components/ProductCard.vue -->
<template>
  <v-card class="product-card" elevation="4">
    <v-img :src="product.image" height="190" cover class="product-image" />

    <v-card-text class="product-body text-center">
      <div class="product-name">
        {{ product.name }}
      </div>
      <div class="product-category text-muted">
        {{ product.category }}
      </div>
    </v-card-text>

    <v-card-actions class="product-actions justify-center">
      <v-btn
        :color="isInCompare ? 'error' : 'primary'"
        variant="outlined"
        size="small"
        class="product-btn"
        @click="toggleCompare"
      >
        <v-icon start size="18">
          {{ isInCompare ? "mdi-checkbox-marked" : "mdi-checkbox-blank-outline" }}
        </v-icon>
        {{ isInCompare ? "Remove" : "Select to Compare" }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useProductStore } from "@/stores/productStore";
import type { Product } from "@/data/products";

const props = defineProps<{ product: Product }>();
const store = useProductStore();

const isInCompare = computed(() =>
  store.compareList.some((p) => p.id === props.product.id)
);

function toggleCompare() {
  if (isInCompare.value) {
    store.removeFromCompare(props.product.id);
  } else {
    store.addToCompare(props.product);
  }
}
</script>

<style scoped>
.product-card {
  max-width: 320px;
  margin: 10px auto;
  border-radius: var(--radius-lg);
  background: radial-gradient(circle at top, #0a4b78 0, #020816 60%);
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: var(--shadow-soft);
  overflow: hidden;
  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
}

.product-card:hover {
  transform: translateY(-6px);
  border-color: rgba(212, 175, 55, 0.7);
  box-shadow: 0 18px 46px rgba(0, 0, 0, 0.55);
}

.product-image {
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.product-body {
  padding-top: 16px;
  padding-bottom: 8px;
}

.product-name {
  font-weight: 600;
  font-size: 0.98rem;
}

.product-category {
  margin-top: 4px;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.product-actions {
  padding-bottom: 16px;
}

.product-btn {
  border-radius: var(--radius-pill);
  border-color: rgba(212, 175, 55, 0.75) !important;
  color: var(--gold-soft) !important;
}
</style>
