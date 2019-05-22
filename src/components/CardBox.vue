<template>
  <el-card class="box-card" shadow="always" style="text-align:left">
    <div slot="header" class="clearfix">
      <span style="font-size:24px">新闻</span>
      <el-button size="mini" style="float: right" type="success" plain>查看更多</el-button>
    </div>
    <ul>
      <li v-for="o in news" :key="o.title" class="item">
        <el-row>
          <el-col :span="9">
            <el-image :src="o.img"></el-image>
          </el-col>
          <el-col :span="15">
            <h3>{{o.title}}</h3>
            <p>{{o.desc}}</p>
          </el-col>
        </el-row>
      </li>
    </ul>
  </el-card>
</template>

<script>
const sr = "../static/img/";
export default {
  name: "card-box",
  data() {
    return {
      news: [
        {
          title: "EICBA",
          img: sr + "twitter.png",
          desc: "提供全平台、全场次视频直播、点播、集锦等精彩内容"
        },
        {
          title: "出国保研讲座",
          desc: "保研出国就业讲座策划",
          img: sr + "collections.svg"
        },
        {
          title: "五一放假安排",
          img: sr + "working.svg",
          desc: "不放假, 不放假"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box-card {
  height: 420px;
  margin-top: 20px;
}

.box-card ul {
  padding: 0;
}

.box-card ul .item {
  overflow: hidden;
  list-style: none;
  border-top: 1px solid #ebeef5;
  line-height: 24px;
  padding: 8px 4px;
}

.box-card ul .item .el-image {
  height: 75px;
  max-width: 133.33px;
  padding: 0 6px;
}

.box-card ul .item p {
  color: #999;
  font-size: 12px;
  line-height: 15px;
}

.box-card ul > .item:first-child {
  border: none;
  padding-top: 2px;
}
</style>
