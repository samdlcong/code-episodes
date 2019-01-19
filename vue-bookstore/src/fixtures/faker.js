import HomePageData from './home/home.json'

var slider_images = require.context('./sliders', false, /\.(png|jpg|gif|svg)$/)
var cover_images = require.context('./covers', false, /\.(png|jpg|gif|svg)$/)

HomePageData.slides.forEach((x) => {
  x.img_url = slider_images('./' + x.img_url)
})

HomePageData.latestUpdated.forEach((x) => {
  x.img_url = cover_images('./' + x.img_url)
})

HomePageData.recommended.forEach((x) => {
  x.img_url = cover_images('./' + x.img_url)
})

export default {
  getHomeData () {
    return HomePageData
  }
}