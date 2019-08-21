<template>
  <div>
    <Hero></Hero>
    <Title></Title>
    <Menu></Menu>
    <Conversion></Conversion>
    <MenuEste></MenuEste>
    <Footer1></Footer1>
    <Copyright></Copyright>
  </div>
</template>

<script>
import Hero from '~/components/price/Hero.vue'
import Title from '~/components/price/Title.vue'
import Menu from '~/components/price/Menu.vue'
import Conversion from '~/components/Conversion.vue'
import MenuEste from '~/components/price/MenuEste.vue'
import Footer1 from '~/components/Footer1.vue'
import Copyright from '~/components/Copyright.vue'

export default {
  components: {
    Hero,
    Title,
    Menu,
    Conversion,
    MenuEste,
    Footer1,
    Copyright,
  }
}
</script>
