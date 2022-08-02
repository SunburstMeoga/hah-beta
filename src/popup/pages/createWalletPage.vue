<template>
  <div class="container">
    <div class="title">
      <page-title pageTitleWord="创建钱包"></page-title>
    </div>
    <div class="tips module">
      助记词加密并安全的存储在您的设备上，您完全控制加密货币
    </div>
    <div class="wallet-name module module-item">
      <div class="module-item-title">钱包名称</div>
      <div class="module-item-input">
        <input type="text" placeholder="请输入钱包名称" />
      </div>
    </div>
    <div class="wallet-name module module-item">
      <div class="module-item-title">密码</div>
      <div class="module-item-tips">
        BlockWay不存储密码，也无法帮您找回，请务必牢记。
      </div>
      <div class="module-item-input">
        <input type="text" placeholder="请输入密码" />
      </div>
    </div>
    <div class="wallet-name module module-item">
      <div class="module-item-title">确认密码</div>
      <div class="module-item-input">
        <input type="text" placeholder="请确认密码" />
      </div>
    </div>
    <div class="create-button module">
      <van-button
        class="create-button-operate"
        type="primary"
        @click="clickCreateWallet()"
        >创建钱包</van-button
      >
    </div>
  </div>
</template>

<script>
import { Button } from "vant";
import PageTitle from "@/popup/components/pageTitle.vue";
export default {
  components: { [Button.name]: Button, PageTitle },
  methods: {
    // 生成助记词和地址
    generateMnemonicsAndAddresses() {
      let ethers = require("ethers");
      var wallet = ethers.Wallet.createRandom();
      let arr = wallet.mnemonic.phrase.trim().split(/\s+/);
      console.log(wallet.address);
      console.log(arr);
      this.$router.push({
        path: "/success",
      });
    },
    //点击创建钱包按钮
    clickCreateWallet() {
      console.log("点击创建钱包按钮");
      this.generateMnemonicsAndAddresses();
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  width: 100%;
  border: none;
  background: #f7f8fa;
  text-indent: 4px;
}
.container {
  width: 360px;
  padding-top: 46px;
  height: 554px;
}
.module {
  margin: 0 auto;
  margin-bottom: 14px;
  width: 320px;
}
.tips {
  padding-top: 10px;
}
.module-item {
  margin-bottom: 20px;
  &-title {
    margin-bottom: 6px;
    font-size: 14px;
    color: gray;
  }
  &-tips {
    color: red;
    margin-bottom: 4px;
  }
  &-input {
    width: 100%;
    height: 30px;
    background: #f7f8fa;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.create-button-operate {
  width: 320px;
  height: 40px;
}

.create-button {
  position: fixed;
  left: 0;
  bottom: 30px;
  width: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>