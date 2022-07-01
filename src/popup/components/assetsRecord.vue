<template>
  <div class="assets">
    <div class="assets-title">
      <div
        class="assets-title-item"
        :class="currentTab === index ? 'title-item-active' : ''"
        v-for="(item, index) in assetsList"
        :key="index"
        @click="clickTab(index)"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      assetsList: [{ title: "Assets" }, { title: "Record" }],
      currentTab: 0,
    };
  },
  methods: {
    clickTab(index) {
      this.currentTab = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.assets {
  width: 300px;
  &-title {
    width: 300px;
    display: flex;
    justify-content: space-between;
    &-item {
      width: 50%;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border-bottom: 2px solid white;
      font-size: 14px;
      cursor:default;
    }
    .title-item-active {
      border-bottom: 2px solid #0076d9;
      color: #0076d9;
      font-weight: bold;
    }
  }
}
</style>