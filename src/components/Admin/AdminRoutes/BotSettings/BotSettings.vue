<template>
    <div class="bot-settings">
        <h2 class="bot-settings__title">Bot sozlamalari</h2>
        <hr>
        <div class="bot-main">
            <div class="bot-main__profile">
            <img class="bot-profile__image" :src="botProfil" alt="bot profile photo" width="100" height="100">
            <div class="bot-main-profile__features">
                <div class="bot-main__profile-title">
                    <h4>Live Q chat</h4>
                    <button><img src="" alt=""></button>
                </div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BotProfilePhoto from '../../../../assets/images/botProfilePhoto.svg'
    export default {
        name:"BotSettings",
        data(){
            return{
                botProfil:BotProfilePhoto
            }
        }
    }
</script>

<style scoped>
    .bot-settings__title{
        margin: 0;
        color: #2262C6;
        font-weight: bold;
        font-size: 32px;
        line-height: 48px;
    }
    .bot-main__profile{
       display: flex;
    }
    .bot-profile__image{
        margin-right: 40px;
    }
    .bot-main-profile__features{
        display: flex;
        flex-direction: column;
    }
    .bot-main__profile-title{
        display: flex;
        flex-grow: 1;
    }
</style>