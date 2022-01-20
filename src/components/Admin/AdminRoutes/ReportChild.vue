<template>
    <div class="reportchild">
        <h2>Operator bo'yicha hisobot</h2>
        <hr>
        <div class="reportchild-operator">
            <div class="reportchild-operator__wrapper">
                <img :src="reportImage" alt="report operator image" width="189" height="189">
                <div class="reportchild-operator__info">
                    <h3>{{ reportOperator.name }}</h3>
                    <p>{{ reportOperator.email }}</p>
                </div>
            </div>
            <button class="reportchild-operator__upload">
                <img :src="reportUpload" alt="upload image" width="76" height="76">
            </button>
        </div>
        <div class="choose-report__date">
            <p class="choose-report__date-title">Hisobotni ma'lum bir oraliqda olish uchun tanlang</p>
            <select class="date-select" name="date-report" id="date-report">
                <option value="kunlik">Kunlik</option>
                <option value="haftalik">Haftalik</option>
                <option value="oylik">Oylik</option>
            </select>
        </div>
        <div class="report-date__info">
            <BaseCard title="Suhbatlar soni" :count="reportOperator.talking" />
            <BaseCard title="Xabarlar soni" :count="reportOperator.messages" />
            <BaseCard title="O'rtacha aktivlik" :count="reportOperator.active" />
        </div>
    </div>
</template>

<script>
    import BaseCard from '../BaseCard.vue'
    import EventServices from '../../../../services/EventServices'
    import ReportOperatorImage from '../../../assets/images/reportImage.png'
    import ReportUpload from '../../../assets/images/upload.png'
    export default {
        name:"ReportChild",
        props:['id'],
        components:{
            BaseCard
        },
        data(){
            return{
                reportOperator:[],
                reportImage:ReportOperatorImage,
                reportUpload:ReportUpload
            }
        },
        created(){
            EventServices.getOperatorId(this.id)
            .then(operator => {
                this.reportOperator = operator.data
            })
        }
    }
</script>

<style scoped>
    .reportchild{
        max-width: 800px;
        padding-left: 75px;
        padding-right: 90px;
        margin: 0 auto;
    }
    .reportchild h2{
        color: #2262C6;
        text-align: left;
        font-weight: bold;
        font-size: 40px;
        line-height: 52px;
        margin-bottom: 0;
    }
    hr{
        opacity: 0.5;
    }
    .reportchild-operator{
        display: flex;
        justify-content: space-between;
        margin-bottom: 12px;
    }
    .reportchild-operator__wrapper{
        display: flex;
        align-items: center;
        margin-right: 30px;
    }
    .reportchild-operator__info{
        margin-left: 60px;
    }
    .reportchild-operator__info h3{
        margin: 0;
        margin-bottom: 10px;
    }
    .reportchild-operator__upload{
        border: none;
        background-color: inherit;
        cursor: pointer;
    }
    .reportchild-operator__info p{
        margin: 0;
    }
    .date-select{
        padding: 10px 0;
        padding-right: 60px;
        padding-left: 20px;
        border: none;
        background: #FFFFFF;
        border-radius: 8px;
        border: 1px solid #BFBFC4;
        opacity: 0.5;
        outline: none;
    }
    option{
        font-weight: bold;
        font-size: 14px;
        line-height: 18px;
    }
    .choose-report__date-title{
        margin: 0;
        color: #989898;
        font-weight: normal;
        font-size: 23px;
        line-height: 27px;
        margin-right: 12px;
    }
    .choose-report__date{
        display: flex;
        justify-content: space-between;
        margin-bottom: 27px;
    }
    .report-date__info{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 40px;
        justify-content: space-between;
        margin-bottom: 45px;
    }
    @media screen and (max-width:1050px) {
        .report-date__info{
            grid-template-columns: 1fr 1fr;
        }
    }
    @media screen and (max-width:570px) {
        .report-date__info{
            grid-template-columns: 1fr;
            align-items: center;
        }
    }
</style>