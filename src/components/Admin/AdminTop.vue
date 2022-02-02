<template>
    <div class="admin-top">
        <button class="menu-real__btn" @click="menuClick">
          <img class="menu-btn" :src="menubtn" alt="menu" width="35" height="35">
        </button>
        <router-link to="/">
            <img class="main-logo" :src="mainLogo" alt="main logo" width="300" height="72">
        </router-link>
        <div class="admin-top__input">
            <label for="search"></label>
            <input type="search" placeholder="izlash">
        </div>
        <div class="admin-top__features">
            <button class="admin-top__question"><img :src="warningIcon" alt="warning" width="28" height="28"></button>
            <button class="admin-top__warn"><img :src="questionIcon" alt="question" width="28" height="28"></button>
            <button class="admin-top__settings"><img :src="settingsIcon" alt="setting" width="28" height="28"></button>
            <button class="admin-top__user" @click="userModal"><img :src="userIcon" alt="setting" width="42" height="42"></button>
            <ul class="main-top-user__list">
                <li class="main-top-user__item user-icon">
                    <p>Shaxsiy xonaga o'tish</p>
                </li>
                <li class="main-top-user__item user-password__change">
                    <router-link to="/admin/change-password">
                      <p>Parolni o'zgartirish</p>
                    </router-link>
                </li>
                <li class="main-top-user__item user-logout">
                    <router-link to="/">
                       <p>Saytdan chiqish</p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import MenuBtn from  '../../assets/images/menu.svg'
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
                userIcon:UserIcon,
                menubtn:MenuBtn,
                userModall:false
            }
        },
        methods:{
            menuClick(){
                this.$emit("menuBtn")
            },
            userModal(){
                let ok = document.querySelector('.main-top-user__list');
                if(this.userModall){
                    this.userModall = !this.userModall
                    ok.style.transform = "translateX(-1300px)"
                }else{
                    this.userModall = !this.userModall
                     ok.style.transform = "translateX(0)"
                }
            }
        }
    }
</script>

<style scoped>
    .main-top-user__item{
        display: flex;
        align-items: center;
    }
    .main-top-user__item:hover{
        background-color: #F6F6F6;
    }
    .main-top-user__item::before{
        content: "";
        width: 18px;
        height: 18px;
        display: flex;
        align-items: center;
        margin-right: 8px;
    }
    .main-top-user__item{
        padding: 8px 20px;
        border-bottom: 1px solid #F7F7F7;
        border-width: 100%;
    }
    .user-icon::before{
        background: url(../../assets/images/user-icon.svg);
    }
    .user-password__change::before{
        background: url(../../assets/images/change-password.svg);
    }
    .user-logout::before{
        background: url(../../assets/images/logout.svg);
        background-repeat: no-repeat;
    }
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
    .menu-real__btn{
        display: none;
        border: none;
        cursor: pointer;
        background-color: inherit;
    }
    .admin-top__user{
        position: relative;
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
    .main-top-user__list{
        top: 80px;
        z-index: 99;
        transform: translateX(-1300px);
        padding: 0;
        margin: 0;
        list-style-type: none;
        position: absolute;
        display: flex;
        flex-direction: column;
        right: 5%;
        background-color: #fff;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);
        transition: 0.3s;
    }
    .main-top-user__item p{
        margin: 0;
        white-space: nowrap;
        color: #6D6D6D;
    }
    .main-top-user__item a{
        text-decoration: none;
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

    @media screen and (max-width:570px) {
        .admin-top__input::before{
            display: none;
        }
        .admin-top__input{
            padding: 5px 7px;
        }
        .main-logo{
            width: 150px;
        }
        .admin-top__user img{
            width: 30px;
            height: 30px;
        }
        .admin-top__warn img{
            width: 20px;
            height: 20px;
        }
        .admin-top__question img{
            width: 20px;
            height: 20px;
        }
        .admin-top{
            padding-left: 20px;
            padding-right: 30px;
            padding-top: 5px;
        }
    }
    @media screen and (max-width:570px) {
        .admin-top__warn{
            display: none;
        }
        .admin-top__question{
            display: none;
        }
        .admin-top__input{
            display: none;
        }
    }
    @media screen and (max-width:520px) {
        .menu-real__btn{
            display: block;
        }
    }
</style>