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
        {{ project.title }}
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
        <article
          class="mt-4 mb-4"
          v-bind="project"
          style="white-space:pre-wrap;"
        >
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
        title: "화재 대응 시스템",
        language: ["Raspberry Pi", "C", "MQTT Protocol", "Sensors"],
        videoUrl: "https://youtu.be/uNy8EPgrUy0",
        personnel: 4,
        description:
          "라즈베리파이와 각종 센서 및 MQTT 프로토콜을 활용하여 구현한 화재 대응 시스템입니다. 방에 사람이 있는지 없는지에 따라서 문을 다르게 제어하고 화재 정보를 수집하여 전송할 수 있도록 구현하였습니다.\n\n해당 프로젝트에서 온습도를 주기적으로 측정하고 화재를 감지하는 부분과 측정한 결과를 메인 라즈베리파이에 전송하는 부분을 맡아 구현하였습니다."
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
</style>
