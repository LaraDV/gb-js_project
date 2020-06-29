<template>
  <div>
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
            <nuxt-link no-prefetch :to="'/products/' + item.id_product"><img :src="item.product_image" class="selected__products__char_img" alt="img"></nuxt-link>
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
            @change="changeFromInput(item, $event)"
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
    </form>
    <p>{{totalSumm}}</p>
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
    remove_from_cart(item) {
      this.$store.dispatch("cartComp/remove", item);
    },
    changeFromInput(item, event) {
      console.log(event);
      if (item.quantity > event.target.value) {
        console.log("Убавили количество");
        this.$store.dispatch("cartComp/remove", item);
      } else {
        console.log("Увеличили количество");
        this.$store.dispatch("cartComp/add", item);
      }
    },
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
}
</style>