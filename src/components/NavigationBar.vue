<template>
  <div class="flex justify-center items-center gap-4">
    <div class="flex" v-for="nav in allNavs.navs">
      <a
        :href="nav.path"
        class="bg-red-500 px-2 py-1 font-bold text-white active:scale-95 transition-all"
      >
        {{ nav.name }}
      </a>
    </div>
  </div>
</template>

<script>
import { useNavbarStore } from '../stores/navbar';

export default {
  props: ['nav'],

  setup() {
    const allNavs = useNavbarStore();
    return { allNavs };
  },
};
</script>
