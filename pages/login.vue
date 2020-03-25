<template>
  <form @submit.prevent="login" @submit.enter="login">
    <div class="container">
      <div class="field">
        <label for="email" class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input
            v-model="account.email"
            class="input"
            type="email"
            placeholder="username@mail.com"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle"></i>
          </span>
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control has-icons-left has-icons-right">
          <input
            v-model="account.password"
            class="input"
            type="password"
            placeholder="Password"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle"></i>
          </span>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button type="submit" @click="login" class="button is-link">
            Login
          </button>
        </div>
        <div class="control">
          <button @click="reset" class="button is-link is-light">Clear</button>
        </div>
      </div>
      <div v-if="isError" class="notification is-danger">
        {{ errMsg }}
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      account: {
        email: "",
        password: ""
      },
      isError: false,
      errMsg: ""
    };
  },
  methods: {
    login(e) {
      e.preventDefault();
      this.$store
        .dispatch("users/login", this.account)
        .then(() => {
          this.$router.push("/dashboard");
        })
        .catch(error => {
          this.isError = true;
          this.errMsg = error.code;
          setTimeout(() => {
            this.isError = false;
          }, 5000);
        });
    },
    reset() {
      this.account.email = "";
      this.account.password = "";
    }
  }
};
</script>

<style></style>
