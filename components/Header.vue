<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div :class="{'filter': nav}"></div>
    <div class="navbar-brand">
      <a class="navbar-item logo-link" href="/">
        <img src="~/assets/img/header-logo.png" class="logo" alt="Bee logo">
      </a>
      <a role="button" :class="{'is-active': nav}" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="toggleNav()">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div :class="{'is-active': nav}" class="navbar-menu">
      <div class="navbar-start">
        <h1 class="site-name is-hidden-touch">パーソナルトレーニング<br>スタジオ Bee</h1>
      </div>
      <div class="navbar-end">
        <a v-if="$nuxt.$route.path == '/'" href="#" v-scroll-to="'#mv'" class="navbar-item" @click="toggleNav()"><span>TOP</span></a>
        <a v-else href="/#mv" class="navbar-item" @click="toggleNav()"><span>TOP</span></a>

        <a v-if="$nuxt.$route.path == '/'" href="#" v-scroll-to="'#about'" class="navbar-item" @click="toggleNav()"><span>ABOUT</span></a>
        <a v-else href="/#about" class="navbar-item" @click="toggleNav()"><span>ABOUT</span></a>

        <a v-if="$nuxt.$route.path == '/'" href="#" v-scroll-to="'#studio'" class="navbar-item" @click="toggleNav()"><span>STUDIO</span></a>
        <a v-else href="/#studio" class="navbar-item" @click="toggleNav()"><span>STUDIO</span></a>

        <a v-if="$nuxt.$route.path == '/'" href="#" v-scroll-to="'#price'" class="navbar-item" @click="toggleNav()"><span>MENU&PRICE</span></a>
        <a v-else href="/#price" class="navbar-item" @click="toggleNav()"><span>MENU&PRICE</span></a>

        <a v-if="$nuxt.$route.path == '/'" href="#" v-scroll-to="'#access'" class="navbar-item" @click="toggleNav()"><span>ACCESS</span></a>
        <a v-else href="/#access" class="navbar-item" @click="toggleNav()"><span>ACCESS</span></a>

        <a v-if="$nuxt.$route.path == '/'" href="#" v-scroll-to="'#faq'" class="navbar-item" @click="toggleNav()"><span>Q&A</span></a>
        <a v-else href="/#faq" class="navbar-item" @click="toggleNav()"><span>Q&A</span></a>


        <a v-if href="#" class="button is-blue">
              <span class="icon is-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="26" viewBox="0 0 36 26"><g transform="translate(-713.067 -2345.684)"><path d="M35.109,26H.891A.9.9,0,0,1,0,25.1V.9A.9.9,0,0,1,.891,0H35.109A.9.9,0,0,1,36,.9V25.1A.9.9,0,0,1,35.109,26Z" transform="translate(713.068 2345.684)" fill="#fff"/><path d="M4.5,5.5l12.659,8.359L29.607,5.5" transform="translate(713.905 2345.759)" fill="none" stroke="#487aac" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/></g></svg>
              </span>
          <span class="ml5">お問い合わせはこちら</span>
        </a>

        <a v-if="$nuxt.$route.path == '/'" href="#" v-scroll-to="'#contact'" class="button is-outlined is-hidden-desktop" @click="toggleNav()">体験申し込みはこちら</a>
        <a v-else href="/#contact" class="button is-outlined is-hidden-desktop" @click="toggleNav()">体験申し込みはこちら</a>

        <img src="~/assets/img/grey-logo-in-nav.png" class="grey-logo is-hidden-desktop" alt="logo">
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        nav: false,
      };
    },
    methods: {
      toggleNav: function() {
        if (window.innerWidth > 1087) return;
        this.nav = this.nav ? false : true;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/_variables.scss";
  .filter {
    position: absolute;
    top: 62px;
    @include mobile() {
      top: 54px;
    }
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .navbar {
    z-index: 1;
    height: 54px;
    padding-left: 5px;
    padding-right: 5px;
    @include tablet() {
      height: 62px;
      padding-left: 50px;
      padding-right: 50px;
    }
    logo-link {
      padding: 0.5rem 0.9rem;
    }

    .logo {
      height: 32px;
      @include tablet() {
        height: 36px;
      }
    }

    .navbar-burger.is-active span:nth-child(1) {
      transform: translateY(9px) rotate(45deg);
    }
    .navbar-burger span {
      width: 20px;
      left: calc(50% - 16px);
      color: #393939;

      &:nth-child(1) {
        top: calc(50% - 8px);
      }

      &:nth-child(2) {
        top: calc(50% - 1px);
      }

      &:nth-child(3) {
        top: calc(50% + 6px);
      }
    }
    .navbar-start {
      .site-name {
        font-size: 12px;
        line-height: 1.25;
        color: #333;
        margin-top: 18px;
        margin-left: 3px;
      }
    }
    .navbar-end {
      .navbar-item {
        padding-left: 22px;
        padding-right: 22px;
      }

      a.navbar-item {
        background-color: inherit;
        color: inherit;
        font-size: 24px;
        @include tablet() {
          font-size: 18px;
        }
        font-weight: normal;
        &:hover {
          opacity: 0.9;
        }
      }
      a.navbar-item:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: #D81906;
        transform-origin: right top;
        transform: scaleX(0);
        transition: transform .3s cubic-bezier(.25,.46,.45,.94) 0ms, opacity .3s cubic-bezier(.25,.46,.45,.94) 0ms;
      }
      a.navbar-item:hover:after {
        transform-origin: left top;
        transform: scale(1);
      }
    }

    .navbar-menu.is-active {
      z-index: 2;
      height: 100vh;
      position: absolute;
      right: 0;
      width: 280px;

      .button {
        margin-top: 30px;
        margin-left: 20px;
      }

      .grey-logo {
        position: absolute;
        bottom: 70px;
        left: 0;
        right: 0;
        width: 95%;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }

 .button.is-blue {
   height: 45px;
   margin: 1% 0 0 0 ;
 }

</style>
