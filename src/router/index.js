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

Vue.use(Router)
 
export default new Router({
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
      path: '/user/agent/dashboard',
      name: 'AgentDashboard',
      component: AgentDashboard
    },
    {
      path: '/user/agent/subscribers',
      name: 'AgentSubscribers',
      component: AgentSubscribers
    },
    {
      path: '/user/agent/add-subscriber',
      name: 'AgentAddSubscriber',
      component: AgentAddSubscriber
    },
    {
      path: '/user/agent/subscriber',
      name: 'AgentSubscriberDetails',
      component: AgentSubscriberDetails
    },



  ]
})
