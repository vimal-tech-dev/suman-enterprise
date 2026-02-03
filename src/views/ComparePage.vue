<!-- src/views/ComparePage.vue -->
<template>
  <v-container fluid class="compare-page">
    <!-- Premium support hero -->
    <section class="hero-premium">
      <div class="hero-badge">
        <div class="chip-gold">Need Help?</div>
      </div>

      <h1 class="hero-title">Need guidance from the support team.</h1>

      <p class="hero-subtitle">
        Call directly for a quick response or WhatsApp our support team for personalised
        assistance with products and sizing.
      </p>
    </section>

    <!-- Main content shell -->
    <v-container class="content-shell" fluid>
      <!-- Compare products -->
      <CompareView class="mt-4" />

      <!-- Footer -->
      <SiteFooter class="mt-12" />
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
import SiteFooter from "@/components/SiteFooter.vue";
import CompareView from "@/views/CompareView.vue";
</script>

<style scoped>
.compare-page {
  padding: 0 0 32px;
}

/* Hero matches ProductsPage premium hero */
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
  font-size: clamp(1.5rem, 4.4vw, 2.1rem);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: linear-gradient(135deg, #f9fafb 0, #d4af37 55%, #f9fafb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
}

.hero-subtitle {
  margin-top: 4px;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
  color: var(--muted-color);
  font-size: 0.92rem;
  line-height: 1.6;
}

/* Inner content spacing */
.content-shell {
  padding: 0 12px 24px;
}

/* Mobile tweaks */
@media (max-width: 599px) {
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
