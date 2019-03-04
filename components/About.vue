<template>
  <section class="section has-text-centered">
    <div class="container">
      <h2 class="section-title is-3 is-spaced">Beeとは？</h2>
      <p class="section-subtitle is-4">ABOUT</p>

      <h3 class="title is-3 mt30">綺麗な施設でさまざまなトレーニングを。エステメニューも充実。</h3>

      <p>
        パーソナルトレーニングスタジオbeeでは事前に目標を設定し、その日のご体調に合わせたトレーニングメニューを知識豊富なトレーナー陣がマンツーマンでご提案します。また、清潔で明るいシャワールームとパウダールームをご用意しております。今まで運動が続かなかった方も、お客様にあった内容とペースで無理なく運動習慣が身に付きます。</p>


      <div class="triangle">
        <img src="~/assets/img/triangle.png" class="bg" alt="menu">
        <a href="#1" class="link-top">
          <img src="~/assets/img/triangle-top.png" class="triangle-img" alt="menu">
          <span>メニューはこちら</span>
        </a>
        <a href="#1" class="link-left">
          <img src="~/assets/img/triangle-left.png" class="triangle-img" alt="menu">
          <span>施設紹介はこちら</span>
        </a>
        <a href="#1" class="link-right">
          <img src="~/assets/img/triangle-right.png" class="triangle-img" alt="menu">
          <span>エステメニューはこちら</span>
        </a>
      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>
  .triangle {
    position: relative;
    padding-left: 3px;
    padding-right: 3px;

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
        top: 35%;
        bottom: 0;
        left: 0;
        right: 0;
        display: inline-block;
        font-size: 16px;
        font-weight: bold;
        width: 70%;
        margin-left: auto;
        margin-right: auto;
      }
    }

    .link-top {
      top: 30px;
      left: 0;
      right: 0;
    }

    .link-left {
      left: -15px;
      bottom: 55px;
    }

    .link-right {
      right: -15px;
      bottom: 55px;
    }

    .triangle-img {
      height: 130px;
      max-width: none;
    }

    .bg {
      /*width: 310px;*/
    }
  }
</style>
