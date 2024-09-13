import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './routers'
import pinia from './stores'
import './style.css'

const app = createApp(App)
app.use(vuetify)
app.use(pinia)
app.use(router)
app.mount('#app')
