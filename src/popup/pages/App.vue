<template>
  <div class="container">
    <div class="content">
      <div class="content-logo">
        <img src="../../assets/icon128.png" alt="" />
      </div>
      <div class="content-operate">
        <div class="content-operate-import content-operate-button" @click="test()">
          Import Wallet
        </div>
        <div class="content-operate-create content-operate-button" @click="test()">
          Create Wallet
        </div>
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
  methods: {
    test() {
      console.log('sfjaslkjfkl');
      this.$router.push({
        path: '/wallet'
      })
    }
  }
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
    margin-bottom: 34px;
    border: 1px solid gray;
    overflow: hidden;
    @extend .round-border;
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
        border-color: black;
        color: black;
    }
  }
}
</style>