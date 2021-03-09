<template>
  <div class="home">
    <div class="carousel">
      <v-container class="pa-0 d-none d-sm-none d-md-flex"  >
        <v-carousel
          cycle
          hide-delimiter-background
          show-arrows-on-hover
          height="30%"
        >
          <v-carousel-item
            v-for="(banner, i) in bannerList"
            :key="i"
            :src="banner.banner"
            :to="{ path: `/brands/${banner.id}` }"
          >
          </v-carousel-item>
        </v-carousel>
      </v-container>
      <v-container class="pa-0 d-flex d-sm-flex d-md-none">
        <v-carousel
         hide-delimiters
          cycle
          :show-arrows="true"
          height="30%"
        >
          <v-carousel-item
            v-for="(banner, i) in bannerList"
            :key="i"
            :src="banner.banner"
            :to="{ path: `/brands/${banner.id}` }"
          >
          </v-carousel-item>
        </v-carousel>
      </v-container>
    </div>
    <div class="main">
      <v-container class="pa-0">
        <div class="mt-5">
          <div style="text-align: center">
            <div class="pet-title d-inline-flex">{{ $t("home.petFood") }}</div>
          </div>
          <v-container>
            <v-row class="pet-food">
              <v-col
                cols="12"
                sm="12"
                md="4"
                lg="4"
                xl="3"
                v-for="(item, idx) in foodList"
                :key="idx"
              >
                <v-hover v-slot="{ hover }">
                  <v-card
                    class="mx-auto"
                    color="white"
                    max-width="600"
                    outlined
                    :to="{ path: `/brands/${item.id}` }"
                  >
                    <v-img :src="item.img" width="380">
                      <v-expand-transition>
                        <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out v-card--reveal white--text text-center px-8"
                          style="height: 100%"
                          v-bind:style="{ 'background-color': item.randomBg }"
                        >
                          {{ $t("home." + item.briefLan) }}
                        </div>
                      </v-expand-transition>
                    </v-img>
                    <v-card-text class="pt-6" style="position: relative">
                      <div class="grey--text mb-2 prod-name">
                        {{ $t("home." + item.lan) }}
                      </div>
                      <div class="mb-2">
                        {{ $t("home." + item.introLan) }}
                      </div>
                    </v-card-text>
                  </v-card>
                </v-hover>
                <v-spacer></v-spacer>
              </v-col>
            </v-row>
          </v-container>
        </div>
        <div class="mt-5">
          <div style="text-align: center">
            <div class="pet-title d-inline-flex">
              {{ $t("home.petSnacks") }}
            </div>
          </div>
          <v-container>
            <v-row class="pet-snacks">
              <v-col
                cols="12"
                sm="12"
                md="4"
                lg="4"
                xl="3"
                v-for="(item, idx) in snacksList"
                :key="idx"
              >
                <v-hover v-slot="{ hover }">
                  <v-card
                    class="mx-auto"
                    color="white"
                    max-width="600"
                    outlined
                    :to="{ path: '/brands/' + item.id }"
                  >
                    <v-img :src="item.img" width="380">
                      <v-expand-transition>
                        <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out v-card--reveal white--text text-center px-8"
                          style="height: 100%"
                          v-bind:style="{ 'background-color': item.randomBg }"
                        >
                          {{ $t("home." + item.briefLan) }}
                        </div>
                      </v-expand-transition>
                    </v-img>
                    <v-card-text class="pt-6" style="position: relative">
                      <div class="grey--text title mb-2 prod-name">
                        {{ $t("home." + item.lan) }}
                      </div>
                      <div class="mb-2">
                        {{ $t("home." + item.introLan) }}
                      </div>
                    </v-card-text>
                  </v-card>
                </v-hover>
                <v-spacer></v-spacer>
              </v-col>
            </v-row>
          </v-container>
        </div>
        <div class="pet-can mt-5">
          <div style="text-align: center">
            <div class="pet-title d-inline-flex">{{ $t("home.petCan") }}</div>
          </div>
          <v-container>
            <v-row class="pet-can">
              <v-col
                cols="12"
                sm="12"
                md="4"
                lg="4"
                xl="3"
                v-for="(item, idx) in canList"
                :key="idx"
              >
                <v-hover v-slot="{ hover }">
                  <v-card
                    class="mx-auto"
                    color="white"
                    max-width="600"
                    outlined
                    :to="{ path: '/brands/' + item.id }"
                  >
                    <v-img :src="item.img" width="380">
                      <v-expand-transition>
                        <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out v-card--reveal white--text text-center px-8"
                          v-bind:style="{ 'background-color': item.randomBg }"
                          style="height: 100%"
                        >
                          {{ $t("home." + item.briefLan) }}
                        </div>
                      </v-expand-transition>
                    </v-img>
                    <v-card-text class="pt-6" style="position: relative">
                      <div class="grey--text title mb-2 prod-name">
                        {{ $t("home." + item.lan) }}
                      </div>
                      <div class="mb-2">
                        {{ $t("home." + item.introLan) }}
                      </div>
                    </v-card-text>
                  </v-card>
                </v-hover>
                <v-spacer></v-spacer>
              </v-col>
            </v-row>
          </v-container>
        </div>
        <div class="mt-5 mb-16">
          <div style="text-align: center">
            <div class="pet-title d-inline-flex">
              {{ $t("home.petHealth") }}
            </div>
          </div>
          <v-container>
            <v-row class="pet-healthcare">
              <v-col
                cols="12"
                sm="12"
                md="4"
                lg="4"
                xl="3"
                v-for="(item, idx) in healthCareList"
                :key="idx"
              >
                <v-hover v-slot="{ hover }">
                  <v-card
                    class="mx-auto"
                    color="white"
                    max-width="600"
                    outlined
                    :to="{ path: '/brands/' + item.id }"
                  >
                    <v-img :src="item.img" width="380">
                      <v-expand-transition>
                        <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out v-card--reveal white--text text-center px-8"
                          style="height: 100%"
                          v-bind:style="{ 'background-color': item.randomBg }"
                        >
                          {{ $t("home." + item.briefLan) }}
                        </div>
                      </v-expand-transition>
                    </v-img>
                    <v-card-text class="pt-6" style="position: relative">
                      <div class="grey--text title mb-2 prod-name">
                        {{ $t("home." + item.lan) }}
                      </div>
                      <div class="mb-2">
                        {{ $t("home." + item.introLan) }}
                      </div>
                    </v-card-text>
                  </v-card>
                </v-hover>
                <v-spacer></v-spacer>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
import { bannerList, productList } from "@/apis";
export default {
  name: "Home",
  data: () => ({
    bannerList: [],
    foodList: [],
    snacksList: [],
    canList: [],
    healthCareList: [],
    isMobile: localStorage.getItem('isMobile')
  }),
  mounted() {
    this.getBannerList();
    this.getProdList();
  },
  methods: {
    getBannerList: function () {
      let _this = this;
      bannerList().then((res) => {
        _this.bannerList = res.data;
      });
    },
    getProdList: function () {
      let _this = this;
      productList().then((res) => {
        console.log(res);
        _this.foodList = res.data.foodList;
        _this.snacksList = res.data.snacksList;
        _this.canList = res.data.canList;
        _this.healthCareList = res.data.healthCareList;
      });
    },
  },
};
</script>

<style lang="scss">
.carousel {
  background-color: #000;
  .row {
    margin: 0;
  }
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  position: absolute;
  width: 100%;
}

.pet-title {
  position: relative;
  margin: 0 auto;
  font-size: 30px;
  font-weight: bold;
  color: #242424;
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

.prod-name {
  position: relative;
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #242424 !important;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: -10px;
    width: 50px;
    height: 4px;
    background-color: #ff9822;
  }
}
.prod-intro {
  font-size: 20px;
  font-family: SimSun;
  line-height: 32px;
  color: #242424;
}
</style>
