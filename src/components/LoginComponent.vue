<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>
      <label for="password">Senha:</label>
      <input type="password" id="password" v-model="password" required>
      <button type="submit">Entrar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      const userData = {
        email: this.email,
        password: this.password
      };

      axios.post('http://localhost:3000/api/loginComponent', userData)
        .then(response => {
          // Lógica para lidar com a resposta do backend
          console.log(response.data);

          // Redirecionar para a página de login bem-sucedido
          this.$router.push('/login');
        })
        .catch(error => {
          // Lógica para lidar com erros
          console.error(error);
        });
    }
  }
};
</script>

<style scoped>
/* Estilos CSS personalizados para o componente Login */
</style>
