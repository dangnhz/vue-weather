<template>
  <div id="hourly" class="hourly">
    <div class="content" v-if="hourly">
      <div v-if="timezone" class="location">
        <h1>{{timezone.split('/')[1]}}</h1>
      </div>
      <div class="hourly-data">
        <ul>
          <li v-for="(item, index) in hourly" :key="index">
            <span style="width: 8rem" class="time">{{ index == 0 ? 'Now' : item.time | moment('hh:mm')}}</span>
            <span style="margin-left: 6rem; margin-right:2rem">{{Math.floor((item.temperature - 32) *5/9)}}°</span>
            <span><img style="width: 2rem" class="item-icon" :src="`/images/icon/${item.icon}.png`" /></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hourly",
  props: ["hourly", "timezone"],
  methods: {
    toggleHourly(active) {
      if (active) {
        this.$el.classList.add("active");
      } else {
        this.$el.classList.remove("active");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.hourly {
  width: 100%;
  height: 0;
  background: #333;
  position: absolute;
  top: 0;
  right: -100%;
  z-index: 9;
  border-radius: 1.5rem;
  transition: 0.5s;
  .content {
    opacity: 0;
  }
}

.hourly.active {
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transform: scale(1);
  border-radius: 1.5rem;
  .content {
    opacity: 1;
    transition: 0.5s;
    transition-delay: 0.8s;
    height: 100%;
    .location {
      padding: 1rem 2rem;
      // position: absolute;
      background: rgba(44, 44, 44, 1);
      width: 100%;
      display: block;
      top: 0;
      left: 0;
    }
    .hourly-data {
      height: 100%;
      overflow: auto;
       background: #333;
      padding-bottom: 5rem;
      &::-webkit-scrollbar {
          display: none;
      }
      ul {
        li {
          font-size: 1.2rem;
          list-style: none;
          display: flex;
          align-items: center;
          padding: 1rem 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
      }
    }
  }
}
</style>