<template>
  <div class="container-transfer"> 
      <div class="address">
          <div class="address-title">
              转账至
          </div>
          <div class="address-input">
              <input type="text" placeholder="公用地址(0x)">
          </div>
          <div class="address-amount">
              <div class="address-amount-title">金额  </div>
              <div class="address-amount-input"><input type="text" placeholder="转账金额"></div>
          </div>
          <div class="operate">
              <div class="operate-button operate-cancel">
                  取消
              </div>
              <div class="operate-button operate-next">
                  下一步
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
input {
    width: 100%;
}
    .container-transfer {
        width: 300px;
        height: 500px;
    }
    .address {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &-title {
        padding-top: 20px;
        margin: 0 auto;
        margin-bottom: 10px;
        }
        &-input {
            width: 100%;
           flex: 1;
           margin-bottom: 10px;
        }
        &-amount {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex:  1;
        }
    }
    .operate {
        position: fixed;
        bottom: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100px;
        width: 100%;
    }
</style>