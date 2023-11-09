<template>
  <div class="flex justify-center items-center gap-2">
    <div class="flex" v-for="nav in allNavs.navs">
      <a :href="nav.path"> {{ nav.name }} </a>
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
