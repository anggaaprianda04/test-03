<template>
  <Layout>
    <div class="flex flex-col gap-3">
      <h1 class="text-2xl font-semibold">Kategori</h1>
      <div
        v-if="!storeProduct.isLoading && !storeCategory.isLoading"
        class="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <CardCategory
          v-for="category in storeCategory.categoryTree"
          :key="category.id"
          :id="category.id"
          :name="category.name"
          :productCount="
            countProductsRecursive(category, storeProduct.products)
          "
          :totalPrice="
            sumProductPricesRecursive(category, storeProduct.products)
          "
          :subcategoryCount="
            category.children ? category.children.length : 0
          " />
      </div>
      <div
        v-else
        class="grid grid-cols-1 gap-6 mb-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <CardCategoryShimmer v-for="n in 4" :key="n" />
      </div>
    </div>
    <hr
      v-if="
        storeProduct.products.length > 0 && storeCategory.categories.length > 0
      "
      class="h-4" />
    <div class="flex flex-col gap-3">
      <h1 class="mb-2 text-2xl font-semibold">Produk</h1>
      <div
        v-if="!storeProduct.isLoading"
        class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <CardProduct
          v-for="product in storeProduct.products"
          :key="product.id"
          :name="product.name"
          :price="product.price"
          :quantity="product.quantity" />
      </div>
      <div
        v-else
        class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <CardProductShimmer v-for="n in 8" :key="n" />
      </div>
    </div>
  </Layout>
</template>
<script>
import { onMounted, reactive, toRefs } from "vue";
import {
  countProductsRecursive,
  sumProductPricesRecursive,
} from "../utils/categoryStats";
import Layout from "../components/Layout.vue";
import CardProduct from "../components/CardProduct.vue";
import CardCategory from "../components/CardCategory.vue";
import { useProductStore } from "../store/productStore";
import { useCategoryStore } from "../store/categoryStore";
import CardProductShimmer from "../components/CardProductShimmer.vue";
import CardCategoryShimmer from "../components/CardCategoryShimmer.vue";

export default {
  components: {
    Layout,
    CardProduct,
    CardCategory,
    CardProductShimmer,
    CardCategoryShimmer,
  },
  setup() {
    let data = reactive({
      storeProduct: useProductStore(),
      storeCategory: useCategoryStore(),
    });

    const getProducts = async () => {
      await data.storeProduct.fetchProducts();
    };

    const getCategories = async () => {
      await data.storeCategory.fetchCategories();
    };

    onMounted(async () => {
      await getProducts();
      await getCategories();
    });

    return {
      ...toRefs(data),
      countProductsRecursive,
      sumProductPricesRecursive,
    };
  },
};
</script>
