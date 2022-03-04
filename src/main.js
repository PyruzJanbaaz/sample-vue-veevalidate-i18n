import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router";
import i18n from './i18n';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.js"
import 'remixicon/fonts/remixicon.css'

const app = createApp(App);
app.config.productionTip = false;
app.use(router)
app.use(i18n)
app.mount('#app');
