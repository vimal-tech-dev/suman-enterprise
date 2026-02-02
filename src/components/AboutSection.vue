<!-- src/components/AboutSection.vue -->
<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8" class="mx-auto">
        <v-sheet class="section-card" elevation="0">
          <h2 class="section-title">About Us</h2>
          <p class="section-body">
            <strong>Suman Enterprise</strong> is your premier partner in orthopedic
            solutions, dedicated to setting the standard in orthopedic care and
            fracture management.
          </p>
          <p class="section-body">
            We focus on high-quality
            <b>Orthopaedic Application &amp; Fracture Aids</b>, casts, splints, and
            braces that support a safe, stable, and comfortable recovery for every
            patient.
          </p>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.section-card {
  border-radius: 16px;
  padding: 20px 22px;
  border: 1px solid rgba(148, 163, 184, 0.35);
  background: radial-gradient(circle at top left, #020617 0, #020617 60%, #020617 100%);
}

.section-title {
  text-align: center;
  margin-bottom: 12px;
}

.section-body {
  text-indent: 1.5em;
  margin-bottom: 6px;
}
</style>
