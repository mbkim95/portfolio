<template>
  <modal
    name="dungeon-and-adventure"
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
          @click="$modal.hide('dungeon-and-adventure')"
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
  name: "Dungeon_And_Adventure",
  data() {
    return {
      closeButton: require("../../assets/close.png"),
      videoId: "videoId",
      project: {
        title: "D&A",
        language: ["Java"],
        videoUrl: "https://youtu.be/fXrE9FFP9vs",
        personnel: 1,
        description:
          "인기 온라인 게임인 'Dungeon & Fighter'를 모방하여 만든 액션 게임입니다. \n자바 Swing을 활용하여 자연스러운 움직임을 구현하는 것에 초점을 맞춰 진행하였습니다."
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
