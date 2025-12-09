<script setup>
import Header from "../../../components/Header.vue";
import Banner from "../../../components/Banner.vue";
import Footer from "../../../components/Footer.vue";
import Usps from "../../../components/Usps.vue";
import Newsletter from "../../../components/Newsletter.vue";
import Video from "../../../components/Video.vue";
import App_control from "../../../components/App_control.vue";
import "../../../style.css";
</script>

<template>
  <Header></Header>
  <div>
    <Banner></Banner>
    <Usps></Usps>
    <RouterView></RouterView>
    <Video></Video>
    <App_control></App_control>
    <Newsletter></Newsletter>
  </div>
  <Footer></Footer>
</template>
