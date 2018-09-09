<template>
  <div class="register">
    <h1>Register</h1>
    <p>Please fill in the form</p>
    <FormContainer>
      <BaseInput v-model="firstName" label="First name" name="firstName" />
      <BaseInput v-model="lastName" label="Last name" name="lastName" />
      <BaseInput v-model="email" label="Email" name="email" type="email" />
      <BaseInput v-model="password" label="Password" name="password" type="password" />
      <p style="color: red;" v-if="error">{{this.error}}</p>
      <BaseBtn @click="registerUser" :text="registering ? 'Registering...' : 'Submit'" type="submit" />
    </FormContainer>
  </div>
</template>
<script>
import FormContainer from '@/components/FormContainer';
import firebase from 'firebase/app';
import { firestoreDb } from '@/firebase';

export default {
  name: 'Register',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      registering: false,
      error: ''
    };
  },
  methods: {
    async registerUser(e) {
      e.preventDefault();
      try {
        // Set the loader on and clear the error
        this.registering = true;
        this.error = '';

        // Create an object with user details
        const userData = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email
        };

        // Register user with firebase
        const user = await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);

        // Get the id of the registered user
        userData['uid'] = user.user.uid;
        // Insert user's data with id to the firestore
        await firestoreDb
          .collection('users')
          .doc(userData.uid)
          .set(userData);

        this.$router.push('/');
      } catch (err) {
        console.error(err);
        this.error = err.message;
      } finally {
        this.registering = false;
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
