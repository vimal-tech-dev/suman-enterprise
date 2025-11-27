<!-- src/components/SiteFooter.vue -->
<template>
  <v-footer padless>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <!-- Force zero spacing: row with NO margins, NO gaps -->
          <div class="logo-row">
            <img :src="logo" alt="Suman Enterprise Logo" class="footer-logo" />

            <h4 class="brand-title">Suman Enterprise Surgicals.</h4>
          </div>

          <p class="mission-text">
            <i>
              "To empower recovery through <b>superior orthopedic solutions</b>, ensuring
              every patient receives the stability, comfort, and care they deserve."
            </i>
          </p>
        </v-col>

        <v-col cols="12" md="3">
          <h5 class="text-subtitle-1">Quick Links</h5>
          <ul class="footer-links">
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/products">Products</RouterLink></li>
            <li><RouterLink to="/compare">Compare</RouterLink></li>
          </ul>
        </v-col>

        <v-col cols="12" md="3">
          <h5 class="text-subtitle-1">Contact</h5>

          <p>
            Hemanshu Bhai<br />
            +91 940 844 5376
          </p>

          <!-- WhatsApp Connect -->
          <div class="whatsapp-contact mt-2">
            <a
              href="https://wa.me/919408445376"
              target="_blank"
              rel="noopener"
              class="whatsapp-button"
            >
              <v-icon color="white" class="mr-1">mdi-whatsapp</v-icon>
              WhatsApp Connect
            </a>
          </div>
        </v-col>
      </v-row>

      <v-row class="mt-4">
        <v-col cols="12" class="text-center">
          <small>
            &copy; {{ new Date().getFullYear() }} Suman Enterprise. All rights reserved.
            <br />
            Powered by
            <a
              href="https://vimaltech.dev/"
              target="_blank"
              rel="noopener"
              style="text-decoration: none; color: inherit; font-weight: 500"
            >
              Vimal Tech
            </a>
          </small>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
import logo from "@/assets/footer-logo.png"; // <-- import the image
</script>

<style scoped>
/* Remove ALL spacing & default Vuetify layout gaps */
.logo-row {
  display: flex;
  align-items: center;
  gap: 0px !important; /* completely remove gap */
  margin: 0;
  padding: 0;
}

/* Control exact gap manually */
.footer-logo {
  height: 40px;
  width: 40px;
  object-fit: contain;
  margin-right: 6px; /* adjust this: 0px–6px */
}

/* Brand text aligned perfectly */
.brand-title {
  margin: 0; /* remove all margins */
  padding: 0;
  line-height: 1.2;
}

/* Mission text placed below */
.mission-text {
  margin-top: 6px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.whatsapp-button {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 6px;
  background-color: #25d366; /* WhatsApp Green */
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: 0.2s ease;
}

.whatsapp-button:hover {
  background-color: #1ebe5d; /* darker hover */
}

.whatsapp-contact {
  display: flex;
  align-items: center;
}
</style>
