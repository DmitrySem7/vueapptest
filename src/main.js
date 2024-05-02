
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.scss'
import {createPinia} from "pinia";

createApp(App)
    .use(ElementPlus)
    .use(createPinia())
    .mount('#app')
