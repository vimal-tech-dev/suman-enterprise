<!-- src/components/ProductCard.vue -->
<template>
  <v-card class="product-card" elevation="3">
    <v-img :src="product.image" class="product-image" height="190" cover />

    <v-card-text class="text-center">
      <div class="product-name">{{ product.name }}</div>
      <div class="product-category">{{ product.category }}</div>
    </v-card-text>

    <v-card-actions class="justify-center pb-4">
      <v-btn :color="isInCompare ? 'error' : 'primary'" variant="outlined" size="small" class="compare-button"
        @click="toggleCompare">
        <v-icon start size="18">
          {{ isInCompare ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline' }}
        </v-icon>
        {{ isInCompare ? 'Remove' : 'Select to Compare' }}
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
  // console.log("Toggling Compare for:", props.product);

  if (isInCompare.value) {
    store.removeFromCompare(props.product.id);
  } else {
    store.addToCompare(props.product);
  }

  // console.log("Current Compare List:", store.compareList);
}
</script>

<style scoped>
.product-card {
  margin: 8px auto;
  max-width: 320px;
  border-radius: 18px;
  background: radial-gradient(circle at top, #020617 0, #020617 60%, #020617 100%);
  border: 1px solid rgba(148, 163, 184, 0.35);
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
}

.product-card:hover {
  transform: translateY(-4px);
  border-color: rgba(248, 250, 252, 0.7);
  box-shadow: 0 14px 40px rgba(15, 23, 42, 0.6);
}

.product-image {
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

.product-name {
  margin-top: 14px;
  font-weight: 600;
  font-size: 0.98rem;
}

.product-category {
  margin-top: 4px;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.7;
}

.compare-button {
  border-radius: 999px;
  text-transform: none;
  font-size: 0.78rem;
  padding-inline: 18px;
}
</style>
