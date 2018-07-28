import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Dashboard from '@/components/Dashboard'
import Agents from '@/components/Agents'
import Subscribers from '@/components/Subscribers'
import Hospitals from '@/components/Hospitals'
import Search from '@/components/Search'
import Settings from '@/components/Settings'
import AgentDashboard from '@/components/AgentDashboard'
import AgentSubscribers from '@/components/AgentSubscribers'
import AgentSubscriberDetails from '@/components/AgentSubscriberDetails'
import AgentAddSubscriber from '@/components/AgentAddSubscriber'
import Claims from '@/components/Claims'
import EditAgent from '@/components/EditAgent'

Vue.use(Router)

const Subscriber = {   
    props: ['id'],   
    template: '<div>Subscriber {{ id }}</div>' 
}
 
export default new Router({
 mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/claims',
      name: 'Claims',
      component: Claims
    },
    {
      path: '/agents',
      name: 'Agents',
      component: Agents
    },
    {
      path: '/subscribers',
      name: 'Subscribers',
      component: Subscribers
    },
    {
      path: '/editAgent',
      name: 'EditAgent',
      component: EditAgent
    },
    {
      path: '/hospitals',
      name: 'Hospitals',
      component: Hospitals
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/admin/dashboard',
      name: 'AgentDashboard',
      component: AgentDashboard
    },
    {
      path: '/admin/subscribers',
      name: 'AgentSubscribers',
      component: AgentSubscribers
    },
    {
      path: '/user/agent/add-subscriber',
      name: 'AgentAddSubscriber',
      component: AgentAddSubscriber
    },
    {
      path: '/user/agent/subscriber/:id',
      component: AgentSubscriberDetails
    }



  ]
})
