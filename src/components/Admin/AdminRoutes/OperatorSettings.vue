<template>
    <div class="operator-settings">
        <h1>Operatorlar ro'yxati</h1>
        <hr>
        <ul class="operator-list">
            <OperatorList :operator="operator" v-for="(operator, id) in operators" :key="id"/>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    import OperatorList from "../AdminRoutes/OperatorsList.vue"
    export default {
        name:"OperatorSettings",
        components:{
            OperatorList
        },
        data(){
            return{
                operators:[]
            }
        },
        created(){
            axios.get('http://localhost:3000/operators')
            .then(response => {
                this.operators = response.data
            })
            .catch(error => {
                console.log(`There is some error + ${error}`)
            })
        }
    }
</script>

<style scoped>
    .operator-settings{
        padding-left: 50px;
        padding-right: 80px;
        flex-grow: 1;
    }
    .operator-settings h1{
        color: #2262C6;
    }
    hr{
        opacity: 0.5;
    }
    .operator-list{
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
</style>