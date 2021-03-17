<template>
  <div>
    <v-container class="header pa-0 d-none d-sm-none d-md-block">
      <div
        class="logo float-left d-flex"
        @click="
          () => {
            this.$router.push('/');
          }
        "
      >
        <v-avatar tile class="mr-5">
          <v-img
            :src="require('@/assets/images/home/logo/logo@2x.png')"
          ></v-img>
        </v-avatar>
        <div class="company-name">
          <p class="mb-0 company-name_cn">天奇贸易（香港）有限公司</p>
          <p class="mb-0 mt-n1 company-name_en">
            Tianqi Trading (Hong Kong)Limited
          </p>
        </div>
      </div>
      <div class="nav float-right d-flex">
        <div :class="{ active: $route.path.indexOf('/aboutUs') > -1 }">
          <router-link :to="{ name: 'AboutUs' }">{{
            $t("nav.aboutUs")
          }}</router-link>
        </div>
        <v-menu open-on-hover bottom offset-y>
          <template v-slot:activator="{ on, attrs }">
            <div
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
              :class="{ active: $route.path.indexOf('/news/') > -1 }"
            >
              {{ $t("nav.news") }}
            </div>
          </template>

          <v-list dense>
            <v-list-item-group color="primary">
              <v-list-item :to="{ name: 'EnterpriseNews' }">
                <v-list-item-title>
                  {{ $t(`nav.enterpriseBulletin`) }}</v-list-item-title
                >
              </v-list-item>
              <v-list-item :to="{ name: 'CompanyNews' }">
                <v-list-item-title>{{
                  $t(`nav.companyNews`)
                }}</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
        <v-menu open-on-hover bottom offset-y class="head-menu">
          <template v-slot:activator="{ on, attrs }">
            <div
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
              :class="{ active: $route.path.indexOf('/brands/') > -1 }"
            >
              {{ $t("nav.brands") }}
            </div>
          </template>

          <v-list dense class="head-menu-list">
            <v-list-item-group color="primary">
              <v-list-item
                v-for="(item, index) in brandList"
                :key="index"
                :to="{ path: '/brands/' + item.id }"
              >
                <v-list-item-avatar tile>
                  <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>
                <v-list-item-title>{{ item.title }} </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
        <div :class="{ active: $route.path.indexOf('/authorization') > -1 }">
          <router-link :to="{ name: 'Authorization' }">{{
            $t("nav.authorized")
          }}</router-link>
        </div>
        <div
          :class="{ active: $route.path.indexOf('/securityVerification') > -1 }"
        >
          <router-link :to="{ name: 'SecurityVerification' }">{{
            $t("nav.protect")
          }}</router-link>
        </div>
        <div :class="{ active: $route.path.indexOf('/joinUs') > -1 }">
          <router-link :to="{ name: 'JoinUs' }">{{
            $t("nav.join")
          }}</router-link>
        </div>
        <div class="language ml-16">
          <a
            class="px-1"
            v-bind:class="{ 'language-active': language == 'cn' }"
            @click="languageChange('cn')"
            >{{ $t("nav.cn") }}</a
          ><a
            class="px-1"
            v-bind:class="{ 'language-active': language == 'en' }"
            @click="languageChange('en')"
            >EN</a
          >
        </div>
      </div>
    </v-container>
    <v-container class="d-md-none d-sm-flex d-flex header pa-0">
      <div class="menu-area" @click.stop="drawer = !drawer">
        <span class="icon-menu"></span>
      </div>
      <div
        class="d-flex"
        style="margin-left: 30px; padding: 15px 0"
        @click="
          () => {
            this.$router.push('/');
          }
        "
      >
        <v-avatar tile class="mr-3" size="30">
          <v-img
            :src="require('@/assets/images/home/logo/logo@2x.png')"
          ></v-img>
        </v-avatar>
        <div class="company-name">
          <div class="company-name_cn">天奇贸易（香港）有限公司</div>
          <div class="mt-n1 company-name_en">
            Tianqi Trading (Hong Kong)Limited
          </div>
        </div>
      </div>
    </v-container>
    <v-navigation-drawer
      class="drawer-menu"
      v-model="drawer"
      fixed
      temporary
      color="#ff9822"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>菜单</v-list-item-title>
        </v-list-item-content>
        <v-list-item-icon @click.stop="drawer = !drawer">
          <v-icon color="white">mdi-close-circle</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <!-- <v-list dense>
        <v-expansion-panels v-model="panel" accordion>
          <v-expansion-panel>
            <v-expansion-panel-header hide-actions>
              <router-link :to="{ name: 'AboutUs' }">{{
                $t("nav.aboutUs")
              }}</router-link>
            </v-expansion-panel-header>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header
              :class="{ 'panel-active': $route.path.indexOf('/news/') > -1 }"
            >
              {{ $t("nav.news") }}
            </v-expansion-panel-header>
            <v-expansion-panel-content eager>
              <v-list dense class="head-menu-list">
                <v-list-item-group color="primary">
                  <v-list-item
                    v-for="item in newsMenuList"
                    :key="item.title"
                    :to="{ name: item.router }"
                  >
                    <v-list-item-title>
                      {{ $t(`nav.${item.lan}`) }}</v-list-item-title
                    >
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header
              :class="{ 'panel-active': $route.path.indexOf('/brands/') > -1 }"
            >
              {{ $t("nav.brands") }}
            </v-expansion-panel-header>
            <v-expansion-panel-content eager>
              <v-list dense class="head-menu-list">
                <v-list-item-group color="primary">
                  <v-list-item
                    v-for="(item, index) in brandList"
                    :key="index"
                    :to="{ path: '/brands/' + item.id }"
                  >
                    <v-list-item-avatar tile>
                      <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-title>{{ item.title }} </v-list-item-title>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header
              :class="{
                'panel-active': $route.path.indexOf('/authorization') > -1,
              }"
            >
              {{ $t("nav.authorized") }}
            </v-expansion-panel-header>
            <v-expansion-panel-content eager>
              <v-list dense class="head-menu-list">
                <v-list-item-group color="primary">
                  <v-list-item
                    v-for="item in brandList"
                    :key="item.title"
                    :to="{ path: '/authorization/' + item.id }"
                  >
                    <v-list-item-avatar tile>
                      <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-title>{{ item.title }} </v-list-item-title>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header hide-actions>
              <router-link :to="{ name: 'SecurityVerification' }">{{
                $t("nav.protect")
              }}</router-link>
            </v-expansion-panel-header>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header hide-actions>
              <router-link :to="{ name: 'JoinUs' }">{{
                $t("nav.join")
              }}</router-link>
            </v-expansion-panel-header>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-list> -->

      <v-list subheader class="pa-0">
        <v-list-item>
          <router-link :to="{ name: 'AboutUs' }">{{
            $t("nav.aboutUs")
          }}</router-link>
        </v-list-item>
        <v-list-group no-action append-icon="mdi-arrow-down-drop-circle-outline">
          <template v-slot:activator>
            <v-list-item-content
              :class="{ 'panel-active': $route.path.indexOf('/news/') > -1 }"
            >
              <v-list-item-title>{{ $t("nav.news") }}</v-list-item-title>
            </v-list-item-content>
            <!-- <v-list-item-icon>
              <v-icon>mdi-play-circle-outline</v-icon>
            </v-list-item-icon> -->
          </template>

          <v-list-item
            v-for="item in newsList"
            :key="item.title"
            :to="{ name: item.router }"
          >
            <v-list-item-content>
              <v-list-item-title>{{ $t(`nav.${item.lan}`) }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group no-action append-icon="mdi-arrow-down-drop-circle-outline">
          <template v-slot:activator>
            <v-list-item-content
              :class="{ 'panel-active': $route.path.indexOf('/brands/') > -1 }"
            >
              <v-list-item-title>{{ $t("nav.brands") }}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="item in brandList"
            :key="item.title"
            :to="{ path: '/brands/' + item.id }"
          >
            <!-- <v-list-item-avatar tile>
              <v-img :src="item.avatar" contain></v-img>
            </v-list-item-avatar> -->
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group no-action append-icon="mdi-arrow-down-drop-circle-outline"> 
        <!-- <v-list-group no-action append-icon="mdi-expand_more">  -->
          <template v-slot:activator>
            <v-list-item-content
              :class="{
                'panel-active': $route.path.indexOf('/authorization/') > -1,
              }"
            >
              <v-list-item-title>{{ $t("nav.authorized") }}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="item in brandList"
            :key="item.title"
            :to="{ path: '/authorization/' + item.id }"
          >
            <!-- <v-list-item-avatar tile>
              <v-img :src="item.avatar" contain></v-img>
            </v-list-item-avatar> -->
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-item>
          <router-link :to="{ name: 'SecurityVerification' }">{{
            $t("nav.protect")
          }}</router-link>
        </v-list-item>
        <v-list-item>
          <router-link :to="{ name: 'JoinUs' }">{{
            $t("nav.join")
          }}</router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import { getBrandsList } from "@/apis/index.js";
export default {
  name: "Header",
  data: () => ({
    brandList: [],
    newsList: [
      {
        title: "企业公告",
        lan: "enterpriseBulletin",
        router: "EnterpriseNews",
      },
      { title: "公司动态", lan: "companyNews", router: "CompanyNews" },
    ],
    language: "",
    drawer: null,
    newsList: [
      {
        title: "企业公告",
        lan: "enterpriseBulletin",
        router: "EnterpriseNews",
      },
      {
        title: "公司动态",
        lan: "companyNews",
        router: "CompanyNews",
      },
    ],
    panel: "",
  }),
  mounted() {
    this.getBrands();
  },
  methods: {
    languageChange: function (type) {
      localStorage.setItem("language", type);
      this.$i18n.locale = type;
      this.language = type;
    },
    newsType: function (type) {
      if (type == "companyNews") {
        this.$router.push("/companyNews");
      } else if (type == "enterpriseBulletin") {
        this.$router.push("/enterpriseNews");
      }
    },
    getBrands: function () {
      let _this = this;
      getBrandsList().then((res) => {
        _this.brandList = res.data;
      });
    },
  },
};
</script>
<style lang="scss">
@media screen and (min-width: 960px) {
  .header {
    color: #fff;
    .active {
      background-color: #ff9822;
    }
    .router-link-active {
      color: #ff9822;
    }
    .nav {
      height: 80px;
      line-height: 58px;
      .v-menu + div {
        padding: 12px;
      }
      > div {
        a {
          display: inline-block;
          height: 100%;
          padding: 12px;
        }
        &:hover:not(:last-child) {
          background-color: #ff9822;
        }
      }
      a {
        color: #fff;
        text-decoration: none;
      }
    }
    .logo {
      height: 80px;
      padding: 15px 0;
    }

    .company-name {
      font-size: 20px;

      &_en {
        font-family: Source Han Sans CN;
        font-size: 15px;
      }
    }

    .language {
      a + a {
        &:before {
          content: "";
          display: inline-block;
          width: 0;
          margin-right: 6px;
          font-size: 0;
          padding: 8px 0 4px 0;
          border-left: 1px solid transparent;
          background-color: #fff;
        }
      }
    }
  }
}

@media screen and (max-width: 959px) {
  .header {
    height: 60px;
    color: #fff;
    .active {
      background-color: #ff9822;
    }
    .router-link-active {
      color: #ff9822;
    }
    .nav {
      height: 80px;
      line-height: 58px;
      .v-menu + div {
        padding: 12px;
      }
      > div {
        a {
          display: inline-block;
          height: 100%;
          padding: 12px;
        }
        &:hover:not(:last-child) {
          background-color: #ff9822;
        }
      }
      a {
        color: #fff;
        text-decoration: none;
      }
    }
    .logo {
      height: 80px;
      padding: 15px 0;
    }

    .company-name {
      font-size: 14px;

      &_en {
        font-family: Source Han Sans CN;
        font-size: 10px;
      }
    }
    .menu-area {
      width: 60px;
      line-height: 70px;
      text-align: center;
      background-color: #ff9822;
    }

    .icon-menu {
      display: inline-block;
      width: 30px;
      height: 3px;
      padding: 6px 0;
      border-top: 3px solid;
      border-bottom: 3px solid;
      border-color: #fff;
      background-color: #fff;
      background-clip: content-box;
      box-sizing: content-box;
    }

    .language {
      a + a {
        &:before {
          content: "";
          display: inline-block;
          width: 0;
          margin-right: 6px;
          font-size: 0;
          padding: 8px 0 4px 0;
          border-left: 1px solid transparent;
          background-color: #fff;
        }
      }
    }
  }
}

.head-menu-list {
  .v-image__image {
    background-size: contain !important;
  }
  // .v-list-item__title {
  //   padding: 10% 0;
  //   > a {
  //     padding: 25% 0 !important;
  //   }
  // }
}

.language-active {
  height: 12px;
  font-family: Source Han Sans CN;
  color: #8c8c8c !important;
}

.drawer-menu {
  .panel-active {
    color: #c36900;
  }
  .router-link-active {
    color: #c36900;
  }
  a {
    color: #fff;
  }
  .v-list-item > a,
  .v-list-item__title {
    color: #fff;
  }

  .v-list-group--active {
    background-color: #c36900;
  }
  .v-list-item {
    border-bottom: 1px solid #fff;
  }
  .v-list-item.v-list-item--link {
    color: #ff9822;
    border-bottom: 1px solid #fff;
  }

  .v-list-item--active.v-list-item.v-list-item--link {
    background-color: #fff;
    .v-list-item__title {
      color: #ff9822;
    }
  }

  .v-list-group__header.v-list-item.v-list-item--active.v-list-item--link {
    background-color: #c36900;
    .v-list-item__title {
      color: #fff;
    }
  }

  .v-list-item__icon.v-list-group__header__append-icon>i {
    color: #fff;
  }
}
</style>