<template>
    <div class="operator-page">
        <AdminTop />
        <div class="operator-chat">
            <div>
                <h3 class="chat-list__title">Yozishmalar ro'yxati</h3>
                <ul class="chat-list">
                    <ChatChild  :chat="chat" v-for="(chat, id) in chats" :key="id"/>
                </ul>
            </div>
            <div class="chat-right">
                <div class="chat-right__top">
                    <h2 class="chat-right__title">Yozishmalar ro'yxati</h2>
                    <div class="chat-right__btns">
                        <button class="operator-search"><img :src="searchImage" alt="search icon" width="25" height="25"></button>
                        <button class="black-modal" @click="blackModal"><img :src="userActionImage" alt="user action" width="7" height="30"></button>
                        <ul v-if="isblackModal" class="black-modal__list">
                            <li class="black-modal__item black-list">Qora ro'yxatga kiritish</li>
                            <li class="black-modal__item user-complain">Arz qilish</li>
                        </ul>
                    </div>
                </div>
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
    import AdminTop from '../components/Admin/AdminTop.vue'
    import ChatChild from '../components/Operator/ChatChild.vue'
    import SearchIcon from '../assets/images/search.svg'
    import UserActionIcon from '../assets/images/useraction.svg'
    import EventService from '../../services/EventServices'
    export default {
        name:"Operator",
        components:{
            AdminTop,
            ChatChild
        },
        computed:{
            ok(){
                return this.operator.chatted.length
            }
        },
        data(){
            return{
                searchImage:SearchIcon,
                userActionImage:UserActionIcon,
                operator:[],
                chats:[],
                isblackModal:false
            }
        },
        created(){
            let operatorId = localStorage.getItem("successpass")
            EventService.getOperatorId(operatorId)
            .then(response => {
                this.operator = response.data
                this.chats = response.data.chatted
            })
        },
        methods:{
            blackModal(){
                this.isblackModal = !this.isblackModal
            }
        }
    }
</script>

<style scoped>
    .operator-chat{
        display: flex;
    }
    .chat-list__title{
        font-size: 26px;
        line-height: 30px;
        padding: 40px 20px;
        background: #2262C6;
        border-radius: 0px 102px 0px 0px;
        color: #fff;
        margin: 0;
    }
    .chat-list{
        padding: 0;
        background-color: #3672CF;
        margin: 0;
        height: 100vh;
        list-style-type: none;
    }
    .chat-right{
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        padding-top: 20px;
        padding-right: 50px;
        padding-left: 50px;
    }
    .chat-right__title{
        font-size: 30px;
        line-height: 42px;
        margin: 0;
        color: #2262C6;
    }
    .chat-right__top{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .chat-right__btns{
        display: flex;
        align-items: center;
    }
    .chat-right__btns button{
        background-color: inherit;
        border: none;
        cursor: pointer;
    }
    .operator-search{
        margin-right: 30px;
    }
    .black-modal{
        position: relative;
    }
    .black-modal__list{
        position: absolute;
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        right: 5%;
        top: 25%;
        z-index: 99;
    }
    .black-modal__item{
        padding: 5px 15px;
        background-color: #F7F7F7;
        border: 1px solid #E7E7E7;
        color: #6D6D6D;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
    }
    .black-modal__item::before{
        content: "";
        width: 20px;
        height: 18px;
        margin-right: 18px;
    }
    .black-list::before{
        background: url(../assets/images/blacklist.svg);
    }
    .user-complain::before{
        background: url(../assets/images/complain.svg);
        background-repeat: no-repeat;
    }

    @media screen and (max-width: 2000px) {
        .black-modal__list{
            top: 12%;
            right: 4%;
        }
    }
    @media screen and (max-width: 1400px) {
        .black-modal__list{
            top: 25%;
            right: 4%;
        }
    }

    @media screen and (max-width: 792px) {
        .chat-right__title{
            font-size: 24px;
            line-height: 32px;
        }
        .operator-search{
            margin-right: 15px;
        }
        .chat-right{
            padding-right: 20px;
            padding-left: 15px;
        }
        .black-modal__list{
            top: 10%;
        }
    }
    @media screen and (max-width: 600px) {
        .chat-list__title{
            padding: 20px 15px;
            font-size: 24px;
            line-height: 32px   ;
        }
        .operator-search{
            height: 20px;
            width: 20px;
        }
        .chat-right__btns button img{
            height: 20px;
        }
        .black-modal__list{
            top: 10%;
            right: 2%;
        }
    }
</style>