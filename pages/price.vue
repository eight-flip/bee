<template>
  <div>
    <Hero></Hero>
    <Title></Title>
    <Menu></Menu>
    <Conversion></Conversion>
    <Footer></Footer>
    <Copyright></Copyright>
  </div>
</template>

<script>
import Hero from '~/components/price/Hero.vue'
import Title from '~/components/price/Title.vue'
import Menu from '~/components/price/Menu.vue'
import Conversion from '~/components/Conversion.vue'
import Footer from '~/components/Footer.vue'
import Copyright from '~/components/Copyright.vue'

export default {
  components: {
    Hero,
    Title,
    Menu,
    Conversion,
    Footer,
    Copyright,
  }
}
</script>