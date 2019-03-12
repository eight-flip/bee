<template>
  <section class="section has-text-centered">
    <div class="container">
      <h2 class="section-title is-3 is-spaced" data-aos="fade-up">施設紹介</h2>
      <p class="section-subtitle is-4" data-aos="fade-up">STUDIO</p>

      <div class="block block-1" data-aos="fade-up">
        <img src="~assets/img/studio-1.jpg" class="studio-img sp img-1" alt="スタジオ写真1">
        <div class="card is-black card-1">
          <div class="card-header">
            <p class="card-header-title">自分を磨ける場所がここにある。</p>
          </div>
          <div class="card-content">
            <p>
              お客様に合わせてあらゆる角度からのトレーニングが可能です。<br class="is-hidden-tablet">
              パーソナルトレーニングスタジオBeeではさまざまなトレーニングマシンをご用意しております。
            </p>
          </div>
        </div>
        <div class="light-grey-box"></div>
      </div>


      <div class="block block-2" data-aos="fade-up">
        <img src="~assets/img/studio-2.jpg" class="studio-img sp img-2" alt="スタジオ写真2">
        <div class="card is-black card-2">
          <div class="card-header">
            <p class="card-header-title">上質な空間で、ゆったりと。</p>
          </div>
          <div class="card-content">
            <p>
              スタジオ内には完全個室のエステルームも完備。トレーニング後にエステの施術を受けることもできます。<br>
              また、清潔で明るいシャワールームとパウダールームをご用意しております。
            </p>
          </div>
        </div>
        <div class="light-grey-box"></div>
      </div>

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

  .section {
    padding-left: 0;
    padding-right: 0;
  }

  .studio-img {
    z-index: 2;
    position: relative;
  }

  $card-pad: 30px;
  .card {
    color: #fff;
    padding-top: 70px;
    padding-bottom: $card-pad;

    position: relative;

    .card-header-title {
      font-size: 20px;
      color: #fff;
      position: relative;
      margin: 30px auto 15px;
      line-height: 1;
      padding-top: 0;
      padding-bottom: 0;
      @include desktop() {
        font-size: 22px;
      }
      /* border */
      &:before {
        content: '';
        position: absolute;
        width: calc(100% - 30px);
        display: inline-block;
        top: -22px; /*線の上下位置*/
        height: 1px; /*線の太さ*/
        background-color: #fff; /*線の色*/
        @include desktop() {
          top: -25px;
        }
      }

      &:after {
        content: '';
        position: absolute;
        width: calc(100% - 30px);
        display: inline-block;
        bottom: -16px; /*線の上下位置*/
        height: 1px; /*線の太さ*/
        background-color: #fff; /*線の色*/
        @include desktop() {
          bottom: -25px;
        }
      }
    }

    &.is-black {
      background-color: $black;
    }

    .card-content p {
      text-align: left;
      font-size: 14px;
      @include desktop() {
        margin-top: 20px;
      }
      @include widescreen() {
        margin-top: 25px;
      }
    }
  }

  .light-grey-box {
    position: absolute;
    width: 180px;
    height: 180px;
    background-color: #f2f3f5;
    -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08);
    -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08);
  }

  .block {
    position: relative;
  }

  @include until($desktop) {
    .block-1 .light-grey-box {
      top: 24%;
      right: 0;
    }
    .block-2 {
      margin-bottom: 30px;
    }
    .block-2 .light-grey-box {
      bottom: -30px;
      left: 0;
    }
  }

  @include until($desktop) {
    $gap: 30px;
    .card-1 {
      margin-top: -($card-pad + 20px);
      margin-right: $gap;
      z-index: 1;
    }

    .studio-img {
      width: calc(100% - #{$gap});

      &.img-1 {
        margin-top: 16px;
        margin-left: $gap;
      }

      &.img-2 {
        margin-top: 36px;
        margin-right: $gap;
      }
    }

    .card-2 {
      margin-top: -($card-pad + 20px);
      margin-left: $gap;
      z-index: 1;
    }
  }

  .block-1 {
    @include desktop() {
      position: relative;
      height: 340px;
    }
    @include widescreen() {
      height: 378px;
    }

    .img-1 {
      @include desktop() {
        position: absolute;
        left: 0;
        top: 0;
        width: 612*.75px;
      }
      @include widescreen() {
        width: 612*.9px;
      }
    }

    .card {
      z-index: 1;
      @include desktop() {
        position: absolute;
        padding-top: 40px;
        padding-left: 190.9px;
        padding-right: 0;
        margin-right: 64px;
        right: 0;
        width: 600px;
        height: 256px;
        top: 35px;
      }
      @include widescreen() {
        width: 800*.9px;
        height: 328*.9px;
        padding-top: 66*.9px;
        padding-left: 230px;
        margin-right: 72px;
        top: 46px;
      }

      .card-content {
        @include desktop() {
          padding: .75rem;
        }
      }

      .card-header, .card-content {
        @include desktop() {
          width: 396px;
        }
      }
    }

    .light-grey-box {
      @include desktop() {
        top: 17px;
        right: 32px;
      }
      @include widescreen() {
        right: 40px;
      }
    }
  }

  .block-2 {
    @include desktop() {
      position: relative;
      height: 340px;
    }
    @include widescreen() {
      height: 378px;
    }

    .img-2 {
      @include desktop() {
        position: absolute;
        right: 0;
        top: 0;
        width: 612*.75px;
      }
      @include widescreen() {
        width: 612*.9px;
      }
    }

    .card {
      z-index: 1;
      @include desktop() {
        position: absolute;
        padding-top: 40px;
        padding-left: 30px;
        padding-right: 0;
        margin-left: 64px;
        left: 0;
        width: 600px;
        height: 256px;
        top: 35px;
      }
      @include widescreen() {
        width: 800*.9px;
        height: 328*.9px;
        padding-top: 66*.9px;
        padding-left: 100px;
        margin-left: 72px;
        top: 46px;
      }

      .card-content {
        @include desktop() {
          padding: .75rem;
        }
      }

      .card-header, .card-content {
        @include desktop() {
          width: 396px;
        }
      }
    }

    .light-grey-box {
      @include desktop() {
        bottom: 17px;
        left: 32px;
      }
      @include widescreen() {
        left: 40px;
      }
    }
  }

  /*.block-2 {
    margin-bottom: 30px;
  }
  .block-2 .light-grey-box {
    bottom: -30px;
    left: 0;
  }*/

  @include desktop() {
    /*.light-grey-box, .studio-img.sp {*/
    /*display: none;*/
    /*}*/
    /*.block-1 {*/
    /*position: relative;*/
    /*z-index: 1;*/
    /*.card {*/
    /*z-index: 2;*/
    /*background: none;*/
    /*position: absolute;*/
    /*box-shadow: none;*/
    /*width: 34%;*/
    /*right: 15%;*/
    /*top: 10%;*/
    /*.card-header-title {*/
    /*font-size: 24px;*/
    /*}*/
    /*.card-content p {*/
    /*font-size: 16px;*/
    /*}*/
    /*}*/
    /*}*/
    /*.block-1 {*/
    /*.card {*/
    /*width: 800px;*/
    /*margin-left: auto;*/
    /*float: right;*/
    /*}*/
    /*.card-header, .card-content {*/
    /*width: 396px;*/
    /*}*/
    /*}*/
    /*.studio-img {*/
    /*&.img-1 {*/
    /*width: 612px;*/
    /*height: 342px;*/
    /*float: left;*/
    /*margin-right: auto;*/
    /*}*/
    /*}*/
  }
</style>
