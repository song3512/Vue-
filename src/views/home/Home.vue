<template>
  <div id="home">
    <nar-bar class="home-nav"><div slot="center">购物街</div></nar-bar>
    <tab-control class="tab-control" :titles="['流行','新款','精选']"
                 @tabClick="tabClick" ref="tabControl1" v-show="isTabFixed"/>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @scroll="contentScroll"
            @pullingUp="loadMore"
          >
    <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control  :titles="['流行','新款','精选']"
                 @tabClick="tabClick" ref="tabControl2"/>
    <goods-list :goods="goods[currentType].list"></goods-list>
  </scroll>
   <back-top @click.native="btnClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import NarBar from 'components/common/navbar/NarBar';
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from  './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'
  import TabControl from 'components/content/TabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop'

  import {
    getHomeMultidata,
    getHomeGoods
  } from "network/home";

  export default {
    name: "Home",
    components: {
      NarBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentType:'pop',
        isShowBackTop:false,
        tabOffsetTop: 0,
        isTabFixed:false
      }
    },
    created() {
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted() {
      const refresh=this.debounce(this.$refs.scroll.refresh,300)
      this.$bus.$on('itemImageLoad',()=>{
        // console.log('----------')
        // this.$refs.scroll.refresh()
        refresh()
      })
      // console.log(this.$refs.tabControl.$el.offsetTop)
    },
    methods:{
      //事件监听相关的方法
      tabClick(index){
       switch (index) {
        case 0:
          this.currentType='pop';
          break
        case 1:
          this.currentType='new';
          break
         case 2:
           this.currentType='sell'
           break
       }
       //改天最新点击的
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },
      loadMore(){
        this.getHomeGoods(this.currentType)
      },
      swiperImageLoad(){
        this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop
      },
      debounce(func,delay){
        let timer=null
        return function(...args){
          if(timer) clearTimeout(timer)
            timer=setTimeout(()=>{
              func.apply(this,args)
            },delay)
          }
        },

      btnClick(){
        this.$refs.scroll.scrollTo(0,0,500)
      },
      contentScroll(position){
        this.isShowBackTop=(-position.y)>1000
        this.isTabFixed=(-position.y)>this.tabOffsetTop
      },
      //网络请求方法
      getHomeMultidata(){
        // 1.请求多个数据
        getHomeMultidata().then(res => {
          // this.result = res;
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type){
        const page=this.goods[type].page+1
        getHomeGoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page+=1
          this.$refs.scroll.finishPullUp()
        })
      }
    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
    height: 100vh;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left:0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control{
   position:relative;
    z-index: 9;
  }
  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
