import Vue from 'vue'
import App from './App'
import router from './router'
import '@/modules/mobileSCSS/style.scss'
import '@/styles/style.scss'

Vue.config.productionTip = false
import VueCordova from 'vue-cordova'

Vue.use(VueCordova)

// add cordova.js only if serving the app through file://
if (window.location.protocol === 'file:' || window.location.port === '3000') {
  var cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  document.body.appendChild(cordovaScript)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
