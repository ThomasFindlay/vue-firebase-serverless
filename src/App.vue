<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <template v-if="!user">
        <router-link to="/login">Login</router-link> |
        <router-link to="/register">Register</router-link>
      </template>
      <template v-else>
        <a @click.prevent="logout">Logout</a>
      </template>
    </div>
    <router-view />
  </div>
</template>
<script>
import firebase from 'firebase/app';
import { firestoreDb } from '@/firebase';

export default {
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    logout() {
      firebase.auth().signOut();
    }
  },
  created() {
    // Listen for auth changes
    firebase.auth().onAuthStateChanged(async user => {
      // Check if we have a user and if there is no user data in the store already
      if (user && !this.$store.state.user) {
        // Get the uid of the user
        const uid = user.uid;
        // Fetch user details based on the uid of the logged in user
        const result = await firestoreDb
          .collection('users')
          .doc(uid)
          .get();
        // Check if the user was found in the firestore db
        // If yes then save the data in the store
        if (result.exists) {
          const userData = result.data();
          this.$store.commit('setUserData', userData);
        }
      } else {
        // We have no user data, clear the store
        this.$store.commit('setUserData', null);
      }
    });
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
