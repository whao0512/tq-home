<template>
  <v-container class="authorization">
    <v-tabs vertical class="d-none d-sm-none d-md-block">
      <v-tab v-for="(item, index) in brandList" :key="index">
        <v-avatar tile left class="mr-2">
          <v-img :src="item.avatar"></v-img>
        </v-avatar>
        <div class="authorization-brands">{{ item.title }}</div>
      </v-tab>
      <v-tab-item v-for="(item, index) in brandList" :key="index">
        <v-card flat>
          <p class="authorization-brands-title">
            天奇贸易官方授权如下商家经销 <span>{{ item.title }}</span
            >优质产品
          </p>
          <div class="authorization-list">
            <v-container>
              <v-row>
                <v-col
                  v-for="(data, idx) in item.authorizedList"
                  :key="idx"
                  md="3"
                  class="authorization-brands-item"
                  ><a :href="data.link">{{ data.name }}</a></v-col
                >
              </v-row>
            </v-container>
          </div>
          <div class="authorized-img-title mt-6">授权证书</div>
          <div class="authorized-img">
            <v-img width="355" :src="item.authorizedImg"></v-img>
          </div>
        </v-card>
      </v-tab-item>
    </v-tabs>

    <div class="d-block d-sm-block d-md-none">
      <div class="authorized-img-title">授权证书</div>
      <div class="authorized-img">
        <v-img width="100%" :src="authorizedImg"></v-img>
      </div>
      <p class="authorization-brands-title">
        天奇贸易官方授权如下商家经销 <span>{{ brandName }}</span
        >优质产品
      </p>
      <div class="authorization-list">
        <v-container>
          <v-row>
            <v-col
              v-for="(data, idx) in authorizedList"
              :key="idx"
              cols="12"
              sm="12"
              xs="12"
              class="authorization-brands-item"
              ><a :href="data.link">{{ data.name }}</a></v-col
            >
          </v-row>
        </v-container>
      </div>
    </div>
  </v-container>
</template>

<script>
import { getBrandsList } from "@/apis";
export default {
  name: "Authorization",
  data: () => ({
    brandList: [],
    currentBrand: "",
    id: "",
    brandName: "",
    authorizedList: [],
    authorizedImg: "",
  }),
  watch: {
    $route(to, from) {
      this.id = to.params.type;
      return this.getBrandsData();
    },
  },
  mounted() {
    this.getBrandsData();
  },
  methods: {
    getBrandsData: function () {
      let _this = this;
      getBrandsList().then((res) => {
        _this.brandList = res.data;
        if (_this.id || _this.$route.params.type) {
          for (let i = 0; i < res.data.length; i++) {
            if (res.data[i]["id"] === (_this.id || _this.$route.params.type)) {
              _this.brandName = res.data[i]["title"];
              _this.authorizedImg = res.data[i]["authorizedImg"];
              _this.authorizedList = res.data[i]["authorizedList"]
                ? res.data[i]["authorizedList"]
                : [];
            }
          }
        }
      });
    },
  },
};
</script>

<style lang="scss">
@media (min-width: 960px) {
  .authorization {
    .v-tab.v-tab {
      justify-content: space-around;
      height: 60px !important;
      color: #242424;
      border-bottom: 1px dashed #dbdbdb;
      flex: 1;
    }
    .v-image__image {
      background-size: contain !important;
    }
    .v-slide-group__wrapper {
      border: 1px solid #e6e4e5;
      box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.16);
      border-radius: 0px 0px 4px 4px;
      margin-right: 20px;
    }
    .v-tabs-slider-wrapper {
      display: none;
    }
    .v-tab--active {
      background-color: #ff9822;
    }
    &-brands {
      text-align: left;
      flex: 2;
    }
    &-brands-title {
      font-size: 30px;
      font-weight: bold;
      color: #242424;
      span {
        color: #ff9822;
        font-weight: bold;
      }
    }
    .v-item-group[role="tablist"] {
      max-height: 490px;
    }
    &-brands-item {
      a {
        color: #707070;
        font-weight: 500;
        line-height: 20px;
        font-size: 20px;
        &:hover {
          color: #ff9822;
        }
      }
    }
    .authorized-img {
      width: 500px;
      height: 600px;
      padding: 49px 72px;
      margin-top: 40px;
      margin-bottom: 100px;
      background: #ffffff;
      border: 1px solid #dbdbdb;
      &-title {
        font-size: 30px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        line-height: 51px;
        color: #242424;
      }
    }
  }
}

@media screen and (max-width: 959px) {
  .authorization {
    &-brands {
      text-align: left;
      flex: 2;
    }
    &-brands-title {
      font-size: 20px;
      font-weight: bold;
      color: #242424;
      span {
        color: #ff9822;
        font-weight: bold;
      }
    }
    &-brands-item {
      a {
        color: #707070;
        font-weight: 500;
        line-height: 20px;
        font-size: 16px;
        &:hover {
          color: #ff9822;
        }
      }
    }
    .authorized-img {
      padding: 12px 20px;
      margin-bottom: 30px;
      background: #ffffff;
      border: 1px solid #dbdbdb;
      &-title {
        font-size: 20px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        line-height: 51px;
        color: #242424;
      }
    }
  }
}
</style>