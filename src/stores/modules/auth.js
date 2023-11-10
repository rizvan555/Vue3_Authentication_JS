import { defineStore } from 'pinia';
import authApi from '@/api/auth';

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
      return new Promise((resolve, reject) => {
        try {
          this.registerStart();
          authApi
            .register(credentials)
            .then((response) => {
              this.registerSuccess(response.data.user);
              resolve(response);
              if (onSuccess) {
                onSuccess(response.data.user);
              }
            })
            .catch((error) => {
              this.registerFailure(error.response.data.errors);

              console.error('Validation Errors:', error.response.data.errors);
              reject(error);
            });
        } catch (error) {
          reject(error);
        }
      });
    },

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
  },
});
