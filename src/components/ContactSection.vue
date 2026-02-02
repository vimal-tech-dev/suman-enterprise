<!-- src/components/ContactSection.vue -->
<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-sheet class="section-card text-center" elevation="0">
          <h2 class="section-title">Contact Person</h2>
          <h3 class="section-name">Hemanshu Bhai</h3>
          <p class="section-phone">
            Mobile:<br />
            <span>+91 940 844 5376</span>
          </p>
          <v-btn class="mt-3" color="primary" variant="flat" size="large" rounded="pill" href="tel:+919408445376">
            Tap to Call
          </v-btn>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.section-card {
  border-radius: 16px;
  padding: 22px 20px;
  border: 1px solid rgba(148, 163, 184, 0.35);
  background: radial-gradient(circle at top, #020617 0, #020617 60%, #020617 100%);
}

.section-title {
  margin-bottom: 8px;
}

.section-name {
  margin-bottom: 6px;
}

.section-phone span {
  font-weight: 500;
}
</style>
