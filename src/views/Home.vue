<template>
  <div id="home">
    <md-card>
      <md-card-content>
        <md-field>
          <label>Title...</label>
          <md-input v-model="globals.titleRoute" :disabled="globals.recordingRoute"></md-input>
        </md-field>
        <md-button class="md-raised md-accent" @click="btnRecordRoute">{{ btnText }}</md-button>
        <div v-if="globals.recordingRoute" class="counter-timer">Recording... {{globals.timerTxt}}</div>
      </md-card-content>
    </md-card>
  </div>
</template>
<script>
import { globals } from "../globals";
import { routes, addRoute, saveRoutesArray } from "../routesDB";
export default {
  name: "Home",
  data: function() {
    return {
      btnText: "",
      globals: globals,
      routes: routes,
      addRoute: addRoute,
      saveRoutesArray: saveRoutesArray
    };
  },
  created: function() {
    this.isRecording();
  },
  methods: {
    isRecording: function() {
      return this.globals.recordingRoute
        ? (this.btnText = "Stop Route")
        : (this.btnText = "Start Route");
    },
    btnRecordRoute: function() {
      if (this.globals.recordingRoute) {
        this.btnText = "Start Route";
        navigator.geolocation.clearWatch(this.globals.geoWatcher);
        this.globals.geoWatcher = null;
      } else {
        this.btnText = "Stop Route";
        this.globals.timeInitRecord = new Date();

        let routeToAdd = {
          id: 0,
          title: this.globals.titleRoute,
          ts: new Date(),
          color: "#03A9F4",
          visible: false,
          positions: []
        };
        this.addRoute(routeToAdd);

        let options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0 //si es 0, no puede utilizar ubicaciones previamente cacheadas, solo utiliza la posicion real actual.
        };
        this.globals.geoWatcher = navigator.geolocation.watchPosition(
          (pos) => {
            let point = {
              timestamp: pos.timestamp,
              lat: pos.coords.latitude,
              lng: pos.coords.longitude
            };
            console.log(point)
            this.routes[0].positions.push(point);
            this.saveRoutesArray();
            console.log(pos);
            console.log(this.routes);
          },
          function(err) {
            console.log(err);
          },
          options
        );
      }
      this.globals.recordingRoute = !this.globals.recordingRoute;
      this.intervalTimer();
    },
    intervalTimer: function() {
      if (this.globals.recordingRoute) {
        console.log("Hola");
        this.globals.intervalFun = setInterval(() => {
          let now = new Date();
          let distance = now.getTime() - this.globals.timeInitRecord.getTime();
          let sec_num = distance / 1000;
          console.log(sec_num);
          let hours = Math.floor(sec_num / 3600);
          let minutes = Math.floor((sec_num - hours * 3600) / 60);
          let seconds = Math.round(sec_num - hours * 3600 - minutes * 60);
          if (hours < 10) {
            hours = "0" + hours;
          }
          if (minutes < 10) {
            minutes = "0" + minutes;
          }
          if (seconds < 10) {
            seconds = "0" + seconds;
          }
          this.globals.timerTxt = hours + ":" + minutes + ":" + seconds;
        }, 1000);
      } else {
        clearInterval(this.globals.intervalFun);
        this.globals.intervalFun = null;
        this.globals.timerTxt = "00:00:00";
        this.globals.timeInitRecord = null;
      }
    }
  }
};
</script>
<style>
#home {
  padding: 1rem;
}
.counter-timer {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}
</style>