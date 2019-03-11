<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item logo-link" href="/">
        <img src="~/assets/img/header-logo.png" class="logo" alt="Bee logo">
      </a>
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <a href="#top" class="navbar-item">TOP</a>
        <a href="#about" class="navbar-item">ABOUT</a>
        <a href="#studio" class="navbar-item">STUDIO</a>
        <a href="#price" class="navbar-item">MENU&PRICE</a>
        <a href="#access" class="navbar-item">ACCESS</a>
        <a href="#faq" class="navbar-item">Q&A</a>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  @import "~assets/scss/_variables.scss";
  .navbar {
    height: 54px;
    padding-left: 50px;
    padding-right: 50px;
    @include tablet() {
      height: 62px;
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
    .navbar-item {
      padding-left: 22px;
      padding-right: 22px;
    }
  }

</style>
