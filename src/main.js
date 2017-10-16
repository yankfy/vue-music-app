import 'babel-polyfill' // 对ES6语言的提示补充
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick' // 对移动端点击300ms延迟的处理
import VueLazyload from 'vue-lazyload'
import store from './store'

import 'common/stylus/index.styl'

/* eslint-disable no-unused-vars */
// import vConsole from 'vconsole'

fastclick.attach(document.body)

Vue.use(VueLazyload, {
  loading: require('common/image/default.png')   //  默认图片
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
