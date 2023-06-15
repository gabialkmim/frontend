<template>
  <div>
    <h1>Encurtador de URL</h1>
    <form @submit.prevent="submitForm">
      <label for="url">URL:</label>
      <input type="text" id="url" v-model="urlInput" required>
      <button type="submit">Encurtar</button>
    </form>

    <div v-if="shortenedURL">
      <p>URL encurtada:</p>
      <a :href="shortenedURL" target="_blank">{{ shortenedURL }}</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      urlInput: '',
      shortenedURL: ''
    };
  },
  methods: {
    submitForm() {
      const urlData = {
        url: this.urlInput
      };

      axios.post('/api/shorten', urlData)
        .then(response => {
          // Atribui o URL encurtado retornado pela resposta do backend à variável shortenedURL
          this.shortenedURL = response.data.shortenedURL;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>

<style scoped>
/* Estilos CSS personalizados para o componente URLShortenerForm */
</style>
