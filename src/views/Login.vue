<template>
  <div class="login-page">
    <div class="logo-side">
     <img :src="logo" alt="logo" width="264" height="84">
    </div>
    <LoginChild />
  </div>
</template>

<script>
import LoginChild from '../components/LoginChild.vue'
import LogoImage from '../assets/images/loginlogo.png'
export default {
  name: "Login",
  components:{
    LoginChild
  },
  data(){
    return{
      logo:LogoImage
    }
  },
};
</script>

<style scoped>
  .login-page{
    display: flex;
    max-width: 922px;
    margin: 0 auto;
    width: 100%;
    padding: 38px 0;
  }
  .logo-side{
    max-width: 448px;
    background-color: #2262C6;
    padding: 230px 90px;
    box-shadow: 0px 4px 147px rgba(0, 0, 0, 0.25);
  }
</style>