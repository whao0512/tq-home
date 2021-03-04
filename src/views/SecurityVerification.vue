<template>
  <v-main class="security-verification" :style="bgImg">
    <v-container>
      <div class="security-verification-title">防伪查询</div>
      <v-row class="mt-4">
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="请输入防伪标签上的编码"
            placeholder="请输入防伪标签上的编码"
            clearable
            dense
            outlined
            v-model="inputValue"
          ></v-text-field>
        </v-col>
        <v-col md="1">
          <v-btn
            class="query-btn"
            elevation="2"
            @click="query"
            :disabled="btnDisabled"
            >查询</v-btn
          >
        </v-col>
      </v-row>
      <div>
        <div class="security-verification-title mb-3">查询说明</div>
        <div class="security-verification-tips">
          1. 正确输入16位防伪码即可查询
        </div>
        <div class="security-verification-tips">
          2. 请刮开防伪标签上的覆盖层，将数字编号输入，即可验证真伪
        </div>
      </div>
      <v-row class="logo">
        <v-col v-for="(n,index) in brandsList" :key="index" class="d-flex child-flex" md="1" lg="1s">
          <v-img
            :src="n.avatar"
            contain
          >
          </v-img>
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar v-model="snackbar" :timeout="timeout" position top>
      {{ queryResult }}

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          关闭
        </v-btn>
      </template>
    </v-snackbar>
  </v-main>
</template>

<script>
import { getBrandsList } from '@/apis'
export default {
  name: "securityVerification",
  data() {
    return {
      bgImg: {
        height: "100%",
        backgroundImage: "url(" + require("@/assets/images/bg01.jpeg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        position: "relative"
      },
      inputValue: "",
      btnDisabled: false,
      snackbar: false,
      timeout: "2000",
      queryResult: "",
      resultType: "",
      brandsList: '',
    };
  },
  mounted() {
    this.getBrandsData()
  },
  methods: {
    query() {
      if (!this.inputValue) {
        return;
      }
      this.btnDisabled = true;
      let _this = this;
      this.inputValue &&
        $.ajax({
          type: "GET",
          url: "https://qm.qmt315.com/fwqueryjson.ashx",
          dataType: "jsonp",
          async: false,
          data: { fwcode: this.inputValue },
          jsonp: "callback",
          success: function (data) {
            _this.btnDisabled = false;
            _this.snackbar = true;
            _this.queryResult = data.QueryResult;
          },
        });
    },
    getBrandsData() {
      let _this = this;
      getBrandsList().then(
        res => {
          _this.brandsList = res.data;
        }
      )
    }
  },
};
</script>

<style lang="scss" scoped>
.security-verification {
  padding-bottom: 30px !important;
  &-title {
    font-size: 15px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    line-height: 26px;
    color: #242424;
  }
  &-tips {
    font-size: 10px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    line-height: 17px;
    color: #707070;
  }
  .logo {
    position: absolute;
    bottom: 0;
  }
}
.query-btn {
  width: 132px;
  height: 40px;
  background: linear-gradient(191deg, #ff8800 0%, #ffb664 100%);
  box-shadow: 0px 3px 6px rgba(39, 29, 18, 0.2);
  border-radius: 2px;
  color: #fff;
}
</style>