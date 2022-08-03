<template>
  <div class="container">
    <div class="container-top">
      <div class="container-top-icon">
        <img src="@/assets/success.svg" alt="" />
      </div>
      <div class="container-top-title">{{ tipsTitle }}</div>
      <div class="container-top-content">{{ tipsContent }}</div>
    </div>
    <div class="container-operate">
      <van-button
        class="container-operate-button"
        type="primary"
        @click="clickButton()"
        >{{ buttonWord }}</van-button
      >
    </div>
    <van-popup v-model:show="showPopup">
      <div class="verify">
        <div class="verify-title">请输入密码</div>
        <div class="verify-input">
          <input type="password" placeholder="密码" />
        </div>
        <div class="verify-operate">
          <div class="verify-operate-cancel">
            <van-button class="operate-button" @click="togglePopup()"
              >取消</van-button
            >
          </div>
          <div class="verify-operate-confirm">
            <van-button
              class="operate-button"
              @click="clickConfirm()"
              type="primary"
              >确认</van-button
            >
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Button, Popup } from "vant";
export default {
  components: { [Button.name]: Button, [Popup.name]: Popup },
  props: {
    tipsTitle: {
      default: "创建成功",
      type: String,
    },
    tipsContent: {
      default: "请备份钱包助记词，在任何情况下，它是您回复财产的唯一方式。",
      type: String,
    },
    buttonWord: {
      default: "备份钱包",
      type: String,
    },
  },
  data() {
    return {
      showPopup: false,
      mnemonic: ''
    };
  },
  mounted() {
    this.mnemonic = this.$route.query.mnemonic
    console.log('助记词', this.mnemonic)
  },
  methods: {
    //点击开始备份按钮
    clickButton() {
      this.togglePopup();
    },
    //显示隐藏弹出层
    togglePopup() {
      this.showPopup = !this.showPopup;
      console.log("clickButton", this.showPopup);
    },
    //点击弹出层确认按钮
    clickConfirm() {
      this.togglePopup()
      this.$router.push({
        path: "/backupMnemonic",
        query: {
          mnemonic: this.mnemonic
        }
      });
      console.log("clickConfirm");
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.container {
  width: 360px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  &-top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-icon {
      margin-bottom: 20px;
      width: 110px;
      height: 110px;
    }
    &-title {
      margin-bottom: 10px;
      font-size: 14px;
      font-weight: bold;
    }
    &-content {
      width: 240px;
      text-align: center;
    }
  }
  &-operate {
    position: fixed;
    left: 0;
    bottom: 30px;
    width: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
    &-button {
      width: 320px;
      height: 40px;
    }
  }
}
.verify {
  padding: 20px;
  border-radius: 2px;
  background: #fff;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  &-title {
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 14px;
  }
  &-input {
    background: #f7f8fa;
    width: 280px;
    border-radius: 2px;
    display: flex;
    height: 40px;
    margin-bottom: 14px;

    input {
      border: none;
      text-align: center;
      background: #f7f8fa;
      width: 100%;
    }
  }
  &-operate {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 280px;
  }
  .operate-button {
    width: 120px;
    height: 40px;
  }
}
</style>