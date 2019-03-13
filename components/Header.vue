<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div :class="{'filter': nav}"></div>
    <div class="navbar-brand">
      <a class="navbar-item logo-link" href="/">
        <img src="~/assets/img/header-logo.png" class="logo" alt="Bee logo">
      </a>
      <a role="button" :class="{'is-active': nav}" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="nav = nav ? false : true">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div :class="{'is-active': nav}" class="navbar-menu">
      <div class="navbar-end">
        <a href="#top" class="navbar-item"><span>TOP</span></a>
        <a href="#about" class="navbar-item"><span>ABOUT</span></a>
        <a href="#studio" class="navbar-item"><span>STUDIO</span></a>
        <a href="#price" class="navbar-item"><span>MENU&PRICE</span></a>
        <a href="#access" class="navbar-item"><span>ACCESS</span></a>
        <a href="#faq" class="navbar-item"><span>Q&A</span></a>

        <a href="#" class="button is-outlined is-hidden-desktop">体験申し込みはこちら</a>

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
    position: relative;
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
    .navbar-end {
      .navbar-item {
        padding-left: 22px;
        padding-right: 22px;
      }

      a.navbar-item {
        background-color: inherit;
        color: inherit;
        font-size: 24px;
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

</style>
