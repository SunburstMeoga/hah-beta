<template>
    <div class="container">
        <div class="content">
            <div class="content-left">
                <div class="content-left-status"></div>
                <!-- <div class="content-left-node">HAH主网（HAHGrid）</div> -->
                <div class="content-left-drop">
                    <!-- <div class="icon iconfont icon-caret-down"></div> -->
                    <van-dropdown-menu active-color="#1989fa">
                        <van-dropdown-item v-model="showDrop" :options="nodeList" @change="changeNode"
                            :title="nodeList[currentNode].text" />
                    </van-dropdown-menu>
                </div>
            </div>
            <div class="content-right">
                <div class="content-right-item" v-for="(item, index) in rightList" :key="index" @click="toPage(item)">
                    <div class="content-right-item-icon icon iconfont" :class="item.icon">
                    </div>
                </div>
            </div>

        </div>


    </div>
</template>

<script>
import { DropdownMenu } from 'vant'
export default {
    components: { [DropdownMenu.name]: DropdownMenu },
    data() {
        return {
            showDrop: false,
            currentNode: 0,
            nodeList: [
                { text: 'HAH主网（HAHGrid）', value: '0' }, { text: 'HAH主网（HAHStack）', value: '1' }, { text: 'HAH测试网', value: '2' }, { text: 'HAH主网（Nile）', value: '3' }, { text: 'DAppChain', value: '4' },
            ],
            rightList: [
                {
                    router: "/settingPage",
                    icon: "icon-roundaddlight"
                },
                {
                    router: "/settingPage",
                    icon: "icon-menu"
                },
                {
                    router: "/settingPage",
                    icon: "icon-reload"
                }, {
                    router: "/settingPage",
                    icon: "icon-settings"
                }
            ]
        }
    },
    methods: {
        toPage(item) {
            console.log('item', item)
            this.$router.push({
                path: item.router,
            });
            console.log('router', item.router)

        },
        changeNode(value) {
            console.log('当前选择节点value值：', value)
            this.currentNode = parseInt(value)
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 360px;
}

.content {
    width: 324px;
    height: 58px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-left {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        cursor: pointer;
        background: #fff;
        box-shadow: 0 0 6px 0 rgba($color: #000000, $alpha: 0.2);
        border-radius: 4px;
        padding: 0 10px;

        &-node {
            width: 110px;
            overflow: hidden; //超出的文本隐藏
            text-overflow: ellipsis; //溢出用省略号显示
            white-space: nowrap; //溢出不换行
            text-indent: 10px;
        }

        &-status {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #00c165;
        }

    }

    &-right {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &-item {
            margin-left: 10px;

            &-icon {
                font-size: 22px;
                color: #007efe;
                font-weight: 400;
            }
        }
    }
}

.icon-menu {
    font-size: 26px;
}
</style>
<style>
.van-dropdown-menu__item,
.van-haptics-feedback {
    box-shadow: none;
    background: #fafafa;
}
</style>