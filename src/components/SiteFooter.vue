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
            <li>
              <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
              <RouterLink to="/products">Products</RouterLink>
            </li>
            <li>
              <RouterLink to="/compare">Compare</RouterLink>
            </li>
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
            <a href="https://wa.me/919408445376" target="_blank" rel="noopener" class="whatsapp-button">
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
            <a href="https://vimaltech.dev/" target="_blank" rel="noopener"
              style="text-decoration: none; color: inherit; font-weight: 500">
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
.v-footer {
  background: radial-gradient(circle at top, #020617 0, #020617 60%, #020617 100%);
  border-top: 1px solid rgba(148, 163, 184, 0.4);
  padding-top: 18px;
  padding-bottom: 12px;
  color: rgba(226, 232, 240, 0.9);
}

.logo-row {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0;
  padding: 0;
}

.footer-logo {
  height: 40px;
  width: 40px;
  object-fit: contain;
}

.brand-title {
  margin: 0;
  padding: 0;
  line-height: 1.2;
  font-weight: 600;
}

.mission-text {
  margin-top: 8px;
  font-size: 0.86rem;
  color: rgba(148, 163, 184, 0.95);
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li+li {
  margin-top: 4px;
}

.whatsapp-button {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 6px;
  background-color: #25d366;
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: 0.2s ease;
}

.whatsapp-button:hover {
  background-color: #1ebe5d;
}

.whatsapp-contact {
  display: flex;
  align-items: center;
}

small {
  color: rgba(148, 163, 184, 0.95);
}
</style>
