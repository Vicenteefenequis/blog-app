<template>
    <div class="container">  
         <div  class="d-flex justify-content-center align-items-center flex-column mt-5 card p-3">
             <h1>Faça seu Registro</h1>
            <input class="mb-1 border shadow rounded p-2" v-model="name" placeholder="username" type="text">
            <input class="mb-1 border shadow rounded p-2" v-model="email" placeholder="email" type="email">
            <input class="mb-4 border shadow rounded p-2" minlength="4" v-model="senha" placeholder="senha" type="password">
         
        <button class="btn btn-info" @click.prevent="registerUser">Register</button>
     

         </div>
    </div>
   
</template>


<script>
import {api} from '../../services/config'
export default {

    data(){
        return{
            name:'',
            email: '',
            senha: '',
        }
    },
    methods :{
        async registerUser(){
            await api.post('/user/register',{name:this.name,email:this.email,password:this.senha})
            .then(response => {
                this.$router.push('/login')
                this.$swal('Registrado Com Sucesso !!'); 
                return response;
            })
            .catch(err=>{
                throw new Error(err)
            })
        }
    }
}
</script>
