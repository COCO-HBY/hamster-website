import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: '/homePage',
    children: [
      {
        path: "/homePage",
        name: "homePage",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "homePage" */ "../views/HomePage.vue"),
      },
      {
        path: "/about",
        name: "About",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
      },
      {
        path: "/adopt",
        name: "Adopt",
        component: () =>
          import(/* webpackChunkName: "adopt" */ "../views/Adopt.vue"),
      },
      {
        path: "/themes",
        name: "Themes",
        component: () =>
          import(/* webpackChunkName: "themes" */ "../views/Themes.vue"),
      },
      {
        path: "/contact",
        name: "Contact",
        component: () => import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
      },
    ],
  },
  {
    path:"*",
    name:"Error",
    component: ()=> import(/* webpackChunkName: "error" */ "../views/Error.vue"),
  }
  
 
];

const router = new VueRouter({
  routes,
});

export default router;
