<template>
    <div>
        <div>
            <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>
        </div>
        <AreaChart />
    </div>
</template>

<script>
    import AreaChart from '../AdminRoutes/AreaChart.vue'
    export default {
        name:"MainPage",
        components:{
            AreaChart
        },
        data(){
            return{
                series: [75,25],
                chartOptions: {
                    chart: {
                        type: 'donut',
                        width:300
                    },
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200
                            },
                            legend: {
                                position: 'bottom'
                            }
                        }
                    }]
                },
            }
        }
    }
</script>

<style scoped>

</style>