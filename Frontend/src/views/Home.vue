<template>
  <Card :content="content"/>
</template>



<script>
import UserService from '../services/user.service';
import Card from '@/components/Card'

export default {
  name: 'Home',
  components:{
    Card
  },
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

