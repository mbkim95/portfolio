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
        Band Online
      </div>
      <div id="content">
        <div class="row">
          <div class="col-md-8">
            <video src=""></video>
          </div>
          <div class="col-md-4" v-bind="project">
            <h5>사용 기술</h5>
            <ul class="list-unstyled">
              <li v-for="(item, index) in project.language" :key="index">
                {{ item }}
              </li>
            </ul>
            <h5>개발 인원</h5>
            <li class="list-unstyled">
              {{ project.personnel }}명
            </li>
          </div>
        </div>
        <article v-bind="project.description">
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
      project: {
        language: ["Java", "MySQL", "Socket Programming"],
        personnel: 1,
        description:
          "Java와 MySQL와 Socket통신을 활용하여 여러 명의 사용자가 실시간으로 밴드 합주를 할 수 있습니다."
      }
    };
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
