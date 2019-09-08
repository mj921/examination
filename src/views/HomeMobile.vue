<template>
  <div class="home">
    <router-link to="/english-mobile">
      <el-tag type="primary">英语</el-tag>
    </router-link>
    <router-link to="/english-mobile-new">
      <el-tag type="primary">英语(新)</el-tag>
    </router-link>
    <router-link to="/computer-mobile">
      <el-tag type="primary">计算机</el-tag>
    </router-link>
    <router-link to="/computer-mobile-new">
      <el-tag type="primary">计算机(新)</el-tag>
    </router-link>
    <router-link to="/computer-mobile-all">
      <el-tag type="primary">计算机(混合)</el-tag>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "home",
  mounted() {
    this.m = document.createElement("meta");
    this.m.name = "viewport";
    this.m.content =
      "user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, viewport-fit=cover";
    document.getElementsByTagName("head")[0].appendChild(this.m);
    const w =
      window.innerWidth ||
      document.body.clientWidth ||
      document.documentElement.clientWidth;
    let p = w / 750;
    if (p > 1) {
      this.$router.replace("/");
    }
    p = p > 1 ? 1 : p < 0.427 ? 0.427 : p;
    document.getElementsByTagName("html")[0].style.fontSize = p * 100 + "px";
  }
};
</script>
<style lang="less" scoped>
.home {
  .el-tag {
    margin: 10px;
  }
}
</style>
