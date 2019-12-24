<template>
  <md-card v-bind:style="{ borderRightColor: route.color }">
    <md-card-content>
      <div class="md-title">{{ route.title }}</div>
      <div class="md-subhead">{{ formatDate() }}</div>
    </md-card-content>
    <md-card-actions>
      <md-button class="md-icon-button" @click="onChangeVisibility" md-menu-trigger>
        <md-icon>{{visibilityIcon}}</md-icon>
      </md-button>
      <md-button class="md-icon-button" @click="showColorDialog = true" md-menu-trigger>
        <md-icon>color_lens</md-icon>
      </md-button>
      <md-menu md-direction="bottom-end">
        <md-button class="md-icon-button" md-menu-trigger>
          <md-icon>more_vert</md-icon>
        </md-button>
        <md-menu-content>
          <md-menu-item @click="edittingRoute = true">Edit</md-menu-item>
          <md-menu-item @click="deletingRoute = true">Delete</md-menu-item>
        </md-menu-content>
      </md-menu>
    </md-card-actions>

    <md-dialog :md-active.sync="showColorDialog" :md-fullscreen="false">
      <swatches v-model="color" :colors="colors" shapes="circles" inline @input="onChangeColor" />
    </md-dialog>

    <md-dialog-confirm
      :md-active.sync="deletingRoute"
      md-title="Delete Route"
      md-content="Are you sure?"
      md-confirm-text="Yes"
      md-cancel-text="No"
      @md-cancel="deletingRoute = false"
      @md-confirm="$emit('remove', route)"
    />

    <md-dialog :md-active.sync="edittingRoute" :md-fullscreen="true">
      <md-app md-mode="fixed">
        <md-app-toolbar class="md-primary">
          <md-button class="md-icon-button" @click="edittingRoute = false">
            <md-icon>arrow_back</md-icon>
          </md-button>
          <span class="md-title">Edit Route</span>
        </md-app-toolbar>
      </md-app>
      <md-dialog-content>
        <route-details :route="route"></route-details>
        <div class="buttons">
          <md-button class="md-raised md-accent" @click="edittingRoute = false">ok</md-button>
          <md-button class="md-raised md-accent" @click="edittingRoute = false">Cancel</md-button>
        </div>
      </md-dialog-content>
    </md-dialog>
  </md-card>
</template>

<script>
import Swatches from "vue-swatches";
import RouteDetails from "../views/RouteDetails";
import "vue-swatches/dist/vue-swatches.min.css";
export default {
  name: "CardRoute",
  props: ["route"],
  components: {
    Swatches,
    RouteDetails: RouteDetails
  },
  data: function() {
    return {
      deletingRoute: false,
      edittingRoute: false,
      showColorDialog: false,
      cardColor: this.route.color,
      color: this.route.color,
      colors: [
        "#03A9F4",
        "#3F51B5",
        "#4CAF50",
        "#FF5722",
        "#FFC107",
        "#9C27B0",
        "#795548",
        "#F44336"
      ]
    };
  },
  computed: {
    visibilityIcon: function() {
      return this.route.visible ? "visibility" : "visibility_off";
    }
  },
  methods: {
    formatDate: function() {
      return (
        this.route.ts.getDate() +
        "/" +
        (this.route.ts.getMonth() + 1) +
        "/" +
        this.route.ts.getFullYear()
      );
    },
    onChangeColor: function(value) {
      this.$emit("changeColor", this.route, value);
      this.showColorDialog = false;
    },
    onChangeVisibility: function() {
      this.$emit("changeVisibility", this.route);
    }
  }
};
</script>

<style lang=scss>
#routes {
  .md-card {
    margin-bottom: 10px;
    border-right: 0.6rem solid;
    border-radius: 6px !important;
  }
}
.vue-swatches__container {
  display: flex;
  justify-content: center;
}
.vue-swatches__wrapper {
  display: grid;
  grid-template-columns: 0fr 0fr 0fr 0fr;
  grid-template-rows: 0fr 0fr;
  text-align: center;
  padding-right: 5px;
}
.md-dialog {
  .buttons {
    display: flex;
    justify-content: center;
    .md-button {
      margin-right: 1rem;
    }
  }
}
</style>