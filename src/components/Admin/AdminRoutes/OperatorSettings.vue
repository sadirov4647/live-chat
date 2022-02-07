<template>
    <div class="operator-settings">
        <h2>Operatorlar ro'yxati</h2>
        <hr>
        <ul class="operator-list">
            <OperatorList :operator="operator" v-for="(operator, id) in operators" :key="id"/>
        </ul>


        <section class="pagination">
            <div>
                <button :disabled="page === 1" @click="page--">Oldingi</button>
                <button :disabled="operators.length == 0" @click="page++">Keyingi</button>
            </div>
            <router-link :to="{name:'AddOperator'}" class="add-operator__image">
                <img :src="operatorImage" alt="add operator" width="90" height="90">
            </router-link>
        </section>
    </div>
</template>

<script>
    import EventServices from '../../../../services/EventServices'
    import AddOperatorImage from '../../../assets/images/addOperator.png'
    import OperatorList from "../AdminRoutes/OperatorsList.vue"
    import axios from 'axios'
    export default {
        name:"OperatorSettings",
        components:{
            OperatorList
        },
        data(){
            return{
                operators:[],
                operatorImage:AddOperatorImage,
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
    .operator-settings{
        display: flex;
        flex-direction: column;
    }
    .pagination{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
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
    .operator-settings h2{
        color: #2262C6;
        margin: 0;
        font-size: 24px;
        line-height: 32px;
    }
    hr{
        opacity: 0.5;
    }
    .operator-list{
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
    .add-operator__image{
        align-self: flex-end;
        border: none;
        background: inherit;
        cursor: pointer;
    }

    @media screen and (max-width:820px) {
        .add-operator__image img{
            width: 60px;
            height: 60px;
        }
    }
    @media screen and (max-width:550px) {
        .operator-settings h2{
            line-height: 34px;
            font-size: 24px;
        }
    }
</style>