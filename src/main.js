import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import VueGapi from 'vue-gapi'

Vue.use(VueGapi, {
  apiKey: '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',
  clientId: '1022323340468-71rlesatm60ud4u72bc7hng12ss5frtr.apps.googleusercontent.com',
  discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
  scope: 'https://www.googleapis.com/auth/spreadsheets',
})
new Vue({
  render: h => h(App),
}).$mount('#app')
