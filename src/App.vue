<template>
  <div id="app">
    <m-header></m-header>
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from "components/m-header/m-header"
//import Layout from "components/layout/layout"
//import phoneLayout from "components/phone-layout/phone-layout"
//import MFooter from "components/m-footer/m-footer"
export default {
  components:{
    MHeader
  }
}
</script>

<style>
    
</style>
