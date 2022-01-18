<template>
    <div class="main-page">
        <AdminTop/>
        <div class="main-page__bottom">
            <AdminNav/>
            <router-view class="routes"></router-view>
        </div>
    </div>
</template>

<script>
    import AdminNav from '../components/Admin/AdminNav.vue'
    import AdminTop from '../components/Admin/AdminTop.vue'
    export default {
        name:"Home",
        components:{
            AdminNav,
            AdminTop
        }
    }
</script>

<style scoped>
    .main-page{
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .main-page__bottom{
        display: flex;
    }
    .routes{
        flex-grow: 1;
    }
</style>