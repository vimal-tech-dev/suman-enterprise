<!-- src/components/NavBar.vue -->
<template>
  <v-app-bar elevation="0" density="comfortable" app fixed class="navbar-glass">
    <v-container fluid>
      <v-row align="center" no-gutters class="w-100">
        <!-- Left: logo + brand (desktop); logo only (mobile) -->
        <v-col cols="auto" class="d-flex align-center">
          <RouterLink to="/" class="d-flex align-center text-decoration-none">
            <img :src="logo" alt="Suman Enterprise Logo" class="navbar-logo mr-2" @error="onImgError" />

            <!-- Hide brand on very small screens -->
            <div class="brand-block">
              <span class="brand-title">SUMAN ENTERPRISE</span>
              <span class="brand-subtitle">Orthopaedic &amp; Fracture Aids</span>
            </div>
          </RouterLink>
        </v-col>

        <v-spacer />

        <!-- Right: compact compare pill (mobile & desktop) -->
        <v-col cols="auto" class="d-flex align-center navbar-actions">
          <RouterLink to="/compare" class="text-decoration-none">
            <v-btn class="compare-pill" variant="flat" size="small" color="primary">
              <v-icon start size="16">mdi-compare</v-icon>
              <span class="compare-pill-label">
                Compare
                <span v-if="compareCount > 0" class="compare-pill-count">
                  ({{ compareCount }})
                </span>
              </span>
            </v-btn>
          </RouterLink>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useProductStore } from "@/stores/productStore";
import logo from "@/assets/Suman_Enterprise.png"; // ensure file exists at this path

// compare count (auto updates)
const productStore = useProductStore();
const compareCount = computed(() => productStore.compareList.length);

function onImgError(ev: Event) {
  // show helpful diagnostics in the browser console
  // optionally replace with placeholder so UI isn't broken
  const img = ev?.target as HTMLImageElement | null;
  if (img) {
    img.src = ""; // clear, or set to a known placeholder path like '/logo-fallback.png'
  }
}
</script>

<style scoped>
.text-decoration-none {
  text-decoration: none;
  color: inherit;
}

/* Base logo size */
.navbar-logo {
  height: 40px;
  width: auto;
  display: block;
  object-fit: contain;
}

.brand-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.brand-title {
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.brand-subtitle {
  font-size: 0.7rem;
  opacity: 0.7;
}

/* Glass background + good contrast */
.navbar-glass {
  background: #020617 !important;
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(148, 163, 184, 0.45);
  color: #e5e7eb;
}

.navbar-actions {
  gap: 6px;
}

/* Compare pill looks the same on all devices */
.compare-pill {
  border-radius: 999px;
  padding-inline: 12px;
  text-transform: none;
}

.compare-pill-label {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-size: 0.76rem;
}

.compare-pill-count {
  font-weight: 500;
}

/* Keep fixed bar stable */
.v-app-bar {
  position: fixed !important;
  top: 0 !important;
  left: 0;
  right: 0;
  transform: translateZ(0);
  will-change: transform;
}

/* -------- Mobile (<= 600px) -------- */
@media (max-width: 600px) {
  .navbar-logo {
    height: 68px;
    /* was 28px – larger for clarity */
  }

  .brand-block {
    display: none;
    /* keep text hidden to save space */
  }

  .navbar-glass {
    height: 58px;
    /* a little taller to match bigger logo */
  }

  .compare-pill {
    padding-inline: 12px;
    min-width: auto;
  }

  .compare-pill-label {
    font-size: 0.78rem;
  }
}

/* -------- Desktop (>= 960px) -------- */
@media (min-width: 960px) {
  .navbar-logo {
    height: 40px;
  }

  .brand-block {
    display: flex;
  }

  .navbar-glass {
    height: 64px;
  }
}
</style>