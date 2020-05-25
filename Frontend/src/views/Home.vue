<template>
  <div class="container">
    <header class="d-flex row">
      <div class="__grid d-grid col-5 card mt-5  mr-5 shadow rounded" v-for="contents in content.slice(0,4)" :key="contents._id">
        <div> <p class="__titlecontents">{{contents.title}}</p>  </div>
        <div> <p class="_titledescription">{{contents.description}}</p>  </div>
        <div> <p class="_autor">{{contents.autor}}</p>  </div>
        <div> <p>{{contents.createdAt}}</p> </div>
      </div>      
    </header>
  </div>
</template>

<script>
import UserService from '../services/user.service';

export default {
  name: 'Home',
  data() {
    return {
      content: []
    };
  },
  mounted() {
    UserService.getPublicContent().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  }
};
</script>
<style>
.__titlecontents{
  margin-top: 12px;
  font-family: 'Josefin Sans' , sans-serif;
  text-transform: uppercase;
  color:#7159c1;
}
._titledescription{
  font-family: 'Merriweather Sans', sans-serif;
  color: #817f7fff;
}
._autor{
  font-size: 12px;
}
 
</style>

