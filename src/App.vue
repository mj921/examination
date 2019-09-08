<template>
  <div id="app">
    <!-- <textarea name="" v-model="s"></textarea> -->
    <!-- <button @click="t">click</button> -->
    <router-view />
  </div>
</template>
<script>
// import { demo1, demo2 } from "./data/demo";
export default {
  // data() {
  //   return {
  //     s: ""
  //   };
  // },
  // methods: {
  //   t() {
  //     demo1(this.s);
  //   }
  // },
  // created() {
  //   demo1();
  //   demo2();
  // }
};
</script>
<style lang="less">
body,
dl {
  margin: 0;
  padding: 0;
}
</style>
