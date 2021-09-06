<template>
    <router-link class="logo" to="/"
        ><img src="../assets/logo.png" alt="logo" class="logo__img" />
        <div class="logo__description">виртуальная АТС</div>
    </router-link>
</template>

<style lang="scss" scoped>
    .logo {
        display: flex;
        flex-direction: column;
        text-decoration: none;
    }
    .logo__description {
        text-decoration: none;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #aeaeae;
    }
</style>
