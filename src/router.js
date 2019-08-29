import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: process.env.NODE_ENV === "development" ? "history" : "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/english",
      name: "english",
      component: () =>
        import(/* webpackChunkName: "english" */ "./views/English.vue")
    },
    {
      path: "/english-mobile",
      name: "english-mobile",
      component: () =>
        import(
          /* webpackChunkName: "english-mobile" */ "./views/EnglishMobile.vue"
        )
    },
    {
      path: "/computer",
      name: "computer",
      component: () =>
        import(/* webpackChunkName: "computer" */ "./views/Computer.vue")
    },
    {
      path: "/computer-mobile",
      name: "computer-mobile",
      component: () =>
        import(
          /* webpackChunkName: "computer-mobile" */ "./views/ComputerMobile.vue"
        )
    }
  ]
});
