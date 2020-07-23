<template>
  <div>
    <breadcrumbsComp></breadcrumbsComp>
    <form class="selected center">
      <article style="font-weight: bold;" class="selected__products selected__products__heading">
        <h2 style="width: 570px; text-align: left;" class="selected__products_h2">products details</h2>
        <h2 class="selected__products_h2">unit price</h2>
        <h2 class="selected__products_h2">quantity</h2>
        <h2 class="selected__products_h2">shipping</h2>
        <h2 class="selected__products_h2">subtotal</h2>
        <h2 class="selected__products_h2">action</h2>
      </article>
      <article class="selected__products" v-for="item of cartItems" :key="item.id_product">
        <div class="selected__products__char">
          <a href="singlePage.html">
            <nuxt-link no-prefetch :to="'/products/' + item.id_product">
              <img :src="item.product_image" class="selected__products__char_img" alt="img" />
            </nuxt-link>
          </a>
          <div class="selected__products__content">
            <h2 class="selected__products__content_h2">Mango People T-shirt</h2>
            <p class="selected__products__content_p">
              Color:
              <span class="selected__products__content_p_span">red</span>
            </p>
            <p class="selected__products__content_p">
              Size:
              <span class="selected__products__content_p_span">Xll</span>
            </p>
          </div>
        </div>
        <div class="selected__products__char">${{item.price}}</div>
        <div class="selected__products__char">
          <input
            class="choose__box__input_cart"
            placeholder="2"
            type="number"
            min="0"
            :value="item.quantity"
            @change.prevent="changeFromInput(item, $event)"
          />
        </div>
        <div class="selected__products__char">FREE</div>
        <div class="selected__products__char">${{item.quantity*item.price}}</div>
        <div class="selected__products__char">
          <a class="selected__del">
            <img src="img/del.png" @click.prevent="remove_from_cart(item)" />
          </a>
        </div>
      </article>
      <div class="selected_buttons center">
        <a href="#" class="selected_buttons_button" @click.prevent="clearCart()">CLEAR SHOPPING CART</a>
        <nuxt-link no-prefetch to="/products" class="selected_buttons_button">CONTINUE SHOPPING</nuxt-link>
      </div>
    </form>
    <section
      class="apply center"
      style="display: flex; justify-content: space-between; margin-top: 63px;"
    >
      <form class="apply_form" action="#">
        <h2 class="apply_label">Shipping Adress</h2>
        <input class="apply_input" id="size" list="dl_apply_country" placeholder="Bangladesh" />
        <datalist id="dl_apply_country">
          <option label="Bangladesh" value="Bangladesh"></option>
          <option label="Russia" value="Russia"></option>
          <option label="Canada" value="Canada"></option>
        </datalist>
        <input class="apply_input" type="text" style="margin: 20px 0;" placeholder="State" />
        <input class="apply_input" type="text" placeholder="Postcode / Zip" />
        <button class="apply_input_submit" >get a quote</button>
      </form>
      <form class="apply_form" action="#">
        <h2 class="apply_label">coupon discount</h2>
        <p class="apply_p">Enter your coupon code if you have one</p>
        <input class="apply_input" type="text" style="margin: 20px 0;" placeholder="State" />
        <button
          class="apply_input_submit"
          style="width: 118px; margin: 0;"
        >Apply coupon</button>
      </form>
      <form class="grand_total" action="#">
        <p class="grand_total_p">Sub total ${{totalSumm}}</p>
        <h2 class="grand_total_h2">
          GRAND TOTAL
          <span style="color:#f16d7f;">${{totalSumm}}</span>
        </h2>
        <nuxt-link class="grand_total_a" to="/checkout">proceed to checkout</nuxt-link>
      </form>
    </section>
  </div>
</template>

<script>
import breadcrumbsComp from "@/components/breadcrumbsComp";
export default {
  data() {
    return {
      showCart: false
    };
  },
  components: {
    breadcrumbsComp
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
      this.$store.dispatch("cartComp/remove", { product, n });
    },
    changeFromInput(product, event) {
      if (product.quantity > event.target.value) {
        let n = event.target.value - product.quantity;
        this.$store.dispatch("cartComp/remove", { product, n });
      } else {
        let n = event.target.value - product.quantity;
        this.$store.dispatch("cartComp/add", { product, n });
      }
    },
    clearCart(){
      this.$store.dispatch("cartComp/clearCart");
    }
  }
};
</script>

<style lang="scss" scoped>
.selected {
  &__products {
    display: flex;
    padding: 25px 0;
    &:nth-child(2n) {
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
    }
    &_h2 {
      font-size: 13px;
      color: #222222;
      text-align: right;
      text-transform: uppercase;
      font-weight: bold;
      width: 155px;
    }
    &__char {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 155px;
      text-align: right;
      font-size: 13px;
      color: #656565;
      .choose__box__input_cart {
        text-align: center;
        height: 30px;
        width: 54px;
      }
    }
    &__char:first-child {
      width: 570px;
      justify-content: flex-start;
    }
    &__content {
      text-align: left;
      margin-left: 21px;
      &_h2 {
        font-size: 13px;
        color: #222222;
        text-transform: uppercase;
        margin-bottom: 30px;
        margin-top: 13px;
      }
      &_p {
        font-size: 13px;
        color: #575757;
        line-height: 20px;
        &_span {
          font-weight: 300;
          color: #6f6e6e;
        }
      }
    }
  }
  &_buttons {
    height: 50px;
    margin-top: 44px;
    display: flex;
    justify-content: space-between;
    &_button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      width: 225px;
      font-size: 14px;
      font-weight: bold;
      color: #4a4a4a;
      text-transform: uppercase;
      background-color: white;
      border: none;
      border: 1px solid #ccc;
      &:hover {
        color: white;
        background-color: #4a4a4a;
      }
    }
  }
}

.apply_form {
  display: flex;
  flex-direction: column;
  .apply_label {
    font-size: 16px;
    font-weight: bold;
    color: #222222;
    text-transform: uppercase;
    margin-bottom: 22px;
  }
  .apply_input {
    height: 45px;
    width: 353px;
    padding-left: 18px;
    font-size: 13px;
    font-weight: 300;
    color: black;
    border: 1px solid #bdbdbd;
  }
  ::placeholder {
    color: #b1b1b1;
  }
  .apply_input_submit {
    margin-top: 23px;
    height: 35px;
    width: 100px; ////////
    font-size: 11px;
    font-weight: bold;
    color: #4a4a4a;
    text-transform: uppercase;
    background-color: white;
    border: none;
    border: 1px solid #bdbdbd;
    &:hover {
      color: white;
      background: #4a4a4a;
    }
  }
  .apply_p {
    margin-top: 6px;
    font-size: 14px;
    font-weight: 300;
    color: #000000;
  }
}
.grand_total {
  background-color: #f5f3f3;
  height: 214px;
  width: 360px;
  text-align: right;
  &_p {
    margin-top: 41px;
    margin-right: 41px;
    font-size: 11px;
    color: #4a4a4a;
    text-transform: uppercase;
  }
  &_h2 {
    margin-top: 12px;
    margin-right: 41px;
    font-size: 16px;
    font-weight: bold;
    color: #222222;
    text-transform: uppercase;
  }
  &_a {
    display: block;
    height: 50px;
    width: 273px;
    background-color: #f16d7f;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    text-transform: uppercase;
    text-align: center;
    line-height: 45px;
    margin-left: 42px;
    margin-top: 40px;
    transition: all 0.3s;
    &:hover {
      background-color: white;
      color: $color-site-active;
      outline: 1px solid $color-site-active;
    }
  }
}
</style>