<template>
  <div class="contact container-fluid px-0" id="page-wrapper">
    <div id="content" class="row mx-0">
      <ul class="col-md-4 list-unstyled mx-auto my-auto p-0" id="window">
        <li id="title">Contact</li>
        <li class="mt-4 mb-4" v-for="(item, index) in information" :key="index">
          <a :href="item.link" id="link">
            <img :src="item.icon" alt="" id="icon" />
            {{ item.value }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: {},
  data() {
    return {
      information: [
        {
          key: "E-Mail",
          icon: require("../assets/email.png"),
          value: "mbkim95@naver.com",
          link: "mailto:mbkim95@naver.com"
        },
        {
          key: "Github",
          icon: require("../assets/github.png"),
          value: "mbkim95",
          link: "https://www.github.com/mbkim95"
        },
        {
          key: "Instagram",
          icon: require("../assets/instagram.png"),
          value: "_minbum_",
          link: "https://www.instagram.com/_minbum_"
        },
        {
          key: "Facebook",
          icon: require("../assets/facebook.png"),
          value: "mbkim95",
          link: "https://www.facebook.com/mbkim95"
        }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#page-wrapper {
  color: rgb(100, 100, 100);
  margin-left: 50px;
  width: calc(100vw - 50px);
}

.contact #content {
  height: calc(100vh - 25px);
  overflow-x: hidden;
  overflow-y: scroll;
}

.contact #window {
  font-size: 1.2em;
  background-color: rgb(242, 241, 240);
}

#link {
  color: rgb(100, 100, 100);
}

#icon {
  width: 35px;
}

li#title{
  color: white;
  background-color: #4c4840;;
}
</style>
