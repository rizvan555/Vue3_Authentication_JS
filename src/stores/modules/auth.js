import authApi from '@/api/auth';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    isSubmitting: false,
    currentUser: null,
    validationErrors: null,
    isLoggedIn: false,
  }),

  // Actions
  actions: {
    async register(credentials, onSuccess) {
      try {
        this.registerStart();
        const response = await authApi.register(credentials);
        this.registerSuccess(response.data.user);
        if (onSuccess) {
          onSuccess(response);
        }
        return response;
      } catch (error) {
        this.registerFailure(error.response.data.errors);
        console.error('Full Server Response:', error.response.config.data);
        throw error;
      }
    },

    //registration
    registerStart() {
      this.isSubmitting = true;
      this.validationErrors = null;
    },
    registerSuccess(user) {
      this.isSubmitting = false;
      this.currentUser = user;
      this.isLoggedIn = true;
    },
    registerFailure(errors) {
      this.isSubmitting = false;
      this.validationErrors = errors;
    },

    async login(credentials, onSuccess) {
      try {
        this.loginStart();
        const response = await authApi.login(credentials);
        this.loginSuccess(response.data.user);
        if (onSuccess) {
          onSuccess(response);
        }
        return response;
      } catch (error) {
        this.loginFailure(error.response.data.errors);
        console.error('Full Server Response:', error.response);
        console.error('Validation Errors:', error.response.data.errors);
        throw error;
      }
    },

    //login
    loginStart() {
      this.isSubmitting = true;
      this.validationErrors = null;
    },
    loginSuccess(user) {
      this.isSubmitting = false;
      this.currentUser = user;
      this.isLoggedIn = true;
    },
    loginFailure(errors) {
      this.isSubmitting = false;
      this.validationErrors = errors;
    },
  },
});
