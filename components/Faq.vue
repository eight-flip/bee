<template>
  <section class="section has-text-centered">
    <div class="container">
      <h2 class="section-title is-3 is-spaced" data-aos="fade-up">よくある質問</h2>
      <p class="section-subtitle is-4" data-aos="fade-up">Q&A</p>

      <p class="is-size-7 is-white mb45" data-aos="fade-up">ご不明な点はお気軽にお問い合わせください。</p>

      <div class="accordions mb20" data-aos="fade-up">
        <js-accordion>
          <div class="header" slot="title"><span class="q-count">Q1</span><span class="q">どのくらい続けると効果がでますか？</span></div>
          <div class="js-accordion--body" slot="body">
            <p class="a is-size-7">食事を減らすという食事制限ではなく、専門知識を持ったトレーナーが食事のバランスをアドバイスし、食生活を見直しながらコントロールしていきます。</p>
          </div>
        </js-accordion>

        <js-accordion>
          <div class="header" slot="title"><span class="q-count">Q2</span><span class="q">食事制限はありますか？</span></div>
          <div class="js-accordion--body" slot="body">
            <p class="a is-size-7">食事を減らすという食事制限ではなく、専門知識を持ったトレーナーが食事のバランスをアドバイスし、食生活を見直しながらコントロールしていきます。</p>
          </div>
        </js-accordion>

        <js-accordion>
          <div class="header" slot="title"><span class="q-count">Q3</span><span class="q">ウェアなどレンタルできますか？質問が2行以上の場合です。ウェアなどレンタルできます
か？質問が2行以上の場合です。ウェアなどレンタルできますか？質問が2行以上の場合で
す。ウェアなどレンタルできますか？？</span></div>
          <div class="js-accordion--body" slot="body">
            <p class="a is-size-7">食事を減らすという食事制限ではなく、専門知識を持ったトレーナーが食事のバランスをアドバイスし、食生活を見直しながらコントロールしていきます。</p>
          </div>
        </js-accordion>

        <js-accordion>
          <div class="header" slot="title"><span class="q-count">Q4</span><span class="q">入会までの流れを教えてください。</span></div>
          <div class="js-accordion--body" slot="body">
            <p class="a is-size-7">食事を減らすという食事制限ではなく、専門知識を持ったトレーナーが食事のバランスをアドバイスし、食生活を見直しながらコントロールしていきます。</p>
          </div>
        </js-accordion>

        <js-accordion>
          <div class="header" slot="title"><span class="q-count">Q5</span><span class="q">どのような支払い方法がありますか？</span></div>
          <div class="js-accordion--body" slot="body">
            <p class="a is-size-7">食事を減らすという食事制限ではなく、専門知識を持ったトレーナーが食事のバランスをアドバイスし、食生活を見直しながらコントロールしていきます。</p>
          </div>
        </js-accordion>

        <js-accordion>
          <div class="header" slot="title"><span class="q-count">Q5</span><span class="q">2人以上でレッスンを受けることはできますか？</span></div>
          <div class="js-accordion--body" slot="body">
            <p class="a is-size-7">食事を減らすという食事制限ではなく、専門知識を持ったトレーナーが食事のバランスをアドバイスし、食生活を見直しながらコントロールしていきます。</p>
          </div>
        </js-accordion>
      </div>

    </div>
  </section>
</template>

<script>
  import jsAccordion from '~/components/parts/Accordion.vue';

  export default {
    components: {
      jsAccordion,
    }
  }

</script>

<style lang="scss" scoped>
  @import "~assets/scss/_variables.scss";

  .section {
    background: url('~assets/img/bg-contact.png') no-repeat;
    background-size: cover;
    position: relative;
    padding-bottom: 96px;

    &:before {
      background-color: rgba(0, 0, 0, 0.5);
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    .section-title, .section-subtitle, .is-white {
      color: #fff;
    }

    .section-subtitle:before {
      background-color: #fff;
    }
  }

  .container {
    max-width: 800px;
  }

  .js-accordion--body {
    background-color: #fff;

    .a {
      text-align: left;
      padding: 15px;
      font-weight: 500;
      font-family: '游ゴシック';
      color: #000000;
      @include tablet() {
        padding: 24px;
      }
    }
  }

  .js-accordion {
    .header {
      .q {
        font-size: 16px;
      }
    }
  }
</style>
