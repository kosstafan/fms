<template>
    <div class="data">
        <h1 class="data__title">Общие данные</h1>
        <ul class="data__list">
            <li v-for="(item, type) in fms" :key="type" class="data__item">
                <div class="data__counter">{{ item.items.length }}</div>
                <div class="data__description">{{ item.name }}</div>
                <FollowLink :path="'/type/' + type" title="перейти" />
            </li>
        </ul>
    </div>
</template>
<script>
    import FollowLink from "./UI/FollowLink.vue";
    export default {
        components: {
            FollowLink,
        },
        computed: {
            fms() {
                return this.$store.getters["getAllFms"];
            },
        },
    };
</script>
<style lang="scss" scoped>
    .data {
        background: #ebebeb;
        padding: 33px 45px 40px;
        margin-bottom: 54px;
    }
    .data__title {
        font-weight: bold;
        font-size: 20px;
        line-height: 28px;
        color: #2f353d;
        margin-bottom: 11px;
    }
    .data__counter {
        font-weight: bold;
        font-size: 28px;
        line-height: 34px;
        color: #2f353d;
        margin-bottom: 4px;
    }
    .data__description {
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        color: #2f353d;
        margin-bottom: 12px;
        min-height: 32px;
    }
    .data__list {
        display: flex;
    }
    .data__item {
        flex: 1 1 auto;
        max-width: 238px;
        margin-right: 90px;
        &:last-child {
            margin-right: 0;
        }
    }
</style>
