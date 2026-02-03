<!-- src/views/CompareView.vue -->
<template>
  <v-container>
    <v-sheet class="compare-shell" elevation="0">
      <div class="compare-header text-center">
        <div class="chip-gold">Product Comparison</div>
        <h2 class="compare-title">Compare Your Selected Products</h2>
        <p class="compare-subtitle">
          Review products side by side, then remove any item as needed.
        </p>
      </div>

      <div v-if="compareList.length" class="compare-grid">
        <v-row>
          <v-col
            v-for="product in compareList"
            :key="product.id"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card class="compare-card" elevation="4">
              <v-img :src="product.image" height="160" cover class="compare-image" />

              <v-card-text class="compare-body text-center">
                <div class="compare-product-name">{{ product.name }}</div>
                <div class="compare-product-category text-muted">
                  {{ product.category }}
                </div>
              </v-card-text>

              <v-card-actions class="compare-actions justify-center pb-4">
                <v-btn
                  color="error"
                  variant="outlined"
                  size="small"
                  class="remove-btn"
                  @click="remove(product.id)"
                  :aria-label="`Remove ${product.name} from comparison`"
                >
                  <v-icon start size="16">mdi-close-circle-outline</v-icon>
                  Remove
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <div class="text-center mt-8">
          <RouterLink to="/products" class="text-decoration-none">
            <v-btn color="primary" variant="flat" size="large" class="view-products-btn">
              <v-icon start size="20">mdi-view-grid-outline</v-icon>
              View All Products
            </v-btn>
          </RouterLink>
        </div>
      </div>

      <div v-else class="compare-empty text-center">
        <v-icon size="64" color="rgba(255,255,255,0.2)">mdi-compare</v-icon>
        <p class="empty-message">No products selected for comparison.</p>
        <p class="empty-hint">Visit the product list and select items to compare.</p>
        <RouterLink to="/products" class="text-decoration-none">
          <v-btn color="primary" variant="flat" size="large" class="mt-4">
            Browse Products
          </v-btn>
        </RouterLink>
      </div>
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
import { useProductStore } from "@/stores/productStore";
import { storeToRefs } from "pinia";

const store = useProductStore();
const { compareList } = storeToRefs(store);

function remove(id: number) {
  // Use the store's built-in method (this is the cleanest approach)
  store.removeFromCompare(id);
}
</script>

<style scoped>
.compare-shell {
  border-radius: var(--radius-lg);
  padding: 24px 18px 28px;
  background: radial-gradient(circle at top, #0a4b78 0, #020816 60%);
  border: 1px solid var(--border-subtle);
  box-shadow: var(--shadow-soft);
}

.compare-header {
  margin-bottom: 20px;
}

.compare-title {
  margin-top: 12px;
  margin-bottom: 6px;
  font-size: 1.15rem;
}

.compare-subtitle {
  font-size: 0.88rem;
  color: var(--muted-color);
}

.compare-grid {
  margin-top: 16px;
}

/* Compare cards */
.compare-card {
  border-radius: var(--radius-md);
  background: radial-gradient(circle at top, #052238 0, #020816 70%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: var(--shadow-subtle);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.compare-card:hover {
  transform: translateY(-4px);
  border-color: rgba(212, 175, 55, 0.5);
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.5);
}

.compare-image {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.compare-body {
  padding-top: 14px;
  padding-bottom: 6px;
}

.compare-product-name {
  font-weight: 600;
  font-size: 0.94rem;
}

.compare-product-category {
  margin-top: 4px;
  font-size: 0.76rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.compare-actions {
  padding-bottom: 14px;
}

.remove-btn {
  border-radius: var(--radius-pill);
  border-color: rgba(249, 115, 115, 0.7) !important;
}

.view-products-btn {
  border-radius: var(--radius-pill);
  background: linear-gradient(135deg, #0a4b78, #0e6ba3) !important;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Empty state */
.compare-empty {
  padding: 40px 20px;
}

.empty-message {
  margin-top: 14px;
  font-size: 1rem;
  font-weight: 500;
}

.empty-hint {
  margin-top: 6px;
  font-size: 0.86rem;
  color: var(--muted-color);
}
</style>
