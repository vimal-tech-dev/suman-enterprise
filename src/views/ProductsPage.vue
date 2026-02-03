<!-- src/views/ProductsPage.vue -->
<template>
  <v-container fluid class="products-page">
    <!-- Premium hero section -->
    <section class="hero-premium">
      <div class="hero-badge">
        <div class="chip-gold">Premium Medical Solutions</div>
      </div>
      <h1 class="hero-title">Orthopaedic Excellence, Thoughtfully Curated.</h1>
      <p class="hero-subtitle">
        Discover premium braces, supports, and fracture aids meticulously selected to
        ensure safe, comfortable, and confident recovery for every patient.
      </p>
    </section>

    <!-- Main content shell -->
    <v-container class="content-shell" fluid>
      <ProductList />

      <ContactSection class="mt-10" />
      <AboutSection class="mt-10" />
      <MapSection class="mt-10" />
      <SiteFooter class="mt-12" />
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
.products-page {
  padding: 0;
}

.hero-premium {
  max-width: 980px;
  margin: 0 auto 20px;
  padding: 16px 14px 12px;
  text-align: center;
}

.hero-badge {
  margin-bottom: 10px;
}

.hero-title {
  font-family: "Playfair Display", serif;
  font-size: clamp(1.6rem, 4.8vw, 2.3rem);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: linear-gradient(135deg, #f9fafb 0, #d4af37 55%, #f9fafb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
}

.hero-subtitle {
  max-width: 680px;
  margin: 0 auto;
  font-size: 0.92rem;
  color: var(--muted-color);
  line-height: 1.6;
}

.content-shell {
  padding: 0 12px 36px;
}

/* Mobile adjustments */
@media (max-width: 600px) {
  .hero-premium {
    padding: 12px 10px 10px;
  }

  .hero-title {
    letter-spacing: 0.08em;
  }

  .hero-subtitle {
    font-size: 0.88rem;
  }
}
</style>
