<template>
  <section id="conversion" class="section has-text-centered">
    <div class="container">
      <h2 class="section-title is-3 is-spaced" data-aos="fade-up">パーソナルトレーニングスタジオBeeでは、お客様一人ひとりに違うメニューをご提案しています。</h2>

      <p class="is-size-7" data-aos="fade-up">
        パーソナルトレーニングスタジオbeeでは事前に目標を設定し、その日のご体調に合わせたトレーニングメニューを知識豊富なトレーナー陣がマンツーマンでご提案します。メニューに悩んでいる方はまずはお気軽にトレーナーへご相談ください。</p>

      <div class="columns mt30" data-aos="fade-up">
        <div class="column personal">
          <a href="#" v-scroll-to="'#personal'" class="button is-outlined"><i
            class="arrow arrow-down"></i>パーソナルトレーニング</a>
        </div>
        <div class="column other">
          <a href="#" v-scroll-to="'#other'" class="button is-outlined"><i class="arrow arrow-down"></i>その他メニュー</a>
        </div>
        <div class="column est">
          <a href="#" v-scroll-to="'#este'" class="button is-outlined"><i class="arrow arrow-down"></i>エステメニュー</a>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/_variables.scss";

  .container {
    @include widescreen() {
      max-width: 960px;
    }
  }

  .section {
    padding-top: 48px;
    padding-bottom: 50px;
  }

  .columns {
    @include tablet() {
      padding-left: 100px;
      padding-right: 100px;


    }
    @include desktop() {
      padding-right: 200px;
    }
  }

  .est {
    @include tablet() {
      padding-left: 0;
    }

    @include desktop() {
      padding-left: 15px;
    }
  }

  .arrow {
    margin-right: 10px;
    position: relative;
    display: inline-block;
    padding: .3em;
    box-shadow: 2px -2px 0 0 #333 inset;
  }

  .arrow-down {
    transform: rotate(-45deg);
    bottom: 3px;
  }
</style>
