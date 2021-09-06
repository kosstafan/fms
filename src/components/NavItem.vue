<template>
    <li class="nav__item">
        <router-link class="nav__link" :to="path">{{ title }}</router-link>
    </li>
</template>
<script>
    export default {
        props: {
            title: {
                type: String,
            },
            path: {
                type: String,
            },
        },
    };
</script>

<style lang="scss" scoped>
    .nav__item {
        margin-bottom: 42px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .nav__link {
        text-decoration: none;
        font-weight: 600;
        font-size: 16px;
        line-height: 18px;
        color: #aeaeae;
        position: relative;
        &.router-link-active {
            color: #767676;
            &::before {
                content: "";
                width: 2px;
                height: 24px;
                position: absolute;
                top: 0;
                left: -38px;
                transform: translateY(-23%);
                background: #767676;
            }
        }
    }
</style>
