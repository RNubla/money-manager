<template>
  <div class="columns">
    <div class="column">
      <div class="title">Activities</div>
      <div class="level">
        <div class="level-item">
          <table class="table is-fullwidth">
            <thead>
              <tr>
                <!-- <th v-for="col in columns" :key="col.id">{{ col }}</th> -->
                <th>Amount</th>
                <th>Source</th>
                <th>Name</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Amount</th>
                <th>Source</th>
                <th>Name</th>
              </tr>
            </tfoot>
            <tbody>
              <tr v-for="row in activity" :key="row.id">
                <th v-for="col in columns" :key="col.name">{{ row[col] }}</th>
                <!-- <th>{{activity}}</th> -->
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { activitiesCollection, db } from "@/services/firebase";

export default {
  data() {
    return {
      activity: this.$store.state.users.docData,
      // componentKey: this.$store.state.users.updateComponent
    };
  },
  computed: {
    columns: function columns() {
      if (this.activity.length == 0) {
        return [];
      }
      return Object.keys(this.activity[0]);
    }
  },

  mounted() {
    this.$store.dispatch("users/getData")
    // this.$store.dispatch("users/getData").then(() => {
    //   activityDoc: this.$store.state.users.docData;
    // });
  }
};
</script>

<style></style>
