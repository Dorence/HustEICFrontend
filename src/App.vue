<template>
  <el-container id="app">
    <el-header>{{headerTitle}}</el-header>
    <el-main>
      <el-row>
        <el-col :span="24">
          <el-carousel class="bg-green" :interval="4500" height="360px">
            <el-carousel-item v-for="i in carousel" :key="i.title">
              <el-image :src="i.img" fit="scale-down">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
              <h3>{{i.title}}</h3>
            </el-carousel-item>
          </el-carousel>
          <!-- end el-carousel -->
        </el-col>
      </el-row>
      <div style="min-height: 50px"></div>
      <el-row :gutter="12">
        <el-col :span="11" :xs="22" :offset="1">
          <el-row class="card-viewer" :gutter="10">
            <el-col :span="12" v-for="(item, idx) in cardView" :key="item.title">
              <el-card
                :class="'wow bounceIn'+ (idx % 2 ?'Right':'Left')"
                data-wow-duration="1.2s"
                data-wow-delay="1s"
                shadow="hover"
              >
                <img :src="item.img" class="image">
                <div class="bottom clearfix">
                  {{idx}}
                  <el-button round>{{item.title}}</el-button>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <!-- end .card-viewer -->
        </el-col>
        <el-col :span="11" :xs="{span: 22, offset: 1}">
          <!-- use component card-box -->
          <card-box></card-box>
        </el-col>
      </el-row>
      <div style="min-height: 50px"></div>
      <!-- use component icon-list -->
      <icon-list></icon-list>
      <div style="min-height: 50px"></div>
    </el-main>
    <!-- use component index-footer -->
    <index-footer></index-footer>
  </el-container>
</template>

<script>
import CardBox from "./components/CardBox";
import IndexFooter from "./components/IndexFooter";
import IconList from "./components/IconList";
import { WOW } from "wowjs";

const sr = "../static/img/"; // dir to static images
console.log(WOW);

export default {
  name: "App",
  components: { CardBox, IconList, IndexFooter },
  data() {
    return {
      headerTitle: "华中科技大学电子信息与通信学院分团委学生会",
      carousel: [
        {
          title: "1. Design theming",
          img: sr + "design_assets_theming-2x1-large.png"
        },
        {
          title: "2. Design type",
          img: sr + "design_assets_type-2x1-large.png"
        },
        { title: "3. Google extension", img: sr + "mockup.png" },
        { title: "4. Cabecera music", img: sr + "Cabecera_MusicIcons.jpg" }
      ],
      cardView: [
        { title: "电信学院学生会招新", img: sr + "production.svg" },
        { title: "小红帽义务维修预约", img: sr + "formats.svg" },
        { title: "启明书屋书籍借阅", img: sr + "collections.svg" },
        { title: "宣传部海报制作预约", img: sr + "guard-editor.png" }
      ],
      icon: [
        "loading",
        "delete-solid",
        "s-management",
        "c-scale-to-original",
        "s-operation",
        "data-analysis",
        "upload",
        "ice-cream-round",
        "video-play",
        "video-pause",
        "s-finance",
        "video-camera-solid"
      ]
    };
  }
};
</script>

<style>
/* overall */
* {
  margin: 0;
}

#app {
  color: #2c3e50;
  font-family: "Avenir", Helvetica, Arial, "Consolas", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-bottom: 8px;
  min-width: 600px;
  text-align: center;
}

.el-header {
  background-color: rgba(217, 253, 175, 0.16);
  color: #000;
  font-size: 36px;
  font-weight: bold;
  line-height: 60px;
}

.el-main {
  background-color: rgba(217, 253, 175, 0.16);
  overflow: initial;
  padding: 4px;
}

.el-footer {
  height: auto;
}
/* end overall */
/* .el-carousel */
.el-carousel {
  padding: 18px 0;
}

.el-carousel__item .el-image {
  height: 90%;
}

.el-carousel__item h3 {
  padding: 4px 0;
}

.el-carousel__indicators {
  height: 32px;
}
/* end .el-carousel */
/* .card-viewer */
.card-viewer .el-card {
  background-color: rgba(255, 255, 255, 0.55);
  margin: 4px 0;
  max-width: 300px;
  min-height: 66px;
  min-width: 100px;
}

.card-viewer .el-card .el-card__body {
  padding: 8px;
}

.card-viewer .el-card img {
  width: 94%;
  max-height: 168px;
}

.card-viewer .el-card .el-button {
  width: 92%;
  margin-top: 6px;
  padding: 6px 12px;
}
/* end .card-viewer */

/* utils */
.bg-green {
  background-color: #c7ef98;
}

.bg-green-light {
  background-color: #e0ffc0;
}

.bg-white {
  background-color: #fff;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
