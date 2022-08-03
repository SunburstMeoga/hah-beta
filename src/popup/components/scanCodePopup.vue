<template>
  <div class="container-code">
    <div class="code">
        <qrcode-vue :value="value" :size="size" level="H" />
    </div>
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
export default {
  props:{
    value:{
      type:String,
      require:true
    },
    size:{
      type:Number,
      default:300
    }
  },
  components:{
    QrcodeVue
  },
}
</script>

<style>
.container-code {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.code {
    background: #fff;
    padding: 6px;
}
</style>