<template>
<div class="kanban-child-card">

</div>  
</template>

<script>
export default {
    data(){
        return {
            theme:{
                colors:{
                    red:{
                        hex:"#C340A1",
                    }
                }
            }
        }
    }
}
</script>

<style scoped>
    .kanban-child-card{
        width:100%;
        background:red;
        min-height:120px;
        border-radius:var(--app-stndrd-radius)
    }
</style>