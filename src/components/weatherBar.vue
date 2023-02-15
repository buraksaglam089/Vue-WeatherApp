<template>
  <div class="weather-wrap" v-if="data && typeof data.main != 'undefined'">
        <div class="location-box">
          <div class="location">{{ data.name }}, {{ data.sys.country }}</div>
          <div class="date">{{ dateBuilder() }}</div>
        </div>

        <div class="weather-box">
          <div class="temp">{{ (data.main.temp) }}°c</div>
          <div class="weather">{{ data.weather[0].main }}</div>
        </div>
      </div>
</template>




<script>
export default {
  
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  methods:{
    dateBuilder() {
      let d = new Date();
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${day} ${date} ${month} ${year}`;
    }
  }

  

}
</script>

<style>

</style>