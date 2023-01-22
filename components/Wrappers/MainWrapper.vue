<template>
  <div class="app-container">
    <h1 class="app-main-heading">{{ heading }}</h1>
    <slot name="kanban_container">

    </slot>
</div>
</template>

<script>
export default {
    props:{
        heading:{
        type:String,
        required:false,
        default:"Heading 1"
        },
       
    }
}
</script>

<style scoped>
    .app-container{
        padding:2% 8%;
        background:var(--app-prim-background);
        min-height:100vh;
        width:100%;
    }

    .app-main-heading{
        margin:0px;
        color:#E1F4CB;
        font-size:var(--app-text-2xl);
        font-weight:600;
    }

    @media (max-width:992px) {
        .app-container{
            padding:1% 2%;
        }
    }
</style>