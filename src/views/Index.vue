<template>
  <div>
    <Header />
      <router-view></router-view>
    <Footer />
  </div>
</template>
<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  name: "Index",
  components: { Header, Footer },
};
</script>
<style>
</style>