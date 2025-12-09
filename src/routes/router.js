import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/client/home/home.vue";
import Product from "../pages/client/product/product.vue";
import AboutUs from "../pages/client/about_us/about_us.vue";
import Contact from "../pages/client/contact/contact.vue";

import DefaultLayout from "../pages/client/default/defaultLayout.vue"; // cho home
import BaseLayout from "../pages/client/default/baseLayout.vue"; // cho product, about, contact
import Blog from "../pages/client/blog/blog.vue";
import Cart from "../pages/client/cart/cart.vue";
import Checkout from "../pages/client/checkout/checkout.vue";



import adminLayout from "../pages/admin/adminLayout.vue";
import product_list from "../pages/admin/product/product_list.vue";
import product_add from "../pages/admin/product/product_add.vue";
import category_list from "../pages/admin/category/category_list.vue";
import category_add from "../pages/admin/category/category_add.vue";
import user_list from "../pages/admin/user/user_list.vue";
import user_add from "../pages/admin/user/user_add.vue";
import order_list from "../pages/admin/order/order_list.vue";
const routes = [
  // Home
  {
    path: "/",
    component: DefaultLayout,
    children: [
      { path: "", component: Home }, // khi vào / thì render Home trong layout
    ],
  },

  // Các trang còn lại
  {
    path: "/", // vẫn root nhưng children có path cụ thể
    component: BaseLayout,
    children: [
      { path: "product", component: Product },
      { path: "about_us", component: AboutUs },
      { path: "contact", component: Contact },
      { path: "blog", component: Blog },
      { path: "cart", component: Cart},
      { path: "checkout", component: Checkout}
    ],
  },

  {
    path: "/admin",
    component: adminLayout,
    children: [
      { path: "/product_list", component: product_list },
      { path: "/product_add", component: product_add },
      { path: "/category_list", component: category_list },
      { path: "/category_add", component: category_add },
      { path: "/user_list", component: user_list },
      { path: "/user_add", component: user_add },
      { path: "/order_list", component: order_list },
    ],
  },

];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
