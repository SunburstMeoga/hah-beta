<template>
  <div class="container">
    <div class="content">
      <div class="content-logo">
        <img src="../../assets/icon128.png" alt="" />
      </div>

      <div class="content-operate">
        <van-button
          class="content-operate-import content-operate-button"
          @click="importWallet()"
          type="primary"
        >
          导入钱包
        </van-button>

        <van-button
          class="content-operate-create content-operate-button"
          @click="createWallet()"
          type="default"
        >
          创建钱包
        </van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from "vant";
export default {
  components: { [Button.name]: Button },
  data() {
    return {
      message: "test",
      mnemonic: "",
    };
  },
  methods: {
    //前往助记词页面
    toMnemonicPage(type) {
      this.$router.push({
        path: "/mnemonic",
        query: {
          type: type,
        },
      });
    },
    //导入钱包
    importWallet() {
      this.toMnemonicPage("import");
    },
    // 创建钱包
    createWallet() {
      // this.toMnemonicPage("create");
      this.$router.push({
        path: "/createWallet",
      });
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
.round-border {
  border-radius: 50%;
}
.container {
  width: 360px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &-logo {
    width: 200px;
    height: 200px;
    margin-bottom: 40px;
    overflow: hidden;
    // @extend .round-border;
  }
  &-operate {
    display: flex;
    justify-content: space-between;
    width: 270px;
    &-button {
      width: 120px;
      height: 40px;
      border-radius: 6px;
      border-width: 1px;
      border-style: solid;
      text-align: center;
      line-height: 40px;
    }
    &-import {
      background: #007efe;
      color: white;
      border-color: #007efe;
    }
    &-create {
      border-color: gray;
      color: gray;
    }
  }
}
</style>