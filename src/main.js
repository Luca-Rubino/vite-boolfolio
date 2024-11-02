// scss
import './assets/index.scss'

// bootstrap
import * as Popper from "@popperjs/core"

// Vue data
import App from './views/App.vue'
import { createApp } from 'vue'

// end
createApp(App, Popper).mount('#app')
