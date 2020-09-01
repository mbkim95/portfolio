<template>
  <div class="about container-fluid px-0" id="page-wrapper">
    <transition name="fade">
      <div id="content" class="row mx-0" v-if="show">
        <div class="col-lg-2 col-md-2"></div>
        <div class="col-lg-4 col-md-4 my-auto">
          <img :src="profile" class="w-auto img-fluid image" />
          <h2 class="mt-4">김민범</h2>
          <h5 class="mb-4">Kim Min Bum</h5>
        </div>
        <div class="col-lg-4 col-md-4 my-auto">
          <div id="career" class="mt-2">&lt;Career></div>
          <ul class="list-unstyled">
            <li
              class="mt-5 mb-5"
              v-for="(career, index) in careers"
              :key="index"
            >
              <h5>{{ career.name }}</h5>
              <h6>{{ career.detail }}</h6>
              <h6>{{ career.job }}</h6>
              <h6>{{ career.date }}</h6>
            </li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-2"></div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "About",
  props: {},
  data() {
    return {
      show: false,
      profile: require("../assets/profile.png"),
      careers: [
        {
          name: "<KAKAO>",
          detail: "맵 서비스팀 인턴",
          job: "안드로이드 개발",
          date: "2020/07 ~ 2020/08"
        },
        {
          name: "<LINE PLUS>",
          detail: "메인 클라이언트팀 인턴",
          job: "안드로이드 개발",
          date: "2019/10 ~ 2019/12"
        },
        {
          name: "<사고링크>",
          detail: "개발팀 인턴",
          job: "프론트엔드 개발",
          date: "2019/06 ~ 2019/08"
        },
        {
          name: "<건국대학교>",
          detail: "컴퓨터공학과",
          job: "",
          date: "2014/03 ~ 2020/02"
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

.about #content {
  height: calc(100vh - 25px);
  background-color: rgb(242, 241, 240);
  overflow-x: hidden;
  overflow-y: scroll;
}

#career {
  font-size: 2em;
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
