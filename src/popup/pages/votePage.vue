<template>
  <div class="container-vote">
    <div class="vote-address">
     <div class="vote-address-item">
         <div class="vote-address-item-left">
            <input class="vote-address-item-left-radio" type="radio" id="a" :value="fuliAddress" v-model="currentAddress" />
         </div>
         <div class="vote-address-item-right">
            <label for="a" class="vote-address-item-right-title">复利地址：{{ fuliAddress }}</label>
         </div>
     </div>
     <br />
      <div class="vote-address-item">
         <div class="vote-address-item-left">
            <input class="vote-address-item-left-radio" type="radio" name="" id="b" :value="voteAddress" v-model="currentAddress" />
         </div>
         <div class="vote-address-item-right">
            <label for="a" class="vote-address-item-right-title">投票地址：{{ voteAddress }}</label>
         </div>
     </div>
      <!-- <label for="b" class="vote-address-title">投票地址：{{ voteAddress }}</label>
      <input type="radio" name="" id="b" :value="voteAddress" v-model="currentAddress" /><br /> -->
     
    </div>
    <br/><br/>
    <div class="current-address">
        当前选择地址:{{ currentAddress }}
    </div>
    <van-button type="primary">sdfsd</van-button>
    <div class="operate">
        <!-- <div class="operate-button operate-vote">投票</div>
        <div class="poerate-button operate-cancel">撤投</div> -->
         <van-button class="operate-button" type="primary">投票</van-button>
          <van-button class="operate-button">撤投</van-button>
    </div>
  </div>
</template>

<script>
import { Button } from 'vant'
export default {
  components: { [Button.name]:Button },
  data() {
    return {
      
      currentAddress: "",
      fuliAddress: "0x107a19A9283c63A92144352Cb76D0FEd98AD1755",
      voteAddress: "0x92144310283c63A921443107a19A9283c63A9214",
    };
  },
};
</script>

<style scoped lang="scss">
.container-vote {
  width: 300px;
  height: 500px;
}
.operate {
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    width: 100vw;
}
.vote-address {
    &-item {
        font-size: 14px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        &-left {
            // border: 1px solid red;
        }
        &-right  {
            // border: 1px solid blue;
            padding-left: 6px;
            width: 84%;
            &-title {
            word-wrap:break-word;
                // border: 1px solid red;
            }
        }
    }
}
.current-address {

}
.operate-button {
  width: 48%;
}
</style>