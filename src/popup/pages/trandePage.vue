<template>
    <div class="container-trande">
        <div class="assets">
            <div class="assets-address">
                钱包地址：0x107a19A9283c63A92144352Cb76D0FEd98AD1755
            </div>
            <div class="assets-balance">
                $0.00
            </div>
            <div class="assets-operate">
                <div class="assets-operate-transfer">
                    转账
                </div>
                <div class="assets-operate-vote">
                    投票
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .container-trande {
        width: 300px;
        height: 500px;
    }
    .assets {
        position: fixed;
        width: 100vw;
        height: 120px;
        background: #007efe;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: white;
        &-address {
            margin: 0 auto;
            width: 280px;
           
            overflow:hidden; 
            text-overflow:ellipsis; 
            white-space:nowrap; 
            margin-bottom: 20px;
        }
        &-balance {
             margin: 0 auto;
             width: 280px;
             font-size: 20px;
             font-weight: bold;
             margin-bottom: 20px;
              text-align: center;
        }
        &-operate {
            display: flex;
            justify-content: space-around;
             margin: 0 auto;
             width: 280px;
        }
    }
</style>