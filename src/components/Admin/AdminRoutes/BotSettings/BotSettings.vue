<template>
    <!-- <div class="bot-settings__modal">
        <div class="upload-bot__image">
            <input class="upload-input" type="file">
            <p class="upload-bot__para">rasmni shu yerga tashlang</p>
        </div>
        <p>yoki</p>
        <button class="upload-image__btn">Rasmni tanlang</button>
    </div> -->

    <div class="bot-settings">
        <h2 class="bot-settings__title">Bot sozlamalari</h2>
        <hr>
        <div class="bot-main">
            <div class="bot-main__profile">
                <button class="bot-profile__image" @click="uploadImage">
                    <img :src="botProfil" alt="bot profile photo" width="100" height="100">
                </button>
                <div class="bot-main-profile__features">
                    <div class="bot-main__profile-title">
                        <h4>Live Q chat</h4>
                        <button class="bot-edit__title">
                            <img :src="bigEdit" alt="edit bot title" width="18" height="18">
                        </button>
                    </div>
                    <textarea class="bot-description" name="description" cols="10" rows="5"></textarea>
                </div>
            </div>
            <div class="bot-info">
                <div class="bot-info__header">
                    <h4>Bot haqida ma'lumot beruvchi matn</h4>
                    <div class="bot-info-features">
                        <button><img :src="bigEdit" alt="" width="16" height="16"></button>
                        <button><img :src="questionImage" alt="" width="16" height="16"></button>
                    </div>
                </div>
                <textarea name="bot-info" id="" cols="10" rows="5"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
    import QuestionImage from '../../../../assets/images/modal.svg'
    import BotProfilePhoto from '../../../../assets/images/botProfilePhoto.svg'
    import BigEdit from '../../../../assets/images/bigedit.svg'
    export default {
        name:"BotSettings",
        data(){
            return{
                isBotModal:false,
                botProfil:BotProfilePhoto,
                bigEdit:BigEdit,
                questionImage:QuestionImage
            }
        },
        methods:{
            uploadImage(){
                this.isBotModal = !this.isBotModal
            }
        }
    }
</script>

<style scoped>
    .bot-settings__modal {
        position: absolute;
        padding: 50px 80px;
        background: #FFFFFF;
        border: 1px solid #F0F0F0;
        border-radius: 21px;
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 99;
    }
    .upload-bot__image{
        padding: 35px 55px;
        border-radius: 50%;
        border: 1px solid  #68A3FF;
    }
    .upload-bot__para{
        display: flex;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        flex-direction: column;
        margin: 0;
    }
    .upload-bot__para::before{
        content: "";
        background: url('../../../../assets/images/uploadBotImage.svg');
        width: 127px;
        height: 127px;
    }
    .upload-input{
        opacity: 0;
        position: absolute;
        top: 10%;
        height: 50%;
        left: 20%;
    }
    .upload-image__btn{
        padding: 16px 32px;
        background-color: #F0F0F0;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
    }
    .bot-settings__title{
        font-family: 'PT Sans Caption';
        margin: 0;
        color: #2262C6;
        font-weight: bold;
        font-size: 32px;
        line-height: 48px;
    }
    .bot-main__profile{
        display: flex;
        justify-content: center;
        margin-bottom: 40px;
    }
    .bot-profile__image{
        border: none;
        background-color: inherit;
        display: flex;
        margin-right: 40px;
    }
    .bot-main-profile__features{
        max-width: 600px;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }
    .bot-main__profile-title{
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px;
    }
    .bot-main__profile-title h4{
        font-family: 'PT Sans Caption';
        font-weight: bold;
        font-size: 26px;
        line-height: 36px;
        margin: 0;
    }
    .bot-edit__title{
        border: none;
        background-color: inherit;
        cursor: pointer;
    }
    .bot-description{
        padding: 30px;
        outline: none;
        border: 1px solid #EAEAEA;
        box-sizing: border-box;
        box-shadow: 0px 4px 44px rgba(0, 0, 0, 0.06);
        border-radius: 40px;
    }
    .bot-info{
        max-width: 600px;
        display: flex;
        flex-direction: column;
    }
    .bot-info__header{
        display: flex;
        justify-content: space-between;
    }
    .bot-info__header h4{
        color: #A9A9A9;
        margin: 0;
        margin-bottom: 16px;
    }
    .bot-info textarea{
        padding: 20px;
        outline: none;
        box-shadow: 0px 4px 44px rgba(0, 0, 0, 0.06);
        border-radius: 12px;
    }
    .bot-info-features{
        display: flex;
        align-items: center;
    }
</style>