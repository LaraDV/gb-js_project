<template>
  <div>
    <breadcrumbsComp></breadcrumbsComp>
    <main class="catalog_main center">
      <div class="filter">
        <details class="product_details" open>
          <summary class="catalog_main_summary">category</summary>
          <ul>
            <li
              class="catalog_main_category"
              v-for="category of this.categories"
              :key="category.name"
            >
              <a
                href="#"
                class="catalog_main_category_link"
                data-criterion="category"
                :data-value="category.name"
                @click.prevent="setFilter($event.target);"
                :class="{active: category.isActive}"
              >{{category.name}}</a>
            </li>
          </ul>
        </details>
        <details class="product_details" open>
          <summary class="catalog_main_summary">brand</summary>
          <ul>
            <li class="catalog_main_category" v-for="brand of this.brands" :key="brand.name">
              <a
                href="#"
                class="catalog_main_category_link"
                data-criterion="brand"
                :data-value="brand.name"
                @click.prevent="setFilter($event.target)"
                :class="{active: brand.isActive}"
              >{{brand.name}}</a>
            </li>
          </ul>
        </details>
        <details class="product_details" open>
          <summary class="catalog_main_summary">designer</summary>
          <ul>
            <li
              class="catalog_main_category"
              v-for="designer of this.designers"
              :key="designer.name"
            >
              <a
                href="#"
                class="catalog_main_category_link"
                data-criterion="designer"
                :data-value="designer.name"
                @click.prevent="setFilter($event.target)"
                :class="{active: designer.isActive}"
              >{{designer.name}}</a>
            </li>
          </ul>
        </details>
      </div>
      <div class="goods">
        <div class="goods-filter">
          <div class="goods-filter_form">
            <h2 class="goods-filter_h2">trending now</h2>
            <div class="goods-filter_box">
              <a class="trends_a" href="#" onclick>Bohemian</a>
              <a class="trends_a" href="#" onclick>Floral</a>
              <a class="trends_a" href="#" onclick>Lace</a>
              <a class="trends_a" href="#" onclick>Floral</a>
              <a class="trends_a" href="#" onclick>Lace</a>
              <a class="trends_a" href="#" onclick>Bohemian</a>
            </div>
          </div>
          <form class="goods-filter_form">
            <h2 class="goods-filter_h2">size</h2>
            <div class="goods-filter_box">
              <div class="size">
                <input type="checkbox" id="xxs" />
                <label for="xxs">xxs</label>
              </div>
              <div class="size">
                <input type="checkbox" id="xs" />
                <label for="xs">xs</label>
              </div>
              <div class="size">
                <input type="checkbox" id="s" />
                <label for="s">s</label>
              </div>
              <div class="size">
                <input type="checkbox" id="m" />
                <label for="m">m</label>
              </div>
              <div class="size">
                <input type="checkbox" id="l" />
                <label for="l">l</label>
              </div>
              <div class="size">
                <input type="checkbox" id="xl" />
                <label for="xl">xl</label>
              </div>
              <div class="size">
                <input type="checkbox" id="xxl" />
                <label for="xxl">xxl</label>
              </div>
            </div>
          </form>
          <form class="goods-filter_form" style="width: 263px;">
            <h2 class="goods-filter_h2">price</h2>
            <input id="range" type="range" value="100" step="0.01" />
            <p>
              $
              <output for="range" name="price"></output>
            </p>
          </form>
        </div>
        <div class="sorting">
          <div
            class="sotring_box"
            style="display: flex; height: 30px; padding: 10px 0 10px 10px; font-size: 14px; color: #6f6e6e;"
          >
            <p
              class="sotring_legend"
              style="display: flex;align-items: center;background-color: white;height: 28px;padding: 0 13px;border: 1px solid #e6e6e6;"
            >Sort By</p>
            <select
              class="sorting_select"
              style="border: none;border: 1px solid #e6e6e6; padding-right: 28px;"
            >
              <option class="sorting_option">Name</option>
              <option class="sorting_option">Price</option>
            </select>
          </div>
          <div
            class="sotring_box"
            style="display: flex; height: 30px; padding: 10px 0 10px 10px;font-size: 14px; color: #6f6e6e;"
          >
            <p
              class="sotring_legend"
              style="display: flex;align-items: center;background-color: white;height: 28px;padding: 0 13px;border: 1px solid #e6e6e6;"
            >Show</p>
            <select class="sorting_select" style="border: none;border: 1px solid #e6e6e6;" v-model="perPage" @change="selectPerP($event)">
              <option class="sorting_option" value="3">3</option>
              <option class="sorting_option" value="6">6</option>
              <option class="sorting_option" value="9">9</option>
              <option class="sorting_option" value="12">12</option>
            </select>
          </div>
        </div>
        <productsComp></productsComp>
      </div>
    </main>
    <section style="display: flex; justify-content: space-between;" class="info_2 center">
      <article class="info_2__art">
        <img class="badge_img" src="img/delivery.png" alt />
        <h2 class="info__block__detail_h2">Free Delivery</h2>
        <p
          class="info__block__detail_p"
        >Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
      </article>
      <article class="info_2__art">
        <img class="badge_img" src="img/delivery.png" alt />
        <h2 class="info__block__detail_h2">Free Delivery</h2>
        <p
          class="info__block__detail_p"
        >Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
      </article>
      <article class="info_2__art">
        <img class="badge_img" src="img/delivery.png" alt />
        <h2 class="info__block__detail_h2">Free Delivery</h2>
        <p
          class="info__block__detail_p"
        >Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
      </article>
    </section>
  </div>
</template>

<script>
import productsComp from "@/components/productsComp";
import breadcrumbsComp from "@/components/breadcrumbsComp";
import { mapGetters } from "vuex";
export default {
  data: () => ({}),
  components: {
    productsComp,
    breadcrumbsComp
  },
  methods: {
    setFilter(target) {
      let payLoad = {
        criterion: target.dataset.criterion,
        value: [target.dataset.value]
      };
      this.$store.commit("products/toggleActive", payLoad);//задаст isActive true/false в выбранном элементе категории/бренда/дизайнера добавится класс active
      if (target.classList.contains("active")) {//если товар, дизайнер или бренд уже активен(розовый,bold), то повторное нажатие вызывает unSetFilter
        this.$store.commit("products/unSetFilter", payLoad);
      } else {
        this.$store.commit("products/setFilter", payLoad);
      }
      this.$store.commit("products/setFiltered");//вызываем для формирования массива state.filtered, в соответсвии с новым фильтром state.filterArr
      this.$store.commit("products/paginator", 1);//вызываем, чтобы пагинация собралась в соотвествии с новым массивом state.filtered и указываем 1ую страницу
    },
    selectPerP(event){
      let perP = parseInt(event.target.value)
      this.$store.dispatch("products/changePerP", perP);//устанавливаем количество товаров для "отрисовки" на странице
    }
  },
  computed: {
    ...mapGetters({
      brands: "products/brands",
      categories: "products/categories",
      designers: "products/designers",
      perPage: "products/perPage"
    })
  }
};
</script>

<style lang="scss" scoped>
.catalog_main {
  margin-top: 71px;
  display: flex;
  .catalog_main_category {
    list-style-type: none;
    font-size: 14px;
    padding-left: 16.97px;
    line-height: 33px;
    .catalog_main_category_link {
      color: #6f6e6e;
      display: block;
      &:hover {
        color: $color-site-active;
      }
    }
    .active {
      color: $color-site-active;
      font-size: 16px;
      font-weight: bold;
      background-color: #f3f3f3;
    }
  }
  .filter {
    .product_details:nth-child(2n) {
      margin: 18px 0;
    }
    .product_details[open] > summary {
      color: #ef5b70;
    }
    .product_details[open] > summary::after {
      content: url("/img/summary_open_marker.png");
    }
    .catalog_main_summary {
      padding-left: 11px;
      border-left: 5px solid #ef5b70;
      border-bottom: 1px solid #f3f3f3;
      height: 37px;
      width: 243px;
      font-size: 14px;
      font-weight: bold;
      color: #6f6e6e;
      line-height: 20px;
      text-transform: uppercase;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .catalog_main_summary::-webkit-details-marker {
      display: none;
    }
    .catalog_main_summary::after {
      content: url("/img/summary_marker.png");
      padding-right: 0.5em;
      float: right;
    }
  }
  .goods {
    margin-left: 49px;
    width: calc(100% - 253px);
    &-filter {
      display: flex;
      justify-content: space-between;
      &_h2 {
        font-size: 14px;
        font-weight: bold;
        color: #6f6e6e;
        line-height: 20px;
        text-transform: uppercase;
        margin-bottom: 24px;
      }
      &_form {
        width: 236px;
        output {
          width: 100px;
          height: 25px;
        }
        .size input[type="checkbox"] {
          opacity: 0;
        }
        .size input[type="checkbox"] + label::after {
          content: none;
        }
        .size input[type="checkbox"]:checked + label::after {
          content: "";
        }
        .size {
          text-transform: uppercase;
          font-family: "Open Sans";
          font-size: 14px;
          color: #6f6e6e;
          line-height: 9px;
          &:last-child {
            margin-right: 0;
          }
          & label {
            position: relative;
            padding-right: 27px;
          }
        }
        .size label::before {
          content: "";
          display: inline-block;
          height: 11px;
          width: 11px;
          border: 1px solid #ebebeb;
          position: absolute;
          top: 3px;
          left: -21px;
        }
        .size label::after {
          content: "";
          display: inline-block;
          top: 5px;
          left: -18.5px;
          height: 3px;
          width: 5.8px;
          border-left: 2px solid;
          border-bottom: 2px solid;
          transform: rotate(-45deg);
          position: absolute;
        }
      }
      &_box {
        height: 39px;
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        .trends_a {
          display: inline-block;
          font-size: 14px;
          color: #6f6e6e;
          line-height: 12px;
          padding: 0 16px;
          border-left: 1.5px solid #ebebeb;
          &:nth-child(1),
          &:nth-child(4) {
            padding-left: 0;
            border-left: none;
          }
          &:hover {
            color: $color-site-active;
          }
        }
      }
    }
    .sorting {
      height: 50px;
      width: 846px;
      background-color: #f3f3f3;
      margin: 47px 0;
      display: flex;
      &_select {
        @extend.catalog_main_category_link;
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        appearance: none;
        background: url("/img/summary_marker.png") no-repeat 85% center; /* http://htmlbook.ru/css/background-position*/
        padding: 0 35px 0 10px;
        background-color: white;
        &:hover {
          color: #6f6e6e;
        }
        &::after {
          content: url("/img/summary_marker.png");
          padding-right: 0.5em;
          float: right;
        }
      }
    }
  }
}
.info__block__detail_p {
  font-size: 14px;
  font-weight: 300;
  color: #fbfbfb;
  letter-spacing: 0.03em;
  line-height: 24px;
}
.info__block__detail_h2 {
  font-size: 20px;
  font-weight: bold;
  color: #fbfbfb;
  letter-spacing: 0.03em;
  margin-bottom: 11px;
}
.info_2 {
  background-color: #222224;
  height: 341px;
  align-items: center;
  &_2__art {
    width: 310px;
  }
}
</style>