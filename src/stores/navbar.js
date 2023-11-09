import { defineStore } from 'pinia';

export const useNavbarStore = defineStore('navStore', {
  state: () => ({
    navs: [
      { id: 1, name: 'Home', path: '/' },
      { id: 2, name: 'SignIn', path: '/signIn' },
      { id: 3, name: 'SignUp', path: '/signUp' },
    ],
  }),
  getters: {},

  actions: {},
});
