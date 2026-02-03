<!-- src/components/MapSection.vue -->
<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="10" class="mx-auto">
        <v-sheet class="map-shell" elevation="0">
          <div class="map-header text-center">
            <div class="chip-gold">Visit Us</div>
            <h3 class="map-title">Our Location</h3>
            <p class="map-subtitle">
              Visit our center for personalised guidance and product selection assistance.
            </p>
          </div>

          <div class="map-wrapper">
            <iframe
              :src="embedUrl"
              width="100%"
              height="420"
              style="border: 0"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Our location on Google Maps"
            ></iframe>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const embedUrl =
  "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d180.2146307257044!2d72.92215504892144!3d20.614047148130698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1764184202160!5m2!1sen!2sin";
</script>

<style scoped>
.map-shell {
  border-radius: var(--radius-lg);
  padding: 22px 18px 20px;
  background: radial-gradient(circle at top, #0a4b78 0, #020816 60%);
  border: 1px solid var(--border-subtle);
  box-shadow: var(--shadow-subtle);
}

.map-header {
  margin-bottom: 14px;
}

.map-title {
  margin-top: 10px;
  margin-bottom: 4px;
  font-size: 1rem;
}

.map-subtitle {
  font-size: 0.88rem;
  color: var(--muted-color);
}

.map-wrapper {
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.map-wrapper iframe {
  display: block;
  min-height: 300px;
}

@media (max-width: 600px) {
  .map-wrapper iframe {
    min-height: 260px;
  }
}
</style>
