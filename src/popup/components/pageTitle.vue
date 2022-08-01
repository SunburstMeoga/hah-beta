<template>
  <div class="title-container">
    <van-nav-bar class="title" left-arrow @click-left="onClickLeft" :title="pageTitleWord" />
  </div>
</template>

<script>
import { NavBar } from 'vant';
export default {
 components: { [NavBar.name]:NavBar },
 props:{
   pageTitleWord: {
     defult: '',
     type: String
   }
 },
 methods: {
   onClickLeft() {
     this.$router.go(-1)
   }
 }
}
</script>

<style lang="scss" scoped>
  .title-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 400px;
    .title  {
      width: 360px;
    }
  }
</style>