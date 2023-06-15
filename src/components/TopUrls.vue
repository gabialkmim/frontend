<template>
    <div>
      <h2>Top 100 URLs mais visitadas</h2>
      <ul>
        <li v-for="(url, index) in topUrls" :key="url.id">
          {{ index + 1 }}. {{ url.originalURL }} - {{ url.visits }} visitas
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        topUrls: []
      };
    },
    mounted() {
      this.fetchTopUrls();
    },
    methods: {
      fetchTopUrls() {
        axios.get('/api/top-urls')
          .then(response => {
            this.topUrls = response.data;
          })
          .catch(error => {
            console.error('Erro ao obter o top 100 de URLs:', error);
          });
      }
    }
  };
  </script>
  
  <style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

/* Outros estilos CSS personalizados para o componente TopUrls */
</style>

  