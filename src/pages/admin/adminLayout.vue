<script setup>
import navbar from "../../components/admin/navbar/navbar.vue";
import sidebar from "../../components/admin/sidebar/sidebar.vue";
import Footer from "../../components/admin/admin_footer/admin_footer.vue";
import "../../style/adminstyle.css";
</script>

<template>
  <sidebar></sidebar>
  <navbar class="navbar navbar-light bg-light shadow-sm navbar-custom"></navbar>
  <div id="adminContent">
    <RouterView></RouterView>
  </div>
  <Footer></Footer>
</template>
