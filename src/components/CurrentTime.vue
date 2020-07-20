<template>
  <div id="current-time">
    <div class="wrapper" v-if=' hour || minute || second'>
    <span>{{hour}}</span>:<span v-if="minute<10">0</span>
    <span>{{minute}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "current-time",
  data() {
    return {
     
        hour: null,
        minute: null,
        second: null
      
    };
  },
  methods: {
    getTime() {
      let date = new Date();
      this.hour = date.getHours();
      this.minute = date.getMinutes();
      this.second = date.getSeconds();
    }
  },
  mounted() {
    setInterval(() => this.getTime(), 1000);
    
  }
};
</script>

<style scopped>

#current-time {
  height: 1rem;
}

</style>