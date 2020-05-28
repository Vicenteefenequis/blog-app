import axios from 'axios';

const API_URL = 'http://localhost:3000/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL +'user/' + 'login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'user/' + 'register', {
      name: user.username,
      email: user.email,
      password: user.password
    });
  }
  registerpost(user){
    return axios.post(API_URL + 'admin',{
      title: user.title,
      description: user.description,
      autor: user.autor,
      imagem: user.imagem,
      admin: user.admin,
      history: user.history,
    })
  }
}

export default new AuthService();
