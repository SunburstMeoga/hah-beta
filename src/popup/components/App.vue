<template>
  <div class="popup-title">
      <div class="">{{ message }}</div>
      <div class="popup-title-left">hello</div>
      <div class="popup-title-right">world</div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'test 按时发斯蒂芬'
        }
    }
}
</script>

<style scoped>
    .popup-title {
        color: red;
    }
</style>