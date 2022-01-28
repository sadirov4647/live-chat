<template>
    <div v-if="isModal" class="remove-operator__modal">
        <p>Siz rostan ham Tomas Edisonni operatorlar ro`yxatidan chiqarishni xoxlaysizmi?</p>
        <div class="modal-features">
            <button class="modal-yes" @click="removeOperator">HA</button>
            <button class="modal-no" @click="removeOperatorModal">Yo'q</button>
        </div>
    </div>

    <li class="operator-item">
        <div class="operator-left__info">
            <img class="operator-image" :src="operatorImage" alt="operator image" width="60" height="60">
            <div class="operator-info">
                <h3 class="operator-title">{{ operator.name }}</h3>
                <p class="operator-email">{{ operator.email }}</p>
            </div>
        </div>
        <button class="remove-btn" @click="removeOperatorModal">
            <img :src="removeIcon" alt="remove icon" width="24" height="24">
        </button>
    </li>
</template>

<script>
    import axios from 'axios'
    import RemoveOperatorIcon from '../../../assets/images/removeicon.png'
    import OperatorImage from '../../../assets/images/operatorimage.png'
    export default {
        name:"OperatorsList",
        props:["operator"],
        data(){
            return{
                isModal:false,
                operatorImage:OperatorImage,
                removeIcon:RemoveOperatorIcon
            }
        },
        methods:{
            removeOperatorModal(){
                this.isModal = !this.isModal
            },
            removeOperator(){
                axios.delete(`http://localhost:3000/operators/${this.operator.id}`)
                .then(this.isModal = !this.isModal)

            }
        }
    }
</script>

<style scoped>
    .operator-item{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 22px 32px;
        background-color: #F6F6F6;
        border-radius: 15px;
        margin-bottom: 24px;
    }
    .operator-title{
        margin: 0;
        font-weight: bold;
        font-size: 22px;
        line-height: 30px;
        margin-bottom: 5px;
    }
    .operator-email{
        margin: 0;
        align-self: flex-start;
        font-weight: bold;
        font-size: 16px;
        line-height: 16px;
        color: #565656;
    }
    .remove-btn{
        border: none;
        background: inherit;
        cursor: pointer;
    }
    .operator-image{
        margin-right: 56px;
    }
    .operator-left__info{
        display: flex;
        align-items: center;
    }
    .operator-info{
        display: flex;
        flex-direction: column;
    }
    .remove-operator__modal{
        position: fixed;
        padding-top: 62px;
        padding-bottom: 75px;
        padding-right: 100px;
        padding-left: 100px;
        background-color: #fff;
        max-width: 485px;
        z-index: 99;
        display: flex;
        flex-direction: column;
        left: 25%;
        top: 100px;
    }
    .modal-features{
        display: flex;
        justify-content: center;
    }
    .modal-features button{
        padding: 24px 32px;
        border: none;
        color: #fff;
        cursor: pointer;
    }
    .modal-yes{
        background-color: #C4C4C4;
        margin-right: 55px;
    }
    .modal-no{
        background-color: #2262C6;
    }
    @media screen and (max-width:820px) {
        .operator-title{
            font-size: 16px;
            line-height: 24px;
        }
        .remove-btn img{
            width: 18px;
            height: 18px;
        }
        .operator-item{
            padding: 18px 28px;
        }
    }
    @media screen and (max-width:550px) {
        .operator-image{
            margin-right: 20px;
        }
        .remove-btn img{
            width: 12px;
            height: 12px;
        }
        .operator-title{
            font-size: 12px;
            line-height: 21px;
        }
        .operator-email{
            font-size: 12px;
            line-height: 16px;
        }
        .operator-item{
            padding: 10px 20px;
        }
        .operator-image{
            width: 45px;
            height: 45px;
        }
    }
</style>