import Vue from 'vue'
import VueOnIntersect from 'vue-on-intersect'
import VueSyncLocation from 'vue-sync-location'

import * as Components from './index'

export default {
  install: function() {
    Vue.use(VueOnIntersect)
    Vue.use(VueSyncLocation)

    Object.keys(Components)
      .filter(componentName => componentName !== 'default')
      .forEach(componentName => {
        Vue.component(componentName, Components[componentName])
      })
  }
}
