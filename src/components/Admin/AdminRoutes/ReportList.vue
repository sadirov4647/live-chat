<template>
    <li>
        <router-link class="report-operator__item" :to="{ name:'ReportChild', params:{ id: operator.id } }">
            <div class="report-operator__left">
                <img class="report-operator__image" :src="reportOperatorImage" alt="report operator" width="52" height="52">
                <div class="report-operator__wrapper">
                    <h3>{{ operator.name }}</h3>
                    <p>{{ operator.email }}</p>
                </div>
            </div>
            <button class="remove-btn" @click="removeOperatorModal">
                <img :src="removeIcon" alt="remove icon" width="24" height="24">
            </button>
        </router-link>
    </li>
</template>

<script>
    import ReportOperator from '../../../assets/images/reportoperator.png'
    import RemoveOperatorIcon from '../../../assets/images/removeicon.png'
    export default {
        name:"ReportList",
        props:['operator'],
        data(){
            return{
                reportOperatorImage: ReportOperator,
                removeIcon:RemoveOperatorIcon
            }
        }
    }
</script>

<style scoped>
    .report-operator__left{
        display: flex;
    }
    .remove-btn{
        border: none;
        background: inherit;
        cursor: pointer;
    }
    .report-operator__item{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40px;
        text-decoration: none;
    }
    .report-operator__image{
        margin-right: 56px;
    }
    .report-operator__wrapper h3{
        margin-top: 0;
        margin-bottom: 5px;
        font-weight: bold;
        font-size: 22px;
        line-height: 30px;
        color: #000000;
    }
    .report-operator__wrapper p{
        margin: 0;
        font-weight: bold;
        font-size: 18px;
        color: #565656;
        line-height: 22px;
    }
    @media screen and (max-width:570px) {
        .report-operator__image{
            margin-right: 20px;
        }
        .report-operator__wrapper h3{
            font-size: 15px;
            line-height: 20px;
        }
        .remove-btn img{
            width: 18px;
            height: 18px;
        }
    }
</style>