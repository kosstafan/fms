<template>
    <div class="percent-list">
        <div class="percent-list__title">всего: {{ " " + totalRows }}</div>
        <ul class="percent-list__list">
            <li
                v-for="(item, type) in fms"
                :key="type"
                class="percent-list__line"
            >
                <span
                    class="percent-list__marker"
                    :style="
                        backgrounds.length
                            ? `background: ${backgrounds[type]}`
                            : ''
                    "
                ></span>
                <span class="percent-list__name">{{
                    item.name.replace("подразделений", "")
                }}</span>
                <span class="percent-list__percent">{{
                    getPercent(item.items) + " %"
                }}</span>
                <span class="percent-list__count">{{ item.items.length }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        methods: {
            getPercent(arr) {
                return ((arr.length / this.totalRows) * 100).toFixed(0);
            },
        },
        props: {
            backgrounds: {
                type: Array,
                default: () => [],
            },
        },
        computed: {
            fms() {
                return this.$store.getters["getAllFms"];
            },
            totalRows() {
                let rows = 0;
                for (const key in this.fms) {
                    rows += this.fms[key].items.length;
                }
                return rows;
            },
        },
    };
</script>

<style lang="scss" scoped>
    .percent-list {
        padding: 30px;
        background-color: #fff;
    }
    .percent-list__list {
        border-top: 1px solid #e4e4e4;
    }
    .percent-list__line {
        padding: 10px 0;
        display: flex;
        align-items: center;
        font-size: 12px;
        line-height: 16px;
        color: #2f353d;
        border-bottom: 1px solid #e4e4e4;
    }
    .percent-list__title {
        text-align: right;
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;
        text-align: right;
        color: #2f353d;
        margin-bottom: 11px;
    }
    .percent-list__marker {
        width: 14px;
        height: 14px;
        background-color: #000;
        flex-shrink: 0;
        margin-right: 10px;
    }
    .percent-list__name {
        max-width: 40%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .percent-list__percent,
    .percent-list__count {
        width: 15%;
    }
    .percent-list__percent {
        margin-left: auto;
    }
    .percent-list__count {
        text-align: right;
    }
</style>
