import { createRouter, createWebHistory } from "vue-router";

import DefaultLayout from "../layouts/DefaultLayout.vue";

import HomeView from "../views/HomeView.vue";
import CoinView from "../views/CoinView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: DefaultLayout,
      children: [
        {
          path: "/",
          component: HomeView,
        },
        {
          path: "/coin/:id",
          component: CoinView,
        },
      ],
    },
  ],
});

export default router;
