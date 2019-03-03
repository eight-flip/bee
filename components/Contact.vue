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
          <form name="contact" method="POST" netlify>
            <label class="label">お名前（ふりがな） <span class="required">必須</span></label>
            <div class="field is-grouped">
              <div class="control is-expanded">
                <input class="input" name="sei" type="text" placeholder="たなか">
              </div>
              <div class="control is-expanded">
                <input class="input" name="mei" type="text" placeholder="たろう">
              </div>
            </div>

            <label class="label">メールアドレス <span class="required">必須</span></label>
            <div class="field">
              <div class="control is-expanded">
                <input class="input" name="email" type="email" placeholder="tarou_kudan@gmail.com">
              </div>
            </div>

            <label class="label">電話番号 <span class="is-size-7">※ハイフンの入力は不要です。</span></label>
            <div class="field">
              <div class="control is-expanded">
                <input class="input" name="tel" type="tel" placeholder="tarou_kudan@gmail.com">
              </div>
            </div>

            <label class="label">希望サービス <span class="required">必須</span></label>
            <div class="field">
              <div class="control is-normal">
                <label class="checkbox">
                  <input name="hopes[]" type="checkbox">
                  体験レッスン
                </label>
              </div>
              <div class="control is-normal">
                <label class="checkbox">
                  <input name="hopes[]" type="checkbox">
                  今すぐ入会したい
                </label>
              </div>

              <hr>

              <div class="field">
                <div class="control">
                  <label class="checkbox">
                    <input name="agreement" type="checkbox">
                    <a href="#">利用規約</a>、及び<a href="#">個人情報の取扱</a>に同意する <span class="required">必須</span>
                  </label>
                </div>
              </div>

              <div class="field has-text-centered">
                <button type="button" class="button is-blue confirm" @click="confirmModal = true">入力内容を確認する</button>
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
          <form name="contact" method="POST" netlify>
            <label class="label">お名前（ふりがな） <span class="required">必須</span></label>
            <div class="field is-grouped">
              <div class="control is-expanded">
                <input class="input" type="text" placeholder="たなか">
              </div>
              <div class="control is-expanded">
                <input class="input" type="text" placeholder="たろう">
              </div>
            </div>

            <label class="label">メールアドレス <span class="required">必須</span></label>
            <div class="field">
              <div class="control is-expanded">
                <input class="input" type="email" placeholder="tarou_kudan@gmail.com">
              </div>
            </div>

            <label class="label">電話番号 <span class="is-size-7">※ハイフンの入力は不要です。</span></label>
            <div class="field">
              <div class="control is-expanded">
                <input class="input" type="email" placeholder="tarou_kudan@gmail.com">
              </div>
            </div>

            <label class="label">希望サービス <span class="required">必須</span></label>
            <div class="field">
              <div class="control is-normal">
                <label class="checkbox">
                  <input type="checkbox">
                  体験レッスン
                </label>
              </div>
              <div class="control is-normal">
                <label class="checkbox">
                  <input type="checkbox">
                  体験レッスン
                </label>
              </div>

              <hr>

              <div class="field">
                <div class="control">
                  <label class="checkbox">
                    <input type="checkbox">
                    <a href="#">利用規約</a>、及び<a href="#">個人情報の取扱</a>に同意する <span class="required">必須</span>
                  </label>
                </div>
              </div>

              <div class="field has-text-centered">
                <button type="button" class="button is-blue submit">入力内容を確認する</button>
              </div>

            </div>

          </form>

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
      };
    },
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/_variables.scss";

  .modal {
    position: fixed;
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
      min-height: 2.4em;
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
</style>
