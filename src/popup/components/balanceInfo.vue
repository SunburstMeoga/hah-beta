<template>
  <div class="balance">
    <div class="balance-logo">
      <img src="../../assets/icon128.png" alt="" />
    </div>
    <div class="balance-hah">688.88 HAH</div>
    <div class="balance-usd">$88.67 USD</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.balance {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  &-logo {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid gray;
    margin-bottom: 10px;
    overflow: hidden;
  }
  &-hah {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 4px;
  }
  &-balance-usd {
    color: #525a61;
    font-weight: bold;
  }
}
</style>