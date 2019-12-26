<template>
  <div id="routes">
    <cardRoute
      v-for="route in routes"
      v-bind:key="route.id"
      :route="route"
      @remove="removeRoute"
      @changeColor="changeColor"
      @changeVisibility="changeVisibility"
    ></cardRoute>
    <md-snackbar
      md-position="left"
      :md-duration="3000"
      :md-active.sync="showNoDeleteRouteSnackbar"
      md-persistent
    >
      <span>You cannot delete the route while recording!</span>
    </md-snackbar>
  </div>
</template>
<script>
import CardRoute from "../components/CardRoute";
import { routes, saveRoutesArray } from "../routesDB";
import { globals } from "../globals";

export default {
  name: "Routes",
  components: {
    cardRoute: CardRoute
  },
  data: function() {
    return {
      routes: routes,
      saveRoutesArray: saveRoutesArray,
      globals: globals,
      showNoDeleteRouteSnackbar: false
    };
  },
  methods: {
    findIndexRoute: function(data) {
      return this.routes.findIndex(function(route) {
        return route.id === data.id;
      });
    },
    removeRoute: function(data) {
      let index = this.findIndexRoute(data);
      if (index === 0 && this.globals.recordingRoute) {
        this.showNoDeleteRouteSnackbar = true
      } else {
        this.routes.splice(index, 1);
        this.saveRoutesArray();
      }
    },
    changeColor: function(data, value) {
      let index = this.findIndexRoute(data);
      let newRoute = this.routes[index];
      newRoute.color = value;
      this.$set(this.routes, index, newRoute);
      this.saveRoutesArray();
    },
    changeVisibility: function(data) {
      let index = this.findIndexRoute(data);
      let newRoute = this.routes[index];
      newRoute.visible = !newRoute.visible;
      this.$set(this.routes, index, newRoute);
      this.saveRoutesArray();
    }
  }
};
</script>
<style>
#routes {
}
</style>