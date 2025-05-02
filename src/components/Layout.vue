<template>
  <div class="flex flex-col min-h-screen bg-bgColor">
    <Navbar />
    <main class="flex-1 p-6 font-poppins">
      <slot />
    </main>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";

export default {
  name: "Layout",
  components: {
    Navbar,
  },
};
</script>
