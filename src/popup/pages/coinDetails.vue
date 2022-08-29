<template>
    <div class="container">
        <div class="title">
            <page-title pageTitleWord="HAH"></page-title>
        </div>
        <div class="content">
            <div class="content-coin content-module">
                <img src="@/assets/coinLogo.jpeg" alt="">
            </div>
            <div class="content-balance">
                0
            </div>
            <div class="content-details content-module">
                <div class="content-details-item" v-for="(item, index) in detailsList" :key="index">
                    <div class="content-details-item-top">{{ item.number }}</div>
                    <div class="content-details-item-bottom">{{ item.title }}</div>
                </div>
            </div>
            <div class="content-tab">
                <div class="content-tab-item" @click="clickTabItem(index)"
                    :class="currentTab === index ? 'content-tab-current' : ''" v-for="(item, index) in tabList"
                    :key="index">
                    {{ item.title }}
                </div>
            </div>
            <div class="content-empty">
                <van-empty description="暂无数据" />
            </div>
            <div class="content-operate">
                <div class="content-operate-item" :style="index === 0 ? 'border: none;' : ''"
                    v-for="(item, index) in operateList" :key="index">
                    <div class="content-operate-item-icon icon iconfont"
                        :style="index === 1 ? 'transform: rotate(180deg); margin: 0;' : ''" :class="item.icon"></div>
                    <div class="content-operate-item-word">{{ item.title }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PageTitle from "@/popup/components/pageTitle.vue";
import { Empty } from 'vant';
export default {
    components: { PageTitle, [Empty.name]: Empty },
    data() {
        return {
            detailsList: [{ title: '可用余额', number: '0' }, { title: '质押', number: '0' }],
            tabList: [{ title: '全部' }, { title: '转账' }, { title: '收款' }],
            operateList: [{ title: '转账', icon: 'icon-up-square-o' }, { title: '收款', icon: 'icon-up-square-o' }, { title: '更多', icon: 'icon-more' }],
            currentTab: 0,
        }
    },
    methods: {
        clickTabItem(index) {
            this.currentTab = index
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    height: 600px;

    .title {
        width: 360px;
    }

    .content {
        padding-top: 62px;
        width: 320px;
        margin: 0 auto;

        &-module {
            margin: 0 auto;
        }

        &-coin {
            width: 52px;
            height: 52px;
            border-radius: 50%;
            margin-bottom: 10px;
            border: 1px solid gray;
            overflow: hidden;
        }

        &-balance {
            line-height: 28px;
            font-size: 20px;
            color: #515060;
            word-break: break-all;
            margin-bottom: 30px;
            text-align: center;
        }

        &-details {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;

            &-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background: #f3f6fb;
                width: 156px;
                height: 54px;
                border-radius: 6px;

                &-top {
                    margin-bottom: 6px;
                    font-size: 16px;
                    color: #515060;
                }

                &-bottom {
                    font-size: 12px;
                    color: #888998;
                }
            }
        }

        &-tab {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 50%;

            &-item {
                height: 24px;
                color: #888998;
                line-height: 24px;
                font-size: 15px;
                cursor: pointer;
            }

            &-current {
                color: #1b7bf7;
                border-bottom: 2px solid #1b7bf7;
            }
        }

        &-operate {
            height: 46px;
            width: 320px;
            position: fixed;
            left: 50%;
            margin-left: -160px;
            bottom: 14px;
            display: flex;
            flex-direction: row;
            background: #1b7bf7;
            border-radius: 8px;
            align-items: center;

            &-item {
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
                width: 33%;
                height: 20px;
                border-left: 1px solid #f7f8fa;

                &-icon {
                    font-size: 12px;
                    font-weight: 500;
                    color: #fff;
                    margin-top: 2px;
                }

                &-first {
                    transform: rotate(180deg);
                    border: none;
                }

                &-word {
                    text-indent: 4px;
                    border: 1ps solid green;
                }
            }


        }
    }
}
</style>