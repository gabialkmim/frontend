<template>
    <div>
      <h2>Perfil do Usuário</h2>
      <p>Nome: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
  
      <!-- Exemplo de formulário para atualizar o perfil do usuário -->
      <form @submit.prevent="updateProfile">
        <label for="name">Nome:</label>
        <input type="text" id="name" v-model="user.name">
  
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="user.email">
  
        <button type="submit">Atualizar Perfil</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        user: {
          name: '',
          email: ''
        }
      };
    },
    mounted() {
      this.fetchUserProfile();
    },
    methods: {
      fetchUserProfile() {
        axios.get('/api/user-profile')
          .then(response => {
            this.user = response.data;
          })
          .catch(error => {
            console.error('Erro ao obter o perfil do usuário:', error);
          });
      },
      updateProfile() {
        axios.put('/api/user-profile', this.user)
          .then(() => {
            console.log('Perfil do usuário atualizado com sucesso');
          })
          .catch(error => {
            console.error('Erro ao atualizar o perfil do usuário:', error);
          });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos CSS personalizados para o componente UserProfile */
  </style>
  