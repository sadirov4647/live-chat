<template>
    <div class="change-description">
        <h2 class="change-desc__title">Bot izoh maydoni uchun matn</h2>
        <hr>
        <BotTextAreas title="O'zbek tilidagi matn" input="uzb-comment"/>
        <BotTextAreas title="Rus tilidagi matn" input="rus-comment"/>
        <BotTextAreas title="English tilidagi matn" input="uz-comment"/>
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
        name:"ChangeDescription",
        components:{
            BotTextAreas
        }
    }
</script>

<style  scoped>
    .change-desc__title{
        font-weight: bold;
        font-size: 30px;
        line-height: 42px;
        color: #2262C6;
        margin: 0;
    }
    hr{
        opacity: 0.5;
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
        .change-desc__title{
            font-size: 24px;
            line-height: 28px;
        }
        .bot-textareas__features-list button{
            padding: 10px 22px;
        }
    }
</style>