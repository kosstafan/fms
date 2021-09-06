<template>
    <div class="type">
        <div v-if="isLoading" class="preloader">Loading...</div>
        <Search v-else />
    </div>
</template>

<script>
    import Search from "../components/Search.vue";
    export default {
        components: {
            Search,
        },
        computed: {
            isLoading() {
                return this.$store.getters["getLoading"];
            },
        },
    };
</script>
<style lang="scss" scoped>
    .type {
        flex: 1;
        padding: 60px 55px 40px;
        width: 85%;
    }
</style>
