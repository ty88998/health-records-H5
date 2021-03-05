// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
// import router from './router'

// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })


import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { setItem,getItem } from './utils/util';
import { api } from './api/api';
//引入UI框架
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//引入插件
import LyTab from '../src/components/ly-tab';
//导入仓库
import store from './store'
//引入混合
import { myMixin } from './mixins/mixins';
//解决移动端点击300ms延迟
import fastClick from 'fastclick';
//引入公共样式
import './assets/styles/reset.css';
import './assets/styles/boder.css';
import './assets/styles/public.css';
//初始化浏览器环境为移动端或PC端挂载于原型
if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
  Vue.prototype.$browser = 'mobile'
}else{
  Vue.prototype.$browser = 'PC'
}
fastClick.attach(document.body);
Vue.prototype.$setItem = setItem;
Vue.prototype.$getItem = getItem;
Vue.prototype.$api = api;
Vue.config.productionTip = false;
Vue.mixin(myMixin);
Vue.use(MintUI)
Vue.use(LyTab)
/**
 * @param 抛出Vue实例
 */
const _Vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/**抛出Vue实例--便于在仓库等文件中也可访问 */
export default _Vue;