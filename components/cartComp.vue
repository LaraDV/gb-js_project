<template>
  <div class="header_cart">
    <img
      class="header_cart_img"
      @click="showCart = !showCart"
      src="~/static/img/cart.png"
      alt="cart"
    />
    <div class="basket" v-show="showCart">
      <div class="basket_block">
        <p v-if="!cartItems.length">Корзина пуста</p>

        <div class="selectPr" v-for="item of cartItems" :key="item.id_product">
          <nuxt-link no-prefetch :to="'/products/' + item.id_product"><img class="basket__img" :src='item.product_image' alt="img" /></nuxt-link>
          <p class="basket__p">
            {{item.quantity}}
            <span style="font-size: 10px;">x</span>
            ${{item.price}}
          </p>
          <div class="basket__content">
            <h3 class="basket__h3">Rebox Zane</h3>
            <img src="~/static/img/rating.png" alt class="rating" />
          </div>
          <a class="selected__del" href="#" @click.prevent="remove_from_cart(item)">
            <img src="~/static/img/del.png" alt />
          </a>
        </div>
        <div class="selectPr">
          <h2 class="basket__h2">TOTAL</h2>
          <h2 class="basket__h2">$ {{totalSumm}}</h2>
        </div>
        <div class="selectPr">
          <a href="checkout.html" class="check_ok basket_check_ok">Checkout</a>
          <nuxt-link no-prefetch
            to="/shoppingCart"
            class="check_ok basket_check_ok"
            style="color: #f16d7f"
          >Go to cart</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showCart: false
    };
  },
  computed: {
    cartItems() {
      return this.$store.getters["cartComp/cartItems"];
    },
    totalSumm() {
      return this.$store.getters["cartComp/totalSumm"];
    }
  },
  methods: {
    remove_from_cart(product) {
      let n = -1;
      this.$store.dispatch("cartComp/remove", {product, n});
    }
  }
};
</script>

<style lang="scss" scoped>
.header_cart_img {
  margin-right: 24px;
}
.basket {
  width: 262px;
  background-color: #ffffff;
  border-radius: 5px;
  position: absolute;
  top: 32px;
  left: -14px;
  padding: 20px 16px;
  z-index: 2;
  .basket__p {
    color: #f16d7f;
  }
  .basket__h2 {
    font-size: 16px;
    font-weight: bold;
    color: #222222;
  }
  &_block {
    display: flex;
    flex-direction: column;
    .selectPr {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 17px 0;
      border-top: 1px solid #eaeaea;
      &:first-child {
        padding-top: 22px;
        border-top: none;
      }
      &:last-child {
        flex-direction: column;
        padding-bottom: 0;
      }
      .basket__img {
        width: 72px;
      }
      .basket__content {
        line-height: 12px;
        font-size: 12px;
        text-transform: uppercase;
        .basket__h3 {
          font-size: bold;
          color: #222222;
        }
        .rating {
          margin-top: 10px;
          margin-bottom: 12px;
        }
      }
      .basket_check_ok {
        width: 225px;
        margin-top: 12px;
        &:hover {
          border: 1px solid $color-site-active;
        }
      }
    }
  }
}
</style>