<template>
  <section class="section has-text-centered">
    <div class="container">
      <div class="columns">
        <div class="column">
          <ul class="links">
            <li>
              <a v-if="$nuxt.$route.path == '/'" href="#" v-scroll-to="'#about'">ABOUTー<span class="is-size-7">Beeとは？</span></a>
              <a v-else href="/#about">ABOUTー<span class="is-size-7">Beeとは？</span></a>
            </li>
            <li>
              <a v-if="$nuxt.$route.path == '/'" href="#" v-scroll-to="'#studio'">STUDIOー<span class="is-size-7">施設紹介</span></a>
              <a v-else href="/#studio">STUDIOー<span class="is-size-7">施設紹介</span></a>
            </li>
            <li>
              <a v-if="$nuxt.$route.path == '/'" href="#" v-scroll-to="'#price'">MENU&PRICEー<span class="is-size-7">メニュー料金</span></a>
              <a v-else href="/#price">MENU&PRICEー<span class="is-size-7">メニュー・料金</span></a>
            </li>
          </ul>
        </div>
        <div class="column">
          <ul class="links">
            <li>
              <a v-if="$nuxt.$route.path == '/'" href="#" v-scroll-to="'#access'">ACCESSー<span class="is-size-7">アクセス</span></a>
              <a v-else href="/#access">ACCESSー<span class="is-size-7">アクセス</span></a>
            </li>
            <li>
              <a v-if="$nuxt.$route.path == '/'" href="#" v-scroll-to="'#contact'">CONTACTー<span class="is-size-7">無料カウンセリング</span></a>
              <a v-else href="/#contact">CONTACTー<span class="is-size-7">無料カウンセリング</span></a>
            </li>
            <li>
              <a v-if="$nuxt.$route.path == '/'" href="#" v-scroll-to="'#faq'">Q&Aー<span class="is-size-7">よくあるご質問</span></a>
              <a v-else href="/#faq">Q&Aー<span class="is-size-7">よくあるご質問</span></a>
            </li>
          </ul>
        </div>
       <!--    白の縦線    -->
          <div class="white-border">
            <p></p>
          </div>
　　　　<!--    ここまで！！    -->

        <div class="column has-text-left is-flex-end pc_sns">
          <div class="instagram-heading">
            <a><img src="~/assets/img/arrow1.png" class="arrow-img"><span>Instagram</span></a>
          </div>
          <a href="https://www.instagram.com/bee_personal_official/" target="_blank">
            <img src="~/assets/img/ig.png" class="sns" alt="instagram">
            <span style="display:inline-block;" class="is-size-7">Bee（ジム）<br>はこちら</span>
          </a>
          <br>
          <a href="https://www.instagram.com/sweethoney_official/" target="_blank">
            <img src="~/assets/img/ig.png" class="sns" alt="instagram">
            <span style="display:inline-block;" class="is-size-7">SweetHoney<br>（エステ）はこちら</span>
          </a>
        </div>

        <div class="column has-text-left pc_sns">
          <div class="line-heading">
            <a><img src="~/assets/img/arrow1.png" class="arrow-img"><span>LINE@</span></a>
          </div>
          <p class="is-size-7">Bee お得なジム情報</p>
          <a href="http://nav.cx/apINJvU" target="_blank" class="line" style="margin-bottom: 0;">
            <img src="~/assets/img/line@.png">
          </a>
          <p class="is-size-7">SweetHoney 最新エステ情報</p>
          <a href="https://lin.ee/A9kj7ew" target="_blank" class="line" style="margin-bottom: 0;">
            <img src="~/assets/img/line@.png">
          </a>
          <br>
        </div>

    <div class="clearfix">
      <div class="sp_sns">
        <div class="column has-text-left is-flex-end">
          <div class="instagram-heading">
            <a><img src="~/assets/img/arrow1.png" class="arrow-img"><span>Instagram</span></a>
          </div>
          <a href="https://www.instagram.com/bee_personal_official/" target="_blank">
            <img src="~/assets/img/ig.png" class="sns" alt="instagram">
            <span style="display:inline-block;" class="is-size-7">Bee（ジム）<br>はこちら</span>
          </a>
          <br>
          <a href="https://www.instagram.com/sweethoney_official/" target="_blank">
            <img src="~/assets/img/ig.png" class="sns" alt="instagram">
            <span style="display:inline-block;" class="is-size-7">SweetHoney<br>（エステ）はこちら</span>
          </a>
        </div>
<!--        コード追加-->
        <div class="column has-text-left">
          <div class="line-heading">
            <a><img src="~/assets/img/arrow1.png" class="arrow-img"><span>LINE@</span></a>
          </div>
          <p class="is-size-7">Bee お得なジム情報</p>
          <a href="http://nav.cx/apINJvU" target="_blank" class="line" style="margin-bottom: 0;">
            <img src="~/assets/img/line@.png">
          </a>
          <p class="is-size-7">SweetHoney 最新エステ情報</p>
          <a href="https://lin.ee/A9kj7ew" target="_blank" class="line" style="margin-bottom: 0;">
            <img src="~/assets/img/line@.png">
          </a>
          <br>
        </div>
      </div>
<!--        ここまで-->
        <div class="colum sp_youtube">
          <div class="line-heading">
            <a href="https://www.youtube.com/channel/UC8sl4kqx7pTeypVKXt_ZEyA" target="_blank"><img src="~/assets/img/youtube_icon.png" class="youtube-img"><span class="is-size-7 youtube-text">チャンネル登録はこちら</span></a>
          </div>
        </div>
      </div>

        <div class="column">
          <div class="line-heading pc_youtube">
            <a href="https://www.youtube.com/channel/UC8sl4kqx7pTeypVKXt_ZEyA" target="_blank"><img src="~/assets/img/youtube_icon.png" class="youtube-img"><span class="is-size-7 youtube-text">チャンネル登録はこちら</span></a>
          </div>
          <img src="~/assets/img/logo-footer.png" class="logo-footer" alt="footer logo">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import "~assets/scss/_variables.scss";
  .section {
    background-color: #000;
    color: #fff;
    padding-left: 28px;
    padding-right: 28px;
  }
  a {
    color: #fff;
  }
  .links {
    text-align: left;
    li {
      line-height: 1;
    }
    li+li {
      margin-top: 15px;
    }
  }
  .columns {
    align-items: center;
  }
  @include mobile() {
    .column:first-child {
      padding-bottom: 0;
    }
    .column:nth-child(2) {
      padding-top: 15px;
    }

    .column:nth-child(4) {
      text-align: left;
    }
  }
  .sns {
    /*width: 40px;*/
    /*height: 40px;*/
    width: 35px;
    height: 35px;
  }

  .instagram-heading {
    margin-bottom: 2%;
  }

   .line-heading{

   }

  /*白の縦線ボーダー*/
  .white-border p {
    content: '';
    width: 1px;
    height: 110px;
    background-color: #fff;
    margin: 0 20px;
  }
  /*ここまで*/

  .sns + .sns {
    margin-left: 24px;
  }
  .is-flex-end {
    align-self: flex-end;
  }

  .line {
    display: inline-block;
    margin-bottom: 20px;
  }

  .column has-text-left p {
    margin-bottom: 10px;
  }

  .clearfix{
    display: none;
  }

  .sp_sns{
    display: none;
  }

  .youtube-img{
    height: 24px;
  }

  .youtube-text{
    display: block;
    text-decoration: underline;
  }

  .sp_youtube{
    display: none;
  }

  @include mobile() {
    .logo-footer {
      width: 240px;
      text-align: left;
    }
  }

  @media (max-width: 768px) {
    .white-border p {
      display: none;
    }

    .white-border {
      border-bottom: solid 1px #fff;
    }

    .clearfix{
      display: block;
      padding-top: 20px;
    }

    .clearfix::after {
      content: "";
      display: block;
      clear: both;
    }

    .pc_sns{
      display: none;
    }

    .sp_sns{
      display: block;
      width: 60%;
      float: left;
    }

    .sp_youtube{
      display: block;
      width: 40%;
      float: left;
      margin-top: 20px;
    }

    .pc_youtube{
      display: none;
    }
  }

</style>
