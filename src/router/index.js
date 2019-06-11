import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend.vue'
import Singer from 'components/singer/singer.vue'
import Rank from 'components/rank/rank.vue'
import Search from 'components/search/search.vue'
import Disc from 'components/disc/disc'
import SingerDetail from 'components/singer-detail/singer-detail'
import TopList from 'components/top-list/top-list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/recommend'
    },{
      path: '/recommend',
      name: 'Recommend',
      component: Recommend,
      children: [
        {
          path: ':id',
          component: Disc
        }
      ]
    },{
      path: '/singer',
      name: 'Singer',
      component: Singer,
      children:[
        {
          path:':id',
          name:'SingerDetail',
          component:SingerDetail
        }
      ]
    },{
      path: '/rank',
      name: 'Rank',
      component: Rank,
      children:[
        {
          path:':id',
          name:'TopList',
          component:TopList
        }
      ]
    },{
      path: '/search',
      name: 'Search',
      component: Search,
      children:[
        {
          path:':id',
          name:'SingerDetail',
          component:SingerDetail
        }
      ]
    }
  ]
})

