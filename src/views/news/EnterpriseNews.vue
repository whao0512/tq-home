<template>
  <v-container class="enterprise">
    <div style="text-align: center">
      <div class="enterprise-title d-inline-flex justify-center align-center">
        企业公告
      </div>
    </div>
    <div class="enterprise-content">
      <div v-for="(item, index) in newsList" :key="index">
        <div class="enterprise-content-title">{{ item.title }}</div>
        <div class="enterprise-content-date">{{ item.date }}</div>
        <div class="enterprise-content-brief">{{ item.brief }}</div>
        <div class="enterprise-content-btn">
          <router-link :to="{ name: 'NewsDetail', params: { id: item.id } }"
            >查看详情></router-link
          >
        </div>
        <v-divider :key="index"></v-divider>
      </div>
    </div>
  </v-container>
</template>

<script>
import { enterpriseNews } from "@/apis";
export default {
  name: "EnterpriseNews",
  data: () => ({
    newsList: [],
  }),
  mounted() {
    this.getNewsList();
  },
  methods: {
    getNewsList: function () {
      let _this = this;
      enterpriseNews().then((res) => (this.newsList = res.data));
    },
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 960) {
  .enterprise-title {
    position: relative;
    margin-top: 37px;
    height: 30px;
    font-size: 30px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    line-height: 51px;
    color: #2b2b2b;
    &:after {
      position: absolute;
      bottom: -4px;
      content: "";
      width: 100%;
      height: 4px;
      background-color: #ff9822;
    }
  }

  .enterprise-content {
    margin-top: 39px;
    border-top: 1px solid #dbdbdb;
    > div {
      margin-top: 30px;
    }
    &-title {
      font-size: 30px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      line-height: 40px;
      color: #242424;
    }
    &-date {
      height: 20px;
      margin-top: 4px;
      margin-bottom: 34px;
      font-size: 20px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      line-height: 40px;
      color: #242424;
    }
    &-brief {
      margin-bottom: 20px;
      font-size: 16px;
      font-family: SimSun;
      font-weight: 400;
      line-height: 30px;
      color: #242424;
    }
    &-btn {
      height: 19px;
      font-size: 20px;
      font-family: Source Han Sans CN;
      line-height: 40px;
      margin-bottom: 50px;
      > a {
        color: #ff9822;
      }
    }
  }
}

@media screen and (max-width: 959px) {
  .enterprise-title {
    position: relative;
    margin-top: 37px;
    height: 30px;
    font-size: 26px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #2b2b2b;
    &:after {
      position: absolute;
      bottom: -4px;
      content: "";
      width: 100%;
      height: 4px;
      background-color: #ff9822;
    }
  }

  .enterprise-content {
    margin-top: 20px;
    border-top: 1px solid #dbdbdb;
    > div {
      margin-top: 15px;
    }
    &-title {
      font-size: 20px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      line-height: 22px;
      color: #242424;
    }
    &-date {
      height: 20px;
      margin-top: 4px;
      margin-bottom: 15px;
      font-size: 18px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      line-height: 26px;
      color: #242424;
    }
    &-brief {
      font-size: 14px;
      font-family: SimSun;
      font-weight: 400;
      line-height: 28px;
      color: #242424;
    }
    &-btn {
      height: 19px;
      font-size: 18px;
      font-family: Source Han Sans CN;
      line-height: 26px;
      margin-bottom: 20px;
      > a {
        color: #ff9822;
      }
    }
  }
}
</style>