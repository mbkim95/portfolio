<template>
  <div class="contact container-fluid px-0" id="page-wrapper">
    <div id="content" class="row mx-0">
      <transition name="fade">
        <ul
          v-if="show"
          class="col-md-4 list-unstyled mx-auto my-auto p-0"
          id="window"
        >
          <li id="title">Contact</li>
          <li
            class="mt-4 mb-4"
            v-for="(item, index) in information"
            :key="index"
          >
            <a :href="item.link" id="link">
              <img :src="item.icon" alt="" id="icon" />
              {{ item.value }}
            </a>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: {},
  data() {
    return {
      show: false,
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
          key: "Blog",
          icon: require("../assets/blog.png"),
          value: "dev-mb",
          link: "https://dev-mb.tistory.com/"
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

li#title {
  color: white;
  background-color: #4c4840;
  height: 25px;
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
