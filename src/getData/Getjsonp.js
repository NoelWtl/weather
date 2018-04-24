// 引入jsonp组件
import jsonp from 'jsonp'
// 定义请求数据的jsonp请求函数
function getDataJsonp (params) {
  // 把请求数据转换成对象的形式传参
  let newParams = Object.assign({
    // 默认的一些请求的参数
    // key: '7e35b22492b1b34bdd67c9ab8a12b25b',
    // cinemaid: '1188'
    // type: 'hot',
    // offset: 0,
    // limit: 1000
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    format: 'jsonp',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0,
    data: '%7B%22comm%22%3A%7B%22ct%22%3A24%7D%2C%22category%22%3A%7B%22method%22%3A%22get_hot_category%22%2C%22param%22%3A%7B%22qq%22%3A%22%22%7D%2C%22module%22%3A%22music.web_category_svr%22%7D%2C%22recomPlaylist%22%3A%7B%22method%22%3A%22get_hot_recommend%22%2C%22param%22%3A%7B%22async%22%3A1%2C%22cmd%22%3A2%7D%2C%22module%22%3A%22playlist.HotRecommendServer%22%7D%2C%22playlist%22%3A%7B%22method%22%3A%22get_playlist_by_category%22%2C%22param%22%3A%7B%22id%22%3A8%2C%22curPage%22%3A1%2C%22size%22%3A40%2C%22order%22%3A5%2C%22titleid%22%3A8%7D%2C%22module%22%3A%22playlist.PlayListPlazaServer%22%7D%2C%22new_song%22%3A%7B%22module%22%3A%22QQMusic.MusichallServer%22%2C%22method%22%3A%22GetNewSong%22%2C%22param%22%3A%7B%22type%22%3A0%7D%7D%2C%22new_album%22%3A%7B%22module%22%3A%22QQMusic.MusichallServer%22%2C%22method%22%3A%22GetNewAlbum%22%2C%22param%22%3A%7B%22type%22%3A0%2C%22category%22%3A%22-1%22%2C%22genre%22%3A0%2C%22year%22%3A1%2C%22company%22%3A-1%2C%22sort%22%3A1%2C%22start%22%3A0%2C%22end%22%3A39%7D%7D%2C%22toplist%22%3A%7B%22module%22%3A%22music.web_toplist_svr%22%2C%22method%22%3A%22get_toplist_index%22%2C%22param%22%3A%7B%7D%7D%2C%22focus%22%3A%7B%22module%22%3A%22QQMusic.MusichallServer%22%2C%22method%22%3A%22GetFocus%22%2C%22param%22%3A%7B%7D%7D%7D'
  }, params)
  // console.log(newParams)

  // 把得到的对象的属性用$链接起来
  let paramStr = '?'
  // for in 循环对象
  for (let i in newParams) {
    paramStr += i + '=' + newParams[i] + '&'
  }
  // console.log(paramStr)
  // 去掉最后的&符号
  paramStr = paramStr.slice(0, paramStr.length - 1)
  // console.log(paramStr)

  // 请求函数的基础url地址 = 基础地址 + 参数的值
  let url = 'https://u.y.qq.com/cgi-bin/musicu.fcg' + paramStr
  console.log(url)
  // 将普通的函数变成承诺函数
  return new Promise(function (resolve, reject) {
    // resolve 成功之后
    // reject 失败之后
    // 发送请求
    jsonp(url, {
      // 请求的参数
    }, (err, data) => {
      if (!err) {
        resolve(data)
        console.log('数据请求成功')
      } else {
        console.log('数据请求失败')
      }
    })
  })
}

// 暴露组件
export { getDataJsonp }
