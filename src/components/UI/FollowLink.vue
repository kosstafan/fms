<template>
    <router-link class="follow-link" :to="path">
        <span class="follow-link__arrow">
            <svg
                width="22"
                height="10"
                viewBox="0 0 22 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1.33337 5H20.9778"
                    stroke="#767676"
                    stroke-width="2"
                    stroke-linecap="round"
                />
                <path
                    d="M14.9333 1L20.9778 5L14.9333 9"
                    stroke="#767676"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </span>
        <span>{{ title }}</span>
    </router-link>
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
    .follow-link {
        text-decoration: none;
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        color: #2f353d;
    }
    .follow-link__arrow {
        margin-right: 18px;
    }
</style>
