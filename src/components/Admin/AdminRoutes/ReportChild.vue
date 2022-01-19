<template>
    <div class="reportchild">
        <h2>Operator bo'yicha hisobot</h2>
        <hr>
        <div class="reportchild-operator">
            <div class="reportchild-operator__wrapper">
            <img :src="reportImage" alt="report operator image" width="189" height="189">
            <div class="reportchild-operator__info">
                <h3>{{operator.name}}</h3>
                <p>@mashrabov</p>
            </div>
            </div>
            <button class="reportchild-operator__upload">
                <img :src="reportUpload" alt="upload image" width="76" height="76">
            </button>
        </div>
        <div class="choose-report">
            <select class="date-select" name="date-report" id="date-report">
                <option value="kunlik">Kunlik</option>
                <option value="haftalik">Haftalik</option>
                <option value="oylik">Oylik</option>
            </select>
        </div>
    </div>
</template>

<script>
    import ReportOperatorImage from '../../../assets/images/reportImage.png'
    import ReportUpload from '../../../assets/images/upload.png'
    export default {
        name:"ReportChild",
        data(){
            return{
                reportImage:ReportOperatorImage,
                reportUpload:ReportUpload
            }
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
    }
    hr{
        opacity: 0.5;
    }
    .reportchild-operator{
        display: flex;
        justify-content: space-between;
    }
    .reportchild-operator__wrapper{
        display: flex;
        margin-right: 30px;
    }
    .reportchild-operator__info{
        margin-left: 60px;
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
        padding: 10px 30px;
        border: none;
        background: #FFFFFF;
         border-radius: 8px;
    }
</style>