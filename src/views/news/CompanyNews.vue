<template>
  <v-container class="pa-0 mb-10">
    <div style="text-align: center">
      <div class="company-title d-inline-flex justify-center align-center">
        公司动态
      </div>
    </div>
    <div class="company-content">
      <v-list three-line>
        <template v-for="(item, index) in newsList">
          <v-list-item :key="item.index">
            <v-list-item-avatar
              max-width="225"
              class="d-none d-sm-none d-md-flex"
              tile
              height="225"
              width="225"
            >
              <v-img :src="item.img"></v-img>
            </v-list-item-avatar>
            <v-list-item-avatar
              max-width="120"
              class="d-flex d-sm-flex d-md-none"
              tile
              height="120"
              width="120"
            >
              <v-img :src="item.img"></v-img>
            </v-list-item-avatar>

            <v-list-item-content class="ml-2">
              <v-list-item-title
                v-html="item.title"
                class="company-content-title"
              ></v-list-item-title>
              <div v-html="item.date" class="company-content-date"></div>
              <v-list-item-subtitle
                class="company-content-brief"
                v-html="item.brief"
              ></v-list-item-subtitle>
              <div class="company-content-btn">
                <router-link
                  :to="{ name: 'NewsDetail', params: { id: item.id } }"
                  >查看详情></router-link
                >
              </div>
            </v-list-item-content>
          </v-list-item>
          <v-divider :key="index" :inset="true"></v-divider>
        </template>
      </v-list>
    </div>
  </v-container>
</template>

<script>
import { companyNews } from "@/apis";
export default {
  name: "CompanyNews",
  data: () => ({
    newsList: [],
  }),
  mounted() {
    this.getNews();
  },
  methods: {
    getNews: function () {
      let _this = this;
      companyNews().then((res) => (_this.newsList = res.data));
    },
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 960px) {
  .company-title {
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
  .company-content {
    margin-top: 39px;
    border-top: 1px solid #dbdbdb;
    .v-divider--inset:not(.v-divider--vertical) {
      margin-left: 0!important;
    }
    .v-divider--inset:not(.v-divider--vertical) {
      max-width: 100%;
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

@media screen and (max-width: 960px) {
  .company-title {
    position: relative;
    margin-top: 37px;
    height: 30px;
    font-size: 26px;
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
  .company-content {
    margin-top: 20px;
    border-top: 1px solid #dbdbdb;
    .v-divider--inset:not(.v-divider--vertical) {
      margin-left: 0!important;
    }
    .v-divider--inset:not(.v-divider--vertical) {
      max-width: 100%;
    }
    &-title {
      font-size: 18px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      line-height: 22px;
      color: #242424;
    }
    &-date {
      height: 20px;
      margin-bottom: 10px;
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      line-height: 30px;
      color: #242424;
    }
    &-brief {
      font-size: 16px;
      font-family: SimSun;
      font-weight: 400;
      line-height: 22px;
      color: #242424;
    }
    &-btn {
      height: 19px;
      font-size: 16px;
      font-family: Source Han Sans CN;
      line-height: 20px;
      margin-bottom: 20px;
      > a {
        color: #ff9822;
      }
    }
  }
}
</style>