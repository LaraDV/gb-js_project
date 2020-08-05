<template>
  <div>
    <section class="subscribe">
      <div class="center" style="display: flex;justify-content: space-between;">
        <div class="subscribe_left">
          <div class="subscribe_img">
            <img class="subscribe_left_img" src="img/photo.jpeg" alt="photo" />
          </div>
          <div class="subscribe_left_appeal">
            <p
              class="subscribe_left_appeal_letter"
            >“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
            <p class="subscribe_left_appeal_name">
              Bin Burhan
              <br />
              <span class="country">Dhaka, Bd</span>
            </p>
          </div>
          <div class="subscribe_left_pagination">
            <nuxt-link to="#" class="subscribe_left_pagination_line"></nuxt-link>
            <nuxt-link
              to="#"
              class="subscribe_left_pagination_line subscribe_left_pagination_line-active"
            ></nuxt-link>
            <nuxt-link to="#" class="subscribe_left_pagination_line"></nuxt-link>
          </div>
        </div>
        <div class="subscribe_right">
          <div class="subscribe_right_content">
            <p class="subscribe_right_content_p1">Subscribe</p>
            <p class="subscribe_right_content_p">FOR OUR NEWLETTER AND PROMOTION</p>
          </div>
          <form action="#" class="subscribe_right_form">
            <input
              class="subscribe_right_form_input"
              type="email"
              placeholder="Enter Your Email"
            />
            <button class="subscribe_right_form_button">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
    <div class="clr"></div>
    <section class="footer">
      <div class="footer_content center">
        <div class="footer_content_letter">
          <nuxt-link to="/" class="logo">
            <img class="logo_img" src="img/b.png" alt="logo" />BRAN
            <span class="logo_span">D</span>
          </nuxt-link>
          <div class="footer_content_letter_text">
            Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of processes and cross-unit partnerships.
            <br />
            <br />Efficiently plagiarize 24/365 action items and focused infomediaries. Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.
          </div>
        </div>
        <div class="footer_menu">
          <div class="footer_menu_block footer_block_1">
            <p class="footer_menu_heading">COMPANY</p>
            <ul>
              <li class="footer_menu_list">
                <nuxt-link no-prefetch="" class="footer_menu_link" to="/">Home</nuxt-link>
              </li>
              <li class="footer_menu_list">
                <nuxt-link no-prefetch="" class="footer_menu_link" to="/products">Shop</nuxt-link>
              </li>
              <li class="footer_menu_list">
                <nuxt-link no-prefetch="" class="footer_menu_link" to="/checkout">About</nuxt-link>
              </li>
              <li class="footer_menu_list">
                <nuxt-link no-prefetch="" class="footer_menu_link" to="/checkout">How It Works</nuxt-link>
              </li>
              <li class="footer_menu_list">
                <nuxt-link no-prefetch="" class="footer_menu_link" to="/checkout">Contact</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="footer_menu_block footer_block_2">
            <p class="footer_menu_heading">INFORMATION</p>
            <ul>
              <li class="footer_menu_list">
                <nuxt-link no-prefetch class="footer_menu_link" to="checkout">Tearms &amp; Condition</nuxt-link>
              </li>
              <li class="footer_menu_list">
                <nuxt-link no-prefetch class="footer_menu_link" to="checkout">Privacy Policy</nuxt-link>
              </li>
              <li class="footer_menu_list">
                <nuxt-link no-prefetch class="footer_menu_link" to="checkout">How to Buy</nuxt-link>
              </li>
              <li class="footer_menu_list">
                <nuxt-link no-prefetch class="footer_menu_link" to="checkout">How to Sell</nuxt-link>
              </li>
              <li class="footer_menu_list">
                <nuxt-link no-prefetch class="footer_menu_link" to="checkout">Promotion</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="footer_menu_block footer_block_3">
            <p class="footer_menu_heading">SHOP CATEGORY</p>
            <ul>
              <li class="footer_menu_list">
                <nuxt-link no-prefetch class="footer_menu_link" to="/products">Men</nuxt-link>
              </li>
              <li class="footer_menu_list">
                <nuxt-link no-prefetch class="footer_menu_link" to="/products">Women</nuxt-link>
              </li>
              <li class="footer_menu_list">
                <nuxt-link no-prefetch class="footer_menu_link" to="/products">Child</nuxt-link>
              </li>
              <li class="footer_menu_list">
                <nuxt-link no-prefetch class="footer_menu_link" to="/products">Apparel</nuxt-link>
              </li>
              <li class="footer_menu_list">
                <nuxt-link no-prefetch class="footer_menu_link" to="/products">Browse All</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer_bottom">
        <div class="copy center">
          <div>&copy; 2020 Brand All Rights Reserved.</div>
          <ul>
            <li class="icon">
              <a class="icon_link" href="#">
                <fa class="icon_i" :icon="['fab', 'twitter']" />
              </a>
              <a class="icon_link" href="#">
                <fa class="icon_i" :icon="['fab', 'facebook-f']" />
              </a>
              <a class="icon_link" href="#">
                <fa class="icon_i" :icon="['fab', 'linkedin-in']" />
              </a>
              <a class="icon_link" href="#">
                <fa class="icon_i" :icon="['fab', 'google-plus-g']" />
              </a>
              <a class="icon_link" href="#">
                <fa class="icon_i" :icon="['fab', 'pinterest-p']" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.subscribe {
  margin-bottom: 109px;
  background-color: #f2f2f2;
  height: 437px;
  background: url(../static/img/subscribe_img.png),
    url(../static/img/subscribe_img.jpeg) no-repeat center;
  background-size: cover;
  .subscribe_left {
    display: flex;
    position: relative;
    width: 570px;
    height: 171px;
    margin-top: 111px;
    &_appeal {
      width: 425.78px;
      margin-left: 27.88px;
      height: 114px;
      &_letter {
        height: 87px;
        font-size: 16px;
        font-style: italic;
        color: #222224;
        letter-spacing: 0.03em;
        line-height: 26px;
      }
      &_name {
        font-weight: bold;
        color: $color-site-active;
        letter-spacing: 0.03em;
        line-height: 15px;
        .country {
          font-size: 12px;
          font-weight: 300;
          color: #222224;
          letter-spacing: 0.03em;
        }
      }
    }
    &_pagination {
      position: absolute;
      left: 114px;
      bottom: 2px;
      width: 140px;
      display: flex;
      justify-content: space-between;
      &_line {
        height: 4px;
        width: 38px;
        background-color: #c7c7c7;
        &:hover {
          background-color: $color-site-active;
        }
      }
      &_line-active {
        background-color: $color-site-active;
      }
    }
  }

  .subscribe_right {
    width: 570px; //
    height: 171px;
    margin-top: 111px; //left
    display: flex;
    flex-direction: column;
    align-items: center;
    .subscribe_right_content {
      margin: 35px;
      height: 51px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;
      color: #222224;
      letter-spacing: 0.03em;
      &_p1 {
        font-size: 24px;
        text-transform: uppercase;
      }
      &_p {
        font-size: 14px;
      }
    }
    &_form {
      & input[type="email"] {
        height: 46px;
        width: 282px;
        background-color: #e1e1e1;
        border-radius: 23px 0px 0px 23px;
        border: none;
        padding-left: 28px;
        .subscribe_right_form input[type="email"]::placeholder {
          color: #222224;
          letter-spacing: 0.03em;
          line-height: 54px;
        }
      }
      &_button {
        height: 46px;
        width: 104px;
        background-color: $color-site-active;
        border-radius: 0px 23px 23px 0px;
        border: none;
        color: #ffffff;
        text-align: center;
        letter-spacing: 0.03em;
        margin-left: -3px;
      }
    }
  }
}
.clr {
  height: 417px;
}
.footer {
  margin: -417px auto 0;
  height: 417px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  &_content {
    display: flex;
    height: 349px;
    &_letter {
      &_text {
        margin-top: 29px;
        width: 430px;
        height: 204px;
        font-size: 14px;
        font-weight: 300;
        color: #898989;
        text-align: left;
        letter-spacing: 0.03em;
        line-height: 24px;
      }
    }
    .footer_menu {
      display: flex;
      margin-left: 61.4px;
      .footer_block_2 {
        margin-left: 129px;
        margin-right: 80px;
      }
      .footer_menu_block {
        height: 238px;
        text-align: left;
        .footer_menu_heading {
          font-size: 18px;
          font-weight: bold;
          color: $color-site-active;
          letter-spacing: 0.03em;
          line-height: 26px;
          margin-top: 14px;
          margin-bottom: 45px;
          text-align: left;
        }
        .footer_menu_list {
          list-style-type: none;
          margin-top: 24px;
          font-size: 16px;
          color: #898989;
          letter-spacing: 0.03em;
          text-align: left;
          .footer_menu_link {
            color: #898989;
            display: block;
          }
          :hover {
            color: $color-site-active;
          }
        }
      }
    }
  }
  &_bottom {
    height: 79px;
    background-color: #e6e6e6;
    .copy {
      font-size: 16px;
      color: #7a7a7a;
      letter-spacing: 0.03em;
      display: flex;
      justify-content: space-between;
      height: 79px;
      align-items: center;
      .icon {
        list-style-type: none;
        width: 192px;
        display: flex;
        justify-content: space-between;
      }
      .icon_link {
        background-color: white;
        width: 32px;
        height: 32px;
        font-size: 15px;
        line-height: 32px;
        text-align: center;
        color: #b2b2b2;
        font-family: "Font Awesome 5 Brands";
      }
      .icon_link:hover {
        background-color: $color-site-active;
        color: white;
      }
    }
  }
}
.logo_span {
  font-weight: 900;
  color: $color-site-active;
}
</style>