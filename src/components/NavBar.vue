<!-- src/components/NavBar.vue -->
<template>
  <v-app-bar elevation="2" dense app fixed>
    <v-container fluid>
      <v-row align="center" no-gutters class="w-100">

        <!-- Brand Logo (Left) -->
        <v-col cols="auto" class="d-flex align-center">
          <RouterLink to="/" class="d-flex align-center" style="text-decoration: none">
            <!-- Primary: native <img> for reliability -->
            <img :src="logo" alt="Suman Enterprise Logo" class="navbar-logo mr-2" @error="onImgError" />
            <!-- Fallback (kept for reference) -->
            <!-- <v-img :src="logo" alt="Suman Enterprise Logo" height="40" contain class="mr-2" /> -->
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
              <v-badge v-if="compareCount > 0" :content="compareCount" overlap color="primary" class="ml-4" />
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
import logo from "@/assets/Suman_Enterprise.png"; // ensure file exists at this path

// compare count (auto updates)
const productStore = useProductStore();
const compareCount = computed(() => productStore.compareList.length);

function onImgError(ev: Event) {
  // show helpful diagnostics in the browser console
  // eslint-disable-next-line no-console
  console.error("Navbar logo failed to load.", { logo, target: ev?.target });
  // optionally replace with placeholder so UI isn't broken
  const img = ev?.target as HTMLImageElement | null;
  if (img) {
    img.src = ""; // clear, or set to a known placeholder path like '/logo-fallback.png'
  }
}
</script>

<style scoped>
.text-decoration-none {
  text-decoration: none;
  color: inherit;
}

/* explicit styling for native img used as logo */
.navbar-logo {
  height: 100px;
  width: auto;
  display: block;
  object-fit: contain;
}

/* Prevent mobile browsers from shifting the fixed app-bar */
.v-app-bar {
  position: fixed !important;
  top: 0 !important;
  left: 0;
  right: 0;
  transform: translateZ(0);
  /* removes slight scroll jump */
  will-change: transform;
}
</style>
