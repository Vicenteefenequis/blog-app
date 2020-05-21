<template>
  <div class="container-fluid">
    <div class="__nav bg-secondary mt-5 p-3 d-flex justify-content-between">
        <div class="__logo d-flex flex-row-reverse justify-content-center align-items-center">
            <h1 class="ml-2">Name</h1>
            <img src="../assets/Ellipse1.png" class="w-50" alt="Elipse">
        </div>
        <div class="__menu d-flex justify-content-center align-items-center">
            <ul class="list-group list-group-horizontal-md">
                <li class="list-group-item mr-2 rounded shadow">CARS</li>
                <li class="list-group-item mr-2 rounded shadow" ><a href="/">HOME</a></li>
                <li class="list-group-item mr-2 rounded shadow"><a href="/login">LOGIN</a></li>
                <li class="list-group-item mr-2 rounded shadow"><a href="/register"> REGISTER </a></li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>

// export default {
//  data() {
//                 return {
//                     comments: [],
//                     name: '',
//                     message: '',
//                 }
//             },
//             methods: {
//                 addComment() {
//                     if(this.message.trim() === ''){
//                         return ;
//                     }
//                     this.comments.push({
//                         name: this.name,
//                         message: this.message
//                     })
//                     this.name = '',
//                     this.message = ''
//                 },
//                 removeComment(index){
//                     this.comments.splice(index,1);
//                 }
//             },
//             computed: {
//                 allComments(){
//                     return this.comments.map(comment => ({
//                         ...comment,
//                         name: comment.name.trim() === '' ? 'Anônimo' : comment.name
//                     }))
//                 }
//             },
//             watch :{ 
//                 comments(val){
//                     console.log('val',val)
//                 }
//             }

// }
</script>
