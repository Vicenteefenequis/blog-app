<template>
  <div class="col-md-12">
    <div class="card card-container">
   
      <form v-if="currentUser.roles === 'ROLE_ADMIN'" name="form" @submit.prevent="handleRegister">
        <div v-if="!successful">
          <div class="form-group">
            <label for="username">Titulo</label>
            <input
              v-model="user.title"
              v-validate="'required|'"
              type="text"
              class="form-control"
              name="title"
            />
            <div
              v-if="submitted && errors.has('username')"
              class="alert-danger"
            >{{errors.first('username')}}</div>
          </div>
          <div class="form-group">
            <label for="email">Description</label>
            <input
              v-model="user.description"
              v-validate="'required'"
              type="text"
              class="form-control"
              name="description"
            />
            <label for="autor">Autor</label>
              <input
              v-model="user.autor"
              v-validate="'required'"
              type="text"
              class="form-control"
              name="autor"
            />
            <div
              v-if="submitted && errors.has('email')"
              class="alert-danger"
            >{{errors.first('email')}}</div>
          </div>
          <div class="form-group">
            <label for="password">Imagem</label>
            <input
              v-model="user.imagem"
              v-validate="'required|'"
              type="text"
              class="form-control"
              name="imagem"
            />
            <div
              v-if="submitted && errors.has('password')"
              class="alert-danger"
            >{{errors.first('password')}}</div>
          </div>
          <div class="form-group">
            <button class="btn btn-primary btn-block">Mandar</button>
          </div>
        </div>
       
      </form>
      <div v-if="currentUser.roles === 'ROLE_USER'">
        <h1 class="text-danger">ACCESS DENIED</h1>
      </div>

      <div
        v-if="message"
        class="alert"
        :class="successful ? 'alert-success' : 'alert-danger'"
      >{{message}}</div>

    </div>


 
  </div>
</template>

<script>
import Post from '../models/posts';
// import UserService from '../services/user.service';
export default {
  name: 'Register',
  data() {
    return {
      user: new Post('', '', '','',''),
      submitted: false,
      successful: false,
      message: '',
      content: []
    };
  },
//  mounted() {
//     UserService.getPublicContent().then(
//       response => {
//         this.content = response.data;
//       },
//       error => {
//         this.content =
//           (error.response && error.response.data) ||
//           error.message ||
//           error.toString();
//       }
//     );
//   },
  computed:{
  currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    handleRegister() {
      this.message = '';
      this.submitted = true;
      this.$validator.validate().then(isValid => {
        if (isValid) {
          this.$store.dispatch('auth/registerposts', this.user).then(
            
            data => {
              this.message = data;
              this.successful = true;
            },
            error => {
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
              this.successful = false;
            }
          );
        }
      });
    }
  }
};
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
</style>