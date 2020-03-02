<template>
  <div class="menu">
    <div id="page-wrapper">
      <div id="sidebar-wrapper">
        <ul class="sidebar-nav">
          <li class="sidebar-brand" v-for="(menu, index) in menus" :key="index">
            <a href="#" :title="menu.value">
              <img :src="menu.image" alt=""/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {},
  data() {
    return {
      menus: [
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#sidebar-wrapper {
  position: fixed;
  width: 50px;
  height: 100%;
  /* margin-left: -250px; */
  background: rgba(73, 72, 72, 0.582);
  overflow-x: hidden;
  overflow-y: auto;
}

#page-content-wrapper {
  width: 100%;
  padding: 20px;
}

.sidebar-nav {
  width: 50px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.sidebar-nav li a:hover {
  color: #fff;
  display: block;
  background: rgba(255, 255, 255, 0.2);
}

.sidebar-nav > .sidebar-brand {
  font-size: 1.3em;
  line-height: 3em;
}

 .sidebar-nav li a img{
   width: 35px;
 }
</style>
