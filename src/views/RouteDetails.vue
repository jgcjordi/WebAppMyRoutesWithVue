<template>
  <div id="routeDetails">
    <div class="dialog-title">Title:</div>
    <md-field>
      <md-textarea v-model="route.title"></md-textarea>
    </md-field>
    <div class="dialog-title">Route Date:</div>
    <md-datepicker v-model="route.ts" md-immediately></md-datepicker>
  </div>
</template>
<script>
export default {
  name: "RouteDetails",
  props: ["route"]
};
</script>
<style lang=scss>
#routeDetails {
  padding: 2rem;
  .dialog-title {
    font-size: 1.5rem;
    padding-top: 1.5rem;
  }
}
</style>