import Vue from "vue";
import VueI18n from "vue-i18n";
import en from '@/locales/en';
import cn from '@/locales/cn';

Vue.use(VueI18n);

console.log(cn)

const messages = {
  cn: cn,
  en: en,
};

const i18n = new VueI18n({
  locale:localStorage.getItem("language") || 'cn',
  fallbackLocale: "en",
  messages,
});

export default i18n;