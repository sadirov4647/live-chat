<template>
    <div class="bot-comments">
        <h2>Bot izoh maydoni uchun matn</h2>
        <hr>
        <BotTextAreas title="O'zbek tilidagi matn" input="uzb-text"/>
        <BotTextAreas title="Rus tilidagi matn" input="rus-text"/>
        <BotTextAreas title="English tilidagi matn" input="en-text"/>
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
        name: "BotComments",
        components:{
            BotTextAreas
        }
    };
</script>

<style scoped>
    .bot-comments h2{
        margin: 0;
        color: #2262C6;
        font-size: 24px;
        line-height: 32px;
        font-weight: bold;
    }
    hr{
        margin-bottom: 32px;
    }
    .bot-comments__list{
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
    .bot-comments__item{
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;
    }
    .bot-comments__item h4{
        margin: 0;
        margin-bottom: 6px;
        color: #A9A9A9;
        font-weight: normal;
        font-size: 20px;
        line-height: 25px;
    }
    .bot-comments__item textarea{
        background: #FFFFFF;
        border: 1px solid #979797;
        box-sizing: border-box;
        border-radius: 16px;
        outline: none;
        padding: 20px;
        color: #979797;
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
        color: #ffffff;
    }

    @media screen  and (max-width:500px){
        .bot-textareas__features-list button{
            padding: 10px 22px;
        }
    }
</style>
