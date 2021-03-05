// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })


import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const routes = [{
    path: '/',
    redirect: '/information'
},
{
    path: '/information',
    component: () => import('../views/Information/index.vue'),
    meta: {
        title:"首页",
        tx:1
    }
},
{
    path: '/patientBasics',
    name: '基本信息',
    component: () => import('../views/Information/PatientBasics.vue'),
    meta: {
        title:"基本信息",
        tx:2
    }
},
{
    path: '/bodyInfo',
    name: '体征信息',
    component: () => import('../views/Information/BodyInfo.vue'),
    meta: {
        title:"体征信息",
        tx:3
    }
},
{
    path: '/lifeInfo',
    name: '生活方式',
    component: () => import('../views/Information/LifeInfo.vue'),
    meta: {
        title:"生活方式",
        tx:4
    }
},
{
    path: '/diseaseinfo',
    name: '疾病信息',
    component: () => import('../views/Information/Diseaseinfo.vue'),
    meta: {
        title:"疾病信息",
        tx:5
    }
},
{
    path: '/admittanceInfo',
    name: '资格准入信息',
    component: () => import('../views/Information/AdmittanceInfo.vue'),
    meta: {
        title:"资格准入信息",
        tx:6
    }
},
{
    path: '/treatmentInfo',
    name: '待遇信息',
    component: () => import('../views/Information/TreatmentInfo.vue'),
    meta: {
        title:"待遇信息",
        tx:7
    }
},
{
    path: '/payInfo',
    name: '费用结算信息',
    component: () => import('../views/Information/PayInfo.vue'),
    meta: {
        title:"费用结算信息",
        tx:8
    }
},
{
    path: '/outpatientRecords',
    name: '门诊记录',
    component: () => import('../views/Information/OutpatientRecords.vue'),
    meta: {
        title:"门诊记录",
        tx:9
    }
},
{
    path: '/hospitalRecords',
    name: '住院记录',
    component: () => import('../views/Information/HospitalRecords.vue'),
    meta: {
        title:"住院记录",
        tx:10
    }
},
{
    path: '/prescriptionRecords',
    name: '处方记录',
    component: () => import('../views/Information/PrescriptionRecords.vue'),
    meta: {
        title:"处方记录",
        tx:11
    }
},
{
    path: '/surveyReport',
    name: '检验报告',
    component: () => import('../views/Information/SurveyReport.vue'),
    meta: {
        title:"检验报告",
        tx:12
    }
},
{
    path: '/inspectionReport',
    name: '检查报告',
    component: () => import('../views/Information/InspectionReport.vue'),
    meta: {
        title:"检查报告",
        tx:13
    }
},

]

const router = new VueRouter({
    // // 路由模式：hash(默认)，history模式
    // mode: 'history',
    // base:'/demo/',
    // // 修改路由高亮样式，默认值为'router-link-active'
    // linkActiveClass: 'active',
    routes
})

export default router