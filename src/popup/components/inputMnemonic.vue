<template>
  <div class="container">
    <div class="title">请输入助记词</div>
    <div class="content-list">
      <div
        class="content-list-all"
        v-for="(item, index) in contentList"
        :key="index"
      >
        <div
          class="content-list-all-item"
          v-for="(_item, _index) in item"
          :key="_index"
        >
          <input
            type="text"
            :autofocus="index === 0 && _index === 0"
            v-model="_item.content"
          />
        </div>
      </div>
    </div>
    助记词:{{ mnemonic }} <br/>
    地址:{{ address }} <br/>
    私钥:{{ privateKey }}
    <!-- ethers: {{ ethers }} -->

    <div class="confirm" @click="clickConfirm()">确认</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contentList: [
        [{ content: "" }, { content: "" }, { content: "" }],
        [{ content: "" }, { content: "" }, { content: "" }],
        [{ content: "" }, { content: "" }, { content: "" }],
        [{ content: "" }, { content: "" }, { content: "" }],
      ],
      mnemonic: "",
      address: "",
      privateKey: "",
    };
  },
  mounted() {
    this.clickConfirm();
  },
  methods: {
    // generateMnemonic(strength, rng, wordlist) {
    //   // 空参时长度默认为128，rng为randomBytes方法，wordlist为默认值
    //   strength = strength || 128;
    //   if (strength % 32 !== 0) throw new TypeError(INVALID_ENTROPY);
    //   rng = rng || randomBytes; // randomBytes(size)在第size大于0小于MAX_BYTES时，返回一个以随机数填充，长为size的Buffer
    //   // 通过 rng = randomBytes，rng(strength / 8)获得了一个长为16，以随机数填充的Buffer，entropyToMnemonic基于该Buffer生成助记词
    //   return entropyToMnemonic(rng(strength / 8), wordlist);
    // },
    clickConfirm() {
      // let bip39 = require("bip39");
      // let { hdkey } = require("ethereumjs-wallet");
      // let util = require("ethereumjs-util");
      let ethers = require('ethers')
      var wallet = ethers.Wallet.createRandom();
      // let mnemonic = bip39.generateMnemonic(128);
      // mnemonic = bip39.validateMnemonic(mnemonic)
      // let seed = bip39.mnemonicToSeedSync(wallet.mnemonic);
      // let hdWallet = hdkey.fromMasterSeed(seed);
      // let key = hdWallet.derivePath("m/44'/60'/0'/0/0");
      // let address = util.toChecksumAddress(
      //   "0x" + util.pubToAddress(key._hdkey._publicKey, true).toString("hex")
      // );

      this.mnemonic = wallet.mnemonic;
      let arr = wallet.mnemonic.phrase.trim().split(/\s+/);
      this.contentList[0][0].content = arr[0];
      this.contentList[0][1].content = arr[1];
      this.contentList[0][2].content = arr[2];
      this.contentList[1][0].content = arr[3];
      this.contentList[1][1].content = arr[4];
      this.contentList[1][2].content = arr[5];
      this.contentList[2][0].content = arr[6];
      this.contentList[2][1].content = arr[7];
      this.contentList[2][2].content = arr[8];
      this.contentList[3][0].content = arr[9];
      this.contentList[3][1].content = arr[10];
      this.contentList[3][2].content = arr[11];
      this.privateKey = wallet.privateKey;
      this.address = wallet.address
      // this.address = address;
      // this.test = hdkey
      // this.ethers = ethers
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 800px;
  height: 500px;
}
.title {
  font-size: 16px;
  margin-top: 20px;
  font-weight: bold;
}
.content-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 80px;
  &-all {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    &-item {
      width: 32%;
      height: 40px;
      border-radius: 6px;
      border: 1px solid gainsboro;
      input {
        text-align: center;
        width: 100%;
        height: 100%;
      }
    }
  }
}
.confirm {
  width: 300px;
  background: #007efe;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: white;
  border-radius: 6px;
}
</style>