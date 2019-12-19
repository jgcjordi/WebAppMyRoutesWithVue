<template>
  <div id="app">
    <md-app md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="showDrawer=!showDrawer">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Mis Rutas</span>
      </md-app-toolbar>

      <md-app-content>
        <router-view></router-view>
      </md-app-content>
    </md-app>

    <md-bottom-bar md-sync-route>
      <md-bottom-bar-item to="/home" md-label="Home" md-icon="home"></md-bottom-bar-item>
      <md-bottom-bar-item to="/routes" md-label="Rutas" md-icon="search"></md-bottom-bar-item>
      <md-bottom-bar-item to="/map" md-label="Map" md-icon="room"></md-bottom-bar-item>
    </md-bottom-bar>

    <md-drawer :md-active.sync="showDrawer">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">Navigation</span>
      </md-toolbar>
      <md-list>
        <md-list-item to="/home" @click="showDrawer=false">
          <md-icon>home</md-icon>
          <span class="md-list-item-text">Home</span>
        </md-list-item>
        <md-list-item to="/routes" @click="showDrawer=false">
          <md-icon>search</md-icon>
          <span class="md-list-item-text">Rutas</span>
        </md-list-item>
        <md-list-item to="/map" @click="showDrawer=false">
          <md-icon>room</md-icon>
          <span class="md-list-item-text">Map</span>
        </md-list-item>
      </md-list>
    </md-drawer>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      showDrawer: false
    };
  }
};
</script>

<style>
#app {
  display: grid;
  grid-template-rows: 1fr 0fr;
  height: 100vh;
}
.md-app {
  height: 100%;
}
.md-app-content {
  background-color: rgb(247, 251, 255) !important;
}
</style>
