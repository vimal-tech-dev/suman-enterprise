<!-- src/components/NavBar.vue -->
<template>
  <v-app-bar elevation="0" app fixed class="navbar-premium" density="comfortable">
    <v-container fluid>
      <v-row align="center" no-gutters class="w-100">
        <!-- Brand -->
        <v-col cols="auto" class="d-flex align-center brand-col">
          <RouterLink to="/" class="brand-link">
            <div class="logo-glass">
              <img
                :src="logo"
                alt="Suman Enterprise Logo"
                class="logo-img"
                @error="onImgError"
              />
            </div>
            <div class="brand-text">
              <span class="brand-title">Suman Enterprise</span>
              <span class="brand-subtitle">Orthopaedic &amp; Fracture Aids</span>
            </div>
          </RouterLink>
        </v-col>

        <v-spacer />

        <!-- Right: compare pill -->
        <v-col cols="auto" class="d-flex align-center">
          <RouterLink to="/compare" class="compare-link">
            <v-btn class="compare-pill" color="primary" variant="flat" size="small">
              <v-icon start size="18">mdi-compare</v-icon>
              <span class="compare-label">
                Compare
                <span v-if="compareCount > 0" class="compare-count">
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
import logo from "@/assets/Suman_Enterprise.png";

const productStore = useProductStore();
const compareCount = computed(() => productStore.compareList.length);

function onImgError(ev: Event) {
  const img = ev.target as HTMLImageElement | null;
  if (img) {
    img.style.opacity = "0.4";
  }
}
</script>

<style scoped>
.navbar-premium {
  background: radial-gradient(
      circle at top left,
      rgba(212, 175, 55, 0.12),
      transparent 55%
    ),
    linear-gradient(90deg, rgba(5, 37, 60, 0.98), rgba(4, 30, 50, 0.98));
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
  color: #f9fafb;
}

/* Prevent brand column from growing too much */
.brand-col {
  flex: 0 1 auto;
  min-width: 0; /* allow text to shrink */
}

.brand-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
  max-width: 100%;
}

.logo-glass {
  flex-shrink: 0; /* logo never shrinks */
  width: 40px;
  height: 40px;
  border-radius: 14px;
  background: radial-gradient(circle at 30% 20%, #ffffff 0, #d9e4ff 18%, #0a4b78 85%);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-img {
  max-width: 70%;
  max-height: 70%;
  object-fit: contain;
}

.brand-text {
  display: flex;
  flex-direction: column;
  min-width: 0; /* allow text to shrink/wrap */
}

.brand-title {
  font-family: "Playfair Display", serif;
  font-size: 0.98rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  white-space: nowrap; /* prevent wrapping */
  overflow: hidden;
  text-overflow: ellipsis;
}

.brand-subtitle {
  font-size: 0.72rem;
  color: rgba(226, 232, 240, 0.8);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Compare pill */
.compare-link {
  text-decoration: none;
}

.compare-pill {
  border-radius: 999px;
  padding-inline: 16px;
  background: linear-gradient(135deg, #0a4b78, #0e6ba3) !important;
  box-shadow: 0 8px 26px rgba(0, 0, 0, 0.4);
  flex-shrink: 0; /* button never shrinks */
}

.compare-label {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
}

.compare-count {
  font-weight: 600;
  color: var(--gold-soft);
}

/* -------- Small mobile (≤ 400px) -------- */
@media (max-width: 400px) {
  .logo-glass {
    width: 32px;
    height: 32px;
  }

  .brand-link {
    gap: 6px;
  }

  .brand-title {
    font-size: 0.7rem;
    letter-spacing: 0.08em;
  }

  .brand-subtitle {
    display: none; /* hide subtitle on very small screens */
  }

  .compare-pill {
    padding-inline: 10px;
  }

  .compare-label {
    font-size: 0.7rem;
  }
}

/* -------- Mobile (401px - 600px) -------- */
@media (min-width: 401px) and (max-width: 600px) {
  .logo-glass {
    width: 36px;
    height: 36px;
  }

  .brand-link {
    gap: 8px;
  }

  .brand-title {
    font-size: 0.82rem;
    letter-spacing: 0.1em;
  }

  .brand-subtitle {
    font-size: 0.68rem;
  }

  .compare-pill {
    padding-inline: 12px;
  }

  .compare-label {
    font-size: 0.75rem;
  }
}

/* -------- Desktop (≥ 960px) -------- */
@media (min-width: 960px) {
  .logo-glass {
    width: 40px;
    height: 40px;
  }

  .brand-title {
    font-size: 0.98rem;
  }

  .brand-subtitle {
    font-size: 0.72rem;
  }
}
</style>
