<template>
    <li class="chat-item">
        <router-link :to="{name:'Chatter', params:{ id: chat.id }}">
            <img :src="chatimage" alt="chat user image" width="40" height="40">
            <div class="chat-item__wrapper">
                <h5>{{ chat.chattedName }}</h5>
                <p>{{ chat.chattedText }}</p>
            </div>
        </router-link>
    </li>
</template>

<script>
    import ChatImage from '../../assets/images/chatUser.png'
    export default {
        name:"ChatChild",
        props:["chat"],
        data(){
            return{
                chatimage:ChatImage
            }
        }
    }
</script>

<style scoped>
    .chat-item{
        padding: 14px 14px;
    }
    .chat-item a{
        text-decoration: none;
        display: flex;
    }
    .chat-item img{
        margin-right: 15px;
    }
    .chat-item__wrapper p, h5{
        margin: 0;
    }
    .chat-item__wrapper h5{
        color: #fff;
        font-size: 20px;
        line-height: 24px;
    }
    .chat-item__wrapper p{
        color: #CACACA;
        font-size: 12px;
        line-height: 14px;
    }
</style>