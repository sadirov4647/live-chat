<template>
    <div class="personal-settings">
        <h2>Shaxsiy sozlamalar</h2>
        <hr>
        <router-link class="personal-settings__wrapper" :to="{name: 'ChangePassword'}">
            <h4 class="personal-settings__title">Parolni o'zgartirish</h4>
        </router-link>
    </div>
</template>

<script>
    export default {
        name:"PersonalSettings"
    }
</script>

<style scoped>
    .personal-settings h2{
        color: #2262C6;
        font-weight: bold;
        font-size: 24px;
        line-height: 32px;
        margin: 0;
    }
    .personal-settings__wrapper{
        text-decoration: none;
    }
    .personal-settings__title{
        padding: 20px 14px;
        background-color: inherit;
        border: 1px solid #E0E0E0;
        border-radius: 15px;
        margin: 0;
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: 20px;
        line-height: 28px;
    }
    .personal-settings__title::before{
        content: '';
        background: url(../../../assets/images/personalSettings.svg);
        width: 56px;
        height: 50px;
        margin-right: 30px;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>