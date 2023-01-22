const store = ()=>{
    return {
        user:{
            name:"",
            email:"",
            id:0,
        },
        tasks:{
            all_tasks:[],
            focused_task:{
    
            }
        }
    }
};


const getters = {

}



const mutations = {

}


const actions = {
    async userSignUp(state, {email,password,name}){
        let res_ = await this.$axios.$post('/api/auth/register', {
            email,
            password,
            name,
        }).then(data=>{
            console.log(data)
            return data
        }).catch(err=>{
            console.log(err)
            return {
                ok:false,
            }
        });
        return res_;
    },
    async createTask(state,{ }){
        await this.$axios.$post('/api/task/create/new', {

        })
    }
}







export { store , getters, mutations, actions }