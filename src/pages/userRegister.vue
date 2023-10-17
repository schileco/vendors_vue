<template>
    <div class="registration-form">
      <h2>Formulário de Registro de Usuário</h2>
      <form @submit.prevent="registerUser">
        <div class="form-group">
          <label for="username">Nome</label>
          <input type="text" id="username" v-model="userData.userFirstName" placeholder="Primeiro nome" />
        </div>
        <div class="form-group">
          <label for="username">Sobrenome</label>
          <input type="text" id="username" v-model="userData.userLastName" placeholder="Sobrenome" />
        </div>
        <div class="form-group">
          <label for="userPassword">Senha</label>
          <input type="password" id="userPassword" v-model="userData.userPassword" placeholder="Senha" />
        </div>
        <div class="form-group">
          <label for="userPhone">Telefone</label>
          <input type="tel" id="userPhone" v-model="userData.userPhone" placeholder="Telefone" />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  </template>
  
  <script>
  import api from "../services/api"
  export default {
    name: "userRegister",
    data() {
      return {
        userData: {
          userFirstName: '',
          userLastName: '',
          userPassword: '',
          userPhone: '',
        },
      };
    },
    methods: {
      registerUser() {
        api.post("/registerUser", this.userData)    
      },
    },
  };
  </script>
  
  <style scoped>
  .registration-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #444444;
    color: #ffffff;
    border-radius: 8px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
  }
  
  input[type="text"],
  input[type="password"],
  input[type="tel"] {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 10px;
    background-color: #000000;
    color: #ffffff;
    border: none;
    border-radius: 4px;
  }
  
  input[type="text"]::placeholder,
  input[type="password"]::placeholder,
  input[type="tel"]::placeholder {
    color: #777777;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #000000;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #444444;
  }
</style>
  