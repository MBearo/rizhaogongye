import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/frame/Index'
import Result from '@/components/frame/Result'
import ResultTop from '@/components/frame/ResultTop'
import jibenqingkuang from '@/components/com/dakuai/jibenqingkuang'
import jingjizhibiao from '@/components/com/dakuai/jingjizhibiao'
import ziyuanpeizhi from '@/components/com/dakuai/ziyuanpeizhi'
import Companylist from '@/components/frame/Companylist'
import Table from '@/components/frame/Table'
import Table2 from '@/components/frame/Table2'
import Navtion from '@/components/frame/Navtion'
import basicJiben from '@/components/com/xiaokuai/Ajifen/qiyegaikuang'
import basicFuze from '@/components/com/xiaokuai/Ajifen/zhuyaofuzeren'
import basicGuquan from '@/components/com/xiaokuai/Ajifen/guquanqingkuang'
import zhibiao from '@/components/com/xiaokuai/Djingji/zhibiao'
import tudi from '@/components/com/xiaokuai/Bziyuan/tudi'
import echart from '@/components/echart/index.vue'
import ditu from '@/components/map/Ditu'
import ditu2 from '@/components/map/Ditu2'
import ComDetails from '@/components/frame/ComDetails'

import { mapActions } from 'vuex';

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/result',
      name: 'result',
      component: Result,
      children: [{
        path: 'companylist',
        component: Companylist, 
      },{
        path: 'table',
        component: Table2,
        children: [{
          path: 'basic',
          component: basicJiben,
        },
        {
          path: 'principal',
          component: basicFuze,
        },
        {
          path: 'stock',
          component: basicGuquan,
        },{
          path:'economy',
          component:zhibiao
        },{
          path:'land',
          component:tudi
        }]
      },{
        path: 'map',
        name: 'map',
        component: ditu,
      },{
        path: 'map2',
        name: 'map2',
        component: ditu2,
      },
      {
        path: 'comdetails',
        name: 'comdetails',
        component: ComDetails,
      },
    ]
    },{
      path: '/chart',
      name: 'chart',
      component: echart,
    }

  ]
})
