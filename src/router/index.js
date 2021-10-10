import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";

// lazy load
const Timelines = () => import("../pages/Timelines.vue");
const NotFound = () => import("../pages/NotFound.vue");

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/timelines",
    component: Timelines,
  },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
