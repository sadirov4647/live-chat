<template>
    <div class="report">
        <h2 class="report-title">Hisobot olish</h2>
        <hr>
        <div class="report-operator">
            <h3>Operatorni tanlang</h3>
            <ul class="report-operator__list">
                <ReportList :operator="operator" v-for="(operator, id) in operators" :key="id"/>
            </ul>
        </div>
    </div>
</template>

<script>
    import ReportList from '../AdminRoutes/ReportList.vue'
    import EventServices from '../../../../services/EventServices'
    export default {
        name:"Report",
        components:{
            ReportList
        },
        data(){
            return{
                operators:[]
            }
        },
        created(){
            EventServices.getOperators()
            .then(response => {
                this.operators = response.data
            })
        }
    }
</script>

<style scoped>
    .report-operator__list{
        list-style-type: none;
    }
    .report-title{
        color: #2262C6;
        text-align: left;
    }
    .hr{
        opacity: 0.5;
    }
</style>