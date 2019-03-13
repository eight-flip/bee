<template>
  <section id="price" class="section has-text-centered has-bg-img">
    <div class="title-area">
      <h1 class="title">メニュー&料金</h1>
      <br class="is-hidden-tablet">
      <p class="subtitle">MENU&PRICE</p>
    </div>
    <img src="~/assets/img/price/training.png" class="training" alt="Training">
  </section>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/_variables.scss";

  .section {
    position: relative;
    padding: 36px 10px;
    height: 310px;
    background: url('~assets/img/price/hero.jpg') no-repeat;
    background-size: cover;
    position: relative;
    @include mobile() {
      background-position-x: 20%;
      height: 250px;
    }
    &:before {
      background-color: rgba(0, 0, 0, 0.4);
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    .title-area {
      position: absolute;
      left: 0px;
      top: 30%;
      padding-left: 10%;
      padding-bottom: 20px;

      @include mobile() {
        left: 0;
        right: 0;
        text-align: center;
        padding-left: 0;
        padding-bottom: 10px;
      }

      :before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        border: 1px solid #fff;
        width: 100%;
        @include mobile() {
          width: 200px;
          right: 0;
          margin-left: auto;
          margin-right: auto;
        }
      }

      .title {
        font-size: 26px;
      }

      .subtitle {
        font-size: 18px;
        letter-spacing: 1.8px;
      }

      .title, .subtitle {
        color: #ffffff;
        text-align: left;

        @include mobile() {
          margin-bottom: 5px;
          text-align: center;
          display: inline-block;
        }
      }
    }

    .training {
      position: absolute;
      right: 20px;
      top: 40%;
      width: 410px;
      height: auto;
      @include mobile() {
        top: initial;
        bottom: 0px;
        width: 80%;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
</style>
