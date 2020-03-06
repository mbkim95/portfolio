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
            <img
              class="folder-icon"
              :src="folder"
              alt=""
              @click="$modal.show(item.modal)"
            />
            <div>{{ item.title }}</div>
          </li>
        </ul>
        <band-online />
        <destination-notification />
        <dn-a />
        <tread />
        <fire-response-system />
        <limic-x />
      </div>
    </transition>
  </div>
</template>

<script>
import BandOnline from "./modal/BandOnline.vue";
import DestinationNotification from "./modal/DestinationNotification.vue";
import DnA from "./modal/DnA.vue";
import Tread from "./modal/Tread.vue";
import FireResponseSystem from "./modal/FireResponseSystem.vue";
import LimicX from "./modal/LimicX.vue";

export default {
  name: "Project",
  props: {},
  components: {
    BandOnline,
    DestinationNotification,
    DnA,
    Tread,
    FireResponseSystem,
    LimicX
  },
  created() {
    setInterval(() => {
      this.modal = !this.modal;
    }, 5000);
  },
  data() {
    return {
      show: false,
      modal: false,
      folder: require("../assets/folder.png"),
      projects: [
        {
          title: "Band Online",
          modal: "band-online"
        },
        {
          title: "도착지 알리미",
          modal: "destination-notification"
        },
        {
          title: "D&A",
          modal: "dungeon-adventure"
        },
        {
          title: "Tread",
          modal: "tread"
        },
        {
          title: "화재 대응 시스템",
          modal: "fire-response-system"
        },
        {
          title: "Limic X",
          modal: "limic-x"
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
    },
    handleClickButton() {
      this.visible = !this.visible;
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
