<template>
  <section class="section has-text-centered">
    <div class="container">
      <h2 class="section-title is-3 is-spaced">施設紹介</h2>
      <p class="section-subtitle is-4">STUDIO</p>

      <div class="block block-1"><img src="~assets/img/studio-1.jpg" class="studio-img img-1" alt="スタジオ写真1">
        <div class="card is-black card-1">
          <div class="card-header">
            <p class="card-header-title">自分を磨ける場所がここにある。</p>
          </div>
          <div class="card-content">
            <p>
              お客様に合わせてあらゆる角度からのトレーニングが可能です。<br>
              パーソナルトレーニングスタジオBeeではさまざまなトレーニングマシンをご用意しております。
            </p>
          </div>
        </div>
        <div class="light-grey-box"></div>
      </div>


      <div class="block block-2">
        <img src="~assets/img/studio-2.jpg" class="studio-img img-2" alt="スタジオ写真2">
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

  @include mobile() {
    .section {
      padding-left: 0;
      padding-right: 0;
    }
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
      /* border */
      &:before {
        content: '';
        position: absolute;
        width: calc(100% - 30px);
        display: inline-block;
        top: -22px; /*線の上下位置*/
        height: 1px; /*線の太さ*/
        background-color: #fff; /*線の色*/
      }

      &:after {
        content: '';
        position: absolute;
        width: calc(100% - 30px);
        display: inline-block;
        bottom: -16px; /*線の上下位置*/
        height: 1px; /*線の太さ*/
        background-color: #fff; /*線の色*/
      }
    }

    &.is-black {
      background-color: $black;
    }

    .card-content p {
      text-align: left;
      font-size: 14px;
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

  @include mobile() {
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

  @include mobile() {
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
</style>
