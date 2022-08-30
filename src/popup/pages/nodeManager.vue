<template>
    <div class="container">
        <div class="title">
            <page-title pageTitleWord="节点管理"> </page-title>
        </div>
        <div class="content">
            <div class="content-list">
                <div class="content-list-item" v-for="(item, index) in 2" :key="index">
                    <node-card></node-card>
                </div>
            </div>
        </div>
        <div class="add">
            + 添加节点
        </div>
    </div>
</template>

<script>
import PageTitle from '@/popup/components/pageTitle.vue'
import NodeCard from '../components/nodeCard.vue'
export default {
    components: { PageTitle, NodeCard }
}
</script>

<style lang="scss" scoped>
.container {
    width: 360px;
    height: 600px;
    background: #fefefe;

    .content {
        padding-top: 56px;

        &-list {
            margin: 0 auto;

            &-item {
                width: 320px;
                margin: 0 auto;
                margin-bottom: 10px;
                -webkit-box-shadow: 3px 3px 16px 0px rgba(47, 50, 50, 0.35);
                -moz-box-shadow: 3px 3px 16px 0px rgba(47, 50, 50, 0.35);
                box-shadow: 3px 3px 16px 0px rgba(47, 50, 50, 0.35);
            }
        }
    }

    .add {
        position: fixed;
        bottom: 0;
        text-align: center;
        height: 50px;
        line-height: 50px;
        border: 1px solid rgba(80, 81, 96, .1);
        font-size: 14px;
        color: #515060;
        cursor: pointer;
        width: 360px;
    }
}
</style>