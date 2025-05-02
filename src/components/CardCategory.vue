<template>
  <div
    class="w-auto p-4 transition bg-gray-100 shadow rounded-xl hover:shadow-md">
    <h3 class="mb-1 text-lg font-semibold text-gray-800">{{ name }}</h3>
    <p class="text-sm text-gray-500">ID: {{ id }}</p>

    <div class="mt-2 space-y-1 text-sm text-gray-700">
      <p>Produk: {{ productCount }}</p>
      <p>Total Harga: Rp {{ totalPrice.toLocaleString("id-ID") }}</p>
      <p>Subkategori: {{ subcategoryCount }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardCategory",
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    productCount: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    subcategoryCount: {
      type: Number,
      required: true,
    },
  },
};
</script>
