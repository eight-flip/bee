<template>
  <section class="section has-text-centered has-background-gray-light">
    <div class="container">
      <h2 class="section-title is-3 is-spaced">お問い合わせ</h2>
      <p class="section-subtitle is-4">CONTACT</p>

      <p class="is-size-7">各種お問い合わせはこちらからどうぞ。お気軽にご相談ください！</p>


      <div class="box contact-box">
        <div class="box-header">

          <div class="columns steps is-mobile">
            <div class="column ">
              <div class="box step-1 active">
                <span class="step-title">STEP1</span><br>
                <span class="step">お問い合わせ内容の入力</span>
              </div>
            </div>

            <div class="column">
              <div class="box step-2">
                <span class="step-title">STEP2</span><br>
                <span class="step">入力内容の確認</span>
              </div>
            </div>

            <div class="column">
              <div class="box step-3">
                <span class="step-title">STEP3</span><br>
                <span class="step">送信完了</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div class="box forms">

      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import "~assets/scss/_variables.scss";
  
  .box {
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
  }
  
  @include mobile() {
    .section {
      padding-left: 0;
      padding-right: 0;
    }
    .steps .column {
      padding: 0;
    }

    .steps> .column+.column {
      margin-left: 20px;
      position: relative;

      &:before {
        content: url('~assets/img/arrow-right.png');
        position: absolute;
        left: -15px;
        top: 38%;
      }
    }
    .steps .box {
      padding: 11px;
    }

    .step {
      margin-top: 6px;
      display: block;
      font-size: 13px;
      font-weight: bold;
      line-height: 16px;
      min-height: 2.4em;
    }
  }

  .contact-box {
    margin-left: 0;
    margin-right: 0;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 0;
  }

  .steps .active {
    background-color: rgba(248, 100, 43, 0.08);
    color: #f8642b;
  }
</style>
