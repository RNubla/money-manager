<template>
  <form @submit.prevent="register" @submit.enter="register">
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
          <button type="submit" @click="register" class="button is-link">
            Register
          </button>
        </div>
        <div class="control">
          <button @click="reset" class="button is-link is-light">Clear</button>
        </div>
      </div>
      <div v-if="isError" class="notification is-danger">
        {{ errorMsg }}
      </div>
    </div>
  </form>
</template>

<script>
export default {
    data() {
        return {
            account:{
                email: '',
                password:''
            },
            isError: false,
            errorMsg: ''
         }
    },
    methods: {
        register(){
            alert('Rigister Form Clicked')
        },
        reset(){
            this.accout.email = '',
            this.accout.password = ''
        }
    }
}
</script>

<style>

</style>