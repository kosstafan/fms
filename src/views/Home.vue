<template>
    <div class="home">
        <div v-if="isLoading" class="preloader">Loading...</div>
        <div v-else class="home__columns">
            <div class="home__column home__column_left">
                <CompleteData />
                <Shedule
                    type="bar"
                    id="bar"
                    label="Отделения ФМС"
                    :colors="['#00CB9A', '#00CB9A', '#00CB9A', '#00CB9A']"
                />
            </div>
            <div class="home__column home__column_right">
                <Shedule
                    type="doughnut"
                    id="doughnut"
                    label="Отделения ФМС"
                    :labels="false"
                    :colors="['#92CC6D', '#70B4E3', '#5264FF', '#FF5A45']"
                />
                <PercentList
                    :backgrounds="['#92CC6D', '#70B4E3', '#5264FF', '#FF5A45']"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import CompleteData from "../components/CompleteData.vue";
    import Shedule from "../components/Shedule.vue";
    import PercentList from "../components/PercentList.vue";
    export default {
        name: "Home",
        components: {
            CompleteData,
            Shedule,
            PercentList,
        },
        computed: {
            isLoading() {
                return this.$store.getters["getLoading"];
            },
        },
    };
</script>
<style lang="scss" scoped>
    .home {
        flex: 1;
        padding: 40px 55px;
        width: 85%;
    }

    .home__columns {
        display: flex;
    }
    .home__column_left {
        width: 74%;
        margin-right: 35px;
    }
    .home__column_right {
        width: 26%;
    }
</style>
