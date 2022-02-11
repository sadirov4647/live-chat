<template>
  <div class="main">
    <div class="main-top">
      <h2>Asosiy sahifa</h2>

      <div class="select-wrapper">
        <Select2 class="select"
        v-model="myValue"
        :options="myOptions"
        :settings="{placeholder: 'Kunlik', width: '200px', settingOption: value, settingOption: value}"
        @change="myChangeEvent($event)"
        @select="mySelectEvent($event)" />
      </div>
    </div>
    <div class="main-charts">
      <div>
        <apexchart
        type="donut"
        :options="chartOptions"
        :series="series"
        ></apexchart>
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
  import AreaChart from '../AdminRoutes/AreaChart.vue';
  import Select2 from 'vue3-select2-component';
  export default {
    name: 'MainPage',
    components: {
      AreaChart,
      Select2,
    },
    data() {
      return {
        myValue: '',
        myOptions: ['Kunlik', 'Haftalik', 'Oylik'],
        date: '',
        colors: '#D7E3FB',
        series: [75, 25],
        chartOptions: {
          chart: {
            type: 'donut',
            width: 300,
            labels: {
              color: 'black',
            },
          },
          colors: ['#6EA3F5', '#D7E3FB'],
          dataLabels: {
            enabled: true,
          },
          title:{
            text:"o'z vaqtida javob berilgan xabarlar ko'rsatkichi",
            style:{
              color:"#6EA3F5",
              fontSize:"14px"
            }
          },
          responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: 'bottom',
              },
            },
          },
          ],
        },
      };
    },
    methods: {
      myChangeEvent(val){
        console.log(val);
      },
      mySelectEvent({id, text}){
        console.log({id, text})
      }
    }
  }

</script>

<style scoped>
  .select2-container{
    width: 180px !important;
  }
  .select2--results{
    color: blue !important;
  }
  .main-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .main-top h2 {
    margin: 0;
    color: #2262c6;
    font-weight: bold;
    font-size: 26px;
    line-height: 32px;
  }
  .main-top input {
    outline: none;
    border: 1px solid #cdcdcd;
    border-radius: 12px;
    padding: 8px 20px;
  }
  .main {
    display: flex;
    flex-direction: column;
  }
  .main-charts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding-top: 15px;
  }
  .main-infos__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-bottom: 30px;
  }
  .main-infos__counts-wrapper {
    background-color: #b1d0ff;
    border-radius: 6px;
    padding: 16px;
  }
  .main-infos__wrapper h5 {
    margin: 0;
    margin-bottom: 16px;
    color: #2262c6;
  }
  .main-infos {
    padding: 16px 0;
    text-align: center;
    border-radius: 12px;
    border: 1px solid #efefef;
    filter: drop-shadow(0px 0px 21px rgba(177, 208, 255, 0.7));
  }
  #date-select option {
    border: 1px solid #a18080 !important;
  }
  .main-infos span {
    color: #2262c6;
  }
  .main-infos__counts {
    display: grid;
    text-align: center;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }
  .main-infos__counts h5 {
    margin: 0;
    color: #fff;
    margin-bottom: 8px;
  }
  .main-infos__counts span {
    padding: 16px 0;
    color: #fff;
  }
  @media screen and (max-width: 850px) {
    .main-charts {
      grid-template-columns: 1fr;
    }
    .main-infos__counts {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (max-width: 570px) {
    .main-infos__wrapper {
      grid-template-columns: 1fr;
    }
    .main-infos__counts {
      grid-template-columns: 1fr;
    }
    .main-top h2 {
      font-size: 18px;
      line-height: 26px;
    }
  }
  @media screen and (max-width:520px) {
    .main-charts{
      padding-top: 50px;
    }
  }
</style>