<template>
    <div class="container">
        <div class="title">
            <page-title pageTitleWord="设置"></page-title>
        </div>
        <div class="content">
            <div class="content-item" v-for="(item, index) in itemList" :key="index" @click="toPage(item)">
                <div class="content-item-left">
                    <div class="content-item-left-icon icon iconfont" :class="item.icon"></div>
                </div>
                <div class="content-item-right">
                    <div class="content-item-right-word">
                        {{ item.title }}
                    </div>
                    <div class="content-item-right-more">
                        <div class="content-item-right-more-value">{{ item.value }}</div>
                        <div class="content-item-right-more-icon icon iconfont icon-right"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PageTitle from "@/popup/components/pageTitle.vue";

export default {
    components: { PageTitle },
    data() {
        return {
            itemList: [
                { title: '地址本', icon: 'icon-dizhibu', value: '', router: '/nodeManager' },
                { title: 'DApp白名单', icon: 'icon-weifabaimingdan', value: '', router: '/nodeManager' },
                { title: '节点管理', icon: 'icon-jiedianguanli', value: '', router: '/nodeManager' },
                { title: '计价货币', icon: 'icon-huobi', value: 'USD', router: '/nodeManager' },
                { title: '关于我们', icon: 'icon-guanyuwomen', value: '', router: '/nodeManager' }
            ]
        }
    },
    methods: {
        toPage(item) {
            this.$router.push({
                path: item.router,
            });
            console.log(item)
        }
    }
}
</script>

<style lang="scss" scoped>
@mixin center($justify: space-between) {
    display: flex;
    justify-content: $justify;
    align-items: center;
}

.container {
    width: 360px;
    height: 600px;

    .content {
        padding-top: 50px;

        &-item {
            @include center;
            height: 52px;
            cursor: pointer;

            &-left {
                width: 52px;
                height: 52px;
                @include center(center);

                &-icon {
                    font-size: 18px;
                }
            }

            &-right {
                @include center;

                width: 308px;
                height: 52px;
                border-bottom: 1px solid #efefef;

                &-word {
                    font-size: 14px;
                    color: #515060;
                }

                &-more {
                    @include center(flex-end);
                    font-size: 14px;
                    color: #888998;

                    &-value,
                    &-icon {
                        margin-right: 10px;
                    }

                    &-icon {
                        font-size: 20px;
                        color: #575757;
                    }
                }
            }
        }
    }
}
</style>