<template>
    <div class="admin-nav">
        <router-link class="admin-nav__links chat" :to="{name:'Chat'}">
            <p>Chatga o'tish</p>
        </router-link>
        <router-link class="admin-nav__links active" :to="{name:'Main'}">
            <img :src="mainPageImage" alt="main image" width="50" height="50">
            <p>Asosiy sahifa</p>
        </router-link>
        <router-link class="admin-nav__links" :to="{name:'Report'}">
            <img :src="operatorImage" alt="" width="50" height="50">
            <p>Hisobotni olish</p>
        </router-link>
        <router-link class="admin-nav__links" :to="{name:'OperatorSettings'}">
            <img :src="operatorImage" alt="opererator" width="50" height="50">
            <p>Operator sozlamasi</p>
        </router-link>
        <router-link class="admin-nav__links" :to="{name:'BotSettings'}">
            <img :src="settingsBot" alt="" width="50" height="50">
            <p>Bot sozlamasi</p>
        </router-link>
    </div>
</template>

<script>
import SettingsBotImage from '../../assets/images/settingsbot.png'
import OperatorImage from '../../assets/images/operator.png'
import MainPageImage from '../../assets/images/mainPage.png'
    export default {
        name:"Admin",
        data(){
            return{
                settingsBot:SettingsBotImage,
                operatorImage:OperatorImage,
                mainPageImage:MainPageImage
            }
        }
    }
</script>

<style scoped>
    .admin-nav{
        max-width: 336px;
        width: 100%;
        background-color: #2262C6;
        padding-top: 60px;
        border-top-right-radius: 60px;
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .admin-nav__links{
        display: flex;
        align-items: center;
        padding: 21px 0;
        justify-content: space-around;
        text-decoration: none;
        color: #fff;
    }
    .admin-nav__links p{
        margin: 0;
    }
    .chat{
        display: block;
        padding: 10px 32px;
        background-color: #fff;
        border-radius: 40px;
        align-self: center;
        margin-bottom: 45px;
        color: #2262C6;
    }
    .active{
        background-color: #205BB7;
    }
    @media screen and (max-width:1080px) {
        .admin-nav__links p{
            display: none;
        }
    }
</style>