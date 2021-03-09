<template>
  <v-main>
    <v-container>
      <div class="about-us">
        <div class="about-us-title d-inline-flex mb-4">关于我们</div>
        <p>
          天奇贸易营业的每一天，都在坚持为宠物们提供天然原材料制成的优质食品粮，尊崇天然的价值，立志成为进口宠物粮行业内的标杆传奇。
        </p>
        <p>
          天奇贸易（香港）有限公司于2017年在香港成立，自成立后天奇贸易秉承着提升宠物生活质量，改善宠物健康状况的理念，与国外各大宠物品牌商达成合作，致力于引进优质有保障的产品给每一位爱宠。
        </p>
        <p>
          天奇贸易为国内商家和养宠用户搭建了一个优质的进口宠物食品的跨境平台，同时也为更多的国外品牌提供合法正规的中国跨境销售渠道，帮助更多的国外品牌进入到中国宠物市场。
        </p>
      </div>
      <div class="acting-brands">
        <div class="acting-brands-title d-inline-flex mb-4">代理品牌</div>
        <v-tabs
          v-model="currentItem"
          show-arrows
          center-active
          slider-color="white"
        >
          <v-tab
            v-for="item in brandsList"
            :key="item.title"
            :href="'#tab-' + item.title"
          >
            {{ item.title }}
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="currentItem">
          <v-tab-item
            v-for="item in brandsList"
            :key="item.title"
            :value="'tab-' + item.title"
          >
            <v-card flat>
              <v-card-text class="brand-info">
                <h2>{{ item.title }}</h2>
                <div>
                  {{ $t("home." + item.introLan) }}
                </div>
                <div>
                  {{ $t("home." + item.briefLan) }}
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </div>
    </v-container>
  </v-main>
</template>

<script>
import { getBrandsList } from "@/apis";
export default {
  name: "AboutUs",
  data: () => ({
    currentItem: "tab-Web",
    brandsList: [],
  }),
  mounted() {
    this.getBrandsData();
  },
  methods: {
    addItem(item) {
      const removed = this.items.splice(0, 1);
      this.items.push(...this.more.splice(this.more.indexOf(item), 1));
      this.more.push(...removed);
      this.$nextTick(() => {
        this.currentItem = "tab-" + item;
      });
    },
    getBrandsData: function () {
      let _this = this;
      getBrandsList().then((res) => {
        _this.brandsList = res.data;
        console.log(_this.brandsList);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.about-us-title,
.acting-brands-title {
  position: relative;
  height: 30px;
  font-size: 22px;
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
.brand-info {
  line-height: 30px;
}
.acting-brands {
  .v-tab {
    font-size: 0.475em;
  }
  .v-tab--active {
    color: #ff9822!important;
  }
}
</style>