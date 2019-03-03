<template>
  <section id="mv" class="hero is-medium">
    <!--<img src="~/assets/img/hero-1.png" class="mv-img" alt="">-->

    <carousel :per-page="1" :autoplay="true" :loop="true">
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
        <p class="subtitle">
          <a href="#contact" class="button is-outlined is-white">体験お申込みはこちら</a>
        </p>
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
  #mv.hero {
    position: relative;

    .card {
      position: absolute;
      bottom: 50px;
      left: 0;
      width: calc(100vw - 20px);
      background-color: #0b0b0b;
      opacity: 0.9;

      .title {
        color: #fff;
        font-size: 18px;
        line-height: 27px;
        letter-spacing: 0.36px;
        font-weight: bold;
      }

      .subtitle {
        color: #fff;
        font-size: 14px;
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
