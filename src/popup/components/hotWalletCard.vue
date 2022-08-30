<template>
    <div class="hot">
        <div class="hot-title">
            <div class="hot-title-name">Lotto</div>
            <div class="hot-title-change">√</div>
        </div>
        <div class="hot-details">
            <div class="hot-details-title">TRX：0</div>
            <div class="hot-details-number">总资产:≈$ 0</div>
        </div>
        <div class="hot-address">
            <div class="hot-address-title">TUmc8KckZV...ncw3dmXYUS</div>
            <div class="hot-address-icon icon iconfont icon-copy" @click="copyAddress"></div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    components: { [Toast.name]: Toast },
    methods: {
        copyAddress() {
            Toast.success('复制成功');
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

.hot {
    width: 320px;
    border-radius: 6px;
    background: #1b7bf7;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    &-title {
        width: 290px;
        height: 30px;
        padding-top: 10px;
        @include center();

        &-name {
            color: #efefef;
            font-size: 14px;
        }

        &-change {
            background: #fff;
            color: #1b7bf7;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            text-align: center;
            line-height: 20px;
            font-size: 12px;
        }
    }

    &-details {
        @include center(flex-start);
        width: 290px;
        height: 24px;
        margin-bottom: 4px;

        &-title {
            color: #ebebeb;
        }

        &-number {
            color: hsla(0, 0%, 100%, .7);
            text-indent: 10px;
        }
    }

    &-address {
        @include center();
        width: 320px;
        color: hsla(0, 0%, 92.2%, .8);
        background: #92b8f2;
        height: 24px;
        padding: 2px 0;

        &-title {
            text-indent: 15px;
        }

        &-icon {
            margin-right: 15px;
            cursor: pointer;
        }
    }
}
</style>