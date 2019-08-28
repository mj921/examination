<template>
  <div class="home">
    <div class="score" v-show="submit">{{ score }} 分</div>
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
              <el-radio-group v-model="question.xx">
                <el-radio
                  v-for="(jtem, k) in question.options"
                  :key="jtem"
                  :label="A_Z[k]"
                  >{{ A_Z[k] }}.{{ jtem }}</el-radio
                >
              </el-radio-group>
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
              <el-radio-group v-model="question.xx">
                <el-radio
                  v-for="(jtem, j) in question.options"
                  :key="jtem"
                  :label="A_Z[j]"
                >
                  {{ A_Z[j] }}.{{ jtem }}
                </el-radio>
              </el-radio-group>
            </div>
          </dl>
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
import DanXuan from "../data/english/DanXuan";
import YueDu from "../data/english/YueDu";
import WanXing from "../data/english/WanXing";
export default {
  name: "home",
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
  created() {
    this.getDanXuan();
    this.getWanXing();
    this.getYueDu();
  }
};
</script>
<style lang="less" scoped>
.home {
  width: 1200px;
  margin: 0 auto;
  text-align: left;
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
  .wx {
    .wz {
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 10px;
      overflow: hidden;
      .no {
        float: left;
        vertical-align: top;
        width: 40px;
        padding-right: 5px;
        text-align: right;
        height: 100%;
      }
      .text {
        float: left;
        max-width: 1145px;
      }
    }
    .question {
      overflow: hidden;
      padding-left: 35px;
      margin-bottom: 10px;
      position: relative;
      .no {
        float: left;
        vertical-align: top;
        width: 25px;
        padding-right: 5px;
        text-align: right;
        height: 100%;
      }
      .options {
        float: left;
        max-width: 1125px;
      }
    }
  }
  .yd {
    .wz {
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 10px;
      overflow: hidden;
      .no {
        float: left;
        vertical-align: top;
        width: 30px;
        padding-right: 5px;
        text-align: right;
        height: 100%;
      }
      .text {
        float: left;
        max-width: 1145px;
      }
    }
    .question {
      overflow: hidden;
      padding-left: 35px;
      margin-bottom: 10px;
      position: relative;
      .no {
        float: left;
        vertical-align: top;
        width: 15px;
        padding-right: 5px;
        text-align: right;
        height: 100%;
      }
      .text {
        float: left;
        max-width: 1125px;
      }
    }
    .options {
      padding-left: 50px;
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
    text-align: center;
    padding-bottom: 10px;
  }
  .answer {
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
