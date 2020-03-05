<template>
  <div class="menu container-fluid px-0">
    <div class="sidebar-nav h-100">
      <ul class="list-unstyled">
        <li class="nav-item" v-for="(menu, index) in menus" :key="index">
          <a class="nav-link pt-4 pb-4 px-0" href="#" :title="menu.value">
            <img :src="menu.image" alt="" @click="sendMenu(menu.value)" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {},
  data() {
    return {
      currentMenu: "Terminal",
      menus: [
        {
          value: "Terminal",
          image: require("../assets/terminal.png")
        },
        {
          value: "About",
          image: require("../assets/about.png")
        },
        {
          value: "Project",
          image: require("../assets/project.png")
        },
        {
          value: "Contact",
          image: require("../assets/contact.png")
        }
      ]
    };
  },
  methods: {
    sendMenu(menu) {
      console.log(menu);
      this.$emit("show-menu", menu);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar-nav {
  position: fixed;
  width: 50px;
  margin: 0;
  padding: 0;
  background: rgba(73, 72, 72, 0.582);
}

.sidebar-nav li a:hover {
  color: #fff;
  display: block;
  background: rgba(255, 255, 255, 0.2);
}

.sidebar-nav li a img {
  width: 35px;
}
</style>
