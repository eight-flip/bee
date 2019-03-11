<template>
  <section class="section has-text-centered has-background-grey-light">
    <div class="container">
      <h2 class="section-title is-3 is-spaced">メニュー&料金</h2>
      <p class="section-subtitle is-4">MENU&PRICE</p>
      <p class="is-size-7">パーソナルトレーニングスタジオBeeでは、お客様一人ひとりに違うメニューをご提案しています。デイタイム、会社帰り、あなたのライフスタイルに合わせてお選び下さい。多種多様なメニューをご用意しております。</p>

      <div class="columns mb30">
        <div class="column">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                <span class="num">30</span>
                <span class="training">分パーソナルトレーニング</span>
                <span class="plus">+</span>
                <span class="training">20分有酸素</span>
              </p>
            </header>
            <div class="card-content">
              <div class="columns is-mobile">
                <div class="column">
                  <img src="~/assets/img/menu-4-times.png" class="times-img is-pulled-left" alt="4回/月">
                  <div class="is-clearfix"></div>
                  <p class="price">¥25,000~ &nbsp;</p>
                  <p class="is-size-7 pr15">※上記はDAY会員の料金です（平日昼12〜17時限定）</p>
                </div>
                <div class="column">
                  <img src="~/assets/img/menu-6-times.png" class="times-img is-pulled-left" alt="4回/月">
                  <div class="is-clearfix"></div>
                  <p class="price">¥37,500 &nbsp;</p>
                  <p class="is-size-7 pl15">※上記はDAY会員の料金です（平日昼12〜17時限定）</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                <span class="num">60</span>
                <span class="training">分パーソナルトレーニング</span>
                <span class="plus">+</span>
                <span class="training">20分有酸素</span>
              </p>
            </header>
            <div class="card-content">
              <div class="columns is-mobile">
                <div class="column">
                  <img src="~/assets/img/menu-4-times.png" class="times-img is-pulled-left" alt="4回/月">
                  <div class="is-clearfix"></div>
                  <p class="price">¥25,000~ &nbsp;</p>
                  <p class="is-size-7 pr15">※終日利用OK</p>
                </div>
                <div class="column">
                  <img src="~/assets/img/menu-6-times.png" class="times-img is-pulled-left" alt="4回/月">
                  <div class="is-clearfix"></div>
                  <p class="price">¥37,500 &nbsp;</p>
                  <p class="is-size-7 pl15">※終日利用OK</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#" class="button is-outlined">メニューをもっと詳しく見る</a>

    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import "~assets/scss/_variables.scss";

  .section {
    padding-top: 50px;
    padding-bottom: 50px;

    .container {
      position: relative;
    }
  }
  .section-subtitle + p {
    margin-top: 24px;
    margin-bottom: 40px;
  }

  @include mobile() {
    .columns:not(.is-mobile) > .column+.column {
      margin-top: 10px;
    }
  }

  .card {
    -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);

    .card-header-title {
      justify-content: center;
      color: #fff;
      background-color: #000;

      .num {
        font-size: 20px;
        font-weight: normal;
        margin-right: 3px;
        @include tablet() {
          font-size: 26px;
          line-height: 1;
        }
        @include desktop() {
          font-size: 32px;
        }
      }
      .training {
        font-size: 13px;
        @include tablet() {
          margin-top: 4px;
          font-size: 15px;
          line-height: 1;
        }
        @include desktop() {
          font-size: 18px;
        }
      }
      .plus {
        font-size: 16px;
        margin-left: 5px;
        margin-right: 5px;
      }
    }

    $gap: 15px;
    .times-img {
      margin-left: -($gap);
    }
    .columns .column {
      padding-left: $gap;
      padding-right: $gap;
    }

    .times-img {
      margin-right: auto;
      @include mobile() {
        width: 88px;
      }
      @include tablet() {
        width: 135px;
      }
    }

    .card-content {
      padding-top: 13px;
      padding-left: 0;
      padding-right: 0;
      padding-bottom: 0;
    }
    .columns {
      margin-left: 0;
      margin-right: 0;

      .column img {
        float: left;
      }

      .column:not(:last-child) {
        border-right: 1px solid #e3e3e3;
      }
    }

    .price {
      font-size: 23px;
      font-weight: bold;
      font-family: 'DIN-Bold';
      line-height: 1;
      margin-top: 24px;
      margin-bottom: 10px;
      @include tablet() {
        font-size: 30px;
      }
      @include desktop() {
        font-size: 34px;
      }
    }
    .price + p {
      min-height: 3em;
    }
  }
</style>
