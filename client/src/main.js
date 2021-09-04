import { createApp } from 'vue'

import App from './App.vue'
import Auth from './authentication/auth'
import router from './router'

import './assets/styles.scss'

async function init() {
  const AuthPlugin = await Auth.init({
    onRedirectCallback: appState => {
      router.push(appState && appState.targetUrl ? appState.targetUrl : window.location.pathname)
    },
  })

  createApp(App)
    .use(AuthPlugin)
    .use(router)
    .mount('#app')
}

init()
