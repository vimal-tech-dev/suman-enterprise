<!-- src/components/ContactSection.vue -->
<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-sheet class="contact-shell" elevation="0">
          <div class="chip-gold">Contact</div>
          <h2 class="contact-title">Your Dedicated Orthopaedic Partner</h2>

          <div class="contact-main">
            <div>
              <h3 class="contact-name">Hemanshu Bhai</h3>
              <p class="contact-detail">
                Mobile:<br />
                <span>+91 940 844 5376</span>
              </p>
            </div>
            <v-btn
              href="tel:+919408445376"
              color="primary"
              variant="flat"
              size="large"
              class="contact-btn"
            >
              Tap to Call
            </v-btn>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts"></script>

<style scoped>
.contact-shell {
  border-radius: var(--radius-lg);
  padding: 22px 22px 18px;
  background: radial-gradient(circle at top, #0a4b78 0, #020816 60%);
  border: 1px solid var(--border-subtle);
  box-shadow: var(--shadow-subtle);
}

.contact-title {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 1rem;
}

.contact-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

.contact-name {
  margin-bottom: 4px;
}

.contact-detail span {
  font-weight: 500;
}

.contact-btn {
  border-radius: var(--radius-pill);
  background: linear-gradient(135deg, #0a4b78, #0e6ba3) !important;
}

/* Mobile */
@media (max-width: 600px) {
  .contact-main {
    align-items: flex-start;
  }
}
</style>
