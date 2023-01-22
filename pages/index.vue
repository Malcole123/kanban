<template>
  <MainWrapper
    :heading="'Kanban Board'"
  >
  <template v-slot:kanban_container>
    <div class="app-main-body">
      <MazCarousel style="height:100%;">
         <div class="app-kanban-wrapper">
          <div class="app-kanban-section-card">
                <ParentCard>
                  <template v-slot:body_content>
                    <div class="kanban-task-display">
                      <ChildCard
                      v-for="n in 8"
                      :key="'item-n-'+n"
                      />
                      <MazBtn color="white" @click="addNewTask">Add New</MazBtn>
                    </div>
                  </template>
              </ParentCard>
          </div>
          <div class="app-kanban-section-card"
          v-for="n in 12"
          :key="'item-'+n"
          >
            <div class="app-add-placeholder"

  >
    <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="#fff"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/></svg>
    </span>
            </div>
          </div>

         </div>
      </MazCarousel>
    </div>
    <MazBottomSheet
    v-model="state.addTaskArea"
    >


    </MazBottomSheet>
  </template>
  
  
  </MainWrapper>
</template>

<script>
import MainWrapper from '~/components/Wrappers/MainWrapper.vue';

/*Kanban Cards */
import ParentCard from '~/components/Wrappers/Cards/KanbanCard/ParentCard.vue';
import ChildCard from '~/components/Wrappers/Cards/KanbanCard/ChildCard.vue';

export default {
  name: 'IndexPage',
  components:{
    MainWrapper,
    //Kanbard Card components
    ParentCard,
    ChildCard,
  },
  data(){
    return {
      state:{
        addTaskArea:false,
      }
    }
  },
  mounted(){
    //console.log(this.$auth.loggedIn)
  },
  methods:{
    toggleAddTaskArea(state){
      this.state.addTaskArea = state;
    },
    addNewTask(id){
      this.toggleAddTaskArea(true)
    }
  }
}
</script>
<style>
.app-main-body{
  height:82vh;
  width:100%;
}


.app-add-placeholder{
  width:100%;
  height:100%;
  background:#262626;
  border-radius:var(--app-stndrd-radius);
  border:1px dashed #fff;
  display:flex;
  justify-content:center;
  align-items:center;
  transition:0.2s ease-in-out;
  cursor:pointer;
}

.app-add-placeholder:hover{
  border:1px solid #fff;
}


.app-kanban-wrapper{
  display:flex;
  flex-direction:row;
  width:fit-content;
  gap:20px;
  height:100%;
}


.app-kanban-section-card{
  width:22vw;
  height:68vh;
}

.kanban-task-display{
  width:100%;
  display:flex;
  flex-direction:column;
  gap:8px;
  padding-bottom:15px;
}

@media(max-width:992px){
  .app-add-placeholder{
    width:100%;
  }

  .app-kanban-section-card{
      width:80vw;
      height:68vh;
    }

}

</style>