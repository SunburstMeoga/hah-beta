<template>
  <div class="container">
    <div class="title">
      <page-title pageTitleWord="备份助记词"></page-title>
    </div>

    <div class="content" v-show="!showTips">
      <div class="content-title">建议用纸和笔抄写助记词然后安全保存</div>
      <div class="content-img">
        <img src="@/assets/backup.svg" alt="" />
      </div>
      <div class="content-tips">
        助记词由12或24个单词组成，掌握助记词等于掌握账户资产的所有权，请务必保管在安全的地方。
      </div>
    </div>

    <div class="check" v-show="showTips">
      <div class="check-mnemonic" v-show="showMnemonic">
        <div class="check-mnemonic-all">
          <div
            class="check-mnemonic-all-item"
            v-for="(item, index) in mnemonicList"
            :key="index"
          >
            {{ item }}
          </div>
        </div>
      </div>

      <div class="check-save" v-show="showMnemonic">
        <div class="check-save-copy check-save-item" @click="copyMnemonic()">复制</div>
        <div class="check-save-scan check-save-item" @click="generateQRcode()">二维码</div>
      </div>

      <div class="check-tips" v-show="showMnemonic">
        <div class="check-tips-title">
          <div class="check-tips-title-img">
            <img src="@/assets/tips.svg" alt="" />
          </div>
          <div class="check-tips-title-content">妥善保管助记词</div>
        </div>
        <div class="check-tips-content">
          <div class="check-tips-content-top">
            获得助记词等于拥有钱包资产所有权，请您在收款或卸载前，务必完成助记词备份。
          </div>
          <div class="check-tips-content-bottom">
            BlockWay不会在服务器上保存您的助记词，故一旦丢失，BlockWay也无法帮您找回钱包。
          </div>
        </div>
      </div>
      <div class="check-cover" v-show="!showMnemonic">
        <div class="check-cover-img">
          <img src="@/assets/discover.svg" alt="" />
        </div>
        <div class="check-cover-word">
          <div>任何人获取了助记词</div>
          <div>意味着获取了资产的所有权，请保证周边环境安全。</div>
        </div>
        <div class="check-cover-operate">
          <van-button
            class="check-cover-operate-button"
            @click="checkMnemonic()"
            plain
            type="success"
            >查看助记词</van-button
          >
        </div>
      </div>
    </div>

    <div class="operate">
      <van-button
        class="operate-backup"
        @click="clickBottomButton()"
        type="primary"
      >
        {{ finishBackup ? "我已安全备份" : "开始备份" }}
      </van-button>
    </div>
    <div class="scan-code" v-show="showScanCode">
        <scan-code-popup :value="mnemonic"></scan-code-popup>
      </div>
  </div>
</template>

<script>
import { Button, Toast } from "vant";
import PageTitle from "@/popup/components/pageTitle.vue";
import ScanCodePopup from "@/popup/components/scanCodePopup.vue";
export default {
  components: { [Button.name]: Button, [Toast.name]:Toast, PageTitle, ScanCodePopup },
  data() {
    return {
      mnemonic: "",
      mnemonicList: [],
      showTips: false,
      showMnemonic: false,
      finishBackup: false,
      showScanCode: false
    };
  },
  mounted() {
    this.mnemonic = this.$route.query.mnemonic;
    this.mnemonicList = this.mnemonic.trim().split(/\s+/);
  },
  methods: {
    //复制助记词
    copyMnemonic() {
      navigator.clipboard.writeText(this.mnemonic);
      Toast.success('复制成功')
    },
    //生成二维码
    generateQRcode() {
      this.showScanCode = true
      console.log('是否显示二维码', this.showScanCode)
    },
    //点击底部按钮按钮
    clickBottomButton() {
      console.log("助记词", this.mnemonic);
      //  this.finishBackup = !this.finishBackup
      if (!this.finishBackup) {
        this.showTips = true;
        this.finishBackup = true;
      } else {
      }
    },
    //点击查看助记词按钮
    checkMnemonic() {
      this.showMnemonic = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 600px;
  .title {
    width: 360px;
  }
  .content {
    width: 320px;
    padding-top: 56px;
    margin: 0 auto;
    &-title {
      margin-bottom: 20px;
    }
    &-img {
      margin: 0 auto;
      width: 300px;
      margin-bottom: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &-tips {
      color: #515060;
    }
  }
  .check {
    position: relative;
    width: 320px;
    height: 320px;
    margin: 0 auto;
    padding-top: 56px;
    &-mnemonic {
      width: 320px;
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f7f8fa;
      margin-bottom: 6px;
      border-radius: 2px;
      &-all {
        width: 300px;
        height: 300px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        &-item {
          width: 30%;
          height: 40px;
          line-height: 40px;
          text-align: center;
          background: #fff;
          border-radius: 4px;
          font-size: 14px;
          font-weight: bold;
        }
      }
    }
    &-save {
      width: 320px;
      height: 10px;
      padding: 10px 0;
      display: flex;
      align-items: center;
      margin-bottom: 6px;
      background: #f7f8fa;
      border-radius: 2px;
      &-item {
        color: #007efe;
        width: 50%;
        text-align: center;
      }
      &-copy {
        border-right: 1px solid rgba(194, 200, 213, 0.3);
      }
    }
    &-tips {
      width: 320px;
      background: #f7f8fa;
      padding: 8px 0;
      border-radius: 2px;
      &-title {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        margin-bottom: 14px;
        &-img {
          width: 12px;
          height: 12px;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
        &-content {
          font-weight: bold;
          text-indent: 4px;
        }
      }
      &-content {
        width: 288px;
        margin: 0 auto;
        color: #515060;
        &-top {
          margin-bottom: 12px;
        }
        &-bottom {
        }
      }
    }

    &-cover {
      position: absolute;
      width: 320px;
      height: 320px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 2;
      &-img {
        margin-bottom: 10px;
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      &-word {
        margin-bottom: 10px;
        color: #515060;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      &-operate {
        &-button {
          width: 150px;
          height: 36px;
        }
      }
    }
    &-cover::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(225, 255, 255, 1);
      z-index: -1;
    }
  }
  .operate {
    position: fixed;
    left: 0;
    bottom: 30px;
    width: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
    &-backup {
      width: 320px;
      height: 40px;
    }
  }
}
</style>