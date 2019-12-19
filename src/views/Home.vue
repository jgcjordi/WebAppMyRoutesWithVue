<template>
  <div id="home">
    <md-card>
      <md-card-content>
        <md-field>
          <label>Título...</label>
          <md-textarea v-model="autogrow" md-autogrow></md-textarea>
        </md-field>
        <md-button class="md-raised md-accent">Empezar Ruta</md-button>
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