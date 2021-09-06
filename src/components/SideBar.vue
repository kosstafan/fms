<template>
    <aside class="sidebar">
        <Logo />
        <Nav />
    </aside>
</template>

<script>
    import Logo from "./Logo.vue";
    import Nav from "./Nav.vue";
    export default {
        components: {
            Logo,
            Nav,
        },
    };
</script>

<style lang="scss" scoped>
    .sidebar {
        padding-top: 39px;
        padding-left: 40px;
        margin-right: 23px;
    }
</style>
