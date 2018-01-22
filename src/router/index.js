import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_production')
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/404', component: _import('404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: _import('dashboard/index')
    }]
  },

  {
    path: '/workSpace',
    component: Layout,
    redirect: '/workSpace/funcSetting',
    name: 'workSpace',
    meta: { title: '工作台', icon: 'example' },
    children: [
      {
        path: 'funcSetting',
        name: 'funcSetting',
        component: _import('workSpace/funcSetting/index'),
        meta: { title: '前端功能设置', icon: 'example' }
      },
      {
        path: 'operationRecord',
        name: 'operationRecord',
        component: _import('workSpace/operationRecord/index'),
        meta: { title: '用户操作记录', icon: 'example' }
      },
      {
        path: 'manuallyCoin',
        name: 'manuallyCoin',
        component: _import('workSpace/manuallyCoin/index'),
        meta: { title: '手动提币功能', icon: 'example' }
      }
    ]
  },
  {
    path: '/userManage',
    component: Layout,
    redirect: '/userManage/basicInfo',
    name: 'userManage',
    meta: { title: '用户管理', icon: 'table' },
    children: [
      {
        path: 'basicInfo',
        name: 'basicInfo',
        redirect: '/userManage/basicInfo/manageList',
        component: _import('userManage/basicInfo/index'),
        meta: { title: '基本信息', icon: 'table' },
        children: [
          {
            path: 'manageList',
            name: 'manageList',
            meta: { title: '信息列表', icon: 'table' },
            component: _import('userManage/basicInfo/manageList/index')
          },
          {
            path: 'changePassword',
            name: 'changePassword',
            meta: { title: '密码修改', icon: 'table' },
            component: _import('userManage/basicInfo/changePassword/index')
          },
          {
            path: 'changePhone',
            name: 'changePhone',
            meta: { title: '手机修改', icon: 'table' },
            component: _import('userManage/basicInfo/changePhone/index')
          },
          {
            path: 'frozenAccount',
            name: 'frozenAccount',
            meta: { title: '账户冻结', icon: 'table' },
            component: _import('userManage/basicInfo/frozenAccount/index')
          },
          {
            path: 'lockRecord',
            name: 'lockRecord',
            meta: { title: '锁仓记录', icon: 'table' },
            component: _import('userManage/basicInfo/lockRecord/index')
          },
          {
            path: 'rechargeRecord',
            name: 'rechargeRecord',
            meta: { title: '充值记录', icon: 'table' },
            component: _import('userManage/basicInfo/rechargeRecord/index')
          },
          {
            path: 'withDrawalsRecord',
            name: 'withDrawalsRecord',
            meta: { title: '提币记录', icon: 'table' },
            component: _import('userManage/basicInfo/withDrawalsRecord/index')
          }
        ]
      }
    ]
  },
  {
    path: '/dataCenter',
    component: Layout,
    redirect: '/dataCenter/totalData',
    name: 'dataCenter',
    meta: { title: '数据中心', icon: 'wallet' },
    children: [
      {
        path: 'totalData',
        name: 'totalData',
        component: _import('dataCenter/totalData/index'),
        meta: { title: '总数据', icon: 'wallet' }
      },
      {
        path: 'dayData',
        name: 'dayData',
        component: _import('dataCenter/dayData/index'),
        meta: { title: '日数据', icon: 'wallet' }
      },
      {
        path: 'weekData',
        name: 'weekData',
        component: _import('dataCenter/weekData/index'),
        meta: { title: '周数据', icon: 'wallet' }
      },
      {
        path: 'monthData',
        name: 'monthData',
        component: _import('dataCenter/monthData/index'),
        meta: { title: '月数据', icon: 'wallet' }
      }
    ]
  },
  {
    path: '/backSetting',
    component: Layout,
    redirect: '/backSetting/addManage',
    name: 'backSetting',
    meta: { title: '数据中心', icon: 'teacher' },
    children: [
      {
        path: 'addManage',
        name: 'addManage',
        component: _import('backSetting/addManage/index'),
        meta: { title: '管理员设置', icon: 'teacher' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

