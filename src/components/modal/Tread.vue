<template>
  <modal
    name="tread"
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
          @click="$modal.hide('tread')"
        />
        Tread
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
  name: "Tread",
  data() {
    return {
      closeButton: require("../../assets/close.png"),
      videoId: "videoId",
      project: {
        language: [
          "Python",
          "Django",
          "Vue.js",
          "BeautifulSoup",
          "Open API",
          "..."
        ],
        videoUrl: "https://youtu.be/4HzZ81gscnk",
        personnel: 4,
        description:
          "트렌드 분석 웹 어플리케이션입니다. 해당 어플리케이션은 연령별 실시간 인기 검색어와 검색어와 관련된 각종 정보를 대시보드를 통해 제공해줍니다. 그리고 인기 유튜브 채널의 정보와 키워드별 동영상 실시간 순위를 제공해줍니다. 저는 해당 프로젝트에서 Open API와 Crawling을 통해 데이터를 수집하고 이를 활용하여 WordCloud를 구현하는 부분을 담당하였습니다."
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
