<template>
  <div id="app">
    <div class="homepage">
      <URLShortenerForm></URLShortenerForm>
    </div>

    <div class="actions">
      <router-link to="/login">
        <button>Login</button>
      </router-link>
      <router-link to="/cadastro">
        <button>Cadastro</button>
      </router-link>
    </div>

    <TopUrls></TopUrls>
    
    <!-- Tag <router-view> para renderizar os componentes das rotas -->
    <router-view></router-view>
  </div>
</template>


<script>
import URLShortenerForm from './components/URLShortenerForm.vue';
import TopUrls from './components/TopUrls.vue';

export default {
  name: 'App',
  components: {
    URLShortenerForm,
    TopUrls
  }
}
</script>

<style>
    body {
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(to right, rgb(20, 147, 220), rgb(17, 54, 71));
  text-align: center;
  color: white;
 
  
}
.box{position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 15px;

}
a{text-decoration: none;
  color: white;
  border: 3px solid dodgerblue;

}
</style>

