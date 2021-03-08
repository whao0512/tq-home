let newsList = [
    { title: "“天奇贸易”防伪标更新通知", date: "2020-01-21", id: "3", fileList: [require("@/assets/images/news/dt@2x.png"),require("@/assets/images/news/exhibition01.jpg"),require("@/assets/images/news/exhibition02.jpg"),require("@/assets/images/news/exhibition03.jpg"),require("@/assets/images/news/exhibition04.jpg")], img: require("@/assets/images/news/dt@2x.png"), brief: "感谢大家一直以来对“天奇贸易”的支持与厚爱，现通知大家，我司防伪码将进行调整升级，新防伪标如下：", detail: "<p style='text-indent: 32px'>感谢大家一直以来对“天奇贸易”的喜爱与支持，现通知大家，我司防伪码进行调整升级，新旧防伪标对比如下：</p><div style='display: flex'><div style='flex: 1;text-align: center;width: 50%;'><img style='width: 50%' src=" + require('@/assets/images/old_img.png') +"><p>旧防伪标</p></div><div style='flex: 1;text-align: center;width: 50%;'><img style='width: 50%' src=" + require('@/assets/images/new_img.png') +"><p>新防伪标</p></div></div><p style='text-indent: 32px'>以上两种均为天奇贸易防伪标，目前市面上的旧防伪标不会受影响，在未来一段时间内，市面上会出现新旧防伪标并存的现象，会逐渐进行替换。</p><p style='text-indent: 32px'>请各位消费者购买产品时，认准天奇贸易官方授权店铺和天奇贸易防伪标。</p><p style='text-indent: 32px'>如仍有疑问，欢迎随时和我们联系。</p><p style='text-indent: 32px'>全球消费者服务热线：400-8069-039</p><p style='text-indent: 32px'>客服微信：tainqitrade001<p style='text-indent: 32px'>商务合作邮箱：tainqipet@foxmail.com</p><p style='text-indent: 32px'>天奇贸易将竭诚为您服务！</p><p style='text-align: right'>天奇贸易（香港）有限公司</p><p style='text-align: right'>2021年1月21日</p>"},
    { title: "2021年“天奇贸易”春节放假公告", date: "2020-01-20", id: "4", fileList: [require("@/assets/images/news/exhibition01.jpg"),require("@/assets/images/news/activity02.jpg")], img: require("@/assets/images/news/exhibition01.jpg"), brief: "感谢大家一直以来对“天奇贸易”的支持与厚爱，现有一则关于2021年春节放假公告望大家悉知！", detail: "<p style='text-indent: 32px'>尊敬的合作伙伴们：</p><p style='text-indent: 32px'>感谢您一直以来对“天奇贸易”的支持与厚爱，现已临近春节，天奇贸易2021年春节放假时间为2021年2月7日（腊月二十六）-2月17日（正月初六），2月18日（正月初七）起正常上班。放假期间停发快递，请各位合作伙伴合理安排订货时间！</p><p style='text-indent: 32px'>特此说明，现因疫情原因导致多地快递物流出现延迟、停发、送返等情况，我们对此深表遗憾，也希望疫情早日过去，产品能顺利送达您的身边。</p><p style='text-indent: 32px'>感谢您对天奇贸易一直以来的支持！</p><p style='text-indent: 32px'>特此函告</p><p style='text-indent: 32px'>顺祝商祺</p><p style='text-algin: right'>天奇贸易（香港）有限公司</p><p style='text-align: right'>2021年1月20日</p>"},
]

export default {
    'get|/enterpriseNews/query': option => {
        return {
            status: 200,
            message: 'success',
            data: newsList
        };
    }
}