<template>
  <v-container class="header pa-0 d-none d-sm-block">
    <div
      class="logo float-left d-flex"
      @click="
        () => {
          this.$router.push('/');
        }
      "
    >
      <v-avatar tile class="mr-5">
        <v-img :src="require('@/assets/images/home/logo/logo@2x.png')"></v-img>
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
              <v-list-item-title>{{ $t(`nav.companyNews`)}}</v-list-item-title>
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
        <router-link :to="{ name: 'JoinUs' }">{{ $t("nav.join") }}</router-link>
      </div>
      <div class="language">
        <a class="px-1" @click="languageChange('cn')">{{ $t("nav.cn") }}</a
        ><a class="px-1" @click="languageChange('en')">EN</a>
      </div>
    </div>
  </v-container>
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
  }),
  mounted() {
    this.getBrands();
  },
  methods: {
    languageChange: function (type) {
      localStorage.setItem("language", type);
      this.$i18n.locale = type;
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
</style>