<template>
    <div class="modal-overlay">
      <div class="modal">
        <h2>Adicionar Categoria</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="categoryName">Nome da Categoria:</label>
            <input type="text" name="categoryName" id="categoryName" v-model="categoryName" required>
          </div>
          <div class="form-actions">
            <button type="button" @click="closeModal">Cancelar</button>
            <button type="submit">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import api from '@/services/api'
  export default {
    name: "CategoryModal",

    data() {
      return {
        categoryName: null
      };
    },

    methods: {

      closeModal() {
      this.$emit('close');
      },

      async submitForm(e) {
        e.preventDefault()

      const data ={
        categoryName: this.categoryName
      }
       api.post("/categories", data).then(response => {
      })
      this.closeModal();
      window.location.reload()
      },
    },
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Fundo preto transparente */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  
  .modal {
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 300px;
  }
  
  .modal h2 {
    margin-top: 0;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-actions {
    text-align: right;
    margin-top: 10px;
  }
  
  .form-actions button {
    margin-left: 10px;
  }
  </style>
  