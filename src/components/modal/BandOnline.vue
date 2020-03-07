<template>
  <modal
    name="band-online"
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
          @click="$modal.hide('band-online')"
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
  name: "Band_Online",
  data() {
    return {
      closeButton: require("../../assets/close.png"),
      videoId: "videoId",
      project: {
        title: "Band Online",
        language: ["Java", "MySQL", "Socket Programming"],
        videoUrl: "https://youtu.be/vyzDwr7pivM",
        personnel: 1,
        description:
          "Java와 MySQL와 Socket통신을 활용하여 여러 명의 사용자가 실시간으로 밴드 합주를 할 수 있습니다. 대부분의 온라인 서비스들처럼 실시간 채팅, 쪽지 기능을 구현하였습니다.\n서버는 멀티 스레드 서버로 구현하여 부하를 줄일 수 있도록 하였습니다."
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
