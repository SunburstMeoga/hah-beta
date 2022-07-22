<template>
  <div class="container-vote">
    <div class="vote-address">
      <label for="a">复利地址：{{ fuliAddress }}</label>
      <input type="radio" name="" id="a" :value="fuliAddress" v-model="currentAddress" /><br />
      <label for="b">投票地址：{{ voteAddress }}</label>
      <input type="radio" name="" id="b" :value="voteAddress" v-model="currentAddress" /><br />
      当前选择地址{{ currentAddress }}
    </div>
    <div class="operate">
        <div class="operate-button operate-vote">投票</div>
        <div class="poerate-button operate-cancel">撤投</div>
    </div>
  </div>
</template>

<script>
export default {
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
</style>