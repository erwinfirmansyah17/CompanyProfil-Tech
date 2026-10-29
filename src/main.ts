import { createApp, createSSRApp } from 'vue'
import App from './app/App.vue'
import './styles/tokens.css'
import './styles/global.css'

const prerendered = document.getElementById('app')?.hasChildNodes()
;(prerendered ? createSSRApp(App) : createApp(App)).mount('#app')
