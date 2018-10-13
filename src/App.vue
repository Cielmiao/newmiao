<template>
  <div id="app">
    <m-header :logo="configs.img_logo"></m-header>
    <router-view></router-view>
    <m-footer :copyright="configs.copyright"></m-footer>
    <phone-footer></phone-footer>
  </div>
</template>

<script>
import {getData} from "api/getData"
import {ERR_OK} from "api/config"
import MHeader from "components/m-header/m-header"
import PhoneFooter from "phone/phone-footer/phone-footer"
import MFooter from "components/m-footer/m-footer"
export default {
  data(){
    return{
      configs:{}
    }
  },
  components:{
    MHeader,
    MFooter,
    PhoneFooter
  },
  created(){
    this.getConfig()
  },
  methods:{
    getConfig(){
      let url = 'api/getconfigs'

      getData(url).then((res)=>{
        if(res.code === ERR_OK){
          this.configs = res.data
          console.log(this.configs)
        }
      },(err)=>{
        console.log(err)
      })
    }
  }
}
</script>

<style>
    
</style>
