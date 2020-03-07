<template>
  <modal
    name="destination-notificator"
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
          @click="$modal.hide('destination-notificator')"
        />
        도착지 알리미
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
  name: "Destination_Notificator",
  data() {
    return {
      closeButton: require("../../assets/close.png"),
      videoId: "videoId",
      project: {
        language: ["Android", "Java", "Open API", "..."],
        videoUrl: "https://youtu.be/KH2OdR9WpAY",
        personnel: 1,
        description:
          "사용자가 목적지에 도착하면 알람을 발생시켜 도착지에 도착했음을 알려주는 어플리케이션입니다. GPS와 Network 정보를 통해 사용자의 위치를 파악하여 목적지에 근접하였는지를 감지하도록 구현하였습니다."
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
