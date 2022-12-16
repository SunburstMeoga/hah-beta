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
      <van-button class="create-button-operate" type="primary" @click="clickCreateWallet()">创建钱包</van-button>
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
      // const blake = require('blakejs')
      const nacl = require('tweetnacl')
      // const assert = require('assert')

      // const tx_data = 'mam111';
      const pri_hex = '280701b18b7bb3d213e893d3fe1318c094f54d58c4d67d3ec30209b12599f4ee';

      // const sig_hash = Buffer.from(blake.blake2bHex(tx_data, null, 32), 'hex');

      const pri = Buffer.from(pri_hex, "hex");
      pri.reverse();
      const key = nacl.sign.keyPair.fromSeed(pri);

      // const sig_data = nacl.sign(sig_hash, key.secretKey);
      // const res = nacl.sign.detached.verify(sig_hash, sig_data.subarray(0, 64), key.publicKey);

      // const sign_res = Buffer.from(sig_data.subarray(0, 16)).toString('hex');
      // console.log('ret:', res + ':' + sign_res);
      console.log('key:', key)

      console.log('key:', key.publicKey)
      let pubkeyStr = []
      key.publicKey.map(item => {
        pubkeyStr.push(item.toString(16))
      })
      pubkeyStr.join("")
      console.log(pubkeyStr)
      let targetArr = []
      pubkeyStr.map(item => {
        if (item.length === 1) {
          item = '0' + item
        }
        targetArr.push(item)
      })
      console.log((targetArr.reverse()).join(""))


      // let ethers = require("ethers");
      // var wallet = ethers.Wallet.createRandom();
      // // let arr = wallet.mnemonic.phrase.trim().split(/\s+/);
      // let mnemonic = wallet.mnemonic.phrase
      // console.log('助记词', wallet.mnemonic)
      // console.log('助记词', mnemonic)
      // console.log('钱包地址', wallet.address)
      // console.log('path', wallet.path)
      // console.log('私钥', wallet.privateKey)
      // this.$router.push({
      //   path: "/success",
      //   query: {
      //     mnemonic: mnemonic
      //   }
      // });
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