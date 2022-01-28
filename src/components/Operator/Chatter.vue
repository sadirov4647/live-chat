<template>
    <div class="chatter">

    </div>
</template>

<script>
    import EventService from '../../../services/EventServices'
    export default {
        name:"Chatter",
        props:["id"],
        data(){
            return{
                operatorChat:[]
           }
        },
        created(){
            EventService.getOperatorId(this.id)
            .then(response => {
                this.operatorChat = response.data
            })
        }
    }
</script>

<style scoped>

</style>