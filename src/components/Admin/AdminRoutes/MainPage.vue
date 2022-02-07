<template>
    <div class="main">
        <div class="main-top">
            <h2>Asosiy sahifa</h2>

            <label for="standard-select"></label>
            <div class="select">
                <select id="standard-select">
                    <option value="kunlik">Kunlik</option>
                    <option value="haftalik">Haftalik</option>
                    <option value="oylik">Oylik</option>
                </select>
                <span class="focus"></span>
            </div>
        </div>
        <div class="main-charts">
            <div>
                <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>
            </div>
            <AreaChart />
        </div>
        <div class="main-infos__wrapper">
            <div class="main-infos">
                <h5>Xabarlarga javob uchun ketgan vaqt</h5>
                <span>0.8s</span>
            </div>
            <div class="main-infos">
                <h5>Xabarlarga javob uchun ketgan vaqt</h5>
                <span>0.8s</span>
            </div>
        </div>
        <div class="main-infos__counts">
            <div class="main-infos__counts-wrapper">
                <h5>Operatorlar soni</h5>
                <span>5</span>
            </div>
            <div class="main-infos__counts-wrapper">
                <h5>Suxbatlar soni</h5>
                <span>32</span>
            </div>
            <div class="main-infos__counts-wrapper">
                <h5>Xabarlar soni</h5>
                <span>1743</span>
            </div>
        </div>
    </div>
</template>

<script>
    import AreaChart from '../AdminRoutes/AreaChart.vue'
    export default {
        name:"MainPage",
        components:{
            AreaChart,
        },
        data(){
            return{
                date:'',
                colors:'#D7E3FB',
                series: [75,25],
                chartOptions: {
                    chart: {
                        type: 'donut',
                        width:300,
                        labels:{
                            color:"black"
                        }
                    },
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200
                            },
                            legend: {
                                position: 'bottom'
                            }
                        }
                    }]
                },
            }
        },
    }
</script>

<style scoped>
    select {
        appearance: none;
        background-color: transparent;
        border: none;
        padding: 0 1em 0 0;
        margin: 0;
        width: 100%;
        font-family: inherit;
        font-size: inherit;
        cursor: inherit;
        line-height: inherit;
        z-index: 1;
        outline: none;
    }
    #standard-select{
        color: #CDCDCD;
    }
    select::-ms-expand {
        display: none;
    }
    .select {
        display: grid;
        grid-template-areas: "select";
        align-items: center;
        position: relative;
        min-width: 15ch;
        max-width: 30ch;
        border: 1px solid #CDCDCD;
        border-radius: 0.25em;
        padding: 0.25em 0.5em;
        font-size: 1.25rem;
        cursor: pointer;
        line-height: 1.1;
        background-color: #fff;
        background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
    }
    .select select, .select::after {
        grid-area: select;
    }
    .select:not(.select--multiple)::after {
        content: "";
        justify-self: end;
        width: 0.8em;
        height: 0.5em;
        background-color: #777;
        clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    }
    select:focus + .focus {
        position: absolute;
        top: -1px;
        left: -1px;
        right: -1px;
        bottom: -1px;
        border: 2px solid #CDCDCD;
        border-radius: inherit;
    }

    .main-top{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .main-top h2{
        margin: 0;
        color: #2262C6;
        font-weight: bold;
        font-size: 26px;
        line-height: 32px;
    }
    .main-top input{
        outline: none;
        border: 1px solid #CDCDCD;
        border-radius: 12px;
        padding: 8px 20px;
    }
    .main{
        display: flex;
        flex-direction: column;
    }
    .main-charts{
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
    }
    .main-infos__wrapper{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        margin-bottom: 30px;
    }
    .main-infos__counts-wrapper{
        background-color: #B1D0FF;
        border-radius: 6px;
        padding: 16px;
    }
    .main-infos__wrapper h5{
        margin: 0;
        margin-bottom: 16px;
        color: #2262C6;
    }
    .main-infos{
        padding: 16px 0;
        text-align: center;
        border-radius: 12px;
        border: 1px solid #efefef;
        filter: drop-shadow(0px 0px 21px rgba(177, 208, 255, 0.7));
    }
    #date-select option{
        border: 1px solid #a18080 !important;
    }
    .main-infos span{
        color: #2262C6;
    }
    .main-infos__counts{
        display: grid;
        text-align: center;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
    }
    .main-infos__counts h5{
        margin: 0;
        color: #fff;
        margin-bottom: 8px;
    }
    .main-infos__counts span{
        padding: 16px 0;
        color: #fff;
    }
    @media screen and (max-width:850px) {
        .main-charts{
            grid-template-columns: 1fr;
        }
        .main-infos__counts{
            grid-template-columns: 1fr 1fr;
        }
    }
    @media screen and (max-width:570px) {
        .main-infos__wrapper{
            grid-template-columns: 1fr;
        }
        .main-infos__counts{
            grid-template-columns: 1fr;
        }
        .main-top h2{
            font-size: 18px;
            line-height: 26px;
        }
    }
</style>