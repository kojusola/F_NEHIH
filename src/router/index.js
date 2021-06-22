import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Contact from '../views/Contact.vue';
import Foundation from '../views/Foundation.vue';
import MeetTeam from '../views/MeetTeam.vue';
import Labs from '../views/3dLabs.vue';
import Wcp from '../views/WomenCodeProgramme.vue';
import Incubation from '../views/Incubation.vue';
import Nemacathon from '../views/Nemacathon.vue';
import Workspaces from '../views/Workspaces.vue';
import Blog from '../views/Blog.vue';
import SingleBlog from '../views/SingleBlog.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/Foundation',
    name: 'Foundation',
    component: Foundation
  },
  {
    path: '/meet-team',
    name: 'MeetTeam',
    component: MeetTeam
  },
  {
    path: '/consulting',
    name: '3dLabs',
    component: Labs
  },
  {
    path: '/wcp',
    name: 'wcp',
    component: Wcp
  },
  {
    path: '/incubation',
    name: 'incubation',
    component: Incubation
  },
  {
    path: '/neMakeAthon',
    name: 'Nemacathon ',
    component: Nemacathon 
  },
  {
    path: '/workspaces',
    name: 'workspaces',
    component: Workspaces
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/singleblog',
    name: 'singleBlog',
    component: SingleBlog
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
