<template>
    <div class="recommend" ref="recommend">
        <scroll ref="scroll" class="recommend-content" :data="discList">
            <div>
                <div v-if="recommends.length" class="slider-wrapper" ref="sliderWrapper">
                    <swiper :options="swiperOption" >
                        <swiper-slide v-for="item in recommends" :key="item.id">
                            <a :href="item.linkUrl">
                                <img class="needsclick" :src="item.picUrl">
                            </a>
                        </swiper-slide>
                        <div class="swiper-pagination"  slot="pagination"></div>
                    </swiper>
                </div>
                <div class="recommend-list">
                    <h1 class="list-title">热门歌单推荐</h1>
                    <ul>
                        <li @click="selectItem(item)" v-for="item in discList" class="item" :key="item.id">
                            <div class="icon">
                                <img width="60" height="60" v-lazy="item.imgurl">
                            </div>
                            <div class="text">
                                <h2 class="name" v-html="item.creator.name"></h2>
                                <p class="desc" v-html="item.dissname"></p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="loading-container" v-show="!discList.length">
                <loading></loading>
            </div>
        </scroll>
    <router-view></router-view>    
  </div>
</template>
<script>
import Loading from "base/loading/loading";
import Slider from "base/slider/slider";
import Scroll from "base/scroll/scroll";
import { getRecommend, getDiscList } from "api/recommend";
import { ERR_OK } from "api/config";
 import {mapMutations} from 'vuex'

export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true,
        autoplay: true
      },
      recommends: [],
      discList: []
    };
  },
  created() {
    this._getRecommend();
    this._getDiscList();
  },
  methods: {
       selectItem(item) {
        this.$router.push({
          path: `/recommend/${item.dissid}`
        })
        this.setDisc(item)
      },
    _getRecommend() {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider;
        }
      });
    },
    _getDiscList() {
      getDiscList().then(res => {
        if (res.code === ERR_OK) {
          this.discList = res.data.list;
        }
      });
    },
      ...mapMutations({
        setDisc: 'SET_DISC'
      })
  },
  components: {
    Slider,
    Scroll,
    Loading
  }
};
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
@import '~common/stylus/variable';

>>> .swiper-pagination-bullet {
    background-color: $color-text-ll;
}

>>> .swiper-pagination-bullet-active {
    width: 20px;
    border-radius: 5px;
    background: $color-text-ll;
}

.recommend {
    position: fixed;
    width: 100%;
    top: 88px;
    bottom: 0;

    .recommend-content {
        height: 100%;
        overflow: hidden;

        .slider-wrapper {
            position: relative;
            width: 100%;
            overflow: hidden;

            a {
                display: block;
                width: 100%;
                overflow: hidden;
                text-decoration: none;
            }

            img {
                display: block;
                width: 100%;
            }
        }

        .recommend-list {
            .list-title {
                height: 65px;
                line-height: 65px;
                text-align: center;
                font-size: $font-size-medium;
                color: $color-theme;
            }

            .item {
                display: flex;
                box-sizing: border-box;
                align-items: center;
                padding: 0 20px 20px 20px;

                .icon {
                    flex: 0 0 60px;
                    width: 60px;
                    padding-right: 20px;
                }

                .text {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    flex: 1;
                    line-height: 20px;
                    overflow: hidden;
                    font-size: $font-size-medium;

                    .name {
                        margin-bottom: 10px;
                        color: $color-text;
                    }

                    .desc {
                        color: $color-text-d;
                    }
                }
            }
        }

        .loading-container {
            position: absolute;
            width: 100%;
            top: 50%;
            transform: translateY(-50%);
        }
    }
}
</style>
