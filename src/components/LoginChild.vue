<template>
    <form class="login-features" @submit.prevent="checkLogin">
        <h2 class="login-features__title">Tizimga kirish</h2>
        <p class="wrong-answer" v-if="wrong">Email yoki parol xato tekshirib qaytadan urinib ko'ring</p>
        <div class="login-features__inputs">
            <label for="email"></label>
            <input type="text" placeholder="email" v-model="email">
        </div>
        <div class="login-features__inputs">
            <label for="password"></label>
            <input type="text" placeholder="parol" v-model="password">
        </div>
        <button type="submit" class="login-features__btn">Kirish</button>
    </form>
</template>

<script>
    export default {
        name:"LoginChild",
        data(){
            return{
                email:'',
                password:'',
                wrong:false,
            }
        },
        methods:{
            checkLogin(){
                if(this.email === 'admin' && this.password === '123'){
                    this.$router.push('/admin-bot')
                }
                if(this.email === 'operator' && this.password === '010203'){
                    this.$router.push('/operator')
                }

                else{
                    this.wrong = !this.wrong
                    setTimeout(() => {
                        this.wrong = !this.wrong
                    },1000)
                }
            }
        }
    }
</script>

<style scoped>
    .login-features{
        flex-grow: 1;
        padding: 90px 45px;
        box-shadow: 0px 4px 147px rgba(0, 0, 0, 0.25);
    }
    .login-features__title{
        color: #2262C6;
        margin: 0;
        margin-bottom: 60px;
    }
    .login-features__inputs{
        margin-bottom: 27px;
    }
    .login-features__inputs input{
        width: 360px;
        padding: 12px;
        text-align: center;
        border-radius: 3px;
        border: 1px solid #D3D3D3;
        outline: none;
    }
    .login-features__btn{
        background-color: #2262C6;
        padding: 12px 52px;
        color: #fff;
        border: none;
        border-radius: 7px;
        cursor: pointer;
    }
    .login-features__btn:hover{
        background-color: #fff;
        color: #2262C6;
        border: 1px solid #2262C6;
    }
    .wrong-answer{
        display: flex;
        font-size: 14px;
        line-height: 16px;
        color: #FF9C9C;
        margin-bottom: 20px;
    }
    .wrong-answer::before{
        content: "";
        background: url('../assets/images/wrong.svg');
        width: 22px;
        height: 19px;
        margin-right: 16px;
    }
</style>