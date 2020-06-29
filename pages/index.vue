<template>
  <div id="index">
    <div class="promo center">
      <div class="promo_content">
        <h1 class="promo_h1">THE BRAND</h1>
        <h2 class="promo_h2">
          OF LUXERIOUS
          <span class="promo_h2_color">FASHION</span>
        </h2>
      </div>
    </div>
    <div class="deal center">
      <div class="deal_box">
        <nuxt-link to="#">
          <div
            :style="{'background-image': 'url(' + require('~/static/img/for_men.png') + ')' }"
            class="deal_big"
          >
            <div class="deal_content">
              <h2 class="deal_h2">hot deal</h2>
              <h1 class="deal_h3">for men</h1>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="#">
          <div
            :style="{'background-image': 'url(' + require('~/static/img/lux.png') + ')' }"
            class="deal_mini"
          >
            <div class="deal_content">
              <h2 class="deal_h2">LUXIROUS &amp; trendy</h2>
              <h1 class="deal_h3">ACCESORIES</h1>
            </div>
          </div>
        </nuxt-link>
      </div>
      <div class="deal_box">
        <nuxt-link to="#">
          <div
            :style="{'background-image': 'url(' + require('~/static/img/for_women.png') + ')' }"
            class="deal_mini"
          >
            <div class="deal_content">
              <h2 class="deal_h2">30% offer</h2>
              <h1 class="deal_h3">women</h1>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="#">
          <div
            :style="{'background-image': 'url(' + require('~/static/img/for_kids.png') + ')' }"
            class="deal_big"
          >
            <div class="deal_content">
              <h2 class="deal_h2">new arrivals</h2>
              <h1 class="deal_h3">for kids</h1>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
    <productsComp></productsComp>
    <section class="sale center">
      <div class="sale__offer">
        <div class="sale__offer__content">
          <h1 class="sale__offer__content__h1">
            30%
            <span class="sale__offer__content__h1__color">OFFER</span>
          </h1>
          <h2 class="sale__offer__content__h2">FOR WOMEN</h2>
        </div>
      </div>
      <div class="info">
        <article class="info__block">
          <div class="badge">
            <img class="badge_img" src="~/static/img/delivery.png" alt />
          </div>
          <div class="info__block__detail">
            <h2 class="info__block__detail_h2">Free Delivery</h2>
            <p
              class="info__block__detail_p"
            >Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
          </div>
        </article>
        <article class="info__block">
          <div class="badge">
            <img class="badge_img" src="~/static/img/sales.png" alt />
          </div>
          <div class="info__block__detail">
            <h2 class="info__block__detail_h2">Sales &amp; discounts</h2>
            <p
              class="info__block__detail_p"
            >Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
          </div>
        </article>
        <article class="info__block">
          <div class="badge">
            <img class="badge_img" src="~/static/img/Quality.png" alt />
          </div>
          <div class="info__block__detail">
            <h2 class="info__block__detail_h2">Quality assurance</h2>
            <p
              class="info__block__detail_p"
            >Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
import productsComp from "@/components/productsComp"; //
export default {
  components: {
    productsComp
  }
};
</script>

<style lang="scss" scoped>
.promo {
  height: 614px;
  background-color: rgba(232, 232, 232, 1);
  background-image: url(../static/img/promo-back.png);
  background-position: center -51px;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-start;
  &_content {
    margin-top: 224px;
    padding-left: 12px;
    border-left: 12px solid $color-site-active;
  }

  &_h1 {
    font-size: 60px;
    font-weight: 900;
    color: #222222;
    line-height: 45px;
    margin-bottom: 12px;
  }

  &_h2 {
    font-size: 40px;
    font-weight: 900;
    color: #222222;
    line-height: 32px;
    &_color {
      color: $color-site-active;
    }
  }
}

.deal {
  display: flex;
  justify-content: space-between;
  margin-top: 98px;
  margin-bottom: 100px;
  &_box {
    width: 560px;
  }

  &_big {
    height: 542px;
    border: 1px solid #e1e1e1;
    margin-bottom: 20px;
    &:hover {
      filter: brightness(60%);
    }
  }

  &_mini {
    height: 261px;
    border: 1px solid #e1e1e1;
    margin-bottom: 20px;
    &:hover {
      filter: brightness(60%);
    }
  }

  &_content {
    background-color: white;
    padding: 16px 20px;
    margin-top: 26px;
    display: inline-block;
  }

  &_h2 {
    font-size: 18px;
    font-weight: 900;
    color: rgba(34, 34, 34, 1);
    letter-spacing: 0.03em;
    text-transform: uppercase;
    line-height: 24px;
  }

  &_h3 {
    font-size: 30px;
    font-weight: 900;
    color: $color-site-active;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }
}
.sale {
  height: 529px;
  display: flex;
  margin-top: 113px;
  &__offer {
    width: 767px;
    height: 529px;
    background-image: url(../static/img/sale.png), url(../static/img/sale.jpeg);
    &__content {
      margin-top: 146px;
      margin-left: 39px;
      &__h1 {
        font-size: 54px;
        font-weight: bold;
        color: #ffffff;
        letter-spacing: 0.03em;
        &__color {
          color: $color-site-active;
        }
      }
      &__h2 {
        font-size: 32px;
        font-weight: bold;
        color: #ffffff;
        letter-spacing: 0.03em;
      }
    }
  }
}

.info {
  width: 373px;
  background-color: #222224;
  &__block {
    margin-top: 48px;
    margin-left: 31.97px;
    width: 319.95px;
    height: 102px;
    display: flex;
    justify-content: space-between;
    &__detail {
      width: 236.06px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &_h2 {
        font-size: 20px;
        font-weight: bold;
        color: #fbfbfb;
        letter-spacing: 0.03em;
        margin-bottom: 11px;
      }
      &_p {
        font-size: 14px;
        font-weight: 300;
        color: #fbfbfb;
        letter-spacing: 0.03em;
        line-height: 24px;
      }
    }
  }
}
</style>
