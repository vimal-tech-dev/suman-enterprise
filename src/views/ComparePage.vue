<!-- src/views/ComparePage.vue -->

<template>
  <v-container fluid>
    <!-- Compare product (same as before, but now as a component) -->
    <CompareView />

    <!-- Contact -->
    <ContactSection class="mt-12" />

    <!-- About -->
    <AboutSection class="mt-12" />

    <!-- Map -->
    <MapSection class="mt-8" />

    <!-- Footer -->
    <SiteFooter class="mt-12" />
  </v-container>
</template>

<script setup lang="ts">
// import ProductList from "@/views/ProductList.vue";
import AboutSection from "@/components/AboutSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import MapSection from "@/components/MapSection.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import CompareView from "./CompareView.vue";
</script>
