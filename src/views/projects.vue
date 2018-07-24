<template>
  <el-container style="height:100%;#f0f0f0">
    <el-aside width="200px">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        background-color="rgb(73, 80, 96)"
        text-color="#fff"
        style="height:100%;">
        <div class="projects-page-logo">
          <img src="https://qiniu.zoombin.com/15324678507437" style="border-radius: 50%;"/>
          <div>
            Yi's Projects
          </div>
        </div>
        <el-menu-item index="1">
          <span slot="title">p1</span>
        </el-menu-item>
        <el-menu-item index="2">
          <span slot="title">p2</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-button type="primary" icon="el-icon-arrow-left" @click="backToHomeClick()">Back To Home</el-button>
      </el-header>
      <el-main>
        <el-tabs type="border-card">
          <el-tab-pane label="Introduction">Introduction</el-tab-pane>
          <el-tab-pane label="Demo">Graphics Demo</el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  /* eslint-disable */
	export default {
		name: 'projects',
    methods: {
      backToHomeClick() {
        this.$router.push({
          path: '/'
        })
      }
    }
	};
</script>

<style lang="stylus">
  .projects-page-logo
      padding: 8px
      text-align: left
      display: flex
      img
        height: 44px
        width: auto
      div
        margin: auto
        font-size: 25px
        color: white
  .el-header
    background-color: white
    color: #333
    line-height: 60px
  .el-menu
    border: 0
  .el-menu-item.is-active
    background-color: #363e4f !important
  .el-main
    height: 100%
  .el-tabs.el-tabs--top.el-tabs--border-card
    height: 100%
</style>
