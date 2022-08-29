<template>
  <div class="content">
    <div class="content-left">
      <div class="content-left-img">
        <img src="@/assets/coinLogo.jpeg" alt="">
      </div>
      <div class="content-left-name">HAH</div>
    </div>
    <div class="content-right">
      <div class="content-right-amount">0</div>
      <div class="content-right-value">≈ $ 0</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  object-fit: cover;
}

.content {
  border-bottom: 1px solid hsla(0, 0%, 93.7%, .5);
  width: 320px;
  height: 58px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &-left {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &-img {
      width: 28px;
      height: 28px;
      overflow: hidden;
      border-radius: 50%;
      border: 1px solid gray;
    }

    &-name {
      text-indent: 10px;
      font-size: 14px;
      color: #505160;
    }
  }

  &-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    &-amount {
      font-size: 14px;
      color: #505160;
      max-width: 150px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 2px;
    }

    &-value {
      font-size: 12px;
      color: #888998;
    }
  }
}
</style>