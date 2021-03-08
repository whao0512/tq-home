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
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    appHeader: Header,
    appFooter: Footer,
    HelloWorld,
  },

  data: () => ({}),

  mounted() {
    if (this._isMobile()) {
      localStorage.setItem('isMobile', true)
    } else {
      localStorage.setItem('isMobile', false)
    }
  },

  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
  },
};
</script>
