<template>
  <modal
    name="fire-response-system"
    transition="nice-modal-fade"
    weight="auto"
    height="auto"
    :delay="100"
    :scrollable="true"
    :adaptive="true"
    :clickToClose="false"
  >
    <div class="container-fluid px-0">
      <div id="title">
        <img
          id="close_button"
          :src="closeButton"
          alt=""
          @click="$modal.hide('fire-response-system')"
        />
        화재 대응 시스템
      </div>
      <div id="content">
        <div class="row">
          <div class="mx-auto my-auto">
            <youtube
              :video-id="videoId"
              player-width="auto"
              player-height="auto"
            ></youtube>
          </div>
          <div class="col-md-5" v-bind="project">
            <h5>사용 기술</h5>
            <ul class="list-unstyled">
              <li v-for="(item, index) in project.language" :key="index">
                {{ item }}
              </li>
            </ul>
            <h5>개발 인원</h5>
            <li class="list-unstyled">{{ project.personnel }}명</li>
          </div>
        </div>
        <article class="mt-4 mb-4" v-bind="project" style="font-size: 1.2em;">
          {{ project.description }}
        </article>
      </div>
    </div>
  </modal>
</template>
<script>
export default {
  name: "Fire-Response-System",
  data() {
    return {
      closeButton: require("../../assets/close.png"),
      videoId: "videoId",
      project: {
        language: ["RaspberryPi", "C", "MQTT Protocol", "Sensors"],
        videoUrl: "https://youtu.be/uNy8EPgrUy0",
        personnel: 4,
        description:
          "화재를 감지하여 상황에 맞게 대응하는 시스템입니다. 해당 프로젝트에서 온습도를 감지하고 화재를 감지하는 부분을 맡아 구현하였습니다."
      }
    };
  },
  mounted() {
    this.getVideo(this.project.videoUrl);
  },
  methods: {
    getVideo(url) {
      this.videoId = this.$youtube.getIdFromURL(url);
    }
  }
};
</script>

<style scoped>
#title {
  border: 1px solid gray;
  background-color: #4c4840;
  color: white;
  height: 30px;
  padding-left: 8px;
}

#close_button {
  width: 18px;
  height: 18px;
}

#content {
  margin: 10px 10px;
}

#graph {
  max-width: 100%;
  height: auto;
}
</style>
