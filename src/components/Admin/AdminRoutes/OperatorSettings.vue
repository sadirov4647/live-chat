<template>
    <div class="operator-settings">
        <h2>Operatorlar ro'yxati</h2>
        <hr>
        <ul class="operator-list">
            <OperatorList :operator="operator" v-for="(operator, id) in operators" :key="id"/>
        </ul>
        <router-link :to="{name:'AddOperator'}" class="add-operator__image">
            <img :src="operatorImage" alt="add operator" width="90" height="90">
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
        display: flex;
        flex-direction: column;
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