<template>
<div>
    <div class="__posts __router">
        <div class="article-content post-page"></div>
        <h1 id="title">{{post.title}}</h1>
        <p class="__description">{{post.description}}</p>
        <div class="__descriptionandhours">
        <p class="__autor">{{post.autor}}-</p>
        <p>{{post.createdAt}}</p>
        </div>
        <img class="__imageposts" :src="post.imagem">
     
        <p class="__history">{{post.history}}</p>
    </div>
</div>

</template>

<script>
import UserService from '../services/user.service'
export default {
data () {
    return {
        id: this.$route.params.id,
        post: [],
        message: [],
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

@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');


.__posts{
    display: flex;
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
.__descriptionandhours{
    display: flex;
}
.__descriptionandhours p{
    font-size: 0.74em;
    font-weight: bold;
    color: cadetblue;
}
.__descriptionandhours .__autor{
    font-size: 0.74em;
    font-weight: bold;
    color: #ff4e00;
}
.__imageposts{
    width: 100%;
    height: 100%;
}
.__history{
    font-family: 'Roboto Condensed' , sans-serif;
    font-size: 1.275em;
    padding: 12px;
    color: rgba(0, 0, 0, 0.65);
}
.__description{
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 1em;
}
#title{
    margin-top: 50px;
    font-family: 'Press Start 2P', cursive;
}

</style>