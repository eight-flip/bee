<template>
  <section class="hero is-medium">
    <img src="~/assets/img/hero-1.png" class="mv-img" alt="">


    <div class="card">
      <div class="card-content">
        <p class="title">
          お客様ひとりひとり特別なメニューで、知識豊富なトレーナーがエクササイズをご提案します。
        </p>
        <p class="subtitle">
          <a href="#contact" class="button is-outlined is-white">体験お申込みはこちら</a>
        </p>
        <img src="~/assets/img/bee-gray.png" alt="bee" class="bee-gray">
      </div>
    </div>

  </section>
</template>

<style lang="scss" scoped>
  .hero {
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
        .bee-gray {
          width: 100%;
        }
      }
    }

  }
</style>
