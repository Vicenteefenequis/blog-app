<template>
    <div class="container">  
         <div  class="d-flex justify-content-center align-items-center flex-column mt-5 card p-3">
             <h1>Faça seu Login</h1>
            <input class="mb-4 border shadow rounded p-2" v-model="email" placeholder="email" type="e-mail">
            <input class="mb-2 border shadow rounded p-2" v-model="senha" placeholder="senha" type="password">
         
        <button class="btn btn-info" @click.prevent="postUser">Login</button>
         </div>

         <a class="__registernow float-right" href="/register">Register Now</a>
    </div>
   
</template>


<script>
import {api} from '../../services/config'
export default {

    data(){
        return{
            email: '',
            senha: '',
            loading: false
        }
    },
    methods :{
        async postUser(){
            await api.post('/user/login',{email:this.email,password:this.senha})
            .then(response => {
                if(response.status === 200){
                    this.loading = true;
                }
            })
            .catch(err=>{
                throw new Error(err)
            })
        }
    }
}
</script>


<style>
.__registernow{
    font-family: 'Courier' , sans-serif;
    font-size: 14px ;
}
</style>