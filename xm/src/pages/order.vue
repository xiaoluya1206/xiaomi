<template>
  <div>
    <order-header></order-header>
    <router-view></router-view>
    <!-- <service-bar></service-bar> -->
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import ServiceBar from "./../components/ServiceBar";
import NavFooter from "./../components/NavFooter";
import OrderHeader from './../components/OrderHeader'
export default {
  name: "order",
  data() {
    return {
      title: "",
      tip: "",
    };
  },
  components: {
    ServiceBar,
    NavFooter,
    OrderHeader
  },
};
</script>
