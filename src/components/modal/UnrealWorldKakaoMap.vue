<template>
  <modal
    name="unreal-world-kakao-map"
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
          @click="$modal.hide('unreal-world-kakao-map')"
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
  name: "Unreal_World_Kakao_Map",
  data() {
    return {
      closeButton: require("../../assets/close.png"),
      videoId: "videoId",
      project: {
        title: "이세계의 카카오맵",
        language: ["Android", "Kotlin", "Coroutine", "Kakao API", "AAC", "Firebase", "..."],
        videoUrl: "https://youtu.be/e35WzdybM4E",
        personnel: 2,
        description:
          "친구들과 손쉽게 맛집 리스트 공유 컨셉으로 구현된 카카오맵 엔진 기반 안드로이드 지도 어플리케이션입니다. 장소 검색을 통해서 사용자가 원하는 장소를 검색하고 상세정보를 보여줍니다. 사용자가 원하는 장소를 북마크하면 지도에 마커가 생성되고 북마크 리스트에 추가되어 손쉽게 확인할 수 있습니다. 그리고 북마크 공유하기 기능을 통해서 친구들과 서로의 북마크 목록을 실시간으로 공유할 수 있습니다. 또한, 앱을 삭제하거나 사용기기를 변경하더라도 기존의 카카오 아이디로 로그인한다면 이전에 추가한 북마크 목록, 친구 목록을 이어서 사용할 수 있습니다."
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
