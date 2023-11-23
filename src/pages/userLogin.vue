<template>
    <div class="registration-form">
     
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="userPhone">Numero de celular:</label>
          <input type="text" id="email" v-model="userPhone" required>
        </div>
        <div class="form-group">
          <label for="userPassword">Senha:</label>
          <input type="password" id="password" v-model="userPassword" required>
        </div>
        <button type="submit">Log in</button>
      </form>
    </div>
  </template>
  
  <script>
      import api from '@/services/api.js'
  export default {
    name: "userLogin",
    data() {
      return {
        userPhone: '',
        userPassword: '',
      };
    },
    methods: {
      login() {

        const data = {
          userPhone: this.userPhone,
          userPassword: this.userPassword
        }

        api.post('/loginUser', data).then(response=>{
           const token = response.data
           const option = {expires: 1 / (60*60*24)}
           $cookies.set('token', token, option)
           this.$router.push('/')
        })
        
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
    margin-top: 30px;
    margin-bottom: 30px;
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
