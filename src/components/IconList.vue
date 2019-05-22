<template>
  <ul class="icon-list bg-green-light">
        <li class="bg-white" v-for="name in icon" :key="name">
          <span>
            <i :class="'el-icon-' + name"></i>
            <p class="icon-name">{{'el-icon-' + name}}</p>
          </span>
        </li>
      </ul>
</template>

<script>
const sr = "../static/img/";
export default {
  name: "icon-list",
  data() {
    return {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon-list {
  list-style: none;
  margin: 16px 0;
  overflow: hidden;
  padding: 16px 0;
}

.icon-list li {
  border: 1px solid #ebeef5;
  border-radius: 10px;
  font-size: 14px;
  float: left;
  height: 128px;
  line-height: 90px;
  margin: 3px 0.16%;
  width: 16%;
}

.icon-list li span {
  color: #101010;
  font-family: "Helvetica Neue", Helvetica, sans-serif;
  line-height: normal;
  transition: color 0.15s linear;
}

.icon-list li .icon-name {
  display: inline-block;
  padding: 0 4px;
}

.icon-list li i {
  display: block;
  font-size: 36px;
  margin-top: 26px;
  color: #606266;
  transition: color 0.15s linear;
}
</style>
