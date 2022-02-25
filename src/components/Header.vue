<template>
  <div class="header">
    <div class="w">
      <Search />
      <Logo />
      <Navgation />
    </div>
  </div>
</template>
<script>
import Logo from "./Logo";
import Search from "./Search";
import Navgation from "./Navgation";
export default {
  name: "Header",
  components: { Logo, Search, Navgation },
};
</script>
<style scoped>
.header {
  background-color: #374840;
}
.header .w {
  position: relative;
  height: 182px;
  padding-top: 25px;
}
</style>