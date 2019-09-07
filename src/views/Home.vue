<template>
  <div class="home">
    <router-link to="/english">
      <el-tag type="primary">英语</el-tag>
    </router-link>
    <router-link to="/computer">
      <el-tag type="primary">计算机</el-tag>
    </router-link>
    <router-link to="/computer-new">
      <el-tag type="primary">计算机(新)</el-tag>
    </router-link>
    <router-link to="/computer-all">
      <el-tag type="primary">计算机(混合)</el-tag>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "home",
  mounted() {
    const w =
      window.innerWidth ||
      document.body.clientWidth ||
      document.documentElement.clientWidth;
    if (w < 750) {
      this.$router.replace("/mobile");
    }
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
