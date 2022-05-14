import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const InsuranceStart = () =>
  import(
    /* webpackChunkName: "group-insurance" */ './components/InsuranceProject/InsuranceStart.vue'
  )

const InsuranceCalculate = () =>
  import(
    /* webpackChunkName: "group-insurance" */ './components/InsuranceProject/InsuranceCalculate'
  )

const InsurancePreview = () =>
  import(
    /* webpackChunkName: "group-insurance" */ './components/InsuranceProject/InsurancePreview'
  )
const ErrorPage = () =>
  import(/* webpackChunkName: "group-errors" */ './components/ErrorPage')

const routes = [
  { path: '/', component: InsuranceStart },
  {
    path: '/calculate',
    component: InsuranceCalculate,
  },
  {
    path: '/preview',
    component: InsurancePreview,
  },
  {
    path: '/error',
    component: ErrorPage,
  },
  { path: '*', component: InsuranceStart },
]

const router = new VueRouter({
  routes, // short for `routes: routes`
})

export default router
