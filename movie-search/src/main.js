import { createApp } from 'vue'
import App from './App'
import loadImage from './plugins/loadImage'
import router from './routes'
import store from './store'
import './registerServiceWorker.js'

createApp(App)
    .use(router)
    .use(store)
    .use(loadImage)
    .mount('#app')