import {playMode} from 'common/js/config'
import {loadSearch, loadPlay, loadFavorite} from 'common/js/cache'

const state = {
  singer: {},
  playing: false, //播放|暂停
  fullScreen: false,//展开|收起
  playlist: [],  //播放列表
  sequenceList: [],//顺序列表
  mode: playMode.sequence,//播放模式
  currentIndex: -1,//当前播放索引   当前播放歌曲：playlist[currentIndex]
  disc: {},
  topList: {},
  searchHistory: loadSearch(),
  playHistory: loadPlay(),
  favoriteList: loadFavorite()
}

export default state