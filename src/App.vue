<!-- src/App.vue -->
<template>
  <v-app>
    <NavBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
</script>

<style>
/* global adjustments if needed */
</style>
