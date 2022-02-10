<template>
    <div id="chart">
        <apexchart type="area" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>
    export default {
        name:'AreaChart',
        data(){
            return{
                series: [{
                    name: "STOCK ABC",
                    data:[7800,4520,8400,8202,9000]
                }],
                chartOptions: {
                    chart: {
                        type: 'area',
                        height: 350,
                        zoom: {
                            enabled: false
                        }
                    },
                    dataLabels: {
                        enabled: false,
                    },
                    stroke: {
                        curve: 'straight'
                    },

                    title: {
                        text: 'kun davomida almashinilgan xabarlar soni',
                        align: 'left',
                        style:{
                            color:"#6EA3F5",
                            fontSize:"14px"
                        }
                    },
                    labels: [7800,8100,8000,8700,9000],
                    xaxis: {
                        type: 'datetime',
                    },
                    legend: {
                        horizontalAlign: 'left'
                    }
                },
            }
        }
    }
</script>

<style scoped>

</style>