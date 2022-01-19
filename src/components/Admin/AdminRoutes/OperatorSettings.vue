<template>
    <div class="operator-settings">
        <h1>Operatorlar ro'yxati</h1>
        <hr>
        <ul class="operator-list">
            <OperatorList :operator="operator" v-for="(operator, id) in operators" :key="id"/>
        </ul>
        <router-link :to="{name:'AddOperator'}" class="add-operator__image">
            <img :src="operatorImage" alt="add operator" width="121" height="121">
        </router-link>
    </div>
</template>

<script>
    import EventServices from '../../../../services/EventServices'
    import AddOperatorImage from '../../../assets/images/addOperator.png'
    import OperatorList from "../AdminRoutes/OperatorsList.vue"
    export default {
        name:"OperatorSettings",
        components:{
            OperatorList
        },
        data(){
            return{
                operators:[],
                operatorImage:AddOperatorImage
            }
        },
        created(){
            EventServices.getOperators()
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
        display: flex;
        flex-direction: column;
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
    .add-operator__image{
        align-self: flex-end;
        border: none;
        background: inherit;
        cursor: pointer;
    }
</style>