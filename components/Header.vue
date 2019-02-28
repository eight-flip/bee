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
  </nav>
</template>

<style lang="sass" scoped>
  .navbar
    logo-link
      padding: 0.5rem 0.9rem
    .logo
      height: 38px
    .navbar-burger span
      width: 20px
      left: calc(50% - 16px)
      color: #393939;
      &:nth-child(1)
        top: calc(50% - 8px)
      &:nth-child(2)
        top: calc(50% - 1px)
      &:nth-child(3)
        top: calc(50% + 6px)
</style>
