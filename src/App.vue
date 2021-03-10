<template>
  <v-app>
    <div app class="pa-0 ma-0 grey darken-4">
      <!-- -->
      <app-header></app-header>
    </div>
    <!-- 根据应用组件来调整你的内容 -->
    <v-main>
      <!-- 给应用提供合适的间距 -->
      <v-container class="pa-0" style="height: 100%">
        <!-- 如果使用 vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <div app class="black pt-23 pb-28">
      <app-footer></app-footer>
    </div>
    <v-btn
      fab
      large
      dark
      bottom
      left
      class="v-btn--example d-block d-sm-block d-md-none"
      @click.stop="drawer = !drawer"
    >
      <v-icon>mdi-share-variant</v-icon>
    </v-btn>
    <v-navigation-drawer
      class="drawer-menu"
      v-model="drawer"
      fixed
      height="100vh"
      temporary
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>菜单</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list dense>
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
                    v-for="(item, index) in brandMenuList"
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
                    v-for="item in brandMenuList"
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
      </v-list>

      <!-- <v-list outlined>
        <v-list-item>
          <router-link :to="{ name: 'AboutUs' }">{{
            $t("nav.aboutUs")
          }}</router-link>
        </v-list-item>
        <v-list-group no-action>
          <template v-slot:activator>
            <v-list-item-content
              :class="{ 'panel-active': $route.path.indexOf('/news/') > -1 }"
            >
              <v-list-item-title>{{ $t("nav.news") }}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="item in newsMenuList"
            :key="item.title"
            :to="{ name: item.router }"
          >
            <v-list-item-content>
              <v-list-item-title>{{ $t(`nav.${item.lan}`) }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group no-action>
          <template v-slot:activator>
            <v-list-item-content
              :class="{ 'panel-active': $route.path.indexOf('/brands/') > -1 }"
            >
              <v-list-item-title>{{ $t("nav.brands") }}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="item in brandMenuList"
            :key="item.title"
            :to="{ path: '/brands/' + item.id }"
          >
            <v-list-item-avatar tile>
              <v-img :src="item.avatar" contain></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group no-action>
          <template v-slot:activator>
            <v-list-item-content
              :class="{ 'panel-active': $route.path.indexOf('/authorization/') > -1 }"
            >
              <v-list-item-title>{{ $t("nav.authorized") }}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="item in brandMenuList"
            :key="item.title"
            :to="{ path: '/authorization/' + item.id }"
          >
            <v-list-item-avatar tile>
              <v-img :src="item.avatar" contain></v-img>
            </v-list-item-avatar>
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
      </v-list> -->
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import { getBrandsList } from "@/apis/index.js";
export default {
  name: "App",
  components: {
    appHeader: Header,
    appFooter: Footer,
    HelloWorld,
  },

  data: () => ({
    drawer: null,
    brandMenuList: [],
    newsMenuList: [
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
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
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
        _this.brandMenuList = res.data;
      });
    },
  },
};
</script>

<style scoped lang="scss">
.v-navigation-drawer__content {
  width: 100%;
}
.v-btn--example {
  position: fixed;
  top: 80%;
  right: 0;
  opacity: 0.6;
}
.drawer-menu {
  .panel-active {
    color: #ff9822;
  }
  .router-link-active {
    color: #ff9822;
  }
  a {
    color: #242424;
  }
  .v-list .v-list-item--active {
    color: #ff9822;
  }
}
</style>
