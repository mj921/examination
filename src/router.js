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
      path: "/mobile",
      name: "home-mobile",
      component: () =>
        import(/* webpackChunkName: "mobile" */ "./views/HomeMobile.vue")
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
      path: "/computer-new",
      name: "computer-new",
      component: () =>
        import(/* webpackChunkName: "computer-new" */ "./views/ComputerNew.vue")
    },
    {
      path: "/computer-all",
      name: "computer-all",
      component: () =>
        import(/* webpackChunkName: "computer-all" */ "./views/ComputerAll.vue")
    },
    {
      path: "/computer-mobile",
      name: "computer-mobile",
      component: () =>
        import(
          /* webpackChunkName: "computer-mobile" */ "./views/ComputerMobile.vue"
        )
    },
    {
      path: "/computer-mobile-new",
      name: "computer-mobile-new",
      component: () =>
        import(
          /* webpackChunkName: "computer-mobile-new" */ "./views/ComputerMobileNew.vue"
        )
    },
    {
      path: "/computer-mobile-all",
      name: "computer-mobile-all",
      component: () =>
        import(
          /* webpackChunkName: "computer-mobile-all" */ "./views/ComputerMobileAll.vue"
        )
    }
  ]
});
