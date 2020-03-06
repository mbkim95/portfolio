<template>
  <div class="project container-fluid px-0" id="page-wrapper">
    <transition name="fade">
      <div id="content" class="row mx-0" v-if="show">
        <ul class="col-12 list-unstyled my-auto list-inline project-list">
          <li
            class="col-6 col-md-4 mx-auto mt-4 mb-4 list-inline-item"
            v-for="(item, index) in projects"
            :key="index"
          >
            <img class="folder-icon" :src="folder" alt="" />
            <div>{{ item.title }}</div>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {},
  data() {
    return {
      show: false,
      folder: require("../assets/folder.png"),
      projects: [
        {
          title: "Band Online"
        },
        {
          title: "도착지 알리미"
        },
        {
          title: "D&A"
        },
        {
          title: "Tread"
        },
        {
          title: "화재 대응 시스템"
        },
        {
          title: "Limic_X_project"
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

.project #content {
  height: calc(100vh - 25px);
  background-color: rgb(242, 241, 240);
  overflow-x: hidden;
}

.folder-icon {
  width: 50px;
}

.project-list {
  font-size: 0.8em;
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
  0% {
    transform: scale(0.6);
  }

  100% {
    transform: scale(1);
  }
}
</style>
