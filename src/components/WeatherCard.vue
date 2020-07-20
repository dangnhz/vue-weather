<template>
  <div id="weather-card">
    <div class="wrapper" v-if="data">
      <div><CurrentTime></CurrentTime></div>
      <div class="location">
        <span class="location-city">{{data.timezone.split('/')[1]}}</span>
      </div>
      <div class="card-current-date">
         <div>{{ data.currently.time | moment("ddd, D MMMM YYYY") }}</div>
      </div>
     
      
      <div class="weather-icon">
        <img id="icon" :src="`/images/icon/${data.currently.icon}.png`"/>
      </div>

      <div class="weather-info">
        <div class="temperature">
          <div class="temp">{{Math.floor((data.currently.temperature - 32) *5/9)}}°</div>
        </div>
        <div class="wind-humidity">
          <div class="wind">
            <p>Wind</p>
            <v-icon name="wind"></v-icon>
            <span style="margin-left:10px"> {{data.currently.windSpeed}} m/s</span>
          </div>
          <div class="humidity">
            <p>Humidity</p>
            <span> <img width="16px" src="../assets/icon/humidity.png" alt="icon"></span>
            <span style="margin-left:10px">{{data.currently.humidity * 100}} %</span>
          </div>
        </div>
      </div>
      <div class="summary">{{data.currently.summary}}</div>
      <div class="weekday">
        
        <div v-for="(day, index) in weekdays" :key="index" class="weekday-item" style="text-align: center">
          
          <div class="weekday-item-day"><span>{{ day.time | moment("ddd") }}</span></div>
          <img class="weekday-item-icon" :src="`/images/icon/${day.icon}.png`" />
          <div class="weekday-item-temp">{{Math.floor((day.temperatureHigh - 32) *5/9)}}°</div>
          <div class="weekday-item-temp" style="color: #b7b7b7">{{Math.floor((day.temperatureLow - 32) *5/9)}}°</div>
          
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import CurrentTime from './CurrentTime'
    export default {
        name: 'weather-card',
        props: ['data'],
        components: {
            CurrentTime,

        },
        computed: {
          weekdays() {
            let weekdays = this.data.daily.data.slice(1,this.data.daily.data.length)
            return weekdays
            
          }
        },
        methods: {
            getLocation() {
                console.log(this.data.latitude)
            }
        },
        

    }
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&display=swap");
#weather-card {
  position: relative;
  width: 100%;
  height: 100%;
  font-family: "Roboto", sans-serif;

}

.wrapper {
  position: relative;
  z-index: 1;
}
.location {
  display: flex;
  align-items: center;
  justify-content: center;
}

.location .location-city {
  font-size: 1.2rem;
  margin: 0.5rem 0 0.5rem 0 ;
}
.card-current-date {
display: flex;
width: 100%;
justify-content: center;

}
.weather-icon #icon {
margin: 1rem 0 1rem 1rem;
// font-size: 5rem;
width: 8rem;
// font-weight: 100;
}

.weather-info {
  display: flex;
  align-items: center;
}
.weather-info .temperature {
  padding: 0.5rem;
}
.weather-info .temperature .temp {
  font-size: 8rem;
}
 .summary {
  font-size: 2rem;
  margin-left: 0.5rem;
  width: 100%;
}

.weather-info .wind-humidity {
  padding-left: 2rem;
}

.weather-info .wind-humidity .wind {
  margin-bottom: 1rem;
}
.weather-info .wind-humidity .wind p,
.humidity p {
  font-size: 0.8rem;
  margin: 0.5vh 0;
}

.weather-info .wind-humidity .wind span,
.humidity span {
  font-size: 1rem;
}

.weekday {
  margin-top: 4rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-around;
}

.weekday .weekday-item {
  padding: 0.5rem;
}

.weekday .weekday-item .weekday-item-temp,
.weekday-item-day {
  font-size: 1rem;
}

.weekday .weekday-item .weekday-item-icon {
  width: 1.5rem;
  // height: 2rem;
  margin: 0.5rem 0;
}
</style>