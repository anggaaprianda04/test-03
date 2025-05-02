<template>
  <div
    class="w-full max-w-full p-4 transition bg-gray-100 shadow-sm sm:max-w-xs rounded-2xl hover:shadow-lg">
    <img class="mb-2 rounded-md" src="https://placehold.co/600x400" alt="img" />
    <h3 class="mb-2 text-lg font-semibold text-gray-800 truncate">
      {{ name }}
    </h3>
    <p class="text-base font-bold text-green-600">
      Rp {{ price.toLocaleString("id-ID") }}
    </p>
    <p class="mt-1 text-sm text-gray-600">Stock: {{ quantity }}</p>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: "",
    },
    quantity: {
      type: Number,
      required: true,
      default: "",
    },
  },
};
</script>
