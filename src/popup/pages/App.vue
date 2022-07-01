<template>
  <div class="container">
    <div class="title">
      <page-title></page-title>
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
  </div>
</template>

<script>
import PageTitle from "../components/pageTitle.vue";
import BalanceInfo from "../components/balanceInfo.vue";
import AmountOperate from "../components/amountOperate.vue"
import AssetsRecord from "../components/assetsRecord.vue"
import CurrencyInfo from "../components/currencyInfo.vue"

export default {
  components: { PageTitle, BalanceInfo, AmountOperate, AssetsRecord, CurrencyInfo },
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