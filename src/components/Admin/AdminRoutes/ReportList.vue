<template>
    <li>
        <router-link class="report-operator__item" :to="{ name:'ReportChild', params:{ id: operator.id} }">
            <img :src="reportOperatorImage" alt="report operator" width="82" height="82">
            <div class="report-operator__wrapper">
                <h3>{{ operator.name }}</h3>
                <p>{{ operator.email }}</p>
            </div>
        </router-link>
    </li>
</template>

<script>
    import ReportOperator from '../../../assets/images/reportoperator.png'
    export default {
        name:"ReportList",
        props:['operator'],
        data(){
            return{
                reportOperatorImage: ReportOperator
            }
        }
    }
</script>

<style scoped>
    .report-operator__item{
        display: flex;
        align-items: center;
        margin-bottom: 40px;
        text-decoration: none;
    }
    .report-operator__item img{
        margin-right: 56px;
    }
    .report-operator__wrapper h3{
        margin-top: 0;
    }
    .report-operator__wrapper p{
        margin: 0;
    }
</style>