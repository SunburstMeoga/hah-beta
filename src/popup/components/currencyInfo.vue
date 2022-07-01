<template>
  <div class="currency">
    <div class="currency-left">
      <div class="currency-left-logo">
        <img src="../../assets/icon128.png" alt="" />
      </div>
      <div class="currency-left-infor">
        <div class="currency-left-infor-hah">0 HAH</div>
        <div class="currency-left-infor-usd">$0.00 USD</div>
      </div>
    </div>
    <div class="currency-right">
      <img src="../../assets/more-right.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.currency {
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  border-bottom: 1px solid #d6dadd;
  &-left {
    display: flex;
    justify-items: flex-start;
    align-items: center;
    &-logo {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      overflow: hidden;
      border: 1px solid gray;
    }
    &-infor {
      padding-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &-hah {
        margin-bottom: 4px;
        font-size: 14px;
      }
      &-usd {
        color: #525a61;
      }
    }
  }
  &-right {
    width: 20px;
  }
}
</style>