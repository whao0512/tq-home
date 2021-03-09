import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/news/News.vue'),
    children: [
      {
        path: '/news/company',
        name: 'CompanyNews',
        component: () => import('../views/news/CompanyNews.vue'),
      },
      {
        path: '/news/enterprise',
        name: 'EnterpriseNews',
        component: () => import('../views/news/EnterpriseNews.vue')
      },
      {
        path: '/news/newsDetail/:id',
        name: 'NewsDetail',
        component: () => import('../views/news/NewsDetail.vue')
      },
    ]
  },
  {
    path: '/brands/:type',
    name: 'Brands',
    component: () => import('../views/Brands.vue')
  },
  {
    path: '/aboutUs',
    name: 'AboutUs',
    component: () => import('../views/AboutUs.vue')
  },
  {
    path: '/securityVerification',
    name: 'SecurityVerification',
    component: () => import('../views/SecurityVerification.vue')
  },
  {
    path: '/authorization/:type',
    name: 'Authorization',
    component: () => import('../views/Authorization.vue')
  },
  {
    path: '/securityVertification',
    name: 'SecurityVertification',
    component: () => import('../views/SecurityVerification.vue')
  },
  {
    path: '/joinUs',
    name: 'JoinUs',
    component: () => import('../views/JoinUs.vue')
  },
  {
    path: '/layout',
    name: 'Layout',
    component: () => import('../views/Layout.vue')
  }
]

const router = new VueRouter({
  routes
})

router.afterEach(route=> {
  window.scrollTo(0, 0)
})

export default router
