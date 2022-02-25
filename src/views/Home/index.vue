<template>
    <div class="home">
        <Banner/>
        <FlavorMuseum/>
        <NewArrival/>
        <HostSale/>
    </div>
</template>
<script>
import Banner from "../../plugins/Banner";
import FlavorMuseum from "../../plugins/FlavorMuseum";
import HostSale from "../../plugins/HostSale";
import NewArrival from "../../plugins/NewArrival";
export default {
  name: "HomeContent",
  components: {
    Banner,
    FlavorMuseum,
    HostSale,
    NewArrival,
  },
};
</script>
<style>
</style>