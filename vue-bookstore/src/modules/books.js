import HomePageData from '../fixtures/home/home.json'

export default {
    state: {
        announcement: HomePageData.announcement,
        slides: HomePageData.slides,
        latestUpdated: HomePageData.latestUpdated,
        recommended: HomePageData.recommended
    }
}