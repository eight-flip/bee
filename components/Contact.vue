<template>
  <div>
    <section class="section has-text-centered">
      <div class="container">
        <h2 class="section-title is-3 is-spaced">お問い合わせ</h2>
        <p class="section-subtitle is-4">CONTACT</p>

        <p class="is-size-7">各種お問い合わせはこちらからどうぞ。お気軽にご相談ください！</p>


        <div class="box contact-box">
          <div class="box-header">

            <div class="columns steps is-mobile">
              <div class="column">
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

        <div class="box forms has-background-grey-light">
          <img src="~/assets/img/bee-grey-in-form.png" class="bg-img" alt="background">
          <form action="/?thanks" name="contact" method="POST" ref="form" netlify>
            <label class="label">お名前（ふりがな） <span class="required">必須</span></label>
            <div class="field is-grouped">
              <div class="control is-expanded">
                <input class="input" type="text" placeholder="たなか" v-model="sei">
              </div>
              <div class="control is-expanded">
                <input class="input" type="text" placeholder="たろう" v-model="mei">
              </div>
              <input type="hidden" name="お名前（ふりがな）" :value="fullName">
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

            <label class="label">希望サービス <span class="required">必須</span></label>
            <div class="field">
              <div class="control is-normal">
                <label class="checkbox">
                  <input name="希望サービス[]" type="checkbox" value="体験レッスン" v-model="hopes">
                  体験レッスン
                </label>
              </div>
              <div class="control is-normal">
                <label class="checkbox">
                  <input name="希望サービス[]" type="checkbox" value="今すぐ入会したい" v-model="hopes">
                  今すぐ入会したい
                </label>
              </div>

              <hr>

              <div class="field">
                <div class="control">
                  <label class="checkbox">
                    <input name="agreement" type="checkbox" v-model="agreement">
                    <a href="#">利用規約</a>、及び<a href="#">個人情報の取扱</a>に同意する <span class="required">必須</span>
                  </label>
                </div>
              </div>

              <div class="field has-text-centered">
                <button type="button" class="button is-blue confirm" @click="openConfirmModal();">入力内容を確認する</button>
              </div>

            </div>

          </form>

        </div>

      </div>
    </section>


    <div class="modal" :class="{'is-active': confirmModal}">
      <div class="modal-background" @click="confirmModal = false"></div>

      <div class="modal-content">
        <div class="box contact-box">
          <div class="box-header">

            <div class="columns steps is-mobile">
              <div class="column">
                <div class="box step-1">
                  <span class="step-title">STEP1</span><br>
                  <span class="step">お問い合わせ内容の入力</span>
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
          <img src="~/assets/img/bee-grey-in-form.png" class="bg-img" alt="background">
          <label class="label">お名前（ふりがな） <span class="required">必須</span></label>
          <p class="form-value">{{ fullName }}</p>

          <label class="label">メールアドレス <span class="required">必須</span></label>
          <p class="form-value">{{ email }}</p>

          <label class="label">電話番号 <span class="is-size-7">※ハイフンの入力は不要です。</span></label>
          <p class="form-value">{{ tel }}</p>

          <label class="label">希望サービス <span class="required">必須</span></label>
          <div class="field">
            <div class="control is-normal">
              <label class="checkbox">
                <input type="checkbox" :checked="hopes[0]" disabled>
                体験レッスン
              </label>
            </div>
            <div class="control is-normal">
              <label class="checkbox">
                <input type="checkbox" :checked="hopes[1]" disabled>
                今すぐ入会したい
              </label>
            </div>
          </div>

          <hr>

          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox" :checked="agreement" disabled>
                <a href="#">利用規約</a>、及び<a href="#">個人情報の取扱</a>に同意する <span class="required">必須</span>
              </label>
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

            <div class="columns steps is-mobile">
              <div class="column">
                <div class="box step-1">
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
                <div class="box step-3 active">
                  <span class="step-title">STEP3</span><br>
                  <span class="step">送信完了</span>
                </div>
              </div>

            </div>

          </div>
        </div>
        <div class="box forms has-background-grey-light">
          <img src="~/assets/img/bee-grey-in-form.png" class="bg-img" alt="background">

          <p class="thanks-msg">お問い合わせの内容を送信完了しました！<br>担当者からのご連絡をお待ちください。</p>
          <img src="~/assets/img/complete-check.png" class="complete-check" alt="完了">

          <div class="field is-grouped is-grouped-centered is-grouped-multiline submit-area">
            <button type="button" class="button is-blue" @click="thanksModal = false">閉じる</button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        confirmModal: false,
        sei: '',
        mei: '',
        email: '',
        tel: '',
        hopes: [],
        agreement: false,
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
          || this.hopes.length === 0
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
  }

  @include mobile() {
    .section {
      padding-left: 0;
      padding-right: 0;
    }
    .steps .column {
      padding: 0;
    }

    .steps > .column + .column {
      margin-left: 20px;
      position: relative;

      &:before {
        content: '';
        background: url('~assets/img/arrow-right.png') no-repeat;
        background-size: contain;
        width: 18px;
        height: 18px;
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
    }
  }

  .contact-box {
    margin-left: 0;
    margin-right: 0;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 0;

    .box-header .columns {
      margin: 0;
    }
  }

  .steps .active {
    background-color: rgba(248, 100, 43, 0.08);
    color: #f8642b;
  }

  .forms {
    text-align: left;

    .input {
      border-radius: 0;
      border: none;
      font-size: 16px;
      height: 40px;

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
  }

  .thanks-msg {
    font-size: 22px;
    font-family: Hiragino Sans;
    @include mobile() {
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
    @include mobile() {
      width: 50%;
      margin-top: 30px;
      margin-bottom: 20px;
    }
  }
</style>
