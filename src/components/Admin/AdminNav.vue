<template>
    <div class="admin-nav" :class="{ 'menu': clicked }">
        <router-link class="admin-nav__links active" :to="{name:'Main'}">
            <img :src="mainPageImage" alt="main image" width="35" height="35">
            <p>Asosiy sahifa</p>
        </router-link>
        <router-link class="admin-nav__links" :to="{name:'Report'}">
            <img :src="operatorImage" alt="" width="35" height="35">
            <p>Hisobotni olish</p>
        </router-link>
        <router-link class="admin-nav__links" :to="{name:'OperatorSettings'}">
            <img :src="operatorImage" alt="opererator" width="35" height="35">
            <p>Operator sozlamasi</p>
        </router-link>
        <router-link class="admin-nav__links" :to="{name:'BotSettings'}" >
            <img :src="settingsBot" alt="" width="35" height="35">
            <p>Bot sozlamasi</p>
        </router-link>
        <hr>
        <router-link class="admin-nav__links personal-page" :to="{name:'PersonalSettings'}">
            <p>Shaxsiy sozlamalar</p>
        </router-link>
    </div>
</template>

<script>
    import SettingsBotImage from '../../assets/images/settingsbot.png'
    import OperatorImage from '../../assets/images/operator.png'
    import MainPageImage from '../../assets/images/mainPage.png'
    export default {
        name:"Admin",
        props:["clicked"],
        data(){
            return{
                settingsBot:SettingsBotImage,
                operatorImage:OperatorImage,
                mainPageImage:MainPageImage
            }
        },
    }
</script>

<style scoped>
    .router-link-active{
        background-color: #205BB7;
    }
    .personal-page{
        align-self: center;
    }
    hr{
        width: 100%;
    }
    .admin-nav{
        max-width: 260px;
        width: 100%;
        background-color: #2262C6;
        padding-top: 54px;
        padding-bottom: 250px;
        border-top-right-radius: 60px;
        display: flex;
        flex-direction: column;
    }
    .admin-nav__links{
        display: flex;
        align-items: center;
        padding: 15px 0;
        justify-content: space-between;
        padding-left: 20px;
        padding-right: 20px;
        text-decoration: none;
        color: #fff;
    }
    .admin-nav__links p{
        margin: 0;
        font-weight: bold;
        white-space: nowrap;
        font-size: 16px;
        line-height: 22px;
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
    .chat-title{
        display: none;
    }
    .personal-page{
        padding-left: 47px;
        padding-right: 73px;
    }
    @media screen and (max-width:820px) {
        .admin-nav__links p{
            display: none;
        }
        .chat-title{
            display: block;
        }
        .admin-nav{
            align-items: center;
            max-width: 90px;
        }
        .active{
            max-width: 50px;
            width: 100%;
        }
    }
    @media screen and (max-width:520px) {
        .menu{
            transform: translateX(0px) !important;
        }
        .admin-nav{
            transform: translateX(-600px);
            position: fixed;
            max-width: 300px;
            width: 100%;
            z-index: 99;
        }
        .admin-nav__links p{
            display: block;
        }
        .chat-title{
            display: flex;
        }
        .admin-nav__links{
            width: 80%;
        }
    }
</style>