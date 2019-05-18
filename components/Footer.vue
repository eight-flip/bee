<template>
  <section class="section has-text-centered">
    <div class="container">
      <div class="columns">
        <div class="column">
          <ul class="links">
            <li>
              <a v-if="$nuxt.$route.path == '/'" href="#" v-scroll-to="'#about'">ABOUTー <span class="is-size-7">Beeとは？</span></a>
              <a v-else href="/#about">ABOUTー <span class="is-size-7">Beeとは？</span></a>
            </li>
            <li>
              <a v-if="$nuxt.$route.path == '/'" href="#" v-scroll-to="'#studio'">STUDIOー <span class="is-size-7">施設紹介</span></a>
              <a v-else href="/#studio">STUDIOー <span class="is-size-7">施設紹介</span></a>
            </li>
            <li>
              <a v-if="$nuxt.$route.path == '/'" href="#" v-scroll-to="'#price'">MENU&PRICEー <span class="is-size-7">メニュー・料金</span></a>
              <a v-else href="/#price">MENU&PRICEー <span class="is-size-7">メニュー・料金</span></a>
            </li>
          </ul>
        </div>
        <div class="column">
          <ul class="links">
            <li>
              <a v-if="$nuxt.$route.path == '/'" href="#" v-scroll-to="'#access'">ACCESSー <span class="is-size-7">アクセス</span></a>
              <a v-else href="/#access">ACCESSー <span class="is-size-7">アクセス</span></a>
            </li>
            <li>
              <a v-if="$nuxt.$route.path == '/'" href="#" v-scroll-to="'#contact'">CONTACTー <span class="is-size-7">無料カウンセリング</span></a>
              <a v-else href="/#contact">CONTACTー <span class="is-size-7">無料カウンセリング</span></a>
            </li>
            <li>
              <a v-if="$nuxt.$route.path == '/'" href="#" v-scroll-to="'#faq'">Q&Aー <span class="is-size-7">よくあるご質問</span></a>
              <a v-else href="/#faq">Q&Aー <span class="is-size-7">よくあるご質問</span></a>
            </li>
          </ul>
        </div>
        <div class="column has-text-left is-flex-end">
          <a href="https://www.instagram.com/bee_personal_official/" target="_blank"><img src="~/assets/img/ig.png" class="sns" alt="instagram"></a>
        </div>
        <div class="column">
          <img src="~/assets/img/logo-footer.png" class="logo-footer" alt="footer logo">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import "~assets/scss/_variables.scss";
  .section {
    background-color: #000;
    color: #fff;
    padding-left: 28px;
    padding-right: 28px;
  }
  .links {
    text-align: left;
    li {
      line-height: 1;
    }
    li+li {
      margin-top: 15px;
    }
    a {
      color: #fff;
    }
  }
  .columns {
    align-items: center;
  }
  @include mobile() {
    .column:first-child {
      padding-bottom: 0;
    }
    .column:nth-child(2) {
      padding-top: 15px;
    }

    .column:nth-child(4) {
      text-align: left;
    }
  }
  .sns {
    width: 40px;
    height: 40px;
  }
  .sns + .sns {
    margin-left: 24px;
  }
  .is-flex-end {
    align-self: flex-end;
  }
  @include mobile() {
    .logo-footer {
      width: 240px;
      text-align: left;
    }
  }
</style>
