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
                        <button><img :src="searchImage" alt="search icon" width="25" height="25"></button>
                        <button><img :src="userActionImage" alt="user action" width="7" height="30"></button>
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
                chats:[]
            }
        },
        created(){
            let operatorId = localStorage.getItem("successpass")
            EventService.getOperatorId(operatorId)
            .then(response => {
                this.operator = response.data
                this.chats = response.data.chatted
            })
        }
    }
</script>

<style scoped>
    .operator-chat{
        display: flex;
    }
    .chat-list__title{
        padding: 40px 20px;
        background: #2262C6;
        border-radius: 0px 102px 0px 0px;
        color: #fff;
        margin: 0;
    }
    .chat-list{
        padding: 0;
        margin: 0;
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
    .chat-right__btns button:not(:last-child){
        margin-right: 40px;
    }
</style>