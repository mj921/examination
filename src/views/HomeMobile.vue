<template>
  <div class="home">
    <router-link to="/english-mobile">
      <el-tag type="primary">英语</el-tag>
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
  name: "home"
};
</script>
<style lang="less" scoped>
.home {
  .el-tag {
    margin: 10px;
  }
}
</style>
