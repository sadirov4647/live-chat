<template>
    <div class="bot-first__text">
        <h2 class="bot-first__title">Bot tomonidan boradigan birinchi xabar</h2>
        <hr>
        <BotTextAreas title="O'zbek tilidagi matn" input="uzb-first-text"/>
        <BotTextAreas title="Rus tilidagi matn" input="rus-first-text"/>
        <BotTextAreas title="English tilidagi matn" input="en-first-text"/>
        <ul class="bot-textareas__features-list">
            <li class="bot-textareas__features-list">
                <button class="bot-cancel">Bekor qilish</button>
            </li>
            <li class="bot-textareas__features-list">
                <button class="bot-save">Saqlash</button>
            </li>
        </ul>
    </div>
</template>

<script>
    import BotTextAreas from './BotTextAreas.vue'
    export default {
        name:"BotFirstText",
        components:{
            BotTextAreas
        }
    }
</script>

<style scoped>
    .bot-first__title{
        color: #2262C6;
        font-size: 30px;
        line-height: 42px;
        margin: 0;
    }
    .bot-textareas__features-list{
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: flex-end;
    }
    .bot-textareas__features-list button{
        border: none;
        padding: 16px 32px;
        cursor: pointer;
        border-radius: 12px;
    }
    .bot-cancel{
        background-color: #E7E7E7;
        margin-right: 20px;
    }
    .bot-save{
        background-color: #2262C6;
        color: #fff;
    }

    @media screen and (max-width:500px) {
        .bot-first__title{
            font-size: 22px;
            line-height: 28px;
        }
        .bot-textareas__features-list button{
            padding: 10px 22px;
        }
    }
</style>