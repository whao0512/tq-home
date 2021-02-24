<template>
  <v-container class="authorization">
    <v-tabs vertical>
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
                  ><a :href="data.linke">{{ data.name }}</a></v-col
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
  </v-container>
</template>

<script>
import { getBrandsList } from "@/apis";
export default {
  name: "Authorization",
  data: () => ({
    brandList: [],
    currentBrand: "",
  }),
  mounted() {
    this.getBrandsData();
  },
  methods: {
    getBrandsData: function () {
      let _this = this;
      getBrandsList().then((res) => {
        _this.brandList = res.data;
      });
    },
  },
};
</script>

<style lang="scss">
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
</style>