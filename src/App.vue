<template>
  <div id="app" class="app-main">
    <router-view></router-view>
  </div>
</template>

<script>
const COM_NAME = 'app';
export default {
  name: COM_NAME,
  mounted() {
  },
  beforeDestroy() {
  },
  methods: {
  }
};
</script>

<style lang="stylus">
  html,body
    width: 100%
    height: 100%
    background: #f0f0f0
    overflow: hidden
    margin: 0
    padding: 0

  .app-main
    width: 100%
    height: 100%
</style>
