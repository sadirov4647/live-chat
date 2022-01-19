<template>
    <div class="add-operator">
        <h2>Operator qo'shish</h2>
        <hr>
        <div class="add-operator__wrapper">
            <input class="operator-id__input" type="text" v-model="operatorAddId" placeholder="idni kiriting" required>
            <button class="add-operator__btn">Qo'shish</button>
        </div>
    </div>
</template>

<script>
    export default {
        name:"AddOperator",
        data(){
            return{
                operatorAddId:''
            }
        }
    }
</script>

<style scoped>
    hr{
        opacity: 0.5;
    }
    .add-operator{
        max-width: 800px;
        padding-left: 75px;
        padding-right: 90px;
        margin: 0 auto;
    }
    .add-operator h2{
        font-weight: bold;
        font-size: 40px;
        line-height: 52px;
        color: #2262C6;
        text-align: left;
    }
    .add-operator__wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 60px;
    }
    .operator-id__input{
        padding: 16px;
        margin-bottom: 50px;
        background: #FBFBFB;
        border: 1px solid #C4C4C4;
        border-radius: 12px;
        text-align: center;
        outline: none;
    }
    .add-operator__btn{
        padding: 16px 42px;
        background-color: #2262C6;
        border: none;
        border-radius: 16px;
        color: #fff;
        cursor: pointer;
    }
</style>