<template>
  <div>
    <div class="home_page">
      <div class="left_box">
        <div class="content_box">
          <div class="content_box_avatar_box" @mouseover="isAvatarHover = true" @mouseleave="isAvatarHover = false" :class="{'animated flash': isAvatarHover}">
            <img src="https://qiniu.zoombin.com/15324673605091"/>
          </div>
          <div class="content_box_name_box">
            <p>YI MO</p>
          </div>
          <div class="content_box_role_box">
            <p>Design | Develop | Deploy</p>
          </div>
          <div class="content_box_social_box">
            <span v-for="(item, index) in socialBtns" class="social_item fa-stack fa-lg" @mouseover="setIconHover(index)" @mouseleave="setIconLeaveHover(index)" :class="{'animated rubberBand':item.isHover}">
              <i class="fa fa-square fa-stack-2x " :class="{'fa-inverse': isInverse(index)}"></i>
              <i class="fab fa-stack-1x" :class="[item.c, {'fa-inverse': !isInverse(index)}]"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="right_box">

      </div>
    </div>
    <!-- <div class="home-bg"></div>
    <div class="home">
      <div class="content">
        <div class="middle-container" @mouseover="middleContainerMouseOver" @mouseleave="middleContainerMouseLeave">
          <div class="middle-container-avatar-wrapper">
            <div class="middle-container-avatar-wrapper-container">
              <img src="https://qiniu.zoombin.com/15324673605091" />
            </div>
          </div>
          <div v-if="!hover">
            <div class="middle-container-intro-notHover animated fadeInUpBig faster">
              <div class="middle-container-intro-notHover-row-one">
                YI MO
              </div>
              <div class="middle-container-intro-notHover-row-two">
                Computer Programmer/Analyst
              </div>
            </div>
          </div>
          <div v-else>
            <div class="middle-container-intro-hover animated" :class="[{'rotateIn': showHoverContent,'fadeOut': !showHoverContent}]" >
              <div class="middle-container-intro-hover-box">
                <p>
                  I’m Yi :) A senior web application developer, graduated from Conestoga College at the field of Computer Science.
                </p>
                <p>
                  I’m a product person with a great passion for data and design. With 2+ years' industry experience in web application development, UX/UI design and product management, I’m dedicated to be a full-stack developer and using my skills to create and develop impactful products. Find out more on my resume and Projects page.
                </p>
              </div>
            </div>
          </div>
          <div class="middle-container-socialBtns-container">
            <a href="#" ><i class="fab fa-facebook"></i></a>


          </div>
        </div>
      </div>
      <div class="footer">

      </div>
  	</div> -->
  </div>

</template>

<script>
  /* eslint-disable */
	export default {
		name: 'home',
    data() {
      return {
        hover: false,
        showHoverContent: false,
        isAvatarHover: false,
        socialBtns: [
          {c:'fab fa-facebook-f', isHover: false},
          {c:'fab fa-linkedin-in', isHover: false},
          {c:'fas fa-envelope', isHover: false},
          {c:'fab fa-github', isHover: false},
          {c:'fab fa-weixin', isHover: false},
        ]
      }
    },
    methods: {
      isInverse(index) {
        return index % 2;
      },
      setIconHover(index) {
        this.socialBtns[index].isHover = true;
      },
      setIconLeaveHover(index) {
        this.socialBtns[index].isHover = false;
      },
      navTabClick(tab) {
        this.$router.push({
          path: '/'+tab
        })
      },
      middleContainerMouseOver() {
        this.hover = true;
        this.showHoverContent = true;
      },
      middleContainerMouseLeave() {
        let self = this;
        this.showHoverContent = false;
        setTimeout(function(){
          self.hover = false;
        }, 500);
      }
    }
	};
</script>

<style lang="stylus">
  ::-moz-selection /* Code for Firefox */
    color: white
    background: #4bc37b
  ::selection
    color: white
    background: #4bc37b
  .home_page
    width: 100%
    height: 100%
    display: flex
    flex-wrap: wrap
    position: absolute
    overflow-y: scroll
  .left_box
    width: 50%
    height: 100%
    float: left
    background: linear-gradient(rgba(44,45,51,0.9), rgba(44,45,51,0.9)), url(https://qiniu.zoombin.com/15325485917276?imageslim) no-repeat
    background-size: cover
    display: flex
    align-items: center
    justify-content: center
    .content_box
      width: 100%
      max-width: 400px
      margin: 0 auto
      /* border: 1px white solid */
      text-align: center
      &_avatar_box
        height: 150px
        width: 150px
        border-radius: 50%
        overflow: hidden
        margin: 0 auto
        img
          height: auto
          width: 100%
          margin-top: -25px
      &_name_box
        color: white
        font-size: 40px
        margin: 10px 0 0 0
        p
          margin: 0
      &_name_box:after
        content: ""
        width: 100px
        height: 2px
        background: #585b63
        margin-top: 12px
        position: absolute
        -webkit-transform: translatex(-50%)
        -moz-transform: translatex(-50%)
        -ms-transform: translatex(-50%)
        -o-transform: translatex(-50%)
        transform: translatex(-50%)
      &_role_box
        color: white
        font-size: 20px
        margin: 0
        padding-top: 30px
        font-family: sans-serif
        font-weight: 100
        p
          margin: 0
      &_social_box
        padding-top: 28px
        margin: 0
        display: flex
        flex-wrap: wrap
        justify-content: center
        .social_item
          margin: 0 10px
          cursor: pointer

  .right_box
    wdith: 50%
    height: 100%

  @media only screen and (max-width: 960px)
    .left_box, .right_box
      float: none
      width: 100%

</style>
