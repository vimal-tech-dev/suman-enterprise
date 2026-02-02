<!-- src/views/CompareView.vue -->
<template>
  <v-container>
    <v-sheet class="section-card" elevation="0">
      <h2 class="section-title">Compare Products Lists</h2>

      <div v-if="compareList.length" class="mt-4">
        <p class="section-helper mb-6">
          To clear all compare products!<br />Just reload page.
        </p>
        <v-row>
          <!-- Render one card per compared product -->
          <v-col v-for="product in compareList" :key="product.id" cols="12" sm="6" md="4" lg="3">
            <v-card class="mx-auto" elevation="2">
              <v-img :src="product.image" height="140" contain />

              <v-card-text class="text-center">
                <div class="text-h6 mb-2">{{ product.name }}</div>
                <div class="text-subtitle-2 mb-3">{{ product.category }}</div>
              </v-card-text>

              <v-card-actions class="justify-center pb-4">
                <v-btn color="error" small @click="remove(product.id)"
                  :aria-label="`Remove ${product.name} from comparison`" title="Remove from compare">
                  Remove
                </v-btn>
              </v-card-actions>
            </v-card>
            <RouterLink to="/products" style="text-decoration: none; padding: 16px; text-align: center" class="d-block">
              <v-btn color="primary"> View Products </v-btn>
            </RouterLink>
          </v-col>
        </v-row>
      </div>
      <div v-else class="text-center mt-10">
        <p>No products are selected for comparison.</p>
        <v-btn color="primary" to="/products">Go to Product List</v-btn>
      </div>
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
import { useProductStore } from "@/stores/productStore";
import { storeToRefs } from "pinia";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const store: any = useProductStore();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      store.$patch((state: any) => {
        if (Array.isArray(state.compareList)) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          state.compareList = state.compareList.filter((p: any) => p.id !== id);
        }
      });
      return;
    }

    if (Array.isArray(store.compareList)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      store.compareList = store.compareList.filter((p: any) => p.id !== id);
      return;
    }

    // Development-time warning to surface why removal didn't work

    console.warn(
      "Unable to remove product from compare list; no known remove method.",
      id
    );
  } catch (err) {
    console.error("Error removing product from compare list:", err);
  }
}
</script>

<style scoped>
.section-card {
  border-radius: 18px;
  padding: 18px 16px 22px;
  border: 1px solid rgba(148, 163, 184, 0.35);
  background: radial-gradient(circle at top, #020617 0, #020617 60%, #020617 100%);
}

.section-title {
  text-align: center;
  margin-bottom: 6px;
}

.section-helper {
  text-align: center;
  font-size: 0.88rem;
  opacity: 0.8;
}

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
