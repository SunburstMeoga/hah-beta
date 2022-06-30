<template>
  <div class="container">
    <div class="content">
      <div class="content-title">
        <div class="content-title-left">
          <img src="../../assets/icon128.png" alt="" />
        </div>
        <div class="content-title-middle">
          <div class="content-title-middle-status"></div>
          <div class="content-title-middle-name">Ethereum</div>
          <div class="content-title-middle-drop">Toggle</div>
        </div>
        <div class="content-title-right">Account</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "test",
    };
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
  width: 300px;
  height: 500px;
  .content {
    &-title {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      height: 40px;
      &-left {
        width: 40px;
        height: 40px;
        border-radius: 20px;
        border: 1px solid gray;
        overflow: hidden;
      }
      &-middle {
        width: 52%;
        height: 26px;
        border: 1px solid gray;
        border-radius: 26px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0 5px;
        &-status {
          width: 8px;
          height: 8px;
          background: green;
          @extend .round-border;
        }
        &-name {
          flex: 1;
          padding: 0 4px;
          color: #525a61;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        &-drop {
          font-size: 12px;
          transform: scale(0.8);
        }
      }
      &-right {
        color: #525a61;
      }
    }
  }
}
</style>