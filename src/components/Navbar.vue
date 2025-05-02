<template>
  <div class="px-6 bg-black h-14">
    <div class="flex items-center">
      <RouterLink to="/" class="mt-2">
        <h1 class="text-2xl text-white">E-COMMERCE</h1>
      </RouterLink>
    </div>
  </div>
</template>
<script>
import { RouterLink } from "vue-router";

export default {
  name: "Navbar",
  components: {
    RouterLink,
  },
};
</script>
