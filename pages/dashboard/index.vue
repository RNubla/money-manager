<template>
  <div>
    <div class="section">
      <div class="columns">
        <SideNav/>
        <main class="column">
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <div class="title">Dashboard</div>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <button type="button" class="button is-small">
                  March 8, 2017 - April 6, 2017
                </button>
              </div>
            </div>
          </div>
          <!-- Entries -->
          <div class="columns is-multiline">
            <div class="column">
              <div class="box">
                <ActivityEntry />
              </div>
              <div class="box">
                <Activities :key="activityKey"/>
              </div>
            </div>
          </div>

          <div class="columns is-multiline">
            <CardBox name="Income"/>
            <div class="column">
              <div class="box">
                <div class="heading">Expenses</div>
                <div class="title">55% / 45%</div>
                <div class="level">
                  <div class="level-item">
                    <div class="">
                      <div class="heading">Date: $</div>
                      <div class="title is-5">30%</div>
                    </div>
                  </div>
                  <div class="level-item">
                    <div class="">
                      <div class="heading">Amount $</div>
                      <div class="title is-5">25%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="box">
                <div class="heading">Credit Card</div>
                <div class="title">78% &uarr;</div>
                <div class="level">
                  <div class="level-item">
                    <div class="">
                      <div class="heading">Date:</div>
                      <div class="title is-5">1560</div>
                    </div>
                  </div>
                  <div class="level-item">
                    <div class="">
                      <div class="heading">Amount</div>
                      <div class="title is-5">368</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="columns is-multiline">
            <div class="column is-6">
              <div class="panel">
                <p class="panel-heading">
                  Expenses: Daily - $700
                </p>
                <div class="panel-block">
                  <figure class="image is-16x9">
                    <img src="https://placehold.it/1280x720" />
                  </figure>
                </div>
              </div>
            </div>
            <div class="column is-6">
              <div class="panel">
                <p class="panel-heading">
                  Refunds: Daily - $200
                </p>
                <div class="panel-block">
                  <figure class="image is-16x9">
                    <img src="https://placehold.it/1280x720" />
                  </figure>
                </div>
              </div>
            </div>
            <div class="column is-6">
              <div class="panel">
                <p class="panel-heading">
                  Something
                </p>
                <div class="panel-block">
                  <figure class="image is-16x9">
                    <img src="https://placehold.it/1280x720" />
                  </figure>
                </div>
              </div>
            </div>
            <div class="column is-6">
              <div class="panel">
                <p class="panel-heading">
                  Something Else
                </p>
                <div class="panel-block">
                  <figure class="image is-16x9">
                    <img src="https://placehold.it/1280x720" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
// import { activitiesCollection, db } from "@/services/firebase";
import ActivityEntry from "@/components/ActivityEntry";
import Activities from '@/components/Activities'
import CardBox from '@/components/CardBox'
import SideNav from '@/components/SideNav'
export default {
  components: {
    ActivityEntry,
    Activities,
    CardBox,
    SideNav
  },
  data(){
    return {activityKey: this.$store.state.users.updateComponent}
  },
  // methods: {
  //   forceRerender(){
  //     this.activityKey += 1
  //   }
  // }
};
</script>

<style></style>
