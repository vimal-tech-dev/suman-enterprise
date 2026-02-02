<!-- src/components/MapSection.vue -->
<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="10" class="mx-auto">
        <v-sheet class="section-card" elevation="0">
          <h3 class="section-title">Our Location</h3>
          <p class="section-helper">
            Visit us for personalised guidance and product selection assistance.
          </p>
          <div class="map-wrapper">
            <iframe :src="embedUrl" width="100%" height="400" style="border: 0" allowfullscreen loading="lazy"
              referrerpolicy="no-referrer-when-downgrade" title="Our location on Google Maps"></iframe>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const embedUrl =
  "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d180.2146307257044!2d72.92215504892144!3d20.614047148130698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1764184202160!5m2!1sen!2sin"; // paste your place embed URL here
</script>

<style scoped>
.section-card {
  border-radius: 18px;
  padding: 20px 18px;
  border: 1px solid rgba(148, 163, 184, 0.35);
  background: radial-gradient(circle at top, #020617 0, #020617 60%, #020617 100%);
}

.section-title {
  text-align: center;
  margin-bottom: 4px;
}

.section-helper {
  text-align: center;
  margin-bottom: 12px;
  font-size: 0.9rem;
  opacity: 0.85;
}

.map-wrapper iframe {
  border-radius: 12px;
  min-height: 260px;
}
</style>
