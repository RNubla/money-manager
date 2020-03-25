<template>
  <nav role="navigation" aria-label="main navigation" class="navbar">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item">
        {{ appName }}
      </nuxt-link>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="nav-menu"
        @click="toggleBurger"
        :class="{ 'is-active': isActive }"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" id="nav-menu" :class="{ 'is-active': isActive }">
      <div class="navbar-end">
        <a v-if="user !== null" class="navbar-item">{{ user.email }}</a>
        <nuxt-link v-if="user === null" class="navbar-item" to="/login">{{
          login
        }}</nuxt-link>
        <a @click="signOut" v-if="user !== null" class="navbar-item">{{
          logout
        }}</a>
        <nuxt-link v-if="user === null" class="navbar-item" to="/about">{{
          about
        }}</nuxt-link>
        <a v-if="user !== null" class="navbar-item">{{ profile }}</a>
      </div>
    </div>
  </nav>
</template>

<script>
import { auth } from "@/services/firebase";
import Cookie from "js-cookie";
import { mapGetters } from "vuex";

export default {
  props: {
    appName: "",
    dashboard: "",
    login: "",
    logout: "",
    about: "",
    profile: ""
  },
  data() {
    return {
      isActive: false,
      currentUser: ''
    };
  },
  computed: { 
    user(){
      return this.$store.getters['users/currentUser']
    }
  },
  methods: {
    signOut() {
      this.$store.dispatch("users/logout");
    },
    toggleBurger() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style></style>
