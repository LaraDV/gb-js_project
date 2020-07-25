<template>
  <div>
    <div>
      <div v-if="desired.length!=0" class="product_box center">
        <div class="product" v-for="product of desired" :key="product.id_product">
          <nuxt-link no-prefetch :to="'/products/' + product.id_product">
            <img class="product_img" :src="product.product_image" alt="photo" />
          </nuxt-link>
          <div class="product_content">
            <a href="#" class="product_name">{{product.product_name}}</a>
            <p class="product_price">${{product.price}}</p>
          </div>
          <a href="#" class="product_add" @click.prevent="add_to_cart(product)">Add to Cart</a>
        </div>
        <div v-if="isIndexPage" class="product_box_browse">
          <nuxt-link no-prefetch class="product_box_browse_a" to="/products">
            Browse All Product
            <img
              class="product_box_browse_a_arrow"
              src="img/product_browse-arrow.png"
              alt
            />
          </nuxt-link>
        </div>
        <nav v-if="!isIndexPage" class="product-page-nav">
          <div class="pages">
            <a
              href
              class="page"
              @click.prevent="changePage(pages.find(el => el.isActive === true).pageNumber-1)"
            >&lsaquo;</a>
            <a
              href="#"
              class="page"
              v-for="p in pages"
              :key="p.pageNumber"
              @click.prevent="setPage(p.pageNumber, $event)"
              :class="{active: p.isActive}"
            >{{p.pageNumber}}</a>
            <a
              href="#"
              class="page"
              @click.prevent="changePage(pages.find(el => el.isActive === true).pageNumber+1)"
            >&rsaquo;</a>
          </div>
          <a href="#" class="check_ok pages_check_ok">View All</a>
        </nav>
      </div>
      <div v-else class="center">
        <p>Вещи, соответствующие заданным критериям, не найдены.</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    isIndexPage: false,
  }),
  methods: {},
  computed: {
    ...mapGetters({
      products: "products/topRatingProducts",
      filterArr: "products/filterArr",
      collection: "products/collection",
      pages: "products/pages"
    }),
    desired() {
      if (this.isIndexPage) {
        const regexp = new RegExp(
        this.$store.getters["products/userSearch"],
        "i"
      );
        return this.products
          .filter((el) => regexp.test(el.product_name));
      } else {
        return this.collection;
      }
    },
  },
  methods: {
    add_to_cart(product) {
      console.log(this.pagination);
      let n = 1;
      this.$store.dispatch("cartComp/add", { product, n });
    },
    setPage(p) {
      this.$store.commit("products/paginator", p);
    },
    changePage(p) {
      if (p < 1) {
        p = 1;
      } else if (p > this.pages.length) {
        p = this.pages.length;
      }
      this.$store.commit("products/paginator", p);
    },
  },
  mounted() {
    if (this.$parent.$el.id === "index") {
      return (this.isIndexPage = true);
    }
  },
  created() {
    this.$store.commit("products/setFiltered");
    this.setPage(1);
  },
};
</script>

<style lang="scss" scoped>
.product_box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.product_box_browse {
  margin-top: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-left: calc(50% - 106px);
  flex-basis: 100%;
}

.product_box_browse_a {
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

.product_box_browse_a_arrow {
  margin-left: 9px;
}

.product_box_browse_a:hover {
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

.product:hover .product_img {
  -webkit-filter: brightness(40%);
  filter: brightness(40%);
}

.product:hover .product_add {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.product_name {
  font-size: 13px;
  color: #222222;
  text-align: center;
  text-transform: uppercase;
}

.product_name:hover {
  color: #f16d7f;
  font-weight: bold;
}

.product_price {
  font-size: 16px;
  font-weight: bold;
  color: #f16d7f;
  text-transform: uppercase;
  margin-top: 15px;
}

.product_content {
  padding: 19px 15px;
}

.product_add {
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

.product_add:hover {
  -webkit-box-shadow: 0 0 5px #fff;
  box-shadow: 0 0 5px #fff;
}
.product-page-nav {
  display: flex;
  justify-content: space-between;
  margin-bottom: 110px;
  flex-basis: 100%;
  .pages {
    height: 44px;
    width: 261px;
    background-color: #ffffff;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;
    box-sizing: border-box;
    &_check_ok {
      height: 42px;
      width: 148px;
      font-size: 16px;
      text-transform: lowercase;
      color: #ef5b70;
      border: 1px solid #ef5b70;
      &:hover {
        color: white;
        background-color: $color-site-active;
      }
    }
    .page {
      padding: 0 7px;
      font-size: 16px;
      font-weight: 300;
      color: #c4c4c4;
      &:hover {
        color: $color-site-active;
      }
      &:first-child,
      &:last-child {
        /*может лучше картинку добавить*/
        font-size: 32px;
        padding-bottom: 6px;
      }
      &:last-child {
        color: #ef5b70;
      }
    }
    .active {
      color: $color-site-active;
      font-weight: bold;
    }
  }
}
</style>