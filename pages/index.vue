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
<<<<<<< HEAD
<!--    <Footer></Footer>-->
    <Footer1></Footer1>
<!--    <Footer></Footer>-->
=======
    <Footer></Footer>
>>>>>>> origin/master
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
<<<<<<< HEAD
// import Footer from '~/components/Footer.vue'
import Footer1 from '~/components/Footer1.vue'
=======
import Footer from '~/components/Footer.vue'
>>>>>>> origin/master
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
<<<<<<< HEAD
    Footer1,
    // Footer,
    // Footer,
=======
    Footer,
>>>>>>> origin/master
    Copyright,
  },
  mounted() {
    if ($nuxt.$route.hash) {
      this.$scrollTo($nuxt.$route.hash);
    }
  },
}
</script>

<style>

</style>
