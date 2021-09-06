<template>
    <div class="paginator">
        <ul v-if="rows > 1" class="paginator__list">
            <li class="paginator__item">
                <a
                    @click.prevent="stepRow($event, 'prew')"
                    href=""
                    class="paginator__link"
                    >В начало</a
                >
            </li>
            <li v-for="row in rows" :key="row" class="paginator__item">
                <a
                    href=""
                    class="paginator__link paginator__link_page"
                    :class="[currentRow == row ? 'active' : '']"
                    @click.prevent="changeRow($event, row)"
                    >{{ row }}</a
                >
            </li>
            <li class="paginator__item paginator__item_page">
                <a
                    @click.prevent="stepRow($event, 'next')"
                    href=""
                    class="paginator__link"
                    >В конец</a
                >
            </li>
        </ul>
    </div>
</template>
<script>
    import { mapGetters } from "vuex";
    export default {
        methods: {
            changeRow(event, row) {
                this.$store.dispatch("changeRowByRow", row);
            },
            stepRow(event, to) {
                this.$store.dispatch("changeRowByStep", to);
            },
        },
        computed: {
            ...mapGetters([
                "currentRow",
                // ...
            ]),
            rows() {
                return Math.ceil(this.$store.getters["getSorted"].length / 10);
            },
        },
    };
</script>
<style lang="scss" scoped>
    .paginator__list {
        display: flex;
        align-items: center;
    }
    .paginator__link {
        text-decoration: none;
        font-weight: 600;
        font-size: 16px;
        line-height: 23px;
        color: #2f353d;
    }
    .paginator__item {
        margin: 0 16px;

        &:first-child {
            margin-left: 0;
        }
        &:last-child {
            margin-right: 0;
        }
    }
    .paginator__link_page {
        width: 36px;
        height: 36px;
        border-radius: 50%;

        display: block;
        text-align: center;
        line-height: 36px;
        &:hover,
        &.active {
            background: #e4e4e4;
        }
    }
</style>
