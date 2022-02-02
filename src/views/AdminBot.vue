<template>
    <div class="admin-bot">
        <h2 class="admin-bot__title">Botni tanlang</h2>
        <form  @submit.prevent="submitBot">
            <div class="bot-choose">
                <input type="radio" name="bot" id="live" value="live" v-model="botName">
                <label for="live">liveqchatbot</label>
            </div>
            <div class="bot-choose">
                <input type="radio" name="bot" id="anor" value="anor" v-model="botName">
                <label for="anor">anorchatbot</label>
            </div>
            <button class="continue-btn" type="submit">Davom etish</button>
        </form>
    </div>
</template>

<script>
    export default {
        name:"AdminBot",
        data(){
            return{
                botName:''
            }
        },
        methods:{
            submitBot(){
                console.log(this.botName)
                this.$router.push('/admin/main-page')
            }
        }
    }
</script>

<style scoped>
    .admin-bot{
        margin: 0 auto;
        margin-top: 200px;
        max-width: 404px;
        width: 100%;
        box-shadow: 0px 0px 90px rgba(0, 0, 0, 0.09);
    }
    .admin-bot__title{
        font-size: 30px;
        line-height: 35px;
        color: #2262C6;
        margin: 0;
        padding: 16px 0;
        text-align: center;
    }
    .bot-choose:active{
        background-color: #FBFBFB;
    }
    .bot-choose{
        align-items: center;
        display: flex;
        padding: 16px;
    }
    .bot-choose input{
        visibility: hidden;
    }
    .bot-choose::before{
        content: "";
        background: url('../assets/images/bot.svg');
        width: 40px;
        height: 40px;
    }
    .continue-btn{
        width: 100%;
        padding: 8px 16px;
        justify-content: space-around;
        background-color: #2262C6;
        color: #fff;
        font-weight: bold;
        font-size: 30px;
        line-height: 35px;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        margin-right: auto;
    }
    .continue-btn::after{
        content: "";
        background: url('../assets/images/arrow.svg');
        width: 30px;
        height: 30px;
    }
    .active-bot{
        background-color: #FBFBFB;
    }
</style>