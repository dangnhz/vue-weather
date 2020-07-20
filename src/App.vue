<template>
  <div id="app">
    <div class="container">
      <div class="loader" v-if="loading">
        <!-- <v-icon class="spinner" name="spinner" spin></v-icon> -->
        <Loader></Loader>
      </div>
      <div class="bg-color"></div>
      <Hamburger @toggle-hourly="toggleHourly"></Hamburger>
      <Hourly v-if="data" :hourly="data.hourly.data" :timezone="data.timezone" ref="hourlyComponent"></Hourly>
      <WeatherCard v-if="data" :data="data"></WeatherCard>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Hamburger from './components/Hamburger'
import WeatherCard from './components/WeatherCard'
import Loader from './components/Loader'
import Hourly from './components/Hourly'
export default {
  name: 'App',
  components: {
    WeatherCard,
    Loader,
    Hamburger,
    Hourly
  },
  data() {
    return {
      data: null,
      loading: true,
      // showHourly: false
    }
  },
  methods: {
    getData() {

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((postion) => {
          const latitude = postion.coords.latitude;
          const longitude = postion.coords.longitude;
          axios.get(`api/weather?lat=${latitude}&long=${longitude}`)
          .then(respone => respone.data)
          .then(data => {
            this.data = data
            this.loading = false
          })
          .catch(err => console.log(err))
        } 
        )}
     },
     toggleHourly(active) {
       this.$refs.hourlyComponent.toggleHourly(active)

     }
     
  },
  mounted () {
    this.getData();
  },
  
}

</script>


<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  color: white;
  font-family: sans-serif;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 100;
    background: linear-gradient(to right, #d3cce3, #e9e4f0);
/* background: -webkit-linear-gradient(to right, #bfe9ff, #ff6e7f);  
background: linear-gradient(to right, #bfe9ff, #ff6e7f);  */
}

.container {
  position: relative;
  width: 375px;
  /* height: 95vh; */
  height: 700px;
  padding: 1rem;
  margin: 5rem 0;
  font-family: "Roboto", sans-serif;
  /* font-family: 'Josefin Sans', sans-serif; */
  /* background: linear-gradient(to right, #41295a, #2f0743); */
  background-image: url("https://images.unsplash.com/photo-1435224654926-ecc9f7fa028c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 0 150px rgba(0, 0, 0, 0.5);
  border-radius: 1.5rem;
  overflow: hidden !important;
}
.bg-color {
  background-color: rgba(44, 20, 54, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  border-radius: 1.5rem;
}

.loader {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 375px;
  height: 100%;
  background: #333;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
</style>
