<template>
  <div id="app">
    <Header></Header>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header
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
  color: #2c3e50;
}
</style>
