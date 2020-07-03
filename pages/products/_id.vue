<template>
  <div>
    <main class="singleP_main">
      <div class="product_images">
        <img class="images" :src="product.product_image" alt="photo" />
        <a href="#" class="product_pag">
          <img class="product_pag_img" src="~/static/img/product_image_arr-left.png" alt />
        </a>
        <a href="#" class="product_pag">
          <img class="product_pag_img" src="~/static/img/product_image_arr-right.png" alt />
        </a>
      </div>
      <div class="product_parameters" style="border: 1px solid #e9e9e9;">
        <p class="product_parameters_p">women collection</p>
        <p class="decor_line"></p>
        <h2 class="product_parameters_h2">Moschino Cheap And Chic</h2>
        <p
          class="product_parameters_text"
        >Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.</p>
        <span class="product_mat_des">
          MATERIAL:
          <span class="product_info">COTTON</span>
        </span>
        <span class="product_mat_des">
          DESIGNER:
          <span class="product_info">BINBURHAN</span>
        </span>
        <h1 class="sg_product_price">${{product.price}}</h1>
        <hr
          style="width: 642px; margin-top: 43px; margin-bottom: 63px; color: #eaeaea; opacity: 1; margin-left: calc(50% - 321px);"
        />
        <form class="choose" action="#">
          <div class="chooce_box">
            <label class="choose_box_label" for="color">Chooce color</label>
            <select id="color" name="color" class="choose_box_input">
              <option label="red" value="red"></option>
              <option label="black" value="black"></option>
              <option label="blue" value="blue"></option>
            </select>
          </div>
          <div class="chooce_box">
            <label class="choose_box_label" for="size">Chooce size</label>
            <select id="size" name="size" class="choose_box_input">
              <option label="xxl" value="xxl"></option>
              <option label="xl" value="xl"></option>
              <option label="m" value="m"></option>
            </select>
          </div>
          <div class="chooce_box">
            <label class="choose_box_label" for="QUANTITY">QUANTITY</label>
            <input
              class="choose_box_input"
              type="number"
              min="1"
              style="width: 144px; height: 35px;"
              placeholder="2"
              value="1"
              id="QUANTITY"
            />
          </div>
          <a @click.prevent="add_to_cart(product)" class="add_to_cart">
            <img src="~/static/img/sg_cart.png" alt />
            <p style="padding-left: 15px;">Add to Cart</p>
          </a>
        </form>
      </div>
    </main>
    <h2 style="display: none">{{totalSumm}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    product({ $route }) {
      return this.$store.getters["products/products"].find(
        el => el.id_product == $route.params.id
      );
    },
    totalSumm() {
      return this.$store.getters["cartComp/totalSumm"];
    }
  },
  methods: {
    add_to_cart(product) {
      let n = Number(document.getElementById("QUANTITY").value);
      document.getElementById("QUANTITY").value = "1";
      alert("товар добавлен в корзину");
      this.$store.dispatch("cartComp/add", { product, n });
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

<style lang="scss" scoped>
.singleP_main {
  display: flex;
  flex-direction: column;
  align-items: center;
  .product_images {
    height: 777px;
    width: 1600px;
    background-color: #f7f7f7;
    display: flex;
    align-items: center;
    position: relative;
    .images {
      height: 100%;
      margin-left: calc(50% - 340px);
    }
    .product_pag {
      background-color: #2a2a2a;
      opacity: 0.15;
      width: 47px;
      height: 47px;
      position: absolute;
      &:hover {
        opacity: 0.3;
        background-color: rgb(27, 43, 43);
      }
      &:last-child {
        left: calc(100% - 47px);
      }
      &_img {
        padding: 16.5px 19.5px;
      }
    }
  }
  .product_parameters {
    margin-top: -83px;
    z-index: 1;
    width: 1140px;
    background-color: white;
    text-align: center;
    &_p {
      margin-top: 73px;
      font-size: 14px;
      font-weight: bold;
      color: $color-site-active;
      text-transform: uppercase;
    }
    .decor_line {
      width: 147px;
      height: 3px;
      margin-left: calc(50% - 73.5px);
      margin-top: 14px;
      margin-bottom: 17px;
      background: url("/img/decor_line.jpeg") no-repeat center center,
        url("/img/decor_line_back.jpeg") no-repeat center center;
    }
    &_h2 {
      font-size: 18px;
      font-weight: 900;
      color: #4d4d4d;
      text-align: center;
      text-transform: uppercase;
      margin-top: 17px;
    }
    &_text {
      padding: 0 258px;
      font-size: 14px;
      font-weight: 300;
      color: #5e5e5e;
      margin-top: 67px;
      margin-bottom: 37px;
      line-height: 24px;
    }
    .product_mat_des {
      font-size: 14px;
      font-weight: bold;
      color: #b9b9b9;
      .product_info {
        color: #2f2f2f;
      }
    }
    .product_mat_des:last-of-type {
      ///
      padding-left: 44px;
    }
    .sg_product_price {
      ///
      margin-top: 37px;
      font-size: 24px;
      font-weight: bold;
      color: #ef5b70;
    }
    .choose {
      ///
      display: flex;
      padding: 0 302px;
      justify-content: space-between;
      flex-wrap: wrap;
      &_box {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 65px;
        &_label {
          font-size: 14px;
          font-weight: bold;
          color: #2f2f2f;
          text-transform: uppercase;
          line-height: 13px;
          text-align: left;
          display: block;
          margin-bottom: 16px;
        }
        &_input {
          padding-left: 15px;
          font-size: 13px;
          text-transform: uppercase;
          color: black;
          display: block;
          width: 161px;
          height: 39.5px;
          appearance: none;
        }
        &_input::placeholder {
          color: #bcbcbc;
        }
      }
    }
    .add_to_cart {
      display: block;
      margin-top: 68px;
      margin-left: calc(50% - 270px);
      height: 55px;
      width: 537px;
      background-color: #ffffff;
      border: 1px solid #ef5b70;
      font-size: 16px;
      font-weight: bold;
      color: #ef5b70;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 122px;
      transition: all 0.25s;
      flex-basis: 100%;
      &:hover {
        background-color: $color-site-active;
        color: white;
      }
    }
  }
}
</style>