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
          <div class="line-heading">
            <a><img src="~/assets/img/arrow1.png" class="arrow-img"><span>Instagram</span></a>
          </div>
          <a href="https://www.instagram.com/bee_personal_official/" target="_blank">
            <img src="~/assets/img/ig.png" class="sns" alt="instagram">
            <span style="display:inline-block;" class="is-size-6">Bee（ジム）<br>はこちら</span>
          </a>
          <br>
          <a href="https://www.instagram.com/sweethoney_kudanshita/" target="_blank">
            <img src="~/assets/img/ig.png" class="sns" alt="instagram">
            <span style="display:inline-block;" class="is-size-6">SweetHoney<br>（エステ）はこちら</span>
          </a>
        </div>
<!--        コード追加-->
        <div class="column has-text-left">
          <div class="line-heading">
            <a><img src="~/assets/img/arrow1.png" class="arrow-img"><span>LINE@</span></a>
          </div>
          <p>Bee（ジム）</p>
          <a href="http://nav.cx/apINJvU" target="_blank">
            <img src="~/assets/img/line@.png" class="line" alt="line">
          </a>
          <br>
          <p class="line-sweet">SweetHoney（エステ）</p>
          <a href="#" target="_blank" class="line-sweet" alt="line">
            <img src="~/assets/img/line@.png" class="line" alt="line">
          </a>
          <div class="block"></div>
        </div>
<!--        ここまで-->
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
  a {
    color: #fff;
  }
  .links {
    text-align: left;
    li {
      line-height: 1;
    }
    li+li {
      margin-top: 15px;
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
  /*エステのline@はまだ作成されていない*/
  .line-sweet {
    display: none;
  }

  .block {
    width: 50px;
    height: 40px
  }
  /*ここまで！!エステのline@追加されたら消す*/

  @include mobile() {
    .logo-footer {
      width: 240px;
      text-align: left;
    }
  }
</style>
