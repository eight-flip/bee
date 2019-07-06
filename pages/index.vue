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
    <Footer1></Footer1>

<!--    <Footer></Footer>-->

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
// import Footer from '~/components/Footer.vue'
import Footer1 from '~/components/Footer1.vue'
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
    Footer1,
    Copyright,
  },
  mounted() {
    if ($nuxt.$route.hash) {
      this.$scrollTo($nuxt.$route.hash);
    }
  },
}

if (process.client) {
  // THANKS script
  (function(){
    function loadScriptRTCV(callback){
      var script = document.createElement('script');
      script.type= 'text/javascript';
      script.src= 'https://www.rentracks.jp/js/itp/rt.track.js?t=' + (new Date()).getTime();
      if ( script.readyState) {
        script.onreadystatechange= function() {
          if ( script.readyState=== 'loaded' || script.readyState=== 'complete' ) {
            script.onreadystatechange= null;callback();
          };
        };
      } else {
        script.onload= function() {
          callback();
        };
      };
      document.getElementsByTagName('head')[0].appendChild(script)
    ;}
    loadScriptRTCV(function(){
      var date = new Date() ;
      var timestamp = date.getTime() ;
      _rt.sid = 4109;
      _rt.pid = 6148;
      _rt.price = 0;
      _rt.reward = -1;
      _rt.cname = '';
      _rt.ctel = '';
      _rt.cemail = '';
      _rt.cinfo = timestamp; //識別番号
      rt_tracktag();
    });
  }(function(){}));
}
</script>

<style>

</style>
