<template>
  <main>
    <div class="flex flex-col">
      <h1 class="flex justify-center text-2xl my-10">HomePage</h1>
    </div>
    <!-- <section class="flex gap-10 justify-center items-center">
      <div class="flex gap-5">
        <h1>{{ user?.name }}</h1>
        <p>{{ user?email }}</p>
      </div>
    </section> -->
  </main>
</template>

<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();

onMounted(async () => {
  await authStore.getUser();
});
</script>
