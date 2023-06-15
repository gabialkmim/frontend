<template>
    <div>
      <h1>Cadastro</h1>
      <form @submit.prevent="cadastrar">
        <!-- Campos do formulário de cadastro -->
        <label for="nome">Nome:</label>
        <input type="text" id="nome" v-model="nome" required>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
        <label for="password">Senha:</label>
        <input type="password" id="password" v-model="password" required>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nome: '',
        email: '',
        password: ''
      };
    },
    methods: {
      cadastrar() {
        // Lógica de cadastro aqui
        console.log('Cadastro realizado:', this.nome, this.email, this.password);
      }
    }
  };
  </script>
  
  <style scoped>
  body {
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(to right, rgb(20, 147, 220), rgb(17, 54, 71));
  text-align: center;
  color: white;
}

.actions {
  /* Estilos para a div .actions */
}

.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 15px;
}

a {
  text-decoration: none;
  color: white;
  border: 3px solid dodgerblue;
}

  </style>
  