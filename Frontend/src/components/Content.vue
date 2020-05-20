<template>
<div>

<div class="container mt-5">
    <input type="text" class=" rounded border border-info shadow">
    <div class="grid row">
    
    <div  class="__additemsContents list-group position-relative col-6" v-for="(item) in publics" :key="item.id">
        
        <img class="mt-5  " v-bind:src="item.img">
        <p id="headerImg" class="position-absolute">{{item.headerImg}}</p>
        <div class="__card-text shadow card position-absolute">
            <p>{{item.description}}</p>
            <p>{{item.subdescription}}</p>
            <p>{{item.author}}</p>
            <p>{{item.createdAt}}</p>
        </div>
       
    </div>
    
    </div>

</div>
</div>
</template>
<script>
    export default{
        data(){
        return {

            publics:[
                {
                    id:1,
                    img:'https://cdn.arstechnica.net/wp-content/uploads/2018/07/Rocket-Report-Intro-3-800x450.jpg',
                    headerImg:'FEATURE STORY',
                    description:'ZFS versus RAID: Eight Ironwolf disks, two filesystems, one winner',
                    subdescription:'We exhaustively tested ZFS and RAID performance on our Storage Hot Rod server.',
                    author:'JIM SALTER ',
                    createdAt:'5/18/2020, 8:30 AM',
                },
                {
                   id:2,
                    img:'https://cdn.arstechnica.net/wp-content/uploads/2018/07/Rocket-Report-Intro-3-800x450.jpg',
                    headerImg:'FEATURE STORY',
                    description:'ZFS versus RAID: Eight Ironwolf disks, two filesystems, one winner',
                    subdescription:'We exhaustively tested ZFS and RAID performance on our Storage Hot Rod server.',
                    author:'JIM SALTER ',
                    createdAt:'5/18/2020, 8:30 AM',
                },
                {
                   id:3,
                    img:'https://cdn.arstechnica.net/wp-content/uploads/2018/07/Rocket-Report-Intro-3-800x450.jpg',
                    headerImg:'FEATURE STORY',
                    description:'ZFS versus RAID: Eight Ironwolf disks, two filesystems, one winner',
                    subdescription:'We exhaustively tested ZFS and RAID performance on our Storage Hot Rod server.',
                    author:'JIM SALTER ',
                    createdAt:'5/18/2020, 8:30 AM',
                },
                {
                   id:4,
                    img:'https://cdn.arstechnica.net/wp-content/uploads/2018/07/Rocket-Report-Intro-3-800x450.jpg',
                    headerImg:'FEATURE STORY',
                    description:'ZFS versus RAID: Eight Ironwolf disks, two filesystems, one winner',
                    subdescription:'We exhaustively tested ZFS and RAID performance on our Storage Hot Rod server.',
                    author:'JIM SALTER ',
                    createdAt:'5/18/2020, 8:30 AM',
                },
                
                
                
            ]
            }
        },
      
    }
</script>

<style>
#headerImg{

    top:100px;
    min-width:200px;
    height:25px;
    background-color: #7159c1;
    color:#ffffff;
    
}
.__card-text{
    max-width:300px;
    bottom:-100px;
    left: 100px;
}
.__additemsContents{
    margin-top: 100px;
}
</style>