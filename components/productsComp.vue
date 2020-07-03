<template>
  <div>
    <div class="product__box center">
      <div class="product" v-for="product of products" :key="product.id_product">
        <nuxt-link no-prefetch :to="'/products/' + product.id_product">
          <img class="product__img" :src="product.product_image" alt="photo" />
        </nuxt-link>
        <div class="product__content">
          <a href="#" class="product__name">Mango People T-shirt</a>
          <p class="product__price">${{product.price}}</p>
        </div>
        <a href="#" class="product__add" @click.prevent="add_to_cart(product, $event)">Add to Cart</a>
      </div>
        <div  v-if="isIndexPage" class="product__box__browse">
          <nuxt-link no-prefetch class="product__box__browse__a" to="/products">
            Browse All Product
            <img class="product__box__browse__a__arrow" src="img/product_browse-arrow.png" alt />
          </nuxt-link>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    isIndexPage: false
  }),
  computed: {
    products() {
      if (this.isIndexPage === true) {
        return this.$store.getters["products/products"].filter(
          el => el.rating >= 5
        );
      } else {
        return this.$store.getters["products/products"];
      }
    }
  },
  methods: {
    add_to_cart(product) {
      let n =1
      this.$store.dispatch("cartComp/add", {product, n});
    }
  },
  mounted() {
    if (this.$parent.$el.id === "index") {
      return (this.isIndexPage = true);
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