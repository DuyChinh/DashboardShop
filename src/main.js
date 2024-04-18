
import { createApp } from 'vue'
import App from './App.vue'
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import SoftUIDashboard from "./soft-ui-dashboard";
import GoogleSignInPlugin from "vue3-google-signin"

const app = createApp(App)
app.use(store)
app.use(router)
app.use(SoftUIDashboard)
app.use(GoogleSignInPlugin, {
  clientId:
    "1004971379098-hkaaqjg5f7nsb8dvren72kscm69td8gj.apps.googleusercontent.com",
});

app.mount("#app");

