import { createApp } from 'vue'
import App from './App.vue'
import InputComp from './components/InputComp.vue'
import weatherBar from './components/weatherBar.vue'


const app =createApp(App)
app.component('input-comp', InputComp),
app.component('weather-bar', weatherBar)

app.mount('#app')

