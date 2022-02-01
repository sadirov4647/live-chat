<template>
    <div class="bot-textareas">
        <label class="bot-textareas__title" for="title">
            <slot name="title">{{ title }}</slot>
        </label>
        <slot name="input">
            <textarea id="input" name="input" cols="5" rows="5"></textarea>
        </slot>
    </div>
</template>

<script>
    export default {
        name:"BotTextAreas",
        props:["title", "input"]
    }
</script>

<style scoped>
    .bot-textareas{
        display: flex;
        flex-direction: column;
        max-width: 800px;
        margin: 0 auto;
    }
    .bot-textareas__title{
        color: #A9A9A9;
        font-weight: normal;
        font-size: 22px;
        line-height: 26px;
    }
    textarea{
        padding: 15px;
        border: 1px solid #979797;
        border-radius: 12px;
        outline: none;
        margin-bottom: 10px;
    }

    @media screen and (max-width:500px) {
        textarea{
            padding: 5px;
        }
        .bot-textareas__title{
            font-size: 18px;
            line-height: 22px;
        }
    }
</style>