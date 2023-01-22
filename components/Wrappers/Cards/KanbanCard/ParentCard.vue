<template>
    <div class="kanban-card">
        <div class="kanban-card-header">
            <h2 class="kanban-heading">Card Heading</h2>
        </div>
        <div class="kanban-card-body">
            <div class="kanban-card-body-container">
                <slot name="body_content"></slot>
            </div>
          
        </div>
        <div class="kanban-card-footer">
            
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .kanban-card{
        width:100%;
        background:#262626;
        border-radius:var(--app-stndrd-radius);
        height:100%;
        position:relative;
    }

    .kanban-heading{
        font-size:var(--app-text-xl);
        font-weight:600;
        color:#fff;
    }
    

    .kanban-card-header, .kanban-card-body, .kanban-card-footer{
        padding:8px 10px;
        position:absolute;
        left:0;
    }

    .kanban-card-header{
        display:flex;
        align-items:center;
        justify-content:space-between;
        top:0;
        height:8%;
        width:100%;
    }

    .kanban-card-body{
        top:8%;
        height:84%;
        width:100%;
        overflow-y:scroll;
    }

    .kanban-card-body::-webkit-scrollbar{
        width:3px;
    }

    .kanban-card-body::-webkit-scrollbar-thumb{
        width:3px;
        background:#0090C1;
    }

    .kanban-card-body::-webkit-scrollbar-track{
        width:3px;
    }

    .kanban-card-body-container{
        width:100%;
        height:fit-content;
    }
</style>