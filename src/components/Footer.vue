<template>
    <v-container>
        <div class="contact-us">
            <div class="d-inline-flex">联系我们</div>
        </div>
        <div class="contact-way d-flex justify-center mt-5 mb-14">
            <div class="qrCode">
                <v-img :src="require('@/assets/images/home/qrcode@2x.png')" width="73px" height="73px"></v-img>
                <div>天奇公众号</div>
            </div>
            <div class="contact-mean">
                <div>全国消费者服务热线：400-8069-039</div>
                <div>客服微信：tianqitrade001</div>
                <div>客服邮箱：tianqitrade001@163.com</div>
                <div>商务合作：tainqipet@foxmail.com</div>
            </div>
        </div>
        <div class="copyright">Copyright &copy; 2014-2020 Tianqi Trading （HK） Limited</div>
    </v-container>
</template>
<script>
    export default {
        name: 'Footer',
        data: () => ({

        })
    }
</script>
<style scoped lang="scss">
    .contact-us {
        text-align: center;

        div {
            position: relative;
            height: 30px;
            font-size: 30px;
            font-family: Source Han Sans CN;
            font-weight: bold;
            line-height: 25px;
            color: #858585;

            &:before {
                position: absolute;
                left: -108px;
                top: 10px;
                content: '';
                width: 85px;
                height: 2px;
                background: #707070;
            }

            &:after {
                position: absolute;
                right: -108px;
                top: 10px;
                content: '';
                width: 85px;
                height: 2px;
                background: #707070;
            }
        }

    }

    .qrCode {
        margin-right: 22px;

        div:last-child {
            height: 14px;
            margin-top: 12px;
            font-size: 14px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            line-height: 24px;
            color: #FF9822;

        }
    }



    .contact-mean {
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        line-height: 28px;
        color: #858585;
    }

    .copyright {
        font-size: 12px;
        font-family: Source Han Sans CN;
        line-height: 20px;
        color: #FF9822;
        text-align: center;
    }
</style>