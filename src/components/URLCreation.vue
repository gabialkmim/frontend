<template>
    <div>
      <h1>Criação de URL</h1>
      <form @submit.prevent="createURL">
        <label for="url">URL:</label>
        <input type="text" id="url" v-model="url" required>
        <button type="submit">Criar URL</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        url: ''
      };
    },
    methods: {
  createURL() {
    const urlData = {
      url: this.url
    };

    axios.post('http://localhost:3000/api/shorten', urlData)
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
  /* Estilos CSS personalizados para o componente URLCreation */
  </style>
  