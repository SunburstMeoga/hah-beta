<template>
  <div class="container">
    <div class="title">{{ pageTitle }}</div>
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
            :disabled="!canEnter"
            v-model="_item.content"
          />
        </div>
      </div>
    </div>
    <div class="address" v-show="showAddressInfo">
        <div class="address-title">
            钱包地址
        </div>
        <div class="address-content">{{ address }}</div>
        <div class="address-operate">
            <div class="address-operate-button address-operate-copy" @click="copyAddress()">复制钱包地址</div>
            <div class="address-operate-button address-operate-code" @click="scanCode()">生成二维码</div>
        </div>
        <div class="scan-code" v-show="showScanCode">
            <scan-code-popup :value="address"></scan-code-popup>
        </div>
    </div>
    <div class="confirm" @click="clickConfirm()">确认</div>
  </div>
</template>

<script>
import ScanCodePopup from '@/popup/components/scanCodePopup.vue'
export default {
  components: { ScanCodePopup },
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
      type: "",
      pageTitle: "",
      canEnter: true,
      showScanCode: false,
      showAddressInfo: false
    };
  },
  mounted() {
    this.type = this.$route.query.type;
    console.log("当前创建钱包方式", this.type);
    if (this.type === "create") {
      //如果是创建新的钱包地址，则生成助记词和地址
      this.pageTitle = "请牢记助记词（创建钱包）";
      this.generateMnemonicsAndAddresses();
      this.canEnter = false;
      this.showAddressInfo = true
    } else {
      this.pageTitle = "请输入助记词（导入钱包）";
      this.canEnter = true
      this.showAddressInfo = false
    }
  },
  methods: {
    // 生成助记词和地址
    generateMnemonicsAndAddresses() {
      let ethers = require("ethers");
      var wallet = ethers.Wallet.createRandom();
      let arr = wallet.mnemonic.phrase.trim().split(/\s+/);
      this.address = wallet.address;
      this.privateKey = wallet.privateKey;
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

      console.log(this.address);
    },
    //根据私钥和助记词找回钱包地址
    importWalletAddress() {
      let arr = []
      this.contentList.map(item => {
          item.map(_item => {
              arr.push(_item.content)
          })
      })
      let mnemonicStr = '';
      mnemonicStr = arr.join(' ')
      var ethers = require("ethers");
      var mnemonic = ethers.Wallet.fromMnemonic(mnemonicStr);
      var privateKey = mnemonic.privateKey;
      var wallet = new ethers.Wallet(privateKey);
      var address = wallet.address;
      this.address = address
      this.showAddressInfo = true
      console.log("钱包地址：", address);
      console.log("钱包私钥：", privateKey);
    },
    //复制钱包地址
    copyAddress() {
        navigator.clipboard.writeText(this.address);
        alert('复制成功')
    },
    scanCode() {
        this.showScanCode = true
    },
    //点击底部确认按钮
    clickConfirm() {
        this.importWalletAddress()
    },
    // generateMnemonic(strength, rng, wordlist) {
    //   // 空参时长度默认为128，rng为randomBytes方法，wordlist为默认值
    //   strength = strength || 128;
    //   if (strength % 32 !== 0) throw new TypeError(INVALID_ENTROPY);
    //   rng = rng || randomBytes; // randomBytes(size)在第size大于0小于MAX_BYTES时，返回一个以随机数填充，长为size的Buffer
    //   // 通过 rng = randomBytes，rng(strength / 8)获得了一个长为16，以随机数填充的Buffer，entropyToMnemonic基于该Buffer生成助记词
    //   return entropyToMnemonic(rng(strength / 8), wordlist);
    // },
    // clickConfirm() {
    //   let bip39 = require("bip39");
    //   let { hdkey } = require("ethereumjs-wallet");
    //   let util = require("ethereumjs-util");

    //   let mnemonic = bip39.generateMnemonic(128);
    //   mnemonic = bip39.validateMnemonic(mnemonic)
    //   let seed = bip39.mnemonicToSeedSync(wallet.mnemonic);
    //   let hdWallet = hdkey.fromMasterSeed(seed);
    //   let key = hdWallet.derivePath("m/44'/60'/0'/0/0");
    //   let address = util.toChecksumAddress(
    //     "0x" + util.pubToAddress(key._hdkey._publicKey, true).toString("hex")
    //   );

    //   this.mnemonic = wallet.mnemonic;
    //   this.mnemonic = mnemonic

    //   this.address = address;
    //   this.test = hdkey
    //   this.ethers = ethers
    // },
  },
};
</script>

<style lang="scss" scoped>
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
  margin-bottom: 20px;
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
.address {
    width: 280px;
    background: #f8f8f8;
    border: 1px solid #dcdcdc;
    border-radius: 6px;
    padding: 10px;
    margin-bottom: 40px;
    &-title {
        font-weight: bold;
        font-size: 14px;
         margin-bottom: 6px;
    }
    &-content {
        word-break: break-all;
        margin-bottom: 6px;
    }
    &-operate {
        display: flex;
        justify-content: space-around;
        &-button {
            width: 80px;
            height: 20px;
            border-radius: 20px;
            border: 1px solid;
            font-size: 10px;
            text-align: center;
            line-height: 20px;
        }
        &-copy {

        }
        &-code {

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