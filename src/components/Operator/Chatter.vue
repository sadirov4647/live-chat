<template>
    <div class="chatter" v-if="setId">
        <div class="chatter-user__wrapper">
            <router-link :to="{name:'UserInfo', params:{ id: id }}">
                <img :src="chatimage" alt="chat user image" width="60" height="60">
            </router-link>
            <p class="chatter-text">{{ setId.chattedRealText }}</p>
        </div>
        <div class="chatter-operator__wrapper">
            <p class="chatter-operator__text">{{ setId.answer[0] }}</p>
            <img :src="operatorimage" alt="chat operator image" width="60" height="60">
        </div>
    </div>
        <form class="chatter-footer" @submit.prevent="addMessage">
            <button><img :src="sendsticker" alt="" width="35" height="35"></button>
            <button><img :src="sendfile" alt="" width="26" height="35"></button>
            <input type="text" placeholder="xabar jo`natish uchun bu yerga biror nima yozing..." v-model="operatorText">
            <button><img :src="sendoperator" alt="send operator" width="44" height="36"></button>
        </form>
</template>

<script>
    import sendSticker from '../../assets/images/sticker.svg'
    import sendOperator from '../../assets/images/sendoperator.svg'
    import sendFile from '../../assets/images/sendfile.svg'
    import operatorImage from '../../assets/images/mainimages/operatoricon.png'
    import ChatImage from '../../assets/images/chatUserImage.png'
    import EventService from '../../../services/EventServices'
    export default {
        name:"Chatter",
        props:["id"],
        data(){
            return{
                sendoperator:sendOperator,
                sendfile:sendFile,
                sendsticker:sendSticker,
                sendOperator:sendOperator,
                operatorimage:operatorImage,
                operatorChat:[],
                chatimage:ChatImage,
                operatorText:''
            }
        },
        computed:{
            setId(){
                return this.operatorChat.find(item => {
                    if(item.id == this.id){
                        return item
                    }
                })
            }
        },
        methods:{
            addMessage(){

            }
        },
        mounted(){
            EventService.getOperatorId(this.id)
            .then(response => {
                this.operatorChat = response.data.chatted
                console.log(response.data)
            })
        },
    }
</script>

<style scoped>
    .chatter{
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        margin-top: 30px;
    }
    .chatter-user__wrapper{
        display: flex;
        justify-content: flex-start;
        margin-bottom: 16px;
    }
    .chatter-text{
        padding: 15px 30px;
        background-color: #99C1FF;
        color: #fff;
        border-top-right-radius: 10px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        margin: 0;
        margin-left: 8px;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
    }
    .chatter-operator__wrapper{
        display: flex;
        justify-content: flex-end;
    }
    .chatter-operator__text{
        padding: 15px 30px;
        background-color: #99C1FF;
        color: #fff;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        margin: 0;
        margin-right: 8px;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
    }
    .chatter-footer{
        display: flex;
    }
    .chatter-footer button{
        border: none;
        background-color: inherit;
        cursor: pointer;
    }
    .chatter-footer input{
        outline: none;
        border: none;
        flex-grow: 1;
        text-align: center;
    }
</style>