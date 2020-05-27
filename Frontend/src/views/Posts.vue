<template>
    <div class="__posts">
        <img :src="post.imagem">
        <p>{{post.description}}</p>
    </div>
</template>

<script>
import UserService from '../services/user.service'
export default {
data () {
    return {
        id: this.$route.params.id,
        post: [],
        message: []

    }
 },
 mounted() {
     UserService.getPostById(this.id).then(response => 
        this.post = response.data
     ).catch( err => 
         this.message = err
     )
 },
}
</script>
<style>
.__posts{
    display: flex;
    height: 100vh;
    flex-direction: column;
}
.__posts img{
    margin-top: 25px;
    width: 100%;
    height: 350px;
}
.__posts p{
    margin-top: 30px;
}
</style>