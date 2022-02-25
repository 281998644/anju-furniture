<template>
  <div class="logo">
    <h1>
      <a @click="toHome" title="安居官网">
        <img src="../assets/upload/logo.png" alt="" />安居官网
      </a>
    </h1>
  </div>
</template>
<script>
export default {
  name: "Logo",
  methods:{
    toHome(){
      this.$router.replace('/home')
    }
  }
};
</script>
<style>
.logo {
  width: 160px;
  height: 90px;
  overflow: hidden;
}
.logo h1 a {
  font-size: 0;
}
</style>