<template>
  <div class="terminal" id="page-wrapper">
    <div id="window">
      <div class="ml-2" style="position: absolute; left: 50px;">
        Terminal
      </div>
      <div class="ml-2" style="position: absolute; right: 10px;">
        {{ time }}
      </div>
    </div>
    <div class="text-left" id="content">
      <span class="ml-2" id="id">
        mbkim@github
      </span>
      <span>:</span>
      <span style="color: #729FCF">~</span>
      <span class="mr-2">$</span>
      <div style="display: inline;">
        <!-- type pausing -->
        <vue-typed-js
          class="typing"
          :loop="true"
          :strings="[
            'Hello! ^1000 Welcome to my page.^1000',
            'Please click the Menu Icon.^1500'
          ]"
        >
          <span class="typing"></span>
        </vue-typed-js>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Terminal",
  props: {},
  data() {
    return {
      date: "",
      time: ""
    };
  },
  mounted() {
    this.setClock();
  },
  methods: {
    setClock() {
      setInterval(() => {
        this.getNow();
      }, 1000);
    },
    getNow() {
      const today = new Date();
      const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
        const hour = this.timeFormatter(today.getHours());
        const minutes = this.timeFormatter(today.getMinutes());
        const seconds = this.timeFormatter(today.getSeconds());
      const time =
        hour + ":" + minutes + ":" + seconds;
      const dateTime = date + " " + time;
      this.time = dateTime;
    },
    timeFormatter(value){
      return value < 10 ? '0' + value : value;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#page-wrapper {
  padding-left: 50px;
}

.terminal {
  height: 100vh;
}

.terminal #window {
  background-color: #4c4840;
  height: 25px;
}

.terminal #content {
  height: calc(100vh - 25px);
  background-color: rgb(48, 10, 36, 0.8);
}

.terminal #id {
  color: #8ae234;
}

.terminal .typing {
  display: inline;
}
</style>
