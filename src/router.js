import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Votes from './views/Votes.vue';
import AddVote from './views/AddVote.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Login,
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/votes',
    name: 'Votes',
    component: Votes
  },
  {
    path: '/add-vote',
    name: 'AddVote',
    component: AddVote
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

/*router.beforeEach((to, from, next) => {
  if (to.path === '/vote' && !localStorage.accessLevel) next('/votes');
  next();
});*/

export default router;