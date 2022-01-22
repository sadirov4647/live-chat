<template>
    <div class="report">
        <h2 class="report-title">Hisobot olish</h2>
        <hr>
        <div class="report-operator">
            <h3 class="choose-operator__title">Operatorni tanlang</h3>
            <ul class="report-operator__list">
                <ReportList :operator="operator" v-for="(operator, id) in operators" :key="id"/>
            </ul>
            <ul class="pagination">
				<li class="page-item">
					<button type="button" class="page-link" v-if="page != 1" @click="page--"> Previous </button>
				</li>
				<li class="page-item">
					<button type="button" class="page-link" v-for="pageNumber in pages.slice(page-1, page+5)" :key="pageNumber" @click="page = pageNumber"> {{pageNumber}} </button>
				</li>
				<li class="page-item">
					<button type="button" @click="page++" v-if="page < pages.length" class="page-link"> Next </button>
				</li>
			</ul>
        </div>
    </div>
</template>

<script>
    import ReportList from '../AdminRoutes/ReportList.vue'
    import EventServices from '../../../../services/EventServices'
    export default {
        name:"Report",
        components:{
            ReportList
        },
        data(){
            return{
                operators:[],
                page: 1,
                perPage: 4,
                pages: [],
            }
        },
        created(){
            EventServices.getOperators(this.page, this.perPage)
            .then(response => {
                this.operators = response.data
                console.log(response.data)
            })
        },
        methods:{
            setPages () {
                let numberOfPages = Math.ceil(this.operators.length / this.perPage);
                for (let index = 1; index <= numberOfPages; index++) {
                    this.pages.push(index);
                }
            },
            paginate(operators){
                let page = this.page;
                let perPage = this.perPage;
                let from = (page * perPage) - perPage;
                let to = (page * perPage);
                return operators.slice(from, to)
            }
        },
        computed:{
            displayOperators(){
                return this.paginate(this.operators)
            }
        },
        watch:{
            operators(){
                this.setPages()
            }
        },
        filters: {
            trimWords(value){
                return value.split(" ").splice(0,20).join(" ") + '...';
            }
        }
    }
</script>

<style scoped>
    .report-operator__list{
        list-style-type: none;
    }
    .report-title{
        color: #2262C6;
        text-align: left;
        margin: 0;
    }
    .hr{
        opacity: 0.5;
    }
    .choose-operator__title{
        color: #CBCBCB;
        text-align: center;
    }
    .pagination{
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
</style>