let companyNewsList = [
    { title: "天奇贸易亮相第二十三届亚宠展，Alpha Spirit品牌首发惹关注！", date: "2020-02-21", id: "1", fileList: [require("@/assets/images/news/exhibition01.jpg"),require("@/assets/images/news/exhibition02.jpg"),require("@/assets/images/news/exhibition03.jpg"),require("@/assets/images/news/exhibition04.jpg")], img: require("@/assets/images/news/dt@2x.png"), brief: "天奇贸易亮相第二十三届亚宠展，Alpha Spirit品牌首发惹关注", detail: "<div>第二十三届亚洲宠物博览会（下面简称“亚宠展”）于2020年8月19-23日在上海新国际博览中心盛大举行，展会规模达新国际博览中心整馆17大展馆225,000平米，汇聚2000余家展商，24000余个品牌齐聚现场，创历届规模之最。</div></br><div>本次亚宠展上展商众多，天奇贸易的展区位置在E7馆G71，携手Alpha Spirit、Big Little Paw、Bozita这三个进口宠物食品品牌脱颖而出。其中西班牙Alpha Spirit这一新品牌以其超巅峰的品质吸引了众多对优质进口宠物食品感兴趣的商家和客户，自开展首日起我们的展位就门庭若市，来往人流络绎不绝。</div></br>本次参加亚宠展让更多的人认识了天奇贸易，成为Alpha Spirit的忠实粉丝，未来天奇会继续引进更多优质进口宠物食品品牌，期待下次展会再见！<img src=" + require('@/assets/images/news/exhibition01.jpg') + "><img src=" + require('@/assets/images/news/exhibition02.jpg') + "><img src=" + require('@/assets/images/news/exhibition03.jpg') + "><img src=" + require('@/assets/images/news/exhibition04.jpg') + ">"},
    { title: "冬日严寒冷风彻骨，天奇贸易暖心救助流浪猫犬！", date: "2020-02-21", id: "2", fileList: [require("@/assets/images/news/activity01.jpg"),require("@/assets/images/news/activity02.jpg")], img: require("@/assets/images/news/activity01.jpg"), brief: "近日冷空气频繁来袭，天奇贸易全体员工出动前往公司附近各个社区放置流浪猫犬救助物资，包括猫粮犬粮，暖窝毛毯，水碗粮碗等。", detail: "<div>近日冷空气频繁来袭，天奇贸易全体员工出动前往公司附近各个社区放置流浪猫犬救助物资，包括猫粮犬粮，暖窝毛毯，水碗粮碗等。</div><div>天奇贸易通过这一次的救助行动，让身边的毛孩子们都能温暖过冬！未来，天奇贸易也会联系更多流浪猫犬救助站，多做慈善公益活动，将温暖继续传达下去。</div><img src=" + require('@/assets/images/news/activity01.jpg') + "><img src=" + require('@/assets/images/news/activity02.jpg') + ">"},
]

export default {
    'get|/companyNews/query': option => {
        return {
            status: 200,
            message: 'success',
            data: companyNewsList
        };
    }
}