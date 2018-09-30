<template>
  <div id="app">
    <m-header></m-header>
    <router-view></router-view>
    <m-footer></m-footer>
    <phone-footer></phone-footer>
  </div>
</template>

<script>
import MHeader from "components/m-header/m-header"
//import Layout from "components/layout/layout"
//import phoneLayout from "components/phone-layout/phone-layout"
import PhoneFooter from "phone/phone-footer/phone-footer"
import MFooter from "components/m-footer/m-footer"
export default {
  components:{
    MHeader,
    MFooter,
    PhoneFooter
  }
}
</script>

<style>
    
</style>
