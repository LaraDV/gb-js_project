<template>
  <div>
    <header class="header center">
      <div class="header_left">
        <nuxt-link no-prefetch to="/" class="logo">
          <img class="logo_img" src="~/static/img/b.png" alt="logo" />BRAN
          <span class="logo_span">D</span>
        </nuxt-link>
        <form class="header_form" action="#" @submit.prevent="setSearch">
          <details class="header_browse">
            <summary class="header_browse_summary">
              Browse
              <img class="browse_img" src="/img/1.png" alt="browse" />
            </summary>
            <div class="drop">
              <div class="drop__flex">
                <h3 class="drop__h3">Women</h3>
                <ul class="drop__ul">
                  <li>
                    <nuxt-link to="/products" class="drop__link">Dresses</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/products" class="drop__link">Tops</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/products" class="drop__link">Sweaters/Knits</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/products" class="drop__link">Jackets/Coats</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/products" class="drop__link">Blazers</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/products" class="drop__link">Denim</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/products" class="drop__link">Leggings/Pants</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/products" class="drop__link">Skirts/Shorts</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/products" class="drop__link">Accessories</nuxt-link>
                  </li>
                </ul>
                <h3 class="drop__h3">Men</h3>
                <ul class="drop__ul">
                  <li>
                    <nuxt-link to="/products" class="drop__link">Tees/Tank tops</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/products" class="drop__link">Shirts/Polos</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/products" class="drop__link">Sweaters/Knits</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/products" class="drop__link">Sweaters</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/products" class="drop__link">Sweatshirts/Hoodies</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/products" class="drop__link">Blazers</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/products" class="drop__link">Jackets/vests</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </details>
          <input
            class="header_form_input"
            type="text"
            placeholder="Search for Item..."
            v-model="userSearch"
          />
          <button class="search">
            <img class="search_img" src="/img/search.png" alt />
          </button>
        </form>
      </div>
      <div class="header_right">
        <cartComp></cartComp>
        <nuxt-link no-prefetch to="/shoppingCart" class="button">
          My Account
          <img src="~/static/img/2.png" alt />
        </nuxt-link>
      </div>
    </header>
    <div class="nav center">
      <ul class="menu">
        <li class="menu_list">
          <nuxt-link class="menu_link" to="/">Home</nuxt-link>
        </li>
        <li class="menu_list">
          <nuxt-link class="menu_link" to="#">Man</nuxt-link>
          <div class="drop">
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li>
                  <nuxt-link to="/products" class="drop__link">Dresses</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Tops</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Sweaters/Knits</nuxt-link>
                </li>
                <li>
                  <nuxt-link no-prefetch class="drop__link" to="/products">Jackets/Coats</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Blazers</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Denim</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Leggings/Pants</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Skirts/Shorts</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Accessories</nuxt-link>
                </li>
              </ul>
            </div>
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li>
                  <nuxt-link to="/products" class="drop__link">Dresses</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Tops</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Sweaters/Knits</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Jackets/Coats</nuxt-link>
                </li>
              </ul>
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li>
                  <nuxt-link to="/products" class="drop__link">Dresses</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Tops</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Sweaters/Knits</nuxt-link>
                </li>
              </ul>
            </div>
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li>
                  <nuxt-link to="/products" class="drop__link">Dresses</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Tops</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Sweaters/Knits</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Jackets/Coats</nuxt-link>
                </li>
              </ul>
              <nuxt-link to="#" class="drop_stock">
                <img src="/img/drop_img.jpeg" alt />
                <p class="drop_stock_p">
                  super
                  <br />sale
                </p>
              </nuxt-link>
            </div>
          </div>
        </li>
        <li class="menu_list">
          <nuxt-link class="menu_link" to="/products">Women</nuxt-link>
        </li>
        <li class="menu_list">
          <nuxt-link class="menu_link" to="/products">Kids</nuxt-link>
          <div class="drop">
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li>
                  <nuxt-link to="/products" class="drop__link">Dresses</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Tops</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Sweaters/Knits</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Jackets/Coats</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Blazers</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Denim</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Leggings/Pants</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Skirts/Shorts</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Accessories</nuxt-link>
                </li>
              </ul>
            </div>
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li>
                  <nuxt-link to="/products" class="drop__link">Dresses</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Tops</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Sweaters/Knits</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Jackets/Coats</nuxt-link>
                </li>
              </ul>
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li>
                  <nuxt-link to="/products" class="drop__link">Dresses</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Tops</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Sweaters/Knits</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="menu_list">
          <nuxt-link class="menu_link" to="/products">Accoseriese</nuxt-link>
        </li>
        <li class="menu_list">
          <nuxt-link class="menu_link" to="/products">Featured</nuxt-link>
        </li>
        <li class="menu_list">
          <nuxt-link class="menu_link" to="/products">Hot Deals</nuxt-link>
          <div class="drop drop_last">
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li>
                  <nuxt-link to="/products" class="drop__link">Dresses</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Tops</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Sweaters/Knits</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Jackets/Coats</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Blazers</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Denim</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Leggings/Pants</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Skirts/Shorts</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Accessories</nuxt-link>
                </li>
              </ul>
            </div>
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li>
                  <nuxt-link to="/products" class="drop__link">Dresses</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Tops</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Sweaters/Knits</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Jackets/Coats</nuxt-link>
                </li>
              </ul>
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li>
                  <nuxt-link to="/products" class="drop__link">Dresses</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Tops</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/products" class="drop__link">Sweaters/Knits</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import cartComp from "@/components/cartComp";
export default {
  data: () => ({
    userSearch: ""
  }),
  components: {
    cartComp
  },
  methods: {
    setSearch() {
      this.$store.dispatch("products/setSearch", this.userSearch);
    }
  }
};
</script>



<style lang="scss" scoped>
.header {
  height: 100px;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(236, 236, 236, 1);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.17);
  display: flex;
  justify-content: space-between;
  align-items: center;

  &_left,
  &_right {
    display: flex;
    align-items: center;
  }
  &_form {
    display: flex;
    align-items: center;
    margin-left: 37px;
    &_input {
      height: 38px;
      width: 317px;
      background-color: rgba(255, 255, 255, 1);
      border: 1px solid rgba(230, 230, 230, 1);
      border-radius: 0px 3px 3px 0px;
      padding-left: 15px;
      &::placeholder {
        font-size: 14px;
        font-weight: 300;
        color: rgba(164, 164, 164, 1);
        letter-spacing: 0.03em;
        line-height: 32px;
      }
    }
  }
  &_browse {
    height: 38px;
    width: 87px;
    border: 1px solid rgba(230, 230, 230, 1);
    border-radius: 3px 0px 0px 3px;
    background-image: linear-gradient(
      180deg,
      rgba(249, 249, 249, 1) 0%,
      rgba(245, 245, 245, 1) 100%
    );
    font-size: 14px;
    font-weight: 300;
    color: rgba(34, 34, 34, 1);
    letter-spacing: 0.03em;
    position: relative;
    .browse_img {
      margin-left: 8px;
    }
    &[open] .drop {
      ////////////////////////////////// вложить другой список
      display: flex;
      z-index: 1;
      text-align: left;
      top: 38px;
    }
    &_summary {
      margin-top: 8.5px;
      text-align: center;
    }
    &_summary::-webkit-details-marker {
      display: none;
    }
  }
  .header_right {
    position: relative;
  }
}
.search {
  margin-left: -1px;
  height: 40px;
  width: 40px;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(230, 230, 230, 1);
  border-radius: 0px 3px 3px 0px;
}

.logo {
  display: flex;
  align-items: center;
  font-size: 27px;
  font-weight: 300;
  color: rgba(34, 34, 34, 1);
  text-align: center;
  letter-spacing: 0.03em;
  line-height: 32px;
  text-transform: uppercase;
  &_span {
    font-weight: 900;
    color: $color-site-active;
  }

  &_img {
    margin-right: 13px;
    transition: all 0.5s;
    &:hover {
      transform: rotate(360deg);
    }
  }
}

.button {
  height: 38px;
  width: 130px;
  font-size: 15px;
  color: rgba(255, 255, 255, 1);
  text-align: right;
  letter-spacing: 0.03em;
  line-height: 32px;
  background-color: $color-site-active;
  text-align: center;
  z-index: 1;
}

.menu {
  list-style-type: none;
  display: flex;
  justify-content: center;
  &_link {
    padding: 20px;
    display: block;
    font-size: 14px;
    font-weight: bold;
    color: rgba(34, 34, 34, 1);
    line-height: 26px;
    text-transform: uppercase;
  }
  :hover {
    color: $color-site-active;
  }
  &_list {
    position: relative;
    &:hover .drop {
      display: flex;
    }
    .drop_last {
      right: 0;
    }
  }
}
.drop {
  display: none;
  z-index: 1;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 12px 20px;
  position: absolute;
  top: 51px;
  border: 1px solid #ececec;
  &__flex {
    width: 234px;
    margin-right: 46px;
    &:last-of-type {
      margin-right: 0;
    }
    .drop_stock {
      margin-top: 11px;
      display: inline-block;
      margin-left: -21px;
      position: relative;
      &_p {
        position: absolute;
        top: 56px;
        left: 174px;
        font-size: 22px;
        font-weight: 900;
        color: #ffffff;
        letter-spacing: 0.03em;
        line-height: 28px;
        text-transform: uppercase;
      }
      &:hover {
        filter: brightness(70%);
      }
    }
  }
  &__ul {
    list-style-type: none;
  }
  &__h3 {
    font-size: 14px;
    color: #232323;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    border-bottom: 1px solid #e8e8e8;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-bottom: 8px;
    line-height: 16px;
  }
  &__link {
    font-size: 14px;
    color: #646464;
    letter-spacing: 0.03em;
    line-height: 28px;
    &:hover {
      color: $color-site-active;
    }
  }
}
</style>