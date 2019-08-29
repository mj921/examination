<template>
  <div class="home">
    <van-nav-bar
      title="英语"
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
    <div class="wx">
      <dl v-for="(item, i) in wxlist" :key="i">
        <div class="wz">
          <div class="no">{{ i + 1 + dxlist.length }}.</div>
          <div class="text" v-html="item.text.replace(/\n/g, '<br/>')"></div>
        </div>
        <div class="questions">
          <div
            class="question"
            v-for="(question, j) in item.questions"
            :key="`question${i}-${j}`"
          >
            <div class="no">{{ j + 1 }}.</div>
            <div class="options">
              <van-radio-group v-model="question.xx">
                <van-radio
                  v-for="(jtem, k) in question.options"
                  :key="jtem"
                  :name="A_Z[k]"
                  >{{ A_Z[k] }}.{{ jtem }}</van-radio
                >
              </van-radio-group>
            </div>
            <span
              v-show="submit"
              class="answer"
              :style="{
                color: question.xx === question.answer ? 'green' : 'red'
              }"
            >
              {{ question.answer }}
            </span>
          </div>
        </div>
      </dl>
    </div>
    <div class="yd">
      <dl v-for="(item, i) in ydlist" :key="i">
        <div class="wz">
          <div class="no">{{ i + 1 + dxlist.length + wxlist.length }}.</div>
          <div class="text" v-html="item.text.replace(/\n/g, '<br/>')"></div>
        </div>
        <div class="questions">
          <dl
            v-for="(question, j) in item.questions"
            :key="`question${i}-${j}`"
          >
            <div class="question">
              <div class="no">{{ j + 1 }}.</div>
              <div
                class="text"
                v-html="question.question.replace(/\n/g, '<br/>')"
              ></div>
              <span
                v-show="submit"
                class="answer"
                :style="{
                  color: question.xx === question.answer ? 'green' : 'red'
                }"
              >
                {{ question.answer }}
              </span>
            </div>
            <div class="options">
              <van-radio-group v-model="question.xx">
                <van-radio
                  v-for="(jtem, j) in question.options"
                  :key="jtem"
                  :name="A_Z[j]"
                >
                  {{ A_Z[j] }}.{{ jtem }}
                </van-radio>
              </van-radio-group>
            </div>
          </dl>
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
import DanXuan from "../data/english/DanXuan";
import YueDu from "../data/english/YueDu";
import WanXing from "../data/english/WanXing";
export default {
  name: "english",
  data() {
    return {
      dxlist: [],
      wxlist: [],
      ydlist: [],
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
      for (let i = 0; i < 10; i++) {
        const ind = ~~(Math.random() * arr.length);
        this.dxlist.push({ ...arr[ind], xx: "" });
        arr.splice(ind, 1);
      }
    },
    getYueDu() {
      const arr = [...YueDu];
      this.ydlist = [];
      for (let i = 0; i < 3; i++) {
        const ind = ~~(Math.random() * arr.length);
        this.ydlist.push({
          text: arr[ind].text,
          questions: arr[ind].questions.map(item => ({ ...item, xx: "" }))
        });
        arr.splice(ind, 1);
      }
    },
    getWanXing() {
      const arr = [...WanXing];
      this.wxlist = [];
      for (let i = 0; i < 1; i++) {
        const ind = ~~(Math.random() * arr.length);
        this.wxlist.push({
          text: arr[ind].text,
          questions: arr[ind].questions.map(item => ({ ...item, xx: "" }))
        });
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
      this.wxlist.forEach(item => {
        item.questions.forEach(jtem => {
          if (jtem.xx === jtem.answer) {
            this.score += 2;
          }
        });
      });
      this.ydlist.forEach(item => {
        item.questions.forEach(jtem => {
          if (jtem.xx === jtem.answer) {
            this.score += 2;
          }
        });
      });
      this.submit = true;
    },
    reset() {
      this.score = 0;
      this.submit = false;
      this.getDanXuan();
      this.getWanXing();
      this.getYueDu();
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
      this.router.push("/english");
    }
    p = p > 1 ? 1 : p < 0.427 ? 0.427 : p;
    document.getElementsByTagName("html")[0].style.fontSize = p * 100 + "px";
  },
  beforeDestroy() {
    document.getElementsByTagName("head")[0].removeChild(this.m);
  },
  created() {
    this.getDanXuan();
    this.getWanXing();
    this.getYueDu();
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
  .wx {
    .wz {
      font-size: 0.32rem;
      line-height: 0.4rem;
      margin-bottom: 0.2rem;
      overflow: hidden;
      .no {
        float: left;
        vertical-align: top;
        width: 0.8rem;
        padding-right: 0.1rem;
        text-align: right;
        height: 100%;
      }
      .text {
        float: left;
        max-width: 6.5rem;
      }
    }
    .question {
      overflow: hidden;
      padding-left: 0.7rem;
      margin-bottom: 0.1rem;
      font-size: 0.32rem;
      position: relative;
      .no {
        float: left;
        vertical-align: top;
        width: 0.5rem;
        padding-right: 0.1rem;
        text-align: right;
        height: 100%;
      }
      .options {
        float: left;
        max-width: 6rem;
        padding-right: 0.1rem;
      }
    }
  }
  .yd {
    .wz {
      font-size: 0.32rem;
      line-height: 0.4rem;
      margin-bottom: 0.2rem;
      overflow: hidden;
      .no {
        float: left;
        vertical-align: top;
        width: 0.6rem;
        padding-right: 0.1rem;
        text-align: right;
        height: 100%;
      }
      .text {
        float: left;
        max-width: 6.5rem;
      }
    }
    .question {
      overflow: hidden;
      padding-left: 0.7rem;
      margin-bottom: 0.2rem;
      position: relative;
      font-size: 0.32rem;
      .no {
        float: left;
        vertical-align: top;
        width: 0.3rem;
        padding-right: 0.1rem;
        text-align: right;
        height: 100%;
      }
      .text {
        float: left;
        max-width: 6rem;
      }
    }
    .options {
      padding-left: 1rem;
      padding-right: 0.1rem;
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
