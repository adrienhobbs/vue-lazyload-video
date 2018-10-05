import Vue from 'vue'
import App from './App.vue'
import VueHighlightJs from 'vue-highlightjs'
import 'bulma/css/bulma.min.css'
import 'highlight.js/styles/tomorrow-night-eighties.css'
import VueLazyLoadVideo from './lib'

Vue.use(VueLazyLoadVideo)
Vue.use(VueHighlightJs)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
