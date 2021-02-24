<template>
  <v-container>
    <div v-html="title" class="title"></div>
    <div v-html="date" class="date"></div>
    <div v-html="detail"></div>
  </v-container>
</template>

<script>
import { companyNews, enterpriseNews } from "@/apis";
export default {
  name: "newsDetail",
  data() {
    return {
      title: "",
      date: "",
      detail: "",
    };
  },
  mounted() {
    this.getCompanyNews();
    this.getEnterpriseNews();
  },
  methods: {
    getCompanyNews() {
      let _this = this;
      companyNews().then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          if (_this.$route.params.id === res.data[i]["id"]) {
            _this.title = res.data[i]["title"];
            _this.date = res.data[i]["date"];
            _this.detail = res.data[i]["detail"];
            break;
          }
        }
      });
    },
    getEnterpriseNews() {
      let _this = this;
      enterpriseNews().then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          if (_this.$route.params.id === res.data[i]["id"]) {
            _this.title = res.data[i]["title"];
            _this.date = res.data[i]["date"];
            _this.detail = res.data[i]["detail"];
            break;
          }
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
.title {
  font-size: 20px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  line-height: 40px;
  color: #242424;
  text-align: center;
}
.date {
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #242424;
  text-align: center;
}
</style>