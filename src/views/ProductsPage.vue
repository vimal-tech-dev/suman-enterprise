<!-- src/views/ProductsPage.vue -->
<template>
  <v-container fluid class="page-shell">
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">
          Orthopaedic Excellence, Thoughtfully Curated.
        </h1>
        <p class="hero-subtitle">
          Explore braces, supports, and fracture aids carefully selected to
          support safe, comfortable, and confident recovery.
        </p>
      </div>
    </section>

    <v-container class="page-inner" fluid>
      <ProductList />

      <ContactSection class="mt-10" />
      <AboutSection class="mt-10" />
      <MapSection class="mt-8" />
      <SiteFooter class="mt-10" />
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
import ProductList from "@/views/ProductList.vue";
import AboutSection from "@/components/AboutSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import MapSection from "@/components/MapSection.vue";
import SiteFooter from "@/components/SiteFooter.vue";
</script>

<style scoped>
.page-shell {
  padding: 0 0 32px;
}

.page-inner {
  padding: 0 0 24px;
}

.hero {
  padding: 12px 0 10px;
}

.hero-content {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 12px 4px;
}

.hero-title {
  font-size: clamp(1.5rem, 4.6vw, 2.2rem);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.hero-subtitle {
  margin-top: 8px;
  max-width: 620px;
  color: rgba(226, 232, 240, 0.85);
  font-size: 0.9rem;
}

@media (max-width: 599px) {
  .hero-content {
    padding-inline: 8px;
  }

  .hero-title {
    letter-spacing: 0.04em;
  }
}
</style>
