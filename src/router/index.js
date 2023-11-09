import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SignUp from '../views/SignUp.vue';
import SignIn from '../views/SignIn.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: SignUp,
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: SignIn,
    },
  ],
});

export default router;
