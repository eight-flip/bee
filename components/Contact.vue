<template>
  <div>
    <section id="contact" class="section has-text-centered">
      <div class="container">
        <h2 class="section-title is-3 is-spaced" data-aos="fade-up">無料カウンセリングのお申し込み</h2>
        <p class="section-subtitle is-4" data-aos="fade-up">CONTACT</p>

        <label class="label">ジム、エステ、ホワイトニングのお問い合わせはこちらからどうぞ！</label>
        <p class="is-size-7 mb25" data-aos="fade-up">
          お問い合わせ後に担当者からご連絡させていただきます

          <br>

        </p>

        <div class="box contact-box" data-aos="fade-up">
          <div class="box-header">

            <div class="columns steps is-mobile inbox-container">
              <div class="column">
                <div class="box step-1 active">
                  <span class="step-title">STEP1</span><br>
                  <span class="step">お申込み情報の入力</span>
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


        <div class="box forms has-background-grey-light" data-aos="fade-up">
          <img src="~/assets/img/bee-grey-in-form.png" class="bg-img" alt="background">
          <no-ssr>
            <form action="/?thanks" name="counseling" method="POST" class="form inbox-container" ref="form">
              <input type="hidden" name="form-name" value="counseling">
              <label class="label">お名前（ふりがな） <span class="required">必須</span></label>
              <input type="hidden" name="お名前（ふりがな）" :value="fullName">
              <div class="field is-grouped">
                <div class="control is-expanded">
                  <input class="input" type="text" placeholder="たなか" v-model="sei">
                </div>
                <div class="control is-expanded">
                  <input class="input" type="text" placeholder="たろう" v-model="mei">
                </div>
              </div>

              <label class="label">メールアドレス <span class="required">必須</span></label>
              <div class="field">
                <div class="control is-expanded">
                  <input class="input" name="メールアドレス" type="email" placeholder="tarou_kudan@gmail.com" v-model="email">
                </div>
              </div>

              <label class="label">電話番号 <span class="is-size-7">※ハイフンの入力は不要です。</span></label>
              <div class="field">
                <div class="control is-expanded">
                  <input class="input" name="電話番号" type="tel" placeholder="08012345678" v-model="tel">
                </div>
              </div>

              <label class="label">希望サービス　<span class="required">必須</span></label>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <label class="checkbox is-fullwidth">
                      <input type="checkbox">
                      ジム体験レッスン申し込み　　
                    </label>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <label class="checkbox is-fullwidth">
                      <input type="checkbox">
                      ホワイトニング申し込み
                    </label>
                  </div>
                </div>
              </div>

              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <label class="checkbox is-fullwidth">
                      <input type="checkbox">
                      エステ無料カウンセリング
                    </label>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <label class="checkbox is-fullwidth">
                      <input type="checkbox">
                      その他お問い合わせ
                    </label>
                  </div>
                </div>
              </div>


<!--              <label class="label">希望サービス　<span class="required">必須</span></label>-->
<!--              <div class="control">-->
<!--                <label class="checkbox">-->
<!--                  <input class="input apply" name="service" type="checkbox" v-model="service">-->
<!--                </label>-->
<!--                <label>ジム体験レッスン申し込み</label>-->

<!--                <label class="checkbox">-->
<!--                  <input class="input apply" name="service" type="checkbox" v-model="service">-->
<!--                </label>-->
<!--                <label>ホワイトニング申し込み </label>-->
<!--                <br>-->

<!--                <label class="checkbox">-->
<!--                  <input class="input apply" name="service" type="checkbox" v-model="service">-->
<!--                </label>-->
<!--                <label>エステ無料カウンセリング</label>-->

<!--                <label class="checkbox">-->
<!--                  <input class="input apply" name="service" type="checkbox" v-model="service">-->
<!--                </label>-->
<!--                <label>その他お問い合わせ</label>-->
<!--              </div>-->
              <hr>

              <div class="field">
                <div class="control">
                  <label class="checkbox">
                    <input type="checkbox" v-model="agreement">
                    個人情報の取扱に同意する <span class="required">必須</span>
                  </label>
                  <textarea class="privacy-policy " readonly>{{ privacyPolicy }}</textarea>
                </div>
              </div>

              <div class="field has-text-centered">
                <button type="button" class="button is-blue confirm" @click="openConfirmModal();">入力内容を確認する</button>
              </div>
            </form>
          </no-ssr>
        </div>
      </div>
    </section>


    <div class="modal" :class="{'is-active': confirmModal}">
      <div class="modal-background" @click="confirmModal = false"></div>

      <div class="modal-content">
        <div class="box contact-box">
          <div class="box-header">

            <div class="columns steps is-mobile inbox-container">
              <div class="column">
                <div class="box step-1">
                  <span class="step-title">STEP1</span><br>
                  <span class="step">お申込み情報の入力</span>
                </div>
              </div>

              <div class="column">
                <div class="box step-2 active">
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
        <div class="box forms has-background-grey-light">
          <div class="form inbox-container">
            <img src="~/assets/img/bee-grey-in-form.png" class="bg-img" alt="background">
            <label class="label">お名前（ふりがな） <span class="required">必須</span></label>
            <p class="form-value">{{ fullName }}</p>

            <label class="label">メールアドレス <span class="required">必須</span></label>
            <p class="form-value">{{ email }}</p>

            <label class="label">電話番号 <span class="is-size-7">※ハイフンの入力は不要です。</span></label>
            <p class="form-value">{{ tel }}</p>

            <label class="label">希望サービス<span class="required">必須</span></label>
            <label class="checkbox">
              <input type="checkbox" :checked="service">
                ジム体験レッスン申し込み
              <input type="checkbox" :checked="service">
                ホワイトニング申し込み<br>
              <input type="checkbox" :checked="service">
                エステ無料カウンセリング
              <input type="checkbox" :checked="service">
                その他お問い合わせ
            </label>

            <label class="checkbox">
              <input type="checkbox" :checked="agreement" disabled>
              個人情報の取扱に同意する <span class="required">必須</span>
            </label>

            <hr>

            <div class="field">
              <div class="control">
                <label class="checkbox">
                  <input type="checkbox" :checked="agreement" disabled>
                  個人情報の取扱に同意する <span class="required">必須</span>
                </label>
              </div>
            </div>

          </div>

          <div class="field is-grouped is-grouped-centered is-grouped-multiline submit-area">
            <button type="button" class="button is-blue" @click="confirmModal = false">入力画面に戻る</button>
            <button type="button" class="button is-blue" @click="submitForm()">この内容で送信する</button>
          </div>

        </div>
      </div>
    </div>

    <div class="modal" :class="{'is-active': thanksModal}">
      <div class="modal-background" @click="confirmModal = false"></div>

      <div class="modal-content">
        <div class="box contact-box">
          <div class="box-header">

            <div class="columns steps is-mobile inbox-container">
              <div class="column">
                <div class="box step-1">
                  <span class="step-title">STEP1</span><br>
                  <span class="step">お申込み情報の入力</span>
                </div>
              </div>

              <div class="column">
                <div class="box step-2">
                  <span class="step-title">STEP2</span><br>
                  <span class="step">入力内容の確認</span>
                </div>
              </div>

              <div class="column">
                <div class="box step-3 active">
                  <span class="step-title">STEP3</span><br>
                  <span class="step">送信完了</span>
                </div>
              </div>

            </div>

          </div>
        </div>
        <div class="box forms has-background-grey-light">
          <div class="form inbox-consltainer">
            <img src="~/assets/img/bee-grey-in-form.png" class="bg-img" alt="background">

            <p class="thanks-msg">お申込み情報を送信完了しました！<br>担当者からのご連絡をお待ちください。</p>
            <img src="~/assets/img/complete-check.png" class="complete-check" alt="完了">

            <div class="field is-grouped is-grouped-centered is-grouped-multiline submit-area">
              <button type="button" class="button is-blue" @click="thanksModal = false">閉じる</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import privacyPolicy from '~/assets/data/privacy-policy.json';
  export default {
    data() {
      return {
        confirmModal: false,
        sei: '',
        mei: '',
        email: '',
        tel: '',
        service: false,
        hopes: [],
        agreement: false,
        privacyPolicy: privacyPolicy.text,
        // sei: 'たなか',
        // mei: 'たろう',
        // email: 'tanaka_kudan@example.com',
        // tel: '09012341234',
        //
        // hopes: ['体験レッスン'],
        // agreement: true,
        thanksModal: 'thanks' in this.$route.query ? true : false,
      };
    },
    computed: {
      fullName: function () {
        return this.sei + ' ' + this.mei
      },
    },
    methods: {
      openConfirmModal: function() {
        if (this.sei === ''
          || this.mei === ''
          || this.email === ''
          || this.service === false
          || this.agreement === false) {
          alert('入力されていない項目があります。');
          return false;
        }
        this.confirmModal = true
      },
      submitForm: function() {
        this.$refs.form.submit();
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/_variables.scss";
  .section {
    padding-bottom: 90px;
    @include mobile() {
      padding-bottom: 0;
    }
  }
  .section-subtitle + p {
      margin-left: 15px;
      margin-right: 15px;
  }
  .button.is-blue {
    height: 52px;
    width: 270px;
  }
  .modal {
    position: fixed;
    .modal-content {
      max-height: calc(100vh - 40px);
    }
  }

  .form-value {
    margin-left: 1em;
    margin-bottom: 30px;
  }

  .forms {
    position: relative;

    .bg-img {
      position: absolute;
      bottom: 0;
      right: 0;
      max-width: 590px;
      width: 80%;
    }
  }

  .field.is-grouped.is-grouped-multiline.submit-area {
    margin-top: 60px;
    margin-bottom: 36px;

    @include mobile() {
      .button {
        width: 100%;
      }
      .button:nth-child(1) {
        order: 2;
        margin-top: 20px;
      }
      .button:nth-child(2) {
        order: 1;
      }
    }
  }

  .box {
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
    border: solid 1px #f2f3f5;
  }

  .steps .column {
    text-align: center;
  }

  label span {
    font-weight: normal;
  }

  .required {
    background-color: #ff0000;
    color: #ffffff;
    font-family: 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3';
    font-weight: lighter;
    padding: 3px;
    font-size: 12px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
  }

  .steps .column {
    display: flex;
    .box {
      width: 100%;
    }
    .box.active {
      border: none;
    }
  }

  @include mobile() {
    .section {
      padding-left: 0;
      padding-right: 0;
    }
  }

  .step {
    margin-top: 6px;
    display: block;
    font-size: 12px;
    font-weight: bold;
    line-height: 16px;
    @include tablet() {
      font-size: 14px;
    }
  }

  .steps .column {
    padding: 0;
  }

  .steps .box {
    padding: 11px;
    @include tablet() {
      padding: 13px;
    }
  }

  .steps > .column + .column {
    margin-left: 20px;
    position: relative;
    @include tablet() {
      margin-left: 35px;
    }

    &:before {
      content: '';
      background: url('~assets/img/arrow-right.png') no-repeat;
      background-size: contain;
      width: 18px;
      height: 18px;
      position: absolute;
      left: -15px;
      top: 38%;
      @include tablet() {
        left: -22px;
      }
    }
  }

  .box.contact-box, .box.forms, .modal-content {
    @include desktop() {
      width: 980px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .inbox-container {
    @include desktop() {
      width: 610px;
      margin-left: auto !important;
      margin-right: auto !important;
    }
  }

  .form.inbox-container {
    @include desktop() {
      padding-left: 50px;
      padding-right: 50px;
    }
  }

  .contact-box {
    margin-left: 0;
    margin-right: 0;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 0;
    @include until($for-iPhone5) {
      padding-left: 5px;
      padding-right: 5px;
    }

    .box-header .columns {
      margin: 0;
    }
  }

  .steps .box {
    border: solid 1px #e6e6e6;
    box-shadow: none;
    border: solid 1px #e6e6e6;
    background-color: #f7f7f7;
    @include until($for-iPhone5) {
      padding-left: 5px;
      padding-right: 5px;
    }
    &.active {
      background-color: rgba(248, 100, 43, 0.08);
      color: #f8642b;
    }
  }

  .forms {
    text-align: left;

    .input {
      border-radius: 0;
      border: none;
      font-size: 16px;
      /*height: 40px;*/

      &::placeholder {
        color: #bcbcbc;
      }
    }

    hr {
      background-color: #e3e3e3;
    }
  }

  .checkbox {
    font-weight: bold;
  }

  input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    position: relative;
    width: 22px;
    height: 22px;
    margin-top: -3px;
    vertical-align: middle;
    background: url('~assets/img/checkbox.png') left top;
    margin-right: 10px;
  }

  input[type="checkbox"]:checked::before {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    width: 22px;
    height: 22px;
    background: url('~assets/img/check-mark.png');
    background-position: left;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .confirm {
    width: 90%;
    max-width: 300px;
    font-weight: bold;
    margin-top: 32px;
    margin-bottom: 80px;
    @include tablet() {
      margin-bottom: 28px;
    }
  }

  .thanks-msg {
    font-size: 22px;
    font-family: Hiragino Sans;
    margin-top: 70px;
    margin-bottom: 30px;
    text-align: center;
    @include mobile() {
      margin-top: 30px;
      margin-bottom: 10px;
      font-size: 18px;
      br {
        display: none;
      }
    }
  }

  .complete-check {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 190px;
    @include mobile() {
      width: 50%;
      margin-top: 30px;
      margin-bottom: 20px;
    }
  }

  .privacy-policy {
    overflow: scroll;
    display: block;
    margin-top: 3px;
    font-size: 12px;
    line-height: 1.2;
    height: 5em;
    box-shadow: none;
    width: 280px;
    min-width: initial;
  }


  /*レスポンシブル！！！*/

  @media (max-width: 768px) {

    input[type="checkbox"]:checked::before {
      content: "";
      position: absolute;
      left: 0px;
      top: 0px;
      width: 22px;
      height: 22px;
      background: url('~assets/img/check-mark.png');
      background-position: left;
      background-size: contain;
      background-repeat: no-repeat;
      display: block;
    }
  }

/*  ここまで！　*/
</style>
