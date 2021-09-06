<template>
    <Sidebar />
    <router-view />
</template>

<script>
    import Sidebar from "./components/SideBar.vue";
    export default {
        components: {
            Sidebar,
        },
        created() {
            this.$store.dispatch("getFms");
        },
    };
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    ul,
    li {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    body,
    html {
        min-height: 100%;
    }
    #app {
        min-height: 100vh;
        font-family: sans-serif;
        display: flex;
        background: #f5f5f5;
    }
</style>
