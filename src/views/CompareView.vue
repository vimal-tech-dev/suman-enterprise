<!-- src/views/CompareView.vue -->
<template>
  <v-container>
    <h2 class="mb-4" style="text-align: center">Compare Products</h2>

    <v-row v-if="compareList.length" class="d-flex" dense>
      <!-- Render one card per compared product -->
      <v-col
        v-for="product in compareList"
        :key="product.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card class="mx-auto" elevation="2">
          <v-img :src="product.image" height="140" contain />

          <v-card-text class="text-center">
            <div class="text-h6 mb-2">{{ product.name }}</div>
            <div class="text-subtitle-2 mb-3">{{ product.category }}</div>
          </v-card-text>

          <v-card-actions class="justify-center pb-4">
            <v-btn
              color="error"
              small
              @click="remove(product.id)"
              :aria-label="`Remove ${product.name} from comparison`"
              title="Remove from compare"
            >
              Remove
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <div v-else class="text-center mt-10">
      <p>No products selected for comparison.</p>
      <v-btn color="primary" to="/products">Go to Product List</v-btn>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { useProductStore } from "@/stores/productStore";
import { storeToRefs } from "pinia";

const store: any = useProductStore();
const { compareList } = storeToRefs(store) as any;

/**
 * Remove a product from the compare list.
 * Prefer store.removeFromCompare(id) if available (common pattern).
 * Fallback to using $patch, or direct array replacement.
 */
function remove(id: string | number) {
  if (typeof store.removeFromCompare === "function") {
    store.removeFromCompare(id);
    return;
  }

  try {
    if (typeof store.$patch === "function") {
      store.$patch((state: any) => {
        if (Array.isArray(state.compareList)) {
          state.compareList = state.compareList.filter((p: any) => p.id !== id);
        }
      });
      return;
    }

    if (Array.isArray(store.compareList)) {
      store.compareList = store.compareList.filter((p: any) => p.id !== id);
      return;
    }

    // Development-time warning to surface why removal didn't work
    // eslint-disable-next-line no-console
    console.warn(
      "Unable to remove product from compare list; no known remove method.",
      id
    );
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Error removing product from compare list:", err);
  }
}
</script>

<style scoped>
.v-card {
  min-height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.v-card-text {
  padding-top: 12px;
  padding-bottom: 0;
}
.v-card-actions {
  padding-top: 8px;
}
</style>
