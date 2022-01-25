<template>
    <div class="bot-comments">
        <h2>Bot izoh maydoni uchun matn</h2>
        <hr>
        <ul class="bot-comments__list">
            <li class="bot-comments__item">
                <h4>O'zbek tilidagi matn</h4>
                <textarea name="comments-text-uz" id="comments-text-uz" cols="10" rows="5"></textarea>
            </li>
            <li class="bot-comments__item">
                <h4>Rus tilidagi matn</h4>
                <textarea name="comments-text-rus" id="comments-text-rus" cols="10" rows="5"></textarea>
            </li>
            <li class="bot-comments__item">
                <h4>English tilidagi matn</h4>
                <textarea name="comments-text-en" id="comments-text-en" cols="10" rows="5"></textarea>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "BotComments",
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
</style>
