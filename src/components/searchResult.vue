<template>
    <div class="search-result">
        <div class="search-result__header">
            <div class="search-result__header-cell">Код подразделения</div>
            <div class="search-result__header-cell">Название</div>
            <div class="search-result__header-cell">Код региона</div>
            <div class="search-result__header-cell">Вид подразделения</div>
        </div>
        <ul class="search-result__list">
            <li
                v-for="(item, index) in fmsByParams"
                :key="index"
                class="search-result__line"
            >
                <div class="search-result__header-cell" :title="item.data.code">
                    {{ item.data.code }}
                </div>
                <div class="search-result__header-cell" :title="item.data.name">
                    {{ item.data.name }}
                </div>
                <div
                    class="search-result__header-cell"
                    :title="item.data.region_code"
                >
                    {{ item.data.region_code }}
                </div>
                <div class="search-result__header-cell" :title="fmsType">
                    {{ fmsType }}
                </div>
            </li>
        </ul>
        <Paginator />
    </div>
</template>

<script>
    import Paginator from "./Paginator.vue";
    import { mapGetters } from "vuex";

    export default {
        components: {
            Paginator,
        },
        computed: {
            ...mapGetters([
                "currentRow",
                // ...
            ]),
            fmsByParams() {
                const result = this.$store.getters["getSorted"].filter(
                    (item, index) => {
                        return (
                            index > this.currentRow * 10 - 11 &&
                            index < 10 * this.currentRow
                        );
                    }
                );

                return result;
            },
            fmsType() {
                let types = [
                    "подразделение ФМС",
                    "ГУВД или МВД",
                    "УВД или ОВД",
                    "Отделение полиции",
                ];
                return types[this.$route.params.id];
            },
        },
    };
</script>
<style lang="scss" scoped>
    .search-result__list {
        margin-bottom: 75px;
    }
    .search-result__header,
    .search-result__line {
        display: flex;
        font-weight: bold;
        font-size: 12px;
        line-height: 20px;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: #aeaeae;
        height: 63px;
    }
    .search-result__line {
        background-color: #fff;
        border-bottom: 1px solid #ebebeb;
        color: #2f353d;
    }
    .search-result__header-cell {
        line-height: 62px;
        flex-shrink: 0;
        &:first-child {
            padding-left: 40px;
            width: 25%;
        }
        &:nth-child(2) {
            max-width: 32%;
            padding-right: 50px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        &:nth-child(3) {
            margin-left: auto;
            width: 15%;
        }
        &:nth-child(4) {
            width: 25%;
        }
    }
</style>
