<template>
    <div class="user-info" v-if="getId">
        <div class="user-info__header">
            <img class="user-info__image" :src="bigUserPhoto" alt="user photo" width="90" height="90">
            <div class="user-info__main-infos">
                <p class="user-info__name">{{ getId.chattedName }}</p>
                <p class="user-info__email">{{ getId.chattedEmail }}</p>
            </div>
            <img :src="smallusericon" alt="small user icon" width="18" height="18">
        </div>

        <ul class="user-info__list">
            <li class="user-info__item">
                <button>Qora ro'yxatga kiritish</button>
            </li>
            <li class="user-info__item">
                <button>Qora ro'yxatdan olish</button>
            </li>
            <li class="user-info__item">
                <router-link :to="{name:'Chatter'}">Yozishmalarga o'tish</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import smallUserIcon from '../../assets/images/usersmallicon.svg'
    import biguserphoto from '../../assets/images/BigUserPhoto.png'
    import EventService from '../../../services/EventServices'
    export default {
        name:"UserInfo" ,
        props:["id"],
        data(){
            return{
                userInfos:[],
                smallusericon:smallUserIcon,
                bigUserPhoto:biguserphoto
            }
        },
        computed:{
            getId(){
                return this.userInfos.find(item => {
                    if(item.id == this.id){
                        return item
                    }
                })
            }
        },
        mounted(){
            EventService.getOperatorId(this.id)
            .then(response => {
                this.userInfos = response.data.chatted
                console.log(response.data.chatted)
            })
        }
    }
</script>

<style scoped>
    .user-info{
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .user-info__header{
        display: flex;
        align-items: flex-start;
        justify-content: center;
        margin-bottom: 30px;
        margin-top: 15px;
    }
    .user-info__image{
        margin-right: 32px;
    }
    .user-info__main-infos{
        margin-right: 45px;
    }
    .user-info__main-infos p{
        margin: 0;
    }
    .user-info__name{
        font-weight: bold;
        font-size: 22px;
        line-height: 30px;
    }
    .user-info__email{
        font-weight: bold;
        font-size: 13px;
        line-height: 18px;
        color: #565656;
    }
    .user-info__list{
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        flex-direction: column;
    }
    .user-info__item button{
        background: rgba(255, 255, 255, 0.8);
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.13);
        border-radius: 15px;
        font-weight: 500;
        font-size: 22px;
        line-height: 26px;
        color: #000000;
        padding: 15px;
        margin-bottom: 10px;
        cursor: pointer;
    }
    .user-info__item button{
        border: none;
    }
    .user-info__item a{
        text-decoration: none;
        color: #000000;
        background: rgba(255, 255, 255, 0.8);
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.13);
        border-radius: 15px;
        font-weight: 500;
        font-size: 22px;
        display: block;
        line-height: 26px;
        color: #000000;
        padding: 15px;
    }
</style>