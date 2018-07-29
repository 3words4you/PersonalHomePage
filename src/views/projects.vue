<template>
  <div class="projects_page">
    <div class="projects_page_content_box">
      <div class="projects_page_title">
        <p>PROJECTS</p>
      </div>
      <div class="projects_page_categories_box">
        <p v-for="(item,index) in categoryList" class="category_item" :class="{'active' : item == activeCategory}" @click="categoryClick(item)">{{item}}</p>
      </div>
      <div class="projects_page_projects_box">
        <div v-for="item in filteredProjects" class="project_item hovereffect">
          <img  :src="item.image" alt="image load failed">
          <div class="overlay">
             <h2>{{item.name}}</h2>
             <p>{{item.desc}}</p>
             <p @click="openNewWindow(item.link)" class="link">View More</p>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed_navTags_box" @click="goToHome">
      <i class="fas fa-home fa-2x"></i>
      <p>
        Home
      </p>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import projectCommunityImg from '../assets/images/projectCommunity.jpg';
  import projectZhuazhuakanImg from '../assets/images/projectZhuazhuakan.jpg';
  import projectCMSImg from '../assets/images/projectCMS.jpg';
  import projectYutianxiaImg from '../assets/images/projectYutianxia.jpg';
	export default {
		name: 'projects',
    data() {
      return {
        projectCommunityImg,
        projectZhuazhuakanImg,
        projectCMSImg,
        projectYutianxiaImg,
        activeCategory: 'All',
        categoryList: [
          'All', 'Website', 'CMS', 'Mobile App', 'Game'
        ],
        projectList: [
          {name: 'E-cigs Community', category: 'Website', image: projectCommunityImg, link: 'https://community.zoombin.com/webpc', desc: 'E-cigs Community is a Social Question & Answer Website, in which e-cigarettes users can share, ask or answer topics about e-cigs. Reasons for using e-cigarettes involve trying to quit smoking, reduce risk, or save money, though some use them recreationally.'},
          {name: 'Yu Tian Xia', category: 'Mobile App', image: projectYutianxiaImg, link: 'https://yutianxia.zoombin.com', desc: 'Yu Tian Xia is a jade E-commerce platform. Currently, there are 1000+ shops, 1000+ masters and 4500+ customers registered in platform'},
          {name: 'Claw Crane OL', category: 'Mobile App, Website', image: projectZhuazhuakanImg, link: 'https://zhuazhuakan.zoombin.com', desc: 'Claw crawn is an online game. Users can control the claw remotely to catch toys. After a successfully catch, users can request for a delivery or exchange into game coins. First time login will get 3 free chances immediately! Game is only available by using WeChat App or QQ broswer'},
          {name: 'Content Management System', category: 'Website, CMS', image: projectCMSImg, link: 'https://community.zoombin.com/admin', desc: 'Developed CMSs to managing contents for applications'},
        ]
      }
    },
    computed: {
      filteredProjects() {
        if(this.activeCategory == 'All'){
          return this.projectList;
        }
        return this.projectList.filter(project => project.category.includes(this.activeCategory));
      }
    },
    methods: {
      categoryClick(item) {
        this.activeCategory = item;
      },
      goToHome() {
        this.$router.push({
          path: '/'
        })
      },
      openNewWindow(url) {
        window.open(url);
      }
    }
	};
</script>

<style lang="stylus">
  @import "../assets/css/hoverEffects.styl"
  ::-moz-selection /* Code for Firefox */
    color: white
    background: #4bc37b
  ::selection
    color: white
    background: #4bc37b
  .projects_page
    width: 100%
    height: 100%
    overflow-y: scroll
    font-family: sans-serif
    /* background: linear-gradient(rgba(237, 145, 121, 0.9), rgba(237, 145, 121, 0.9)), url(https://qiniu.zoombin.com/15325485917276?imageslim) no-repeat */
    background: linear-gradient(rgba(219, 164, 164, 0.7), rgba(291, 164, 164, 0.7)), url(https://qiniu.zoombin.com/15325485917276?imageslim) no-repeat
    background-size: cover
    display: flex
    align-items: center
    justify-content: center
    &_content_box
      margin: auto
      margin-top: 10px
      display: flex
      align-items: center
      flex-direction: column
    &_title
      margin: 0
      color: white
      font-size: 35px
    &_categories_box
      margin: 10px 0 0 0
      color: #3e424a
      font-size: 16px
      font-weight: 800
      display: flex
      align-items: center
      .category_item
        cursor: pointer
        margin: 0 30px
        padding: 0 20px
        &:hover
          color: rgb(188, 180, 190)
      .category_item.active
        border-radius: 4px
        color: white
        background: #4bc37b
    &_projects_box
      width: 960px
      margin: 30px auto 0 auto
      display: flex
      flex-wrap: wrap
      box-sizing: border-box
      .project_item
        margin: 0 0 20px 6%
        padding: 0
        width: 41%
        height: auto
        img
          height: 100%
          width: 100%
          object-fit: cover
          border-radius: 5px
        &:before
          content:''
          padding: 50% 0 /* vertical value as  100% equals width */
          display: inline-block
    .fixed_navTags_box
      text-align: center
      position: absolute
      top: 30px
      right: 30px
      cursor: pointer
      p
        margin: 5px 0 0 0
        color: #3e424a
        font-weight: 100
        font-size: 10px
  @media only screen and (max-width: 960px)
    .projects_page
      box-sizing: border-box
      &_content_box
        width: 88%
      &_categories_box
        margin: 10px 0 0 0
        color: #3e424a
        font-size: 18px
        display: flex
        flex-direction: column
        align-items: center
        text-align: center
        white-space: nowrap
        width: 100%
        .category_item
          width: 100%
          margin: 0
          padding: 6px 0
        .category_item.active
          border-radius: 4px
          color: white
          background: #4bc37b
      &_projects_box
        width: 100%
        .project_item
          margin: 0 0 20px 0
          padding: 0
          width: 88vw
          height: auto
</style>
