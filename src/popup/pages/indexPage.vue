<template>
    <div class="container">
        <div class="content">
            <div class="title">
                <main-page-nav />
            </div>
            <div class="content-info">
                <div class="info-module content-info-account">
                    <div class="content-info-account-address">
                        <div class="content-info-account-address-word">
                            TUmc8KckZV...ncw3dmXYUS
                        </div>
                        <div class="content-info-account-address-copy">
                            <div class="icon iconfont icon-copy"></div>
                        </div>
                        <div class="content-info-account-address-share">
                            <div class="icon iconfont icon-share"></div>
                        </div>
                    </div>
                </div>
                <div class="info-module content-info-balance">$ 0.000</div>
                <div class="info-module content-info-condition">
                    <div class="content-info-condition-item" v-for="(item, index) in conditionList" :key="index">
                        <div class="content-info-condition-item-top">
                            <div class="content-info-ocndition-item-top-title">
                                {{ item.title }}
                            </div>
                            <div class="content-info-ocndition-item-top-number">
                                {{ item.number }}
                            </div>
                        </div>
                        <div class="content-info-condition-item-bottom">
                            <div class="content-info-condition-item-bottom-bar"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-operate">
                <div class="content-operate-item" @mouseenter="operateEnter(index)" @mouseleave="operateLeave()"
                    :class="currentOperate === index ? 'content-operate-current' : ''"
                    v-for="(item, index) in operateList" :key="index">
                    <div class="content-operate-item-icon">
                        <div class="icon iconfont" :class="item.icon"></div>
                    </div>
                    <div class="content-operate-item-word">
                        {{ item.title }}
                    </div>
                </div>
            </div>
            <div class="content-assets">
                <div class="content-assets-left">
                    <div @click="clickTabItem(index)" class="content-assets-left-item"
                        :class="currentTab === index ? 'content-assets-left-current' : ''"
                        v-for="(item, index) in tabList" :key="index">
                        {{ item.title }}
                    </div>
                </div>
                <div class="content-assets-right">
                    <div class="content-assets-right-item" v-for="(item, index) in assetsList" :key="index">
                        <div class="content-assets-right-item-icon icon iconfont" :class="item.icon">

                        </div>
                    </div>
                </div>
            </div>
            <div class="content-list">
                <div class="content-list-item" @click="toCoinDetails()">
                    <assets-item></assets-item>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import mainPageNav from './mainPageNav.vue';
import assetsItem from '../components/assetsItem.vue'
import { Tab, Tabs } from 'vant';
export default {
    components: { mainPageNav, assetsItem, [Tab.name]: Tab, [Tabs.name]: Tabs },
    data() {
        return {
            conditionList: [{ title: '能量', number: '1/4' }, { title: '带宽', number: '1/4' }],
            operateList: [{ title: '转账', icon: 'icon-zhuanzhang' }, { title: '收款', icon: 'icon-shoukuan' }, { title: '投票', icon: 'icon-navicon-tp' }],
            assetsList: [{ icon: 'icon-paixu' }, { icon: 'icon-add' }],
            tabList: [{ title: '资产' }, { title: '收藏品' }],
            currentTab: 0,
            currentOperate: null,
        }
    },
    methods: {
        operateLeave() {
            this.currentOperate = null
        },
        operateEnter(index) {
            this.currentOperate = index
        },
        clickTabItem(index) {
            this.currentTab = index
            console.log('currentTab', this.currentTab)
        },
        toCoinDetails() {
            this.$router.push({
                path: "/coinDetails",
            });

        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 360px;
    height: 600px;

    .content {
        &-info {
            width: 100%;
            height: 150px;
            background: #007efe;
            display: flex;
            flex-direction: column;
            justify-content: center;

            &-account {
                justify-content: flex-start;

                &-address {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    user-select: text;
                    color: hsla(0, 0%, 100%, .5);
                    font-size: 12px;
                    font-weight: 300;

                    &-word {}
                }
            }

            &-balance {
                font-weight: 500;
                font-size: 30px;
                line-height: 28px;
                margin-top: 2px;
                color: #f7f8fa;
            }

            &-condition {
                height: 25px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                &-item {
                    width: 135px;

                    &-top {
                        margin-bottom: 6px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        font-size: 12px;
                        color: #fbfbfb;
                    }

                    &-bottom {
                        width: 135px;
                        background: #f7f8fa;
                        height: 6px;
                        border-radius: 4px;

                        &-bar {
                            width: 34px;
                            height: 6px;
                            border-radius: 4px;
                            background: #70cff9;
                        }
                    }
                }
            }
        }

        &-operate {
            width: 100%;
            height: 65px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            border-bottom: 1px solid #f7f8fa;
            margin-bottom: 10px;

            &-item {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 30%;
                height: 56px;
                border-radius: 4px;
                cursor: pointer;

                &-icon {
                    margin-bottom: 6px;
                    font-size: 30px;
                    color: #000;
                }

                &-word {
                    color: rgba(80, 81, 96, .4);
                    text-align: center;
                    font-size: 12px;
                    -webkit-transform: scale(.9);
                    transform: scale(.9);
                }
            }

            &-current {
                background: #f3f6fb;
                color: #1b7bf7;
            }
        }

        &-assets {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 320px;
            margin: 0 auto;
            margin-bottom: 10px;

            &-left {
                width: 30%;
                display: flex;
                justify-content: space-between;
                align-items: center;

                &-item {
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 20px;
                    color: rgba(80, 81, 96, .5);
                    cursor: pointer;
                }

                &-current {
                    border-bottom: 2px solid #1b7bf7;
                    color: #1b7bf7;
                }
            }

            &-right {
                width: 20%;
                display: flex;
                justify-content: flex-start;
                align-items: center;

                &-item {
                    margin-left: 10px;

                    &-icon {
                        font-size: 18px;
                        color: #1b7bf7;
                    }
                }
            }
        }

        &-list {
            width: 320px;
            margin: 0 auto;
        }
    }

    .title {
        height: 58px;
    }

    .info-module {
        width: 320px;
        margin: 0 auto;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
    }

    .icon-copy,
    .icon-share {
        margin-left: 10px;
    }
}
</style>