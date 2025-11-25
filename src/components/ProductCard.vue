<!-- src/components/ProductCard.vue -->
<template>
  <v-card class="ma-2 mx-auto" max-width="300">
    <v-img :src="product.image" height="180" />
    <v-card-title style="white-space: pre-line; text-align: center">{{
      product.name
    }}</v-card-title>
    <v-card-subtitle style="white-space: pre-line; text-align: center">{{
      product.category
    }}</v-card-subtitle>
    <v-card-actions class="justify-center">
      <v-btn
        :color="isInCompare ? 'error' : 'primary'"
        variant="outlined"
        size="small"
        @click="toggleCompare"
      >
        <v-icon start>
          {{ isInCompare ? "mdi-checkbox-marked" : "mdi-checkbox-blank-outline" }}
        </v-icon>
        {{ isInCompare ? "Remove" : "Compare" }}
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
