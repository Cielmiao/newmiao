// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

//vuex
import store from './store'


//引入fastclick ，这个插件可以解决移动端点击事件延迟300毫秒的问题
import FastClick from 'fastclick'
FastClick.attach(document.body);

//引入全局样式
import 'assets/css/stylus/reset.styl'
//字体图标
import 'assets/css/icon/iconfont.css'

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
