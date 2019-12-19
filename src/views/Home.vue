<template>
  <div id="home">
    <md-card>
      <md-card-content>
        <md-field md-inline>
          <label>Título ...</label>
          <md-input v-model="inline"></md-input>
        </md-field>
        <md-button class="md-raised md-primary">Empezar Ruta</md-button>
      </md-card-content>
    </md-card>
  </div>
</template>
<script>
export default {
  name: "Home",
  data: function() {
    return {};
  }
};
</script>
<style>
#home {
}
</style>