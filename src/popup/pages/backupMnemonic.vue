<template>
  <div class="container">
    <div class="title">
      <page-title pageTitleWord="备份助记词"></page-title>
    </div>
    <div class="content">
      <div class="content-title">建议用纸和笔抄写助记词然后安全保存</div>
      <div class="content-img">
        <img src="@/assets/backup.svg" alt="" />
      </div>
      <div class="content-tips">
        助记词由12或24个单词组成，掌握助记词等于掌握账户资产的所有权，请务必保管在安全的地方。
      </div>
    </div>
    <div class="operate">
      <van-button class="operate-backup" type="primary"> 开始备份 </van-button>
    </div>
  </div>
</template>

<script>
import { Button } from "vant";
import PageTitle from "@/popup/components/pageTitle.vue";
export default {
  components: { [Button.name]: Button, PageTitle },
};
</script>

<style lang="scss" scoped>
.img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.container {
  height: 600px;
  .title {
    width: 360px;
  }
  .content {
    width: 320px;
    padding-top: 66px;
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