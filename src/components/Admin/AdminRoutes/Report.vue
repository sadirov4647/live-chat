<template>
    <div class="report">
        <h2 class="report-title">Hisobot olish</h2>
        <hr>
        <div class="report-operator">
            <h3 class="choose-operator__title">Operatorni tanlang</h3>
            <ul class="report-operator__list">
                <ReportList :operator="operator" v-for="(operator, id) in operators" :key="id"/>
            </ul>
            <section class="pagination">
                <button :disabled="page === 1" @click="page--">Oldingi</button>
                <button :disabled="operators.length == 0" @click="page++">Keyingi</button>
            </section>
        </div>
    </div>
</template>

<script>
    import ReportList from '../AdminRoutes/ReportList.vue'
    import axios from 'axios'
    export default {
        name:"Report",
        components:{
            ReportList
        },
        data(){
            return{
                operators:[],
                limit: 4,
                page: 1,
            }
        },
        computed: {
            pagination() {
                return {
                    _limit: 4,
                    _start: (this.page - 1) * this.limit + 1,
                };
            },
        },
        watch: {
            pagination: {
                deep: true,
                immediate: true,
                handler: 'fetchTodos',
            },
        },
        methods: {
            async fetchTodos() {
                const { _start, _limit } = this.pagination;
                const response = await axios.get('http://localhost:3000/operators', {
                    params: { _start, _limit },
                });
                this.operators = response.data;
                console.log(response.data)
            },
        },
    }
</script>

<style scoped>
    .pagination button{
        background-color: #2262C6;
        color: #fff;
        border: none;
        border: 1px solid #2262C6;
        border-radius: 12px;
        padding: 10px;
        cursor: pointer;
        margin-right: 15px;
    }
    .pagination button:hover{
        background-color: #fff;
        color: #2262C6;
        border: 1px solid #2262C6;
    }
    .report-operator__list{
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
    .report-title{
        color: #2262C6;
        text-align: left;
        margin: 0;
        font-size: 24px;
        line-height: 32px;
        font-weight: bold;
    }
    .hr{
        opacity: 0.5;
    }
    .choose-operator__title{
        color: #CBCBCB;
        text-align: center;
        line-height: 34px;
        font-size: 24px;
    }
    .pagination{
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
</style>