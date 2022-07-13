<template>
  <div class="container">
    <div class="title">
      <page-title :testRes="testRes"></page-title>
    </div>
    <div class="balance">
      <balance-info></balance-info>
    </div>
    <div class="operate">
      <amount-operate></amount-operate>
    </div>
    <div class="assets">
      <assets-record></assets-record>
    </div>
    <div class="currency">
      <currency-info></currency-info>
    </div>
    {{testRes}}
  </div>
</template>

<script>
import PageTitle from "../components/pageTitle.vue";
import BalanceInfo from "../components/balanceInfo.vue";
import AmountOperate from "../components/amountOperate.vue"
import AssetsRecord from "../components/assetsRecord.vue"
import CurrencyInfo from "../components/currencyInfo.vue"
import axios from 'axios'
export default {
  components: { PageTitle, BalanceInfo, AmountOperate, AssetsRecord, CurrencyInfo },
  data() {
    return {
      testRes: null
    }
  },
  mounted() {
    this.getData()
  },
  methods:{
   getData(){
      var api="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
      //2.使用axios 进行get请求
      axios.get(api).then((res)=>{
        //请求成功的回调函数
        // console.log(res.toString())
        this.testRes = res.data.result[0].title
      }).catch((err)=>{
        //请求失败的回调函数
        console.log(err)
      })
   }

  }
};

</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .title {
    width: 100%;
    margin-bottom: 20px;
  }
  .balance {
    margin-bottom: 10px;
  }
  .operate {
    margin-bottom: 20px;
  }
}
</style>