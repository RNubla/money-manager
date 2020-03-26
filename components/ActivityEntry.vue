<template>
  <form>
    <div class="column">
      <div class="title">Add Entry:</div>
      <div class="level">
        <div class="level-item">
          <div class="">
            <div class="heading">Amount:</div>
            <div class="field has-addons has-addons-right">
              <p class="control">
                <span class="select">
                  <select>
                    <option title="Money Comming In">+</option>
                    <option title="Money Being Spent">-</option>
                  </select>
                </span>
              </p>
              <p class="control">
                <input
                  class="input"
                  type="number"
                  placeholder="Amount of money"
                  v-model="amountMoney"
                />
              </p>
            </div>
          </div>
        </div>
        <div class="level-item">
          <div class="">
            <div class="heading">Source:</div>
            <div class="control">
              <div class="select">
                <select v-model="source">
                  <option>Checking</option>
                  <option>Credit: Discover</option>
                  <option>Credit: Apple</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="level-item">
          <div class="">
            <div class="heading">Name:</div>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Text input"
                v-model="name"
              />
            </div>
          </div>
        </div>
        <div class="level-item">
          <div class="">
            <div class="heading">Date</div>
            <div class="title is-5">Date</div>
          </div>
        </div>
      </div>
      <div class="level">
        <div class="level-item">
          <div class="">
            <div class="field is-grouped">
              <p class="control">
                <a type="submit" @click.prevent="add" class="button is-primary">
                  Submit
                </a>
              </p>
              <p class="control">
                <a class="button is-light">
                  Cancel
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="errorMsg.length" class="level notification is-danger">
        <div v-for="error in errorMsg" :key="error.id" class="level-item">
          <div class="">
            <div class="heading">{{error}}</div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { activitiesCollection, db } from "@/services/firebase";

export default {
  data() {
    return {
      amountMoney: null,
      source: null,
      name: null,
      errorMsg: []
    };
  },
  methods: {
    add(e) {
      if(this.amountMoney && this.source && this.name){
        this.$store.dispatch("users/addEntry", {amountMoney: this.amountMoney, source: this.source, name: this.name});
        return true
      }
      this.errorMsg = []
      if(!this.amountMoney) {
        this.errorMsg.push('Amount Input Required')
        this.timeOut()
        }
      if(!this.source) {
        this.errorMsg.push('Source Input Required')
        this.timeOut()
        }
      if(!this.name) {
        this.errorMsg.push('Name Input Required')}
        this.timeOut()
      e.preventDefault()
    },
    timeOut(){
      setTimeout(() => {
        errorMsg = []
      }, 5000)
    }
  }
};
</script>

<style></style>
