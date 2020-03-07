<template>
  <modal
    name="limic-x"
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
          @click="$modal.hide('limic-x')"
        />
        LimicX
      </div>
      <div id="content">
        <div class="row">
          <div class="mx-auto my-auto">
            <img
              class="img-responsive mx-auto"
              id="graph"
              :src="result"
              alt=""
            />
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
  name: "Limic_X",
  data() {
    return {
      closeButton: require("../../assets/close.png"),
      videoId: "videoId",
      result: require("../../assets/limicX_result.png"),
      project: {
        language: ["C", "Limic Library"],
        videoUrl: "https://youtu.be/4HzZ81gscnk",
        personnel: 4,
        description:
          "MPI 프로그래밍 모델의 노드 내 통신은 메시지 크기가 큰 경우 메모리 매핑 방법을 사용하는데 대표적으로 커널 수준 메모리 영역 방식과 사용자 수준 메모리 영역 방식이 있습니다. 해당 프로젝트에서는 기존의 커널 수준 메모리 영역 방식의 라이브러리인 limic에 사용자 수준 메모리 영역 방식을 추가 구현하고 라이브러리 수준에 캐시를 구현하여 성능을 개선시켰습니다."
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
