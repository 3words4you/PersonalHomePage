<template>
  <div class="home">
    <div class="header">
      <div class="my-logo">
        Yi's Personal Home Page
      </div>
      <div class="navTabGroup">
        <div class="navTabItem">
          Home
        </div>
        <div class="navTabItem">
          Resume
        </div>
        <div class="navTabItem">
          Projects Demo
        </div>
      </div>
    </div>
    <div class="content">

    </div>
    <div class="footer">

    </div>
	</div>
</template>

<script>
  /* eslint-disable */
	export default {
		name: 'home'
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
    .my-logo
      color: white
    .navTabGroup
      color: white
      display: flex
      margin-right: 20px
    .navTabItem
      margin-right: 40px

</style>
