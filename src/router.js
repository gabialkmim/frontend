import { createRouter, createWebHistory } from 'vue-router';
import LoginComponent from './components/LoginComponent.vue';
import UserRegistration from './components/UserRegistration.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: LoginComponent,
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: UserRegistration,
    },
  ],
});

export default router;
