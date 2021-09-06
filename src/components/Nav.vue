<template>
    <nav class="nav">
        <ul class="nav__list">
            <NavItem title="Главная" path="/" />
            <NavItem title="ФМС" path="/type/0" />
            <NavItem title="ГУВД или МВД" path="/type/1" />
            <NavItem title="УВД или ОВД" path="/type/2" />
            <NavItem title="Отделение полиции" path="/type/3" />
        </ul>
    </nav>
</template>
<script>
    import NavItem from "./NavItem.vue";
    export default {
        components: {
            NavItem,
        },
    };
</script>
<style lang="scss" scoped>
    .nav {
        margin-top: 42px;
    }
</style>
