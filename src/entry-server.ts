import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import App from './app/App.vue'

export const render = () => renderToString(createSSRApp(App))
