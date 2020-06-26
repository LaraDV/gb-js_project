<template>
  <div>
    <div class="product__box center">
      <div class="product" v-for="product of products" :key="product.id_product">
        <nuxt-link to="#">
          <img
            class="product__img"
            :src="product.product_image"
            alt="photo"
            @click.prevent="openProductPage(product)"
          />
        </nuxt-link>
        <div class="product__content">
          <a href="#" class="product__name">Mango People T-shirt</a>
          <p class="product__price">$52.00</p>
        </div>
        <a href="#" class="product__add" @click.prevent="add_to_cart(product, $event)">Add to Cart</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({}),
  async mounted() {},
  computed: {
    products() {
      return this.$store.getters["products/products"];
    }
  },
  methods: {
    add_to_cart(product, $event) {
      console.log(event);
      console.log(product.id_product);
      this.$store.dispatch("cartComp/add", product);
    },
    openProductPage(product) {
      this.$router.push("/products/" + product.id_product);
      console.log(this.$router);
    }
  }
};
</script>

<style scoped>
.product__box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.product__box__browse {
  margin-top: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-left: calc(50% - 106px);
}

.product__box__browse__a {
  height: 48px;
  width: 212px;
  background-color: #f16d7f;
  font-weight: bold;
  text-align: center;
  line-height: 54px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: white;
  letter-spacing: 0.03em;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.product__box__browse__a__arrow {
  margin-left: 9px;
}

.product__box__browse__a:hover {
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
  background-color: white;
  color: #f16d7f;
  outline: 1px solid #f16d7f;
}

.product {
  width: 261px;
  position: relative;
  margin-bottom: 40px;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

.product:hover {
  -webkit-box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.16);
  -webkit-transform: scale(1.05) translate(0, -3.3%);
  transform: scale(1.05) translate(0, -3.3%);
  z-index: 1;
}

.product:hover .product__img {
  -webkit-filter: brightness(40%);
  filter: brightness(40%);
}

.product:hover .product__add {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.product__name {
  font-size: 13px;
  color: #222222;
  text-align: center;
  text-transform: uppercase;
}

.product__name:hover {
  color: #f16d7f;
  font-weight: bold;
}

.product__price {
  font-size: 16px;
  font-weight: bold;
  color: #f16d7f;
  text-transform: uppercase;
  margin-top: 15px;
}

.product__content {
  padding: 19px 15px;
}

.product__add {
  position: absolute;
  top: 97px;
  left: 70px;
  height: 39px;
  width: 123px;
  border: 1px solid #ffffff;
  display: none;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 13px;
  font-weight: bold;
  color: #ffffff;
}

.product__add:hover {
  -webkit-box-shadow: 0 0 5px #fff;
  box-shadow: 0 0 5px #fff;
}
</style>