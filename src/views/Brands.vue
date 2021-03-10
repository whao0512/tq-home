<template>
  <v-main class="brand">
    <div class="brand-hd" dark>
      <v-container class="pa-0">
        <v-img width="100%" height="100%" :src="brandImg"></v-img>
      </v-container>
    </div>

    <v-container>
      <div class="brand-info d-md-flex d-sm-block d-block">
        <div>
          <div class="mb-6 brand-info-name d-inline-flex">{{ brandName }}</div>
          <div class="brand-info-brief">
            {{ brandIntro ? $t("home." + brandIntro) : "" }}
            {{ brandBrief ? $t("home." + brandBrief) : "" }}
          </div>
        </div>
        <div class="brand-info-logo">
          <v-img width="180px" height="180px" :src="brandLogo"></v-img>
        </div>
      </div>
      <div class="brand-relate mt-6 d-none d-sm-none d-md-block">
        <div class="mb-6 brand-info-name d-inline-flex">相关资料下载</div>
        <div class="brand-info-brief">
          {{ brandName }}主图、详情页、宣传图等资料下载
          <div class="mt-3">
            <v-btn class="down-btn">点击下载</v-btn>
          </div>
        </div>
      </div>
      <div class="brand-hot">
        <div class="brand-info-name d-inline-flex">热销产品</div>
        <v-container>
          <div
            class="brand-hot-type d-none d-sm-none d-md-block"
            v-for="item in prodList"
            :key="item.title"
          >
            <div class="brand-hot-title mt-5">{{ item.nameCn }}</div>
            <div class="brand-hot-info">{{ item.introCn }}</div>
            <v-row class="brand-hot-img">
              <v-col md="3" sm="12" v-for="(prod, idx) in item.list" :key="idx">
                <v-img :src="prod.img"></v-img>
                <div class="mt-5 text-center">{{ prod.name }}</div>
              </v-col>
              <v-spacer></v-spacer>
            </v-row>
          </div>
          <div
            class="brand-hot-type d-block d-sm-block d-md-none"
            v-for="(item, index) in prodList"
            :key="index"
          >
            <div class="brand-hot-title mt-5">{{ item.nameCn }}</div>
            <div class="brand-hot-info">{{ item.introCn }}</div>
            <v-carousel hide-delimiters :show-arrows="true" height="30%">
              <v-carousel-item
                v-for="(prod, idx) in item.list"
                :key="idx"
                :src="prod.img"
                :value="prod.name"
              >
                <div>{{ prod.name }}</div>
              </v-carousel-item>
            </v-carousel>
          </div>
        </v-container>
      </div>
    </v-container>
  </v-main>
</template>

<script>
import { getBrandsList } from "@/apis";
export default {
  name: "Brands",
  data() {
    return {
      prodList: [],
      brandName: "",
      brandIntro: "",
      brandBrief: "",
      brandLogo: "",
      brandImg: "",
      id: this.$route.params.type,
    };
  },
  mounted() {
    this.getBrandsData();
  },

  watch: {
    $route(to, from) {
      this.id = to.params.type;
      return this.getBrandsData();
    },
  },
  methods: {
    getBrandsData: function () {
      let _this = this;
      getBrandsList().then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i]["id"] === _this.id) {
            _this.brandName = res.data[i]["title"];
            _this.brandIntro = res.data[i]["introLan"];
            _this.brandBrief = res.data[i]["briefLan"];
            _this.brandLogo = res.data[i]["logoMid"];
            _this.brandImg = res.data[i]["banner"];
            _this.prodList = res.data[i]["product"]
              ? res.data[i]["product"]
              : [];
          }
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@media (min-width: 960px) {
  .brand-hd {
    position: relative;
    background-color: #000;
  }

  .brand-info-name {
    position: relative;
    font-size: 24px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    line-height: 50px;
    color: #2b2b2b;
    &:after {
      position: absolute;
      bottom: 4px;
      left: 0;
      content: "";
      height: 4px;
      width: 100%;
      background-color: #ff9822;
    }
  }

  .brand-info-brief {
    font-size: 16px;
    font-family: SimSun;
    line-height: 32px;
    color: #242424;
  }

  .brand-hot {
    margin-top: 24px;
    &-title {
      padding-bottom: 12px;
      margin-bottom: 20px;
      font-size: 24;
      font-weight: 600;
      color: #2b2b2b;
      text-align: center;
      border-bottom: 1px solid #dbdbdb;
    }
    &-info {
      margin-bottom: 20px;
    }
    &-type {
      border-bottom: 1px solid #dbdbdb;
    }
  }

  .down-btn {
    width: 90px;
    height: 30px;
    background: linear-gradient(191deg, #ff8800 0%, #ffb664 100%);
    box-shadow: 0px 3px 6px rgba(39, 29, 18, 0.2);
    border-radius: 2px;
    color: #fff;
  }
  .brand-info {
    margin-top: 30px;
  }
}
@media (max-width: 959px) {
  .brand-hd {
    position: relative;
    background-color: #000;
  }

  .brand-info-name {
    position: relative;
    font-size: 24px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    line-height: 50px;
    color: #2b2b2b;
    &:after {
      position: absolute;
      bottom: 4px;
      left: 0;
      content: "";
      height: 4px;
      width: 100%;
      background-color: #ff9822;
    }
  }

  .brand-info-brief {
    font-size: 16px;
    font-family: SimSun;
    line-height: 30px;
    color: #242424;
  }

  .brand-info-logo {
    > div {
      margin: 0 auto;
    }
  }
  .brand-hot {
    margin-top: 20px;
    &-title {
      padding-bottom: 12px;
      font-size: 24px;
      font-weight: 600;
      color: #2b2b2b;
      text-align: center;
    }
    &-info {
      margin-bottom: 20px;
      line-height: 30px;
    }
    .v-responsive__content {
      > div {
        width: 100%;
        text-align: center;
        font-weight: bold;
        color: #242424;
        font-size: 14px;
      }
    }
    &-type {
      padding-bottom: 10px;
      border-bottom: 1px solid #dbdbdb;
    }
  }

  .down-btn {
    width: 90px;
    height: 30px;
    background: linear-gradient(191deg, #ff8800 0%, #ffb664 100%);
    box-shadow: 0px 3px 6px rgba(39, 29, 18, 0.2);
    border-radius: 2px;
    color: #fff;
  }
  .brand-info {
    margin-top: 10px;
  }
}
</style>