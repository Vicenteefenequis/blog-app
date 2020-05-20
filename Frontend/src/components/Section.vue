<template>
    <div class="container">
        <div class="__sections">
        <div class="__secs card shadow d-flex flex-row justify-content-center" v-for="(item) in sectionpublics" :key="item.id">
            <div>
                 <img class="__img" v-bind:src="item.img">
            </div>
            <div>
                 <p>{{item.description}}</p>
                 <p>{{item.subdescription}}</p>
                 <p>{{item.author}}</p>
                 <p>{{item.createdAt}}</p>
            </div>
        </div>
        </div> 
      
    </div>    
</template>

<script>
    export default{
        data(){
        return {

            sectionpublics:[
                {
                    id:1,
                    img:'https://cdn.arstechnica.net/wp-content/uploads/2018/07/Rocket-Report-Intro-3-800x450.jpg',
                    description:'FEATURE STORY',
                    subdescription:'ZFS versus RAID: Eight Ironwolf disks, two filesystems, one winner',
                    author:'JIM SALTER ',
                    createdAt:'5/18/2020, 8:30 AM',
                },
                {
                    id:2,
                    img:'https://cdn.arstechnica.net/wp-content/uploads/2018/07/Rocket-Report-Intro-3-800x450.jpg',
                    description:'FEATURE STORY',
                    subdescription:'ZFS versus RAID: Eight Ironwolf disks, two filesystems, one winner',
                    author:'JIM SALTER ',
                    createdAt:'5/18/2020, 8:30 AM',
                },
                 {
                    id:3,
                    img:'https://cdn.arstechnica.net/wp-content/uploads/2018/07/Rocket-Report-Intro-3-800x450.jpg',
                    description:'FEATURE STORY',
                    subdescription:'ZFS versus RAID: Eight Ironwolf disks, two filesystems, one winner',
                    author:'JIM SALTER ',
                    createdAt:'5/18/2020, 8:30 AM',
                },
            ]
            }
        },
      
    }
</script>

<style>
   
    .__img{
        max-width: 136px;
        height: 170px;
    }
    .__secs{
        margin-top: 50px;
    }
    
    
</style>