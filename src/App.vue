<template>
  <div id="app">
    <Menu></Menu>
    <Terminal></Terminal>
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import Terminal from "./components/Terminal.vue";

export default {
  name: "App",
  components: {
    Menu, Terminal
  }
};
</script>

<style>
@font-face {
  font-family: Timon;
  src: url("../fonts/TmonTium.ttf");
  unicode-range: U+0041-005A, U+0061-007A, U+0030-0039; /* English, Number */
}

@font-face {
  font-family: Timon;
  src: url(../fonts/TmonMonsori.ttf);
  unicode-range: U+AC00-D7A3; /* Korean */
}

#app {
  font-family: Timon;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-size: cover;
  background-image: url(assets/bg.jpg);
}
</style>
