<template>
  <section id="access" class="section has-text-centered">
    <div class="container">
      <h2 class="section-title is-3 is-spaced" data-aos="fade-up">アクセス</h2>
      <p class="section-subtitle is-4" data-aos="fade-up">ACCESS</p>

      <h3 class="title is-3 mt30" data-aos="fade-up">九段下駅 徒歩3分、飯田橋駅 徒歩5分。アクセス抜群、便利な立地です。</h3>

      <p class="is-size-7" data-aos="fade-up">住所：東京都千代田区飯田橋1-3-7 JC九段下ビル 2F</p>
    </div>

    <div id="map" class="map" data-aos="fade-up">
      <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.142516491187!2d139.7476510152592!3d35.69811038019032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c41d4b2f18f%3A0x4a3fde493a91e5ef!2z44CSMTAyLTAwNzIg5p2x5Lqs6YO95Y2D5Luj55Sw5Yy66aOv55Sw5qmL77yR5LiB55uu77yT4oiS77yX!5e0!3m2!1sja!2sjp!4v1551346358514"
              width="600" height="450" frameborder="0" style="border:0" allowfullscreen>
      </iframe>
    </div>

  </section>
</template>

<style lang="scss" scoped>
  @import "~assets/scss/_variables.scss";
  .map {
    margin-top: 30px;
    width: calc(100% + 30px);
    height: 330px;
    margin-left: -15px;
    margin-right: -15px;

    iframe {
      width: 100%;
      height: 100%;
    }
  }
  .title:not(:last-child) {
    @include tablet() {
      margin-bottom: 15px;
    }
  }
</style>
