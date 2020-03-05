<template>
  <div class="statusBar container-fluid px-0" id="page-wrapper">
    <div id="window">
      <div class="ml-2" style="position: absolute; left: 50px;">
        {{ title }}
      </div>
      <div class="ml-2" style="position: absolute; right: 10px;">
        {{ time }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatusBar",
  props: { title: String },
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
      const time = hour + ":" + minutes + ":" + seconds;
      const dateTime = date + " " + time;
      this.time = dateTime;
    },
    timeFormatter(value) {
      return value < 10 ? "0" + value : value;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#page-wrapper {
  margin-left: 50px;
}

.statusBar #window {
  background-color: #4c4840;
  height: 25px;
}

.statusBar #content {
  height: calc(100vh - 25px);
  background-color: rgb(48, 10, 36, 0.8);
}
</style>
