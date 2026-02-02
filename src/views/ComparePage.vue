<!-- src/views/ComparePage.vue -->
<template>
  <v-container fluid class="page-shell">
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">
          Need guide from support team.
        </h1>
        <p class="hero-subtitle">
          Call directly for quick response or whatsapp us to our support team for further assistance.
        </p>
      </div>
    </section>
    <v-container class="page-inner" fluid>
      <!-- Compare product (same as before, but now as a component) -->
      <CompareView />

      <!-- Footer -->
      <SiteFooter class="mt-12" />
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
import SiteFooter from "@/components/SiteFooter.vue";
import CompareView from "./CompareView.vue";
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
