import { createApp } from "vue";
import App from "./App.vue";
// bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// router 추가
import postListRouter from "./router.js";

createApp(App).use(postListRouter).mount("#app");
