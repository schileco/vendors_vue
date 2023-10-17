<template>
  <div class="card-header">
    <searchForm @filter="receiveSearchQuery"/>
    <h2>Fornecedores de {{ categoryName }}</h2>
    
  <div class="card">
    <div class="card-body" v-for="vendor in paginateAndFilterDocuments" :key="vendor._id">
      <p><strong>NOME:</strong> <span v-if="!isEditing(vendor)">{{ vendor.vendorName }}</span><input v-else v-model="vendor.vendorName" /></p>
      <p><strong>CNPJ:</strong> <span v-if="!isEditing(vendor)">{{ vendor.vendorCNPJ }}</span><input v-else v-model="vendor.vendorCNPJ" /></p>
      <p><strong>CONTATO:</strong> <span v-if="!isEditing(vendor)">{{ vendor.vendorContact }}</span><input v-else v-model="vendor.vendorContact" /></p>
      <p><strong>TELEFONE:</strong> <span v-if="!isEditing(vendor)">{{ vendor.vendorTelephone }}</span><input v-else v-model="vendor.vendorTelephone" /></p>
      <p><strong>E-MAIL:</strong> <span v-if="!isEditing(vendor)">{{ vendor.vendorEmail }}</span><input v-else v-model="vendor.vendorEmail" /></p>
      <p><strong>ESTADO:</strong> <span v-if="!isEditing(vendor)">{{ vendor.vendorState }}</span><select v-else v-model="vendor.vendorState">
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
      </select></p>
      <p><strong>CIDADE:</strong> <span v-if="!isEditing(vendor)">{{ vendor.vendorCounty }}</span><input v-else v-model="vendor.vendorCounty" /></p>
      <p><strong>CATEGORA DO FORNECEDOR:</strong> <span>{{ vendor.vendorCategory }}</span></p>
      <div class="vendorsBtn">
        <button class="action-button save-update"  @click="toggleEdit(vendor)">
        <img v-if="isEditing(vendor)" src="@/assets/save.png" /> <!-- Ícone de salvar -->
        <img v-else src="@/assets/edit.png"/> <!-- Ícone de lápis para editar -->
      </button>
        <button class="action-button delete" @click="deleteVendor(vendor._id)">
        <img src="@/assets/icon_lixo.png" alt="lixo" />
        </button>
      </div>
    </div>
  </div>

  <div class="controllersPageButton">
    <button @click="paginaAnterior" :disabled="currentPage === 1">Anterior</button>
    <button @click="proximaPagina" :disabled="currentPage * 10 >= vendors.length">Próximo</button>
  </div>
  </div>


</template>
  
  <script>
  import api from '@/services/api'
  import searchForm from '@/components/searchForm.vue'
  export default {
    name: "Vendors",
    data(){
      return{
        vendors:[],
        categoryName:this.$route.params.category,
        editingVendor: null,
        currentPage:1,
        documentsPage: 10,
        searchQuery: null
      }
    },
    components:{
      searchForm
    },
    props: {
      telefone: String,
      email: String,
      estado: String,
      municipio: String
    },
    methods:{
      async listVendors(){
        api.get("/vendors/"+ this.$route.params.category).then(response =>{
          this.vendors = response.data
        })
      },

      saveEdits(vendor){
        const data = {
          vendorName : vendor.vendorName,
          vendorCNPJ : vendor.vendorCNPJ,
          vendorContact : vendor.vendorContact,
          vendorTelephone : vendor.vendorTelephone,
          vendorEmail : vendor.vendorEmail,
          vendorState : vendor.vendorState,
          vendorCounty:vendor.vendorCounty
        }
        api.put(`/vendors/${vendor._id}`, data).then(response =>{
          console.log("atualizado")
        })
        this.editingVendor = null
      },

      async deleteVendor(id){
        api.delete(`/vendors/${id}`).then(response =>{
          this.listVendors()
        })
      },

      toggleEdit(vendor){
        if(this.editingVendor === vendor){
          this.saveEdits(vendor)
        }else{
          if(this.editingVendor){
            this.saveEdits(this.editingVendor)
          }
          this.editingVendor = vendor
        }
      },

      isEditing(vendor){
        return this.editingVendor === vendor
      },

      paginaAnterior(){
        if(this.currentPage > 1){
          this.currentPage--
        }
      },
      proximaPagina(){
        if(this.currentPage * 10 < this.vendors.length){
          this.currentPage++
        }
      },

      receiveSearchQuery(query){
        this.searchQuery = query
      }
    },

    computed:{
      paginateAndFilterDocuments(){
        const startIndex = (this.currentPage - 1)*this.documentsPage
        const endIndex   = startIndex + this.documentsPage;
         
        if(this.searchQuery){
          return this.vendors.filter(vendor =>{
          return vendor.vendorState.toLowerCase().includes(this.searchQuery.toLowerCase())
          })
        }
        return this.vendors.slice(startIndex, endIndex)
      }
    },
    mounted(){
      this.listVendors()
    }
  };
  </script>
  
  <style scoped>
  .card {
    background-color: var(--color-background-containers);
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;
    border: 1px solid black;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .vendorsBtn{
    width: 100%;
    border-radius: 10em;
    height: auto;
    display: flex;
    justify-content:space-evenly;
    align-items: center;
    background-color: var(--color-background-containers);
  }
  .card:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
  
  .card-header {
    background-color: var(--color-background-cards);
    padding: 10px;
    border-radius: 10px 10px 0 0;

  }
  .card-header h2{
    text-align: center;
    color: #ccc;
  }
  
  .card-body {
    color: #cccccc;
    padding: 10px;
    border:1px inset black;
    width: 45vw;
    border-radius: 2em;
    margin-bottom: 5px;
    cursor: pointer;
    background-color: var(--color-background-cards);
  }

  .card-body span{
    color:#d9d920
  }
  
  p {
    margin: 5px 0;
  }

  .action-button{
  background-color: #cccccc;
  border-radius: 20px;
  cursor: pointer;
  font-size: 18px;
  height: 35px;
  width:35px;
}
.action-button img {
  width: 50%;
  height: auto;
}

.delete:hover{
  transition: 0.5s;
  background-color: rgb(218, 73, 73);
}
.save-update:hover{
  transition: 0.5s;
  background-color: rgb(233, 181, 85);
}
.controllersPageButton{
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.controllersPageButton button{
  height: 50px;
  width: 100%;
}
.controllersPageButton button:hover{
  background-color: #d9d920
}
  </style>
  