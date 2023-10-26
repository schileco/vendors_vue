<template>
    <div class="modal-overlay">
      <div class="modal">
        <h2>Adicionar Fornecedor</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="categoryName">Nome:</label>
            <input type="text" name="name"  v-model="vendorName" required placeholder="Ex: Space Truck">
          </div>
          <div class="form-group">
            <label for="categoryName">CNPJ:</label>
            <input type="text" name="cnpj"  v-model="vendorCNPJ">
          </div>
          <div class="form-group">
            <label for="categoryName">Contato:</label>
            <input type="text" name="contact"  v-model="vendorContact" required placeholder="Ex: Marcão Schulze">
          </div>
          <div class="form-group">
            <label for="categoryName">Telefone:</label>
            <input type="text" name="telephone"  v-model="vendorTelephone" required>
          </div>
          <div class="form-group">
            <label for="categoryName">Email:</label>
            <input type="text" name="email"  v-model="vendorEmail">
          </div>
          <div class="form-group">
            <label for="categoryName">Estado:</label>
            <select v-model="vendorState" name="vendorState">
  <option value="AC">AC</option>
  <option value="AL">AL</option>
  <option value="AP">AP</option>
  <option value="AM">AM</option>
  <option value="BA">BA</option>
  <option value="CE">CE</option>
  <option value="DF">DF</option>
  <option value="ES">ES</option>
  <option value="GO">GO</option>
  <option value="MA">MA</option>
  <option value="MT">MT</option>
  <option value="MS">MS</option>
  <option value="MG">MG</option>
  <option value="PA">PA</option>
  <option value="PB">PB</option>
  <option value="PR">PR</option>
  <option value="PE">PE</option>
  <option value="PI">PI</option>
  <option value="RJ">RJ</option>
  <option value="RN">RN</option>
  <option value="RS">RS</option>
  <option value="RO">RO</option>
  <option value="RR">RR</option>
  <option value="SC">SC</option>
  <option value="SP">SP</option>
  <option value="SE">SE</option>
  <option value="TO">TO</option>
</select>

          </div>
          <div class="form-group">
            <label for="categoryName">Municipio:</label>
            <input type="text" name="county"  v-model="vendorCounty">
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
    name: "VendorModal",

    data() {
      return {
        vendorName: null,
        vendorCNPJ: null,
        vendorContact: null,
        vendorTelephone:null,
        vendorEmail:null,
        vendorState: null,
        vendorCounty:null

      };
    },

    methods: {

      closeModal() {
      this.$emit('close');
      },

      async submitForm(e) {
        e.preventDefault()

      const data ={
        vendorName: this.vendorName,
        vendorCNPJ:this.vendorCNPJ,
        vendorContact: this.vendorContact,
        vendorTelephone: this.vendorTelephone,
        vendorEmail: this.vendorEmail,
        vendorState: this.vendorState,
        vendorCounty:this.vendorCounty,
        vendorCategory: this.$route.params.category
      }
      
       api.post("/vendors", data).then(response => {
    })
      
      this.closeModal();
      setTimeout(window.location.reload(), 250)
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
  background: rgba(0, 0, 0, 0.7); /* Fundo preto semi-transparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal {
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 80%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items:self-start;

}

.modal h2 {
  font-size: 24px;
  margin-top: 0;
  color: #333; /* Cor do título */
}

.form-group {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  width:50%;
}
.form-group input{
  border:1px dashed black
}

.form-label {
  font-weight: bold;
  display: block;
  margin-bottom: 300px; /* Espaçamento abaixo do rótulo */
}

.form-input {
  padding: 10px;
  border: 10px solid red; /* Cor da borda */
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.2s ease, border-color 0.2s ease; /* Transição suave */
  background-color: rgba(255, 255, 255, 0.7); /* Fundo transparente */
}

.form-input:focus {
  background-color: #fff; /* Fundo branco ao focar */
  border-color: #007BFF; /* Cor da borda ao focar */
}

.form-actions {
  text-align: right;
  margin-top: 20px;
}

.form-actions button {
  margin-left: 10px;
  padding: 10px 20px;
  background-color: #007BFF; /* Cor de fundo do botão */
  color: #fff; /* Cor do texto do botão */
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.form-actions button:hover {
  background-color: #0056b3; /* Cor de fundo do botão ao passar o mouse */
}

</style>
  