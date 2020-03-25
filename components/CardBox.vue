<template>
  <div class="column">
    <div class="box">
      <div class="heading">{{ name }}</div>
      <div class="title">56,950</div>
      <div class="level">
        <div class="level-item">
          <div class="">
            <div class="heading">Date:</div>
            <div class="title is-5">250,000</div>
          </div>
        </div>
        <div class="level-item">
          <div class="">
            <div class="heading">Amount $</div>
            <div class="title is-5">750,000</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-box",
  props: {
    name: ''
  }
};
</script>

<style></style>
