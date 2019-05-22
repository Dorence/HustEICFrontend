<template>
  <el-footer>
    <el-row :gutter="8">
      <el-col :span="4" :xs="8">
        <el-image src="../static/img/eic_stu_union.png" fit="scale-down" style="max-width:100px;"></el-image>
      </el-col>
      <el-col :span="6" :xs="8" style="min-height:100px;padding-left:20px;">
        <h3 class="footer-header">相关链接</h3>
        <ul class="footer-link">
          <li v-for="i in aboutLinks" :key="i.text">
            <el-link :type="i.type" :underline="false" icon="el-icon-link">{{i.text}}</el-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="7" :xs="8">
        <h3 class="footer-header">学生会公邮</h3>xueshenghui@qq.com
        <h3 class="footer-header">权益部公邮</h3>quanyibu@qq.com
      </el-col>
      <el-col :span="7" :xs="24">
        <p v-html="auth"></p>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">Copyright&copy; 2019 EIC Student Union. All rights reserved.</el-col>
    </el-row>
  </el-footer>
</template>

<script>
export default {
  name: "index-footer",
  data() {
    return {
      auth:
        "电子信息与通信学院学生会<br/>电子信息与通信学院学生会主办<br/>电子信息与通信学院学生会技术部主办",
      aboutLinks: [
        { type: "info", text: "EIC论坛 1" },
        { type: "info", text: "EIC论坛 2" },
        { type: "info", text: "EIC论坛 3" }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-footer {
  background: #042433;
  color: #999999;
  padding: 16px 0;
  height: 100% !important;
}

.footer-header {
  color: #efefef;
  font-size: 20px;
  text-align: left;
}

.footer-link {
  color: #e5e5e5;
  list-style: none;
  overflow: hidden;
  padding: 0;
  text-align: left;
}

.el-link.el-link--info:hover {
  color: #fff;
}

p {
  text-align: left;
  font-size: 14px;
  line-height: 30px;
  white-space: pre-line;
}

@media only screen and (max-width: 767px) {
  p {
    text-align: right;
    line-height: normal;
    margin: 8px 24px;
  }
}
</style>
