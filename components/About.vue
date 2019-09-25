<template>
  <section id="about" class="section has-text-centered">
    <div class="container">
      <h2 class="section-title is-3 is-spaced" data-aos="fade-up">Beeとは？</h2>
      <p class="section-subtitle is-4" data-aos="fade-up">ABOUT</p>

      <h3 class="title is-3 mt30" data-aos="fade-up">綺麗な施設でさまざまなトレーニングを。エステメニューも充実。</h3>

      <p data-aos="fade-up">
        パーソナルトレーニングスタジオBeeではお客様の目標を達成、維持できるようマンツーマンでトレーニングします。知識、経験豊富なトレーナー陣が最適なトレーニング方法でお客様のボディメイクにアプローチします。また、清潔で明るいシャワールームとパウダールームをご用意しております。</p>
      <p data-aos="fade-up" style="margin-top: 8px;">今まで運動が続かなかった方も自分にあったトレーニングで理想のボディを創りあげましょう！</p>


      <div class="triangle" data-aos="fade-up">
        <img src="~/assets/img/triangle.png" class="bg" alt="menu">
        <a href="#" v-scroll-to="'#price'" class="link-top">
          <img src="~/assets/img/triangle-top.png" class="triangle-img" alt="menu">
          <span>メニューはこちら</span>
        </a>
        <a href="#" v-scroll-to="'#studio'" class="link-left">
          <img src="~/assets/img/triangle-left.png" class="triangle-img" alt="menu">
          <span>施設紹介はこちら</span>
        </a>
        <a href="/price/#este" class="link-right" >
          <img src="~/assets/img/triangle-right.png" class="triangle-img" alt="menu">
          <span>エステメニュー<br>はこちら</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import "~assets/scss/_variables.scss";
  .section {
    @include tablet() {
      margin-top: 85px;
    }
  }
  .triangle {
    position: relative;
    padding-left: 3px;
    padding-right: 3px;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;

    a {
      position: absolute;
      color: #fff;
      text-decoration: none;
      width: max-content;
      margin-left: auto;
      margin-right: auto;

      &:hover {
        opacity: 0.8;
        transition: 0.3s opacity;
      }

      span {
        position: absolute;
        top: 39%;
        bottom: 0;
        left: 0;
        right: 0;
        display: inline-block;
        font-size: 16px;
        font-weight: bold;
        width: 70%;
        margin-left: auto;
        margin-right: auto;
        @include until($for-iPhone5) {
          font-size: 14px;
        }
        @include mobile() {
          line-height: 1.1;
        }
        @include tablet() {
          top: 40%;
          font-size: 22px;
        }
      }
    }

    .link-top {
      top: 30px;
      left: 0;
      right: 0;
      @include until($for-iPhone5) {
        top: 25px;
      }
      @include tablet() {
        top: 50px;
      }
    }

    .link-left {
      bottom: 55px;
      left: -15px;
      @include tablet() {
        left: -45px;
        bottom: 95px;
      }
      @include until($for-iPhone5) {
        bottom: 42px;
      }
    }



    .link-right  {
      bottom: 55px;
      right: -40px;
      /*margin-left: 30px;*/
      @include until($for-iPhone5) {
        bottom: 42px;

      }
      @include tablet() {
        bottom: 95px;
      }

      @include mobile() {
        margin-left: 15px;
      }
    }


    .triangle-img {
      max-width: none;
      height: auto;
      width: 150px;
      @include until($for-iPhone5) {
        width: 125px;
      }
      @include tablet() {
        width: 286px;
      }
    }

    .bg {
      height: auto;
    }
  }
  .triangle, .bg  {
    width: 305px;
    @include tablet() {
      width: 565px;
    }
    @include until($for-iPhone5) {
      width: 256px;
    }
  }
</style>
