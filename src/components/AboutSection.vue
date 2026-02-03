<!-- src/components/AboutSection.vue -->
<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8" class="mx-auto">
        <v-sheet class="about-shell" elevation="0">
          <div class="chip-gold">About Suman Enterprise</div>
          <h2 class="about-title">Precision in Orthopaedic Care</h2>
          <p class="about-text">
            <strong>Suman Enterprise</strong> is your premier partner in orthopedic
            solutions, dedicated to elevating standards in orthopedic care and fracture
            management.
          </p>
          <p class="about-text">
            We specialise in high‑quality
            <b>Orthopaedic Application &amp; Fracture Aids</b>, delivering casts, splints,
            braces, and supports that bridge the gap between injury and confident
            recovery.
          </p>
          <p class="about-text">
            Whether collaborating with <strong>medical professionals</strong> or serving
            patients directly, we focus on safety, stability, and comfort in every
            product.
          </p>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts"></script>

<style scoped>
.about-shell {
  border-radius: var(--radius-lg);
  padding: 22px 22px 18px;
  background: radial-gradient(circle at top left, #0a4b78 0, #020816 60%);
  border: 1px solid var(--border-subtle);
  box-shadow: var(--shadow-subtle);
}

.about-title {
  margin-top: 12px;
  margin-bottom: 8px;
  font-size: 1.05rem;
}

.about-text {
  margin-bottom: 6px;
  text-indent: 1.4em;
  font-size: 0.92rem;
}
</style>
