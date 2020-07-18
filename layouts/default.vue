<template>
  <div>
    <headerComp />
    <nuxt />
    <footerComp />
  </div>
</template>

<script>
import headerComp from "@/components/headerComp";
import footerComp from "@/components/footerComp";

export default {
  components: {
    headerComp,
    footerComp
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Lato";
}

a {
  text-decoration: none;
}

.center {
  padding: 0 calc(50% - 570px);
}

.check_ok {
  display: block;
  height: 50px;
  width: 180px;
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #4a4a4a;
  text-transform: uppercase;
  line-height: 45px;
  transition: all 0.25s;
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
}

  .logo_span {
    font-weight: 900;
    color: #f16d7f;
  }

  .logo_img {
    margin-right: 13px;
    transition: all 0.5s;
  }
  .logo_img:hover {
      transform: rotate(360deg);
    }
</style>
