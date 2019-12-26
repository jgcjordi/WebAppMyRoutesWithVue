<template>
  <div id="map" ref="rawMap"></div>
</template>
<script>
import { routes } from "../routesDB";
export default {
  name: "Map",
  data() {
    return {
      map: null,
      routes: routes
    };
  },
  mounted: function() {
    this.loadMap();
    this.loadRoutes();
  },
  methods: {
    loadMap: function() {
      var rawMap = this.$refs.rawMap;
      var latLng = new google.maps.LatLng(38.692362, -0.484801);
      let mapOptions = {
        center: latLng,
        zoom: 15
      };
      this.map = new google.maps.Map(rawMap, mapOptions);
    },
    loadRoutes: function() {
      var map = this.map;
      let relocate = false;
      this.routes.forEach(route => {
        if (route.visible) {
          let path = route.positions.map(point => {
            return new google.maps.LatLng(point.lat, point.lng);
          });

          var polyline = new google.maps.Polyline({
            path: path,
            map: map,
            strokeColor: route.color,
            strokeOpacity: 1.0,
            strokeWeight: 4
          });
          if (!relocate) {
            const center = new google.maps.LatLng(route.positions[0].lat, route.positions[0].lng);
            map.panTo(center);
            relocate = true;
          }
        }
      });
    }
  }
};
</script>
<style>
#map {
  width: 100%;
  height: 100%;
}
</style>