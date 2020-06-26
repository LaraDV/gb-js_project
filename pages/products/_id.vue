<template>
  <!-- <section>{{$route.params.id}}</section> -->
  <!-- <div>{{products}}</div> -->
  <div>
    <img
      class="product__img"
      :src="product.product_image"
      alt="photo"
    />
    <div>{{product.id_product}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    product ({ $route }) {
      console.log($route.params); //$route.params.id  /string/
      let products = this.$store.getters["products/products"];
      console.log(products.find(el => el.id_product === 1));
      return products.find(el => el.id_product == $route.params.id);
    }
  }
};
</script>