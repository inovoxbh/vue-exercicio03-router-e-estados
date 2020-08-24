import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import HomePage from './pages/HomePage'
import AddProduct from './pages/AddProduct'
import ProductsList from './pages/ProductsList'
import { store } from "./store";

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/addproduct",
      component: AddProduct,
    },
    {
      path: "/products",
      component: ProductsList,
    },
  ],
});

Vue.config.productionTip = false
Vue.use(VueRouter);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
