<template>
  <section id="mv" class="hero is-medium">

    <carousel :per-page="1" :autoplay="false" :loop="true">
      <slide>
        <img src="~/assets/img/hero-1.jpg" class="mv-img" alt="">
      </slide>
      <slide>
        <img src="~/assets/img/hero-1.jpg" class="mv-img" alt="">
      </slide>
      <slide>
        <img src="~/assets/img/hero-1.jpg" class="mv-img" alt="">
      </slide>
    </carousel>


    <div class="card">
      <div class="card-content">
        <p class="title">
          お客様ひとりひとり特別なメニューで、知識豊富なトレーナーがエクササイズをご提案します。
        </p>
        <div class="subtitle">
          <a href="#contact" class="button is-outlined is-white has-right-border">体験申し込みはこちら</a>
        </div>
        <img src="~/assets/img/bee-grey.png" alt="bee" class="bee-grey">
      </div>
    </div>

  </section>
</template>

<script>
  import Carousel from 'vue-carousel/src/Carousel.vue'
  import Slide from 'vue-carousel/src/Slide.vue'

  export default {
    components: {
      Carousel,
      Slide,
    },
  }
</script>

<style lang="scss">
  @import "~assets/scss/_variables.scss";
  section#mv + section {
    margin-top: 85px;
  }
  #mv.hero {
    position: relative;

    $card-gap: 85px;//カードを下にずらす幅
    .mv-img {
      max-width: 100%;
      height: calc(100vh - #{$navbar-height});
      object-fit: cover;
      object-position: 60% 0%;
      width: 100%;
      @include tablet() {
        max-height: 700px;
      }
    }

    .card {
      position: absolute;
      bottom: 50px;
      left: 0;
      width: calc(100vw - 20px);
      background-color: #0b0b0b;
      opacity: 0.9;
      box-shadow: 2px 3px 10px 0 rgba(0, 0, 0, 0.2);
      @include tablet() {
        width: 600px;
        left: 2%;
        bottom: -$card-gap;
        .card-content {
          padding: 60px 50px;
        }
      }
      .title {
        color: #fff;
        font-size: 18px;
        line-height: 27px;
        letter-spacing: 0.36px;
        font-weight: bold;
        @include tablet() {
          font-size: 24px;
          line-height: 36px;
        }
      }

      .subtitle {
        color: #fff;
        margin-top: 20px;
        @include tablet() {
          margin-top: 30px;
          margin-bottom: 60px;
        }
        .button {
          font-size: 14px;
          height: 44px;
          width: 80%;
          @include tablet() {
            height: 66px;
            font-size: 24px;
          }
        }
      }

      .card-footer {
        border: none;

        .bee-grey {
          width: 100%;
        }
      }
    }

    .VueCarousel-pagination {
      position: absolute;
      bottom: 0;
      right: 0;
      text-align: right;
    }

    .VueCarousel-dot {
      width: 12px;
      height: 12px;
      margin-bottom: 16px;
      -webkit-border-radius: 0;
      -moz-border-radius: 0;
      border-radius: 0;
    }

  }
</style>
