import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import "tailwindcss/tailwind.css"
import { VCodeBlock } from "@wdns/vue-code-block";

const app = createApp(App)

app.component('VCodeBlock', VCodeBlock)

app.mount('#app')
