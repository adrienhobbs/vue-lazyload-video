import VueOnIntersect from 'vue-on-intersect'
import VueSyncLocation from 'vue-sync-location'

import LazyVideo from '../components/LazyVideo'
import LazyVideoAsGIF from '../components/LazyVideoAsGIF'

export default {
  install: function(Vue) {
    Vue.use(VueOnIntersect)
    Vue.use(VueSyncLocation)

    Vue.component('LazyVideo', LazyVideo)
    Vue.component('LazyVideoAsGIF', LazyVideoAsGIF)
  }
}
