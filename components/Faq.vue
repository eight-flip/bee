<template>
  <section id="faq" class="section has-text-centered">
    <div class="container">
      <h2 class="section-title is-3 is-spaced" data-aos="fade-up">よくある質問</h2>
      <p class="section-subtitle is-4" data-aos="fade-up">Q&A</p>

      <p class="is-size-7 is-white mb45" data-aos="fade-up">ご不明な点はお気軽にお問い合わせください。</p>

      <div class="accordions mb20" data-aos="fade-up">
        <js-accordion>
          <div class="header" slot="title"><span class="q-count">Q1</span><span class="q">どのくらい続けると効果がでますか？</span></div>
          <div class="js-accordion--body" slot="body">
            <div class="a is-size-7">
              <p>週一回のトレーニングでも一カ月経つと変化を感じることはできます。</p>
              <p>個人差はございます。</p>
              <p>トレーニングはお客様のご要望に合わせて組み立てます。</p>
              <p>無理なく継続してトレーニングできるようにサポート致します。</p>
              <p>理想のボディを一緒に作りましょう！</p>
            </div>
          </div>
        </js-accordion>

        <js-accordion>
          <div class="header" slot="title"><span class="q-count">Q2</span><span class="q">食事制限はありますか？</span></div>
          <div class="js-accordion--body" slot="body">
            <div class="a is-size-7">
              <p>食事を減らすという食事制限ではなく、専門知識を持ったトレーナーが食事のバランスをアドバイスし、食生活を見直しながらコントロールしていきます。</p>
              <p>オプション(有料)で管理栄養士からの指導を受けることもできますので詳しくはスタッフまで！</p>
            </div>
          </div>
        </js-accordion>

        <js-accordion>
          <div class="header" slot="title"><span class="q-count">Q3</span><span class="q">ウェアなどレンタルできますか？</span></div>
          <div class="js-accordion--body" slot="body">
            <div class="a is-size-7">
              <p>ウェア、靴下、タオル、シューズも無償でレンタルできます。</p>
              <p>手ぶらでお気軽に御来店ください。</p>
            </div>
          </div>
        </js-accordion>

        <js-accordion>
          <div class="header" slot="title"><span class="q-count">Q4</span><span class="q">入会までの流れを教えてください。</span></div>
          <div class="js-accordion--body" slot="body">
            <div class="a is-size-7">
              <ul style="margin-bottom: 5px;">
                <li>1. お電話またはメールにて御来店日時を決めて頂きます。</li>
                <li>2. スタッフによるカウンセリング(所要時間30〜60分)からコースの選択。</li>
                <li>3. 入会手続き</li>
              </ul>
              <p>必要な物は身分証明書、銀行引落希望の方(銀行通帳、銀行印)、クレジットカード、月会費二カ月分(お支払いは現金又はクレジットカード)</p>
              <small>※月会費は入会時に２か月分前納し、毎月28日に翌月分を登録口座より自動引落し、または現金及びクレジットでの店頭払いとなります。</small><br>
              <ul style="margin: 5px auto 5px">
                <li>4. ご予約(初回のトレーニング日を確定致します。)</li>
              </ul>
              <p>
                <small>※GOGO体験(¥5,500-で2回レッスンできます)からの入会が人気ですのでまずは体験してみてください！</small>
              </p>
            </div>
          </div>
        </js-accordion>

        <js-accordion>
          <div class="header" slot="title"><span class="q-count">Q5</span><span class="q">どのような支払い方法がありますか？</span></div>
          <div class="js-accordion--body" slot="body">
            <div class="a is-size-7">
              <p style="margin-bottom: 5px;">現金、銀行口座引落、クレジットカードから選択できます。</p>
              <ul>
                <li>□ご入会時の初期費用は現金及びクレジットカードでお支払いが可能です。ただしクレジットカードは一括払のみとさせていただきます。</li>
                <li>□月会費が銀行口座から自動引落しの会員様は、必ず自動引落し予定日の前日までに登録口座にご入金をお願い致します。</li>
                <li>万が一引落しができなかった場合は店頭でのお支払いとなります。)</li>
              </ul>
              <p style="margin-bottom: 5px;">
                <small>※月会費のお支払いがあるまで予約を承る事はできません、予めご了承下さい。</small>
              </p>
              <ul>
                <li>□月会費のお支払いが１か月以上遅滞した場合、月会費が支払われるまで施設の利用をお断りさせていただきます。</li>
                <li>□会員資格取得後、会員資格喪失までは、施設の利用の有無に関わらず月会費をお支払いいただきます。</li>
              </ul>
            </div>
          </div>
        </js-accordion>

        <js-accordion>
          <div class="header" slot="title"><span class="q-count">Q6</span><span class="q">Beeに通うメリットとは？</span></div>
          <div class="js-accordion--body" slot="body">
            <div class="a is-size-7">
              <p>マンツーマンでのレッスンなのでお客様にあったトレーニングを受けることが可能です。</p>
              <p>それに加えてエステ施設が併設していますので、外面内面の美を追求することが可能です。</p>
            </div>
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
      line-height: 21px;
      @include tablet() {
        padding: 24px;
      }
      p {
        margin-bottom: 8px;
      }
      li {
        margin-bottom: 3px;
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
