<template>
  <div class="home">
    <van-nav-bar
      title="计算机"
      left-arrow
      @click-left="$router.push('/')"
      fixed
      style="border-bottom: 1px solid #efefef"
    />
    <div class="score" v-show="submit">{{ score }} 分</div>
    <div style="width: 100%;height: 50px;"></div>
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
          <van-radio-group v-model="item.xx">
            <van-radio
              v-for="(jtem, j) in item.options"
              :key="jtem"
              :name="A_Z[j]"
              >{{ A_Z[j] }}.{{ jtem }}</van-radio
            >
          </van-radio-group>
        </div>
      </dl>
    </div>
    <div style="height: 50px;widht: 100%;"></div>
    <van-goods-action>
      <van-goods-action-button type="info" @click="submitFn" text="提交" />
      <van-goods-action-button type="danger" @click="reset" text="重来" />
    </van-goods-action>
  </div>
</template>

<script>
import DanXuan from "../data/computer/DanXuan";
export default {
  name: "computer-mobile",
  data() {
    return {
      dxlist: [],
      A_Z: ["A", "B", "C", "D", "E", "F"],
      submit: false,
      score: 0,
      meta: null
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
      this.router.replace("/computer");
    }
    p = p > 1 ? 1 : p < 0.427 ? 0.427 : p;
    document.getElementsByTagName("html")[0].style.fontSize = p * 100 + "px";
  },
  beforeDestroy() {
    document.getElementsByTagName("head")[0].removeChild(this.m);
  },
  created() {
    this.getDanXuan();
  }
};
</script>
<style lang="less" scoped>
.home {
  width: 7.5rem;
  margin: 0 auto;
  text-align: left;
  .score {
    z-index: 9;
    position: fixed;
    font-size: 0.64rem;
    line-height: 0.8rem;
    color: red;
    right: 0.1rem;
  }
  .question .text {
    font-weight: bold;
  }
  .van-radio {
    font-size: 0.32rem;
    margin-bottom: 0.1rem;
  }
  .dx {
    dl {
      margin-bottom: 0.4rem;
      .question {
        font-size: 0.32rem;
        line-height: 0.4rem;
        margin-bottom: 0.2rem;
        overflow: hidden;
        position: relative;
        .no {
          float: left;
          vertical-align: top;
          width: 0.8rem;
          padding-right: 0.1rem;
          text-align: right;
        }
        .text {
          float: left;
          max-width: 6.5rem;
        }
      }
      .options {
        padding-left: 0.7rem;
        padding-right: 0.1rem;
      }
    }
  }
  .btns-bg {
    height: 1rem;
    width: 100%;
  }
  .btns {
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    text-align: center;
    padding-bottom: 0.2rem;
  }
  .answer {
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
