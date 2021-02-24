let bannerList = [
    { title: "Alpha Spirit", id: "1", banner: require('@/assets/images/home/banner/alpha.png')},
    { title: "Primal Spirit", id: "2", banner: require('@/assets/images/home/banner/primal-spirit.jpg')},
    { title: "OZPRO", id: "3", banner: require('@/assets/images/home/banner/OZPRO.jpg')},
    { title: "SeaDNA", id: "4",  banner: require('@/assets/images/home/banner/SeaDNA.jpg')},
    { title: "Dolina Noteci", id: "5", banner: require('@/assets/images/home/banner/dolina noteci.png')},
    { title: "WIEJSKA ZAGRODA", id: "6", banner: require('@/assets/images/home/banner/wiejska-zagroda.jpg')},
    { title: "BOZITA", id: "7", banner: require('@/assets/images/home/banner/bozita.jpg')},
    { title: "Little Big Paw", id: 8, banner: require('@/assets/images/home/banner/little-big-paw.jpg')},
    { title: "Raw RAWR", id: "9", banner: require('@/assets/images/home/banner/RAW-RAWR.jpg')},
    { title: "GEORGE AND BOBS", id: "10",banner: require('@/assets/images/home/banner/GEOR.jpg')},
    { title: "SYTA MICHA", id: "11",banner: require('@/assets/images/home/banner/SYTA MICHA.jpg')},
]

export default {
    'get|/banner/query': option => {
        return {
            status: 200,
            message: 'success',
            data: bannerList
        };
    }
}