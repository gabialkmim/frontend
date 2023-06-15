<template>
    <div>
      <h1>Registro de Usuário</h1>
      <form @submit.prevent="registerUser">
        <label for="name">Nome:</label>
        <input type="text" id="name" v-model="name" required>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
        <label for="password">Senha:</label>
        <input type="password" id="password" v-model="password" required>
        <button type="submit">Registrar</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: ''
      };
    },
    methods: {
  registerUser() {
    const userData = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    axios.post('http://localhost:3000/api/register', userData)
      .then(response => {
        // Lógica para lidar com a resposta do backend
        console.log(response.data);
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
  /* Estilos CSS personalizados para o componente UserRegistration */
  </style>
  