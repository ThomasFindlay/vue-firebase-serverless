<template>
  <div class="Login">
    <h1>Login</h1>
    <p>Please fill in the form</p>
    <FormContainer>
      <BaseInput v-model="email" label="Email" name="email" type="email" />
      <BaseInput v-model="password" label="Password" name="password" type="password" />
      <p style="color: red;" v-if="error">{{this.error}}</p>
      <BaseBtn @click="loginUser" :text="loggingIn ? 'Logging in...' : 'Submit'" type="submit" />
    </FormContainer>
  </div>
</template>
<script>
import FormContainer from '@/components/FormContainer';
import firebase from 'firebase/app';
import { firestoreDb } from '@/firebase';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      loggingIn: false,
      error: ''
    };
  },
  methods: {
    async loginUser(e) {
      e.preventDefault();
      try {
        // Set the loader on and clear the error
        this.loggingIn = true;
        this.error = '';

        // Set user logging to be persistent
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        // Login user
        const user = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);

        this.$router.push('/');
      } catch (err) {
        console.error(err);
        this.error = err.message;
      } finally {
        this.loggingIn = false;
      }
    }
  },
  components: {
    FormContainer
  }
};
</script>
<style scoped>
</style>
