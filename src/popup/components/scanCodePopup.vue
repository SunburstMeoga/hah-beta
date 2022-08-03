<template>
  <div class="container-code">
    <van-popup v-model:show="show">
       <div class="code">
         <qrcode-vue :value="value" :size="size" level="H" />
       </div>
    </van-popup>
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
import { Popup } from 'vant';
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
  components:{ QrcodeVue, [Popup.name]: Popup},
  data() {
    return {
      show: false
    }
  }
}
</script>

<style>
/* .container-code {
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
}*/
.code {
    background: #fff;
    padding: 6px;
} 
</style>