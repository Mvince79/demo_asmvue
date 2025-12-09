<script setup>
import Header from "../../../components/Header.vue";
import Footer from "../../../components/Footer.vue";
import "../../../style.css";
</script>

<template>
  <div class="layout-wrapper">
    <Header></Header>
    <main class="container">
      <RouterView></RouterView>
    </main>
    <Footer class="footer_client_custom"></Footer>
  </div>
</template>
