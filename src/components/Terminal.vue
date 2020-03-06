<template>
  <div class="terminal">
    <transition name="fade">
      <div id="page-wrapper" v-if="show">
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
                '^1500Hello! ^1000 Welcome to my page.^1000',
                'Please click the Menu Icon.'
              ]"
            >
              <span class="typing"></span>
            </vue-typed-js>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Terminal",
  props: {},
  data() {
    return {
      show: false
    };
  },
  mounted() {
    this.display();
  },
  methods: {
    display() {
      this.show = true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#page-wrapper {
  margin-left: 50px;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
  animation: scale-up 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@keyframes scale-up {
  0%{
    transform: scale(0.6);
  }

  100%{
    transform: scale(1);
  }
} 
</style>
