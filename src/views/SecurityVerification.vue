<template>
  <v-main class="security-verification" :style="bgImg">
    <v-container>
      <div>防伪查询</div>
      <v-row class="mt-2">
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
          <v-btn elevation="2" @click="query" :disabled="btnDisabled">查询</v-btn>
        </v-col>
      </v-row>
      <div>
          <div>查询说明</div>
          <div>1. 正确输入16位防伪码即可查询</div>
          <div>2. 请刮开防伪标签上的覆盖层，将数字编号输入，即可验证真伪</div>
      </div>
    </v-container>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      position
      top
    >
      {{ queryResult }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          关闭
        </v-btn>
      </template>
    </v-snackbar>

  </v-main>
</template>

<script>
export default {
  name: "securityVerification",
  data() {
    return {
      bgImg: {
        backgroundImage: "url(" + require("@/assets/images/bg01.jpeg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      },
      inputValue: "",
      btnDisabled: false,
      snackbar: false,
      timeout: "2000",
      queryResult: '',
      resultType: "",
    };
  },
  methods: {
      query(){
          if (!this.inputValue) {
              return;
          }
          this.btnDisabled = true;
          let _this = this;
          this.inputValue && $.ajax({
              type: 'GET',
              url: "https://qm.qmt315.com/fwqueryjson.ashx",
              dataType: "jsonp",
              async: false,
              data: {fwcode: this.inputValue},
              jsonp: "callback",
              success: function(data) {
                  _this.btnDisabled = false;
                  _this.snackbar = true;
                  _this.queryResult = data.QueryResult;
              }
          })
      }
  }
};
</script>

<style lang="scss" scoped>
.security-verification {
    padding-bottom: 90px!important;
}
</style>