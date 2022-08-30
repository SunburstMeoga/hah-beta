<template>
    <div class="contentCard">
        <div class="contentCard-title">
            <div class="contentCard-title-icon">
                √
            </div>
            <div class="contentCard-title-word">
                HAH主网（HAHGrid）
            </div>
        </div>
        <div class="contentCard-info">
            <div class="contentCard-info-item" v-for="(item, index) in itemList" :key="index">
                <div class="contentCard-info-item-title">
                    {{ item.title }}
                </div>
                <div class="contentCard-info-item-word">
                    {{ item.contentCard }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            itemList: [{ title: 'Full node', contentCard: 'https://api.blockway.io' }, { title: 'Event Server', contentCard: 'https://api.blockway.io' }]
        }
    }
}
</script>

<style lang="scss" scoped>
@mixin center($justify: flex-start) {
    display: flex;
    justify-content: $justify;
    align-items: center;
}

.contentCard {
    width: 320px;
    border-left: 4px solid #1b7bf7;
    background: #fff;
    border-radius: 8px;

    &-title {
        @include center;
        border-bottom: 1px solid #f7f8fa;
        height: 46px;
        margin-bottom: 12px;

        &-icon {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #1b7bf7;
            margin-left: 14px;
            color: #fff;
        }

        &-word {
            text-indent: 20px;
            font-size: 16px;
            color: #515060;
        }

    }

    &-info {
        &-item {
            @include center(space-between);
            width: 302px;
            padding: 14px;
            margin: 0 auto;
            margin-bottom: 10px;
            font-size: 14px;

            &-title {
                color: #babacc;
            }

            &-word {
                color: #888998;
            }
        }
    }
}
</style>