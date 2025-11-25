<!-- src/components/NavBar.vue -->
<template>
  <v-app-bar elevation="2" dense app>
    <v-container fluid>
      <v-row align="center" no-gutters class="w-100">
        <!-- Brand (left) -->
        <v-col cols="auto" class="d-flex align-center">
          <RouterLink
            to="/"
            class="text-h6 text-decoration-none"
            style="white-space: nowrap"
          >
            Suman Enterprise
          </RouterLink>
        </v-col>

        <v-spacer />

        <!-- Right-side: Products icon + Compare TEXT + badge -->
        <v-col cols="auto" class="d-flex align-center" style="gap: 12px">
          <!-- Products icon -->
          <v-btn icon aria-label="Products" @click="$router.push('/products')">
            <v-icon>mdi-view-grid</v-icon>
          </v-btn>

          <!-- Compare TEXT + badge (desktop & mobile) -->
          <RouterLink to="/compare" style="text-decoration: none">
            <v-btn text class="d-flex align-center">
              <span>Compare</span>
              <v-badge
                v-if="compareCount > 0"
                :content="compareCount"
                overlap
                color="primary"
                class="ml-4"
              />
            </v-btn>
          </RouterLink>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useProductStore } from "@/stores/productStore";

// compare count (auto updates)
const productStore = useProductStore();

const compareCount = computed(() => productStore.compareList.length);
</script>

<style scoped>
.text-decoration-none {
  text-decoration: none;
  color: inherit;
}
</style>
