<template>
  <div class="terminal">
    <div id="page-wrapper">
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
  </div>
</template>

<script>
export default {
  name: "Terminal",
  props: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {}
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
</style>
