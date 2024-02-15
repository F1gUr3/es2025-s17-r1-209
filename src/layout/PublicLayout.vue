<script setup>
import NavigationBar from '../components/layoutComponents/NavigationBar.vue'
import FooterBar from '../components/layoutComponents/Footer.vue'
</script>

<template>
  <NavigationBar />
  <slot />
  <FooterBar />
</template>

<style scoped></style>
