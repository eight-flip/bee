<template>
  <section id="mv" :class="{'is-mounted': isMounted}" class="hero is-medium" data-aos-easing="ease"
           data-aos-duration="400" data-aos-delay="40">

    <carousel :per-page="1" :autoplay="true" :loop="true" :speed="1500" :autoplay-timeout="3000">
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
      <span class="filter"></span>
      <div class="card-content">
        <span class="clip">
          <p class="title clip-inside">
            お客様ひとりひとり特別なメニューで、知識豊富なトレーナーがエクササイズをご提案します。
          </p>
        </span>
        <span class="clip">
          <div class="subtitle clip-inside">
            <a href="#" v-scroll-to="'#contact'"  class="button is-outlined is-white has-right-border">体験申し込みはこちら</a>
          </div>
        </span>
        <span class="clip">
          <img src="~/assets/img/bee-grey.png" alt="bee" class="bee-grey clip-inside">
        </span>
      </div>
    </div>

  </section>
</template>

<script>
  import Carousel from 'vue-carousel/src/Carousel.vue'
  import Slide from 'vue-carousel/src/Slide.vue'

  export default {
    data() {
      return {
        isMounted: false,
      }
    },
    components: {
      Carousel,
      Slide,
    },
    mounted: function () {
      this.isMounted = true;
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/_variables.scss";

  $t: 0s;
  .card {
    z-index: 0;
    background-color: transparent;
    box-shadow: none;
    $t1: .4s;

    .filter {
      z-index: 1;
      background-color: #0b0b0b;
      opacity: 0.9;
      /*box-shadow: 2px 3px 10px 0 rgba(0, 0, 0, 0.2);*/
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: block;

      /* animation */
      transition: transform $t1 cubic-bezier(1, .04, 1, .76);
      transform: matrix(1, 0, -0.45, 1, -470, 0);
      @include tablet() {
        transform: matrix(1, 0, -0.45, 1, -770, 0);
      }
      transform-origin: left;
    }

    $t: $t + $t1 + .1s;

    .clip {
      width: 100%;
      height: 100%;
      display: block;

      /* animation */
      transition: clip-path 1s cubic-bezier(.34, .07, .095, .995) $t;
      clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);

      .clip-inside {
        transition: transform 1s cubic-bezier(.34, .07, .095, .995) $t;
        transform: translate3d(0, 3vw, 0) skewY(5deg);
        transform-origin: left;
      }
    }

    .is-mounted & {
      .filter {
        transform: none;
      }

      .clip {
        clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);
      }

      .clip-inside {
        transform: translateZ(0) skewY(0deg);
      }
    }

    .card-content {
      z-index: 2;
      position: relative;
    }
  }

  #mv.hero {
    position: relative;

    $card-gap: 85px; //カードを下にずらす幅
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

  }
</style>
