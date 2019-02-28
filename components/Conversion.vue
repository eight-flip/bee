<template>
  <section class="section has-text-centered has-background-grey-light">
    <div class="card">
      <div class="card-header">
        <p class="card-header-title">お得なレッスン<br>受付中です！</p>
      </div>
      <div class="card-content">
        <img src="~/assets/img/balloon-with-price.png" class="ballon-normal-price" alt="通常価格">
        <img src="~/assets/img/special-price.png" alt="特別価格">

        <p>パーソナルトレーニングを</p>
        <p class="em light-blue-border"><span class="big-num">2</span>回体験できます！</p>
        <p class="mt20 light-blue-border">いつでもお気軽にご相談ください！</p>

        <div class="columns is-desktop mt15 mb0">
          <div class="column">
            <a href="#" class="button is-blue is-fullwidth">
              <span class="icon is-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35.993" viewBox="0 0 36 35.993"><g transform="translate(-298.001 -2341.681)"><path d="M29.061,24.677a7.747,7.747,0,0,1-6.834,4.707c-.362,0-6.2.317-14.574-7.649C.909,15.353.094,8.474,0,7.161-.042,5.894.32,2.68,4.71.327,5.254.01,6.34-.126,6.611.146c.136.136,3.8,6.2,3.892,6.427a1.394,1.394,0,0,1,.136.588A1.648,1.648,0,0,1,10.051,8.2,9.868,9.868,0,0,1,8.784,9.333,15.76,15.76,0,0,0,7.517,10.42a1.611,1.611,0,0,0-.588.95c.045.634.543,2.987,4.617,6.518,4.028,3.53,5.974,4.571,6.155,4.617a.984.984,0,0,0,.453.091,1.4,1.4,0,0,0,.95-.588c.407-.407,1.675-2.173,2.127-2.58a1.648,1.648,0,0,1,1.041-.588,1.394,1.394,0,0,1,.588.136c.181.091,6.291,3.666,6.382,3.757.317.362.091,1.4-.181,1.946" transform="matrix(0.966, 0.259, -0.259, 0.966, 305.606, 2341.681)" fill="#fff"/></g></svg>
              </span>
              <span>03-3262-9444</span>
            </a>
          </div>
          <div class="column">
            <a href="#" class="button is-blue is-fullwidth">
              <span class="icon is-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="26" viewBox="0 0 36 26"><g transform="translate(-713.067 -2345.684)"><path d="M35.109,26H.891A.9.9,0,0,1,0,25.1V.9A.9.9,0,0,1,.891,0H35.109A.9.9,0,0,1,36,.9V25.1A.9.9,0,0,1,35.109,26Z" transform="translate(713.068 2345.684)" fill="#fff"/><path d="M4.5,5.5l12.659,8.359L29.607,5.5" transform="translate(713.905 2345.759)" fill="none" stroke="#487aac" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/></g></svg>
              </span>
              <span class="ml5">WEBフォームはこちら</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import "~assets/scss/_variables.scss";
  .section {
    padding: 36px 10px;
  }
  .card {
    $border: 2px;
    border: solid 15px #fff;
    box-shadow: inset 0px 0px 0 $border $blue;
    padding: $border;
    color: $blue-dark;
    font-weight: bold;
  }

  .card-header {
    background-color: #f0f4f8;
  }

  .card-header-title {
    justify-content: center;
    font-size: 26px;
    color: $blue-dark;
  }

  .light-blue-border {
    border-bottom: 12px solid rgba(72, 122, 172, .1);
    line-height: .8;
  }

  .ballon-normal-price {
    margin: -37px auto 0;
  }

  .em {
    font-size: 28px;
    line-height: 0.8;
  }

  .big-num {
    font-size: 52px;
    margin-right: 8px;
  }

</style>
