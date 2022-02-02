<template>
    <div class="change-password">
        <h2>Parolni o'zgartirish</h2>
        <hr>
        <ul class="change-password__list">
            <li class="change-password__item">
                <label for="old-password">Eski parolni kiriting</label>
                <input type="password" name="old-password" id="old-password">
            </li>
            <li class="change-password__item">
                <label for="new-password">Yangi parolni kiriting</label>
                <input type="password" name="old-password" id="new-password">
            </li>
            <li class="change-password__item">
                <label for="new-again__password">Yangi parolni takrorlang</label>
                <input type="password" name="new-again__password" id="new-again__password">
            </li>
        </ul>
        <div class="change-password__features">
            <button class="change-password__back">Bekor qilish</button>
            <button class="change-password__save">Saqlash</button>
        </div>
    </div>
</template>

<script>
    export default {
        name:"ChangePassword"
    }
</script>

<style scoped>
    .change-password h2{
        color: #2262C6;
        margin: 0;
        font-size: 24px;
        line-height: 32px;
    }
    hr{
        opacity: 0.5;
    }
    .change-password__list{
        list-style-type: none;
        padding: 0;
        margin: 0;
        margin-top: 50px;
    }
    .change-password__item{
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
    }
    label{
        color: #A9A9A9;
        font-weight: normal;
        font-size: 20px;
        line-height: 32px;
    }
    .change-password__list input{
        outline: none;
        background: #FFFFFF;
        border: 1px solid #E0E0E0;
        border-radius: 14px;
        padding: 10px;
        width: 300px;
    }
    .change-password__features{
        display: flex;
    }
    .change-password__features button{
        padding: 12px 30px;
        border-radius: 9px;
        cursor: pointer;
    }
    .change-password__save{
        background: #2262C6;
        color: #fff;
        border: 1px solid #2262C6;
        margin-left: 60px;
    }
    .change-password__save:hover{
        background-color: #fff;
        color: #2262C6;
        border: 1px solid #2262C6;
    }
    .change-password__back{
        border: 1px solid #E7E7E7;
        background-color: #E7E7E7;
    }
    .change-password__back:hover{
        background-color: #fff;
        border: 1px solid #E7E7E7;
    }
</style>