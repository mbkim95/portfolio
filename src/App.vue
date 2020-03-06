<template>
  <div id="app">
    <Menu @show-menu="chooseMenu"></Menu>
    <status-bar :title="display"></status-bar>
    <component :is="display"></component>
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import StatusBar from "./components/StatusBar.vue";
import Terminal from "./components/Terminal.vue";
import About from "./components/About.vue";
import Project from "./components/Project.vue";
import Contact from "./components/Contact.vue";

export default {
  name: "App",
  data() {
    return {
      display: "Terminal"
    };
  },
  methods: {
    chooseMenu(menu) {
      this.display = menu;
      console.log(menu);
    }
  },
  components: {
    Menu,
    StatusBar,
    Terminal,
    About,
    Project,
    Contact
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
