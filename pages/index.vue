<template>
  <div>
    <Hero></Hero>
    <About></About>
    <Conversion></Conversion>
    <Studio></Studio>
    <Price></Price>
    <Conversion></Conversion>
    <Access></Access>
    <Contact></Contact>
    <Faq></Faq>
    <Footer></Footer>
    <Copyright></Copyright>
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import About from '~/components/About.vue'
import Studio from '~/components/Studio.vue'
import Conversion from '~/components/Conversion.vue'
import Price from '~/components/Price.vue'
import Access from '~/components/Access.vue'
import Contact from '~/components/Contact.vue'
import Faq from '~/components/Faq.vue'
import Footer from '~/components/Footer.vue'
import Copyright from '~/components/Copyright.vue'

export default {
  components: {
    Hero,
    About,
    Studio,
    Conversion,
    Price,
    Access,
    Contact,
    Faq,
    Footer,
    Copyright,
  }
}
</script>

<style>

</style>
