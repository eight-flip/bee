<template>
  <nav class="navbar">
    <div class="container">
      <p clas="news-text">当サービスがメディアに掲載されました！</p>
      <a class="text" href="https://gym.job-asta.com/2019/07/30/bee-interview/">
        詳しくはこちら
      </a>
    </div>
  </nav>
</template>


<style lang="scss" scoped>
  @import "~assets/scss/_variables.scss";
  .navbar {
    z-index: 1;
    height: 10px;
    padding: 18px 0;
    text-align: center;
    background-color: #E9470A;
    position: fixed;
    width: 100%;

    @include mobile() {
      height: 8px;
      padding: 20px 0;
      font-size: 12px;

    }
  }

  .container {
    display: inline-block;
    color: #fff;

    .text {
      color: #fff;
      border-bottom: 1px solid #fff
    }

    p{
      display: inline;
      line-height: 40px;
    }
  }

  @media (max-width: 768px) {
    .container {
      p{
        line-height: 25px;
      }
    }
  }



</style>
