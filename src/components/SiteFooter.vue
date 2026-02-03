<!-- src/components/SiteFooter.vue -->
<template>
  <v-footer class="footer-premium" padless>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <div class="footer-brand">
            <div class="footer-logo-wrap">
              <img :src="logo" alt="Suman Enterprise Logo" class="footer-logo" />
            </div>
            <div>
              <h4 class="footer-title">Suman Enterprise Surgicals</h4>
              <span class="footer-subtitle"
                >Orthopaedic Application &amp; Fracture Aids</span
              >
            </div>
          </div>

          <p class="footer-mission">
            “Empowering recovery through superior orthopedic solutions, ensuring every
            patient receives the stability, comfort, and care they deserve.”
          </p>
        </v-col>

        <v-col cols="12" md="3">
          <h5 class="footer-heading">Quick Links</h5>
          <ul class="footer-links">
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/products">Products</RouterLink></li>
            <li><RouterLink to="/compare">Compare</RouterLink></li>
          </ul>
        </v-col>

        <v-col cols="12" md="3">
          <h5 class="footer-heading">Contact</h5>
          <p class="footer-contact">
            Hemanshu Bhai<br />
            +91 940 844 5376
          </p>
          <a
            href="https://wa.me/919408445376"
            target="_blank"
            rel="noopener"
            class="whatsapp-btn"
          >
            <v-icon size="18" class="mr-1">mdi-whatsapp</v-icon>
            WhatsApp Connect
          </a>
        </v-col>
      </v-row>

      <v-row class="mt-4">
        <v-col cols="12" class="text-center">
          <small class="footer-copy">
            &copy; {{ new Date().getFullYear() }} Suman Enterprise. All rights reserved.
            <br />
            Crafted with care by
            <a href="https://vimaltech.dev/" target="_blank" rel="noopener">
              Vimal Tech
            </a>
          </small>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
import logo from "@/assets/footer-logo.png";
</script>

<style scoped>
.footer-premium {
  background: radial-gradient(circle at top, #0a4b78 0, #020816 65%);
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  color: var(--body-color);
  padding-top: 18px;
  padding-bottom: 12px;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer-logo-wrap {
  width: 44px;
  height: 44px;
  border-radius: 16px;
  background: radial-gradient(circle at 30% 20%, #ffffff 0, #e5e7eb 18%, #0a4b78 85%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-logo {
  max-width: 68%;
  max-height: 68%;
  object-fit: contain;
}

.footer-title {
  margin: 0;
}

.footer-subtitle {
  font-size: 0.78rem;
  color: var(--muted-color);
}

.footer-mission {
  margin-top: 8px;
  font-size: 0.86rem;
  color: var(--muted-color);
}

.footer-heading {
  font-size: 0.9rem;
  margin-bottom: 6px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li + li {
  margin-top: 4px;
}

.footer-links a {
  color: var(--body-color);
  text-decoration: none;
  font-size: 0.86rem;
}

.footer-links a:hover {
  color: var(--gold-soft);
}

.footer-contact {
  font-size: 0.86rem;
}

.whatsapp-btn {
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: 999px;
  background: #25d366;
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  margin-top: 6px;
}

.whatsapp-btn:hover {
  background: #1ebe5d;
}

.footer-copy {
  color: var(--muted-color);
  font-size: 0.78rem;
}

.footer-copy a {
  color: var(--gold-soft);
  text-decoration: none;
}

.footer-copy a:hover {
  color: var(--gold-accent);
}
</style>
