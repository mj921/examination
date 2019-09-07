<template>
  <div class="home">
    <div class="score" v-show="submit">{{ score }} 分</div>
    <el-page-header @back="$router.push('/')" content="计算机" />
    <div class="dx">
      <dl v-for="(item, i) in dxlist" :key="i">
        <div class="question">
          <div class="no">{{ i + 1 }}.</div>
          <div
            class="text"
            v-html="item.question.replace(/\n/g, '<br/>')"
          ></div>
          <span
            v-show="submit"
            class="answer"
            :style="{
              color: item.xx === item.answer ? 'green' : 'red'
            }"
          >
            {{ item.answer }}
          </span>
        </div>
        <div class="options">
          <el-radio-group v-model="item.xx">
            <el-radio
              v-for="(jtem, j) in item.options"
              :key="jtem"
              :label="A_Z[j]"
              >{{ A_Z[j] }}.{{ jtem }}</el-radio
            >
          </el-radio-group>
        </div>
      </dl>
    </div>
    <div class="btns-bg"></div>
    <div class="btns">
      <el-button type="primary" @click="submitFn">提交</el-button>
      <el-button type="primary" @click="reset">重来</el-button>
    </div>
    <el-backtop></el-backtop>
  </div>
</template>

<script>
import DanXuan from "../data/computer/DanXuan";
export default {
  name: "english",
  data() {
    return {
      dxlist: [],
      wxlist: [],
      ydlist: [],
      A_Z: ["A", "B", "C", "D", "E", "F"],
      submit: false,
      score: 0
    };
  },
  methods: {
    getDanXuan() {
      const arr = [...DanXuan];
      this.dxlist = [];
      for (let i = 0; i < 50; i++) {
        const ind = ~~(Math.random() * arr.length);
        this.dxlist.push({ ...arr[ind], xx: "" });
        arr.splice(ind, 1);
      }
    },
    submitFn() {
      this.score = 0;
      this.dxlist.forEach(item => {
        if (item.xx === item.answer) {
          this.score += 2;
        }
      });
      this.submit = true;
    },
    reset() {
      this.score = 0;
      this.submit = false;
      this.getDanXuan();
    }
  },
  mounted() {
    const w =
      window.innerWidth ||
      document.body.clientWidth ||
      document.documentElement.clientWidth;
    if (w < 750) {
      this.$router.replace("/computer-mobile");
    }
  },
  created() {
    this.getDanXuan();
  }
};
</script>
<style lang="less" scoped>
.home {
  width: 1200px;
  margin: 0 auto;
  text-align: left;
  .el-page-header {
    padding: 10px 0;
  }
  .score {
    z-index: 9;
    position: fixed;
    font-size: 36px;
    line-height: 60px;
    color: red;
    left: 50%;
    margin-left: 500px;
  }
  .dx {
    dl {
      margin-bottom: 20px;
      .question {
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 10px;
        overflow: hidden;
        position: relative;
        .no {
          float: left;
          vertical-align: top;
          width: 40px;
          padding-right: 5px;
          text-align: right;
        }
        .text {
          float: left;
          max-width: 1145px;
        }
      }
      .options {
        padding-left: 35px;
      }
    }
  }
  .btns-bg {
    height: 50px;
    width: 100%;
  }
  .btns {
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    height: 50px;
    text-align: center;
    padding-bottom: 10px;
    .el-button {
      vertical-align: top;
    }
  }
  .answer {
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
