<template>
  <div class="home">
    <div class="header">
      <div class="header-my-logo">

      </div>
      <div class="navTabGroup">
        <div class="navTabItem" @click="navTabClick('')">
          Home
        </div>
        <div class="navTabItem" @click="navTabClick('resume')">
          Resume
        </div>
        <div class="navTabItem" @click="navTabClick('projects')">
          Projects
        </div>
      </div>
    </div>
    <div class="content">
      <div class="middle-container">
        <div class="middle-container-avatar-wrapper">
          <div class="middle-container-avatar-wrapper-container">
            <img src="https://qiniu.zoombin.com/15324673605091" />
          </div>
        </div>
        <div class="middle-container-intro">
          <div class="middle-container-intro-row-one">
            I'm Yi Mo
          </div>
          <div class="middle-container-intro-row-two">
            Computer Programmer
          </div>
        </div>
      </div>
    </div>
    <div class="footer">

    </div>
	</div>
</template>

<script>
  /* eslint-disable */
	export default {
		name: 'home',
    data() {
      return {

      }
    },
    methods: {
      navTabClick(tab) {
        this.$router.push({
          path: '/'+tab
        })
      }
    }
	};
</script>

<style lang="stylus">
  .home
    width: 100%
    height: 100%
    background-image: url('https://file.iviewui.com/iview-admin/login_bg.jpg')
    background-size: cover
    background-position: center
    position: absolute
    .header
      display: flex
      height: 80px
      justify-content: space-between
      padding: 0 30px
      font-size: 20px;
      line-height: 80px
      &-my-logo
        margin-left: 8%
        color: white
        line-height: 80px
        img
          height: 40px
          weight: 40px
          border-radius: 50%
      .navTabGroup
        color: white
        display: flex
        margin-right: 20px
      .navTabItem
        margin-right: 40px
        cursor: pointer
  .content
    height: calc(100% - 200px)
    display: flex
  .middle-container
    display: flex;
    flex-direction: column
    height: 300px
    width: 300px
    margin: auto;
    &-avatar-wrapper
      display: flex
      align-items: center
      justify-content: center
      height: 160px
      &-container
        height: 160px
        width: 160px
        border-radius: 50%
        overflow:hidden;
        position:relative;
        img
          height: auto
          width: 100%
          margin-top: -25px;
    &-intro
      display: flex
      align-items: center
      justify-content: center
      flex-direction: column
      &-row-one
        font-size: 40px
        color: white
        margin-top: 20px
      &-row-two
        font-size: 18px
        color: white
        /* color: rgb(54, 101, 156) */
        /* color:rgb(29, 5, 75) */
        margin-top: 20px
</style>
