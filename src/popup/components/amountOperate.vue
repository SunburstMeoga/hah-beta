<template>
  <div class="amount">
    <div
      class="amount-item amount-buy"
      v-for="(item, index) in amountList"
      :key="index"
      @click="clickItem(itme, index)"
    >
      <div class="amount-item-icon">
        <img :src="item.icon" alt="" />
      </div>
      <div class="amount-item-word">
        {{ item.word }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amountList: [
        { icon: require("../../assets/amount-buy.svg"), word: "Buy" },
        { icon: require("../../assets/amount-send.svg"), word: "Send" },
        { icon: require("../../assets/amount-exchange.svg"), word: "Exchange" },
      ],
    };
  },
  methods: {
    clickItem(item, index) {
      console.log(item, index)
    }
  }
};
</script>

<style lang="scss" scoped>
.amount {
  display: flex;
  justify-content: space-between;
  width: 200px;
  &-item {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    &-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #0076d9;
      margin-bottom: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 60%;
        object-fit: contain;
      }
    }
    &-word {
      color: #0076d9;
    }
  }
}
</style>