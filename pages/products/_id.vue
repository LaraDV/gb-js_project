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
      return (this.$store.getters["products/products"]).find(el => el.id_product == $route.params.id)
    }
  }
};
/////////////////////////-- другой вариант --////////////////////////
// import { mapGetters } from 'vuex'
// export default {
//   data() {
//     return {
//     };
//   },
//   computed: {
//     product ({ $route , mapGetters}) {
//       return this.products.find(el => el.id_product == this.$route.params.id)
//     },
//     ...mapGetters({
//         products: 'products/products' // Модуль/геттер, products доступно, как this.products
//       })
//   }
// };
</script>