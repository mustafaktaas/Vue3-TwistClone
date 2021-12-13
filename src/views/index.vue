<template>
    
<div>
    <Header/>
    <SwiperCarousel/>
    <Banner1/>
    <Banner2/>
    <Cover/>
    <Grid/>
    <Footer/>

</div>

</template>

<script>
import Header from '../components/Header/Header.vue'
import SwiperCarousel from '../components/SwiperCarousel.vue'
import Banner1 from '../components/Banner1.vue'
import Banner2 from '../components/Banner2.vue'
import Cover from '../components/Cover.vue'
import Grid from '../components/Grid.vue'
import Footer from '../components/Footer/Footer.vue'
export default {
  components: {
    Header,
    SwiperCarousel,
    Banner1,
    Banner2,
    Cover,
    Grid,
    Footer
},
}
</script>