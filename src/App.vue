<template>
  <div class="my-2">
    <navigation-bar />

    <router-view />
  </div>
</template>

<script setup>
import NavigationBar from '../src/components/navigationBar.vue';
</script>
