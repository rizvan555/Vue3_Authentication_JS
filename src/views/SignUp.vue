<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="flex flex-col gap-2 col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center text-center text-2xl my-6 font-bold">
            Sign Up
          </h1>
          <p class="text-xs-center">
            <router-link :to="{ name: 'signIn' }">
              Need an account?
            </router-link>
          </p>
          <form @submit.prevent="onSubmit" class="flex flex-col gap-3">
            <fieldset class="form-group">
              <input
                v-model="formData.username"
                class="form-control form-control-lg"
                type="text"
                placeholder="Username"
              />
              <div v-if="validationErrors && validationErrors.username">
                {{ validationErrors.username[0] }}
              </div>
            </fieldset>
            <fieldset class="form-group">
              <input
                v-model="formData.email"
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
              />
              <div v-if="validationErrors && validationErrors.email">
                {{ validationErrors.email[0] }}
              </div>
            </fieldset>
            <fieldset class="form-group">
              <input
                v-model="formData.password"
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
              />
            </fieldset>
            <button
              class="btn btn-lg btn-primary pull-xs-right"
              :disabled="isSubmitting"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useAuthStore } from '../stores/modules/auth';
import router from '../router';

export default {
  name: 'McvRegister',

  setup() {
    const authStore = useAuthStore();
    const formData = ref({
      username: '',
      email: '',
      password: '',
    });

    const onSubmit = async () => {
      try {
        const credentials = {
          username: formData.value.username,
          email: formData.value.email,
          password: formData.value.password,
        };
        console.log('Credentials:', credentials);

        await authStore.register(credentials, (user) => {
          console.log('Successfully registered user:', user);
          router.push({ name: 'signIn' });
        });
      } catch (error) {
        console.error('Registration Error:', error);
      }
    };

    return {
      formData,
      isSubmitting: authStore.isSubmitting,
      onSubmit,
      validationErrors: authStore.validationErrors,
    };
  },
};
</script>
