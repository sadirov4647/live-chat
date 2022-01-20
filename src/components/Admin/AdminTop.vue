<template>
    <div class="admin-top">
        <img class="main-logo" :src="mainLogo" alt="main logo" width="300" height="72">
        <div class="admin-top__input">
            <label for="search"></label>
            <input type="search" placeholder="izlash">
        </div>
        <div class="admin-top__features">
            <button><img :src="warningIcon" alt="warning" width="28" height="28"></button>
            <button><img :src="questionIcon" alt="question" width="28" height="28"></button>
            <button class="admin-top__settings"><img :src="settingsIcon" alt="setting" width="28" height="28"></button>
            <button><img :src="userIcon" alt="setting" width="42" height="42"></button>
        </div>
    </div>
</template>

<script>
    import MainLogo from '../../assets/images/mainlogo.png'
    import WarningIcon from '../../assets/images/mainimages/warnicon.png'
    import QuestionIcon from '../../assets/images/mainimages/questionicon.png'
    import SettingsIcon from '../../assets/images/mainimages/settings.png'
    import UserIcon from '../../assets/images/mainimages/userphoto.png'
    export default {
        name:"AdminTop",
        data(){
            return{
                mainLogo:MainLogo,
                warningIcon:WarningIcon,
                questionIcon:QuestionIcon,
                settingsIcon:SettingsIcon,
                userIcon:UserIcon
            }
        }
    }
</script>

<style scoped>
    .admin-top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 22px;
        padding-right: 48px;
        padding-top: 15px;
    }
    .admin-top__input{
        max-width: 350px;
        width: 100%;
        padding: 12px 23px;
        background-color: #F1F2F7;
        border-radius: 21px;
        display: flex;
    }
    .admin-top__input::before{
        content: "";
        background: url('../../assets/images/search.svg');
        width: 23px;
        height: 26px;
        background-size: contain;
        background-repeat: no-repeat;
        margin-right: 30px;
    }
    .admin-top__input input{
        border: none;
        background: inherit;
        outline: none;
        width: 100%;
    }
    .admin-top__features{
        display: flex;
        align-items: center;
    }
    .admin-top__features button{
        border: none;
        cursor: pointer;
        background-color: #fff;
    }

    @media screen and (max-width:970px) {
        .admin-top__input{
            max-width: 200px;
        }
    }

    @media screen and (max-width:820px) {
        .main-logo{
            width: 220px;
            height: 60px;
            object-fit: contain;
        }
        .admin-top__input::before{
            width: 32px;
            height: 20px;
        }
        .admin-top__input{
            max-width: 150px;
        }
        .admin-top__settings{
            display: none;
        }
    }

</style>