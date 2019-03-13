<template>
  <section class="section has-text-centered">
    <div class="container">
      <div class="columns">
        <div class="column">
          <ul class="links">
            <li><a href="#about">ABOUTー <span class="is-size-7">Beeとは？</span></a></li>
            <li><a href="#studio">STUDIOー <span class="is-size-7">施設紹介</span></a></li>
            <li><a href="#price">MENU&PRICEー <span class="is-size-7">メニュー・料金</span></a></li>
          </ul>
        </div>
        <div class="column">
          <ul class="links">
            <li><a href="#access">ACCESSー <span class="is-size-7">アクセス</span></a></li>
            <li><a href="#contact">CONTACTー <span class="is-size-7">お問い合わせ</span></a></li>
            <li><a href="#faq">Q&Aー <span class="is-size-7">よくあるご質問</span></a></li>
          </ul>
        </div>
        <div class="column has-text-left is-flex-end">
          <img src="~/assets/img/twitter.png" class="sns" alt="twitter">
          <img src="~/assets/img/facebook.png" class="sns" alt="facebook">
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
