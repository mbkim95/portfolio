<template>
  <div class="about">
    <div id="page-wrapper">
      <div id="content">
        <!-- <div id="image" class="col-md-6 text-center border d-flex"> -->
        <div id="image" class="row h-1">
          <div class="col-sm-12 my-auto">
            <img :src="profile" alt="" style="width: 300px;" />
            <h3 class="mt-4">김민범</h3>
            <h4>Kim Min Bum</h4>
          </div>
        </div>
        <div id="description" class="row h-1">
          <div class="col-sm-12 my-auto">
            <div id="career">&lt;Career></div>
            <ul style="list-style: none;">
              <li
                class="mt-4 mb-4"
                v-for="(career, index) in careers"
                :key="index"
              >
                <h5>{{ career.name }}</h5>
                <h6>{{ career.detail }}</h6>
                <h6>{{ career.date }}</h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  props: {},
  data() {
    return {
      profile: require("../assets/profile.png"),
      careers: [
        {
          name: "LINE PLUS",
          detail: "메인 클라이언트팀 인턴",
          date: "2019/10 ~ 2019/12"
        },
        {
          name: "사고링크",
          detail: "개발팀 인턴",
          date: "2019/06 ~ 2019/08"
        },
        {
          name: "건국대학교",
          detail: "컴퓨터공학과",
          date: "2014/03 ~ 2020/02"
        }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#page-wrapper {
  margin-left: 50px;
  color: rgb(100, 100, 100);
}

.about #content {
  height: calc(100vh - 25px);
  background-color: rgb(242, 241, 240);
}

.about #content #profile {
  margin-top: 30px;
  margin-bottom: 20px;
  width: 240px;
}

#career {
  margin-top: 40px;
  font-size: 2em;
  color: black;
}

#image {
  width: 60%;
  height: 100%;
  float: left;
}

#description {
  width: 40%;
  height: 100%;
  float: right;
  margin: 0;
}
</style>
