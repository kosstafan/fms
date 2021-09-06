<template>
    <div class="shedule">
        <canvas :id="id" width="80%" height="80%"></canvas>
    </div>
</template>

<script>
    import Chart from "chart.js/auto";
    export default {
        props: {
            type: {
                type: String,
            },
            id: {
                type: String,
            },
            label: {
                type: String,
            },
            colors: {
                type: Array,
            },
            labels: {
                type: Boolean,
                default: true,
            },
        },
        computed: {
            fms() {
                return this.$store.getters["getAllFms"];
            },
        },
        mounted() {
            const self = this;
            let values = [];
            let labels = [];
            for (const key in this.fms) {
                values.push(this.fms[key].items.length);
                labels.push(this.fms[key].name);
            }

            var ctx = document.getElementById(`${self.id}`);
            var myChart = new Chart(ctx, {
                type: self.type,
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: self.label,
                            data: values,
                            backgroundColor: self.colors,
                            borderWidth: 0,
                            barThickness: 24,
                        },
                    ],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                    plugins: {
                        legend: {
                            display: false,
                            labels: {
                                color: "rgb(255, 99, 132)",
                            },
                        },
                    },
                },
            });
        },
    };
</script>

<style lang="scss" scoped>
    .shedule {
        background-color: #fff;
        padding: 80px 35px 40px;
    }

    #myChart {
        width: 80%;
        height: 80%;
    }
</style>
