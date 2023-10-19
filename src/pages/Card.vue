<template>
  
  <div class="container">
    
    <div class="card" v-for="card in cards" :key="card.id">

      <router-link :to="'/vendors/'+ card.categoryName">
      <slot name="header"> <!-- Slot para o cabeçalho do card -->
        <div class="card-header">{{card.categoryName}}</div>     
      </slot>
    </router-link>
    <div class="delete">
      <button class="delete-button" @click="deleteCategory(card._id)">
         <img src="@/assets/icon_lixo.png" alt="lixo">
       </button>
      </div>
      
    </div>
  </div>
  </template>
  
  <script>
  import api from '@/services/api'
  import Loading from '@/components/Loading.vue'
  export default {
    name: 'Card',

    data(){
      return{
        cards : [],
        loading: false
      }
    },

    components:{
      Loading
    },

    methods:{
      async categoryList() {
        api.get("/categories").then(response => {
          this.cards = response.data
        })
      },

      async deleteCategory(id){
        api.delete(`/categories/${id}`).then(response=>{
          this.categoryList()
        })
      },
    },
    mounted() {
      this.categoryList()
    },
  }
  </script>
  
  <style scoped>

.container {
  width: 100%;
  height: 100%;
  height: auto;
  background-color:var(--color-background-containers);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
  .card {
    width: 300px;
    height: 100px;
    border: 2px inset rgb(18, 22, 52);
    border-radius: 30px;
    background-color: var(--color-background-cards);
    padding: 10px;
    cursor:pointer;
    margin: 35px;
    box-shadow: 0 8px 10px rgb(21, 1, 1);
    display: flex;
    justify-content: center;
  }
.card:nth-child(even){
  background-color: rgb(15, 15, 14);
  border: 2px inset rgb(26, 29, 55);
}
  .card:hover{
    transition:0.5s;
    background: rgb(121, 118, 114);
  }
  
  .card-header {
    justify-content: center;
    font-weight: bold;
    color: #ffffff;
    width: auto;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 20px;
  }
  .delete{
  height: 100%;
  width: 50px;
  display: flex;
  justify-content: flex-end;
  margin-left: 30px;
}
  .delete-button {
  background-color: #cccccc;
  border-radius: 5em;
  color: red;
  cursor: pointer;
  font-size: 18px;
  outline: none;
  height: 30px;
  width:30px;
}

.delete-button img {
  width: 50%;
  height: auto;

}
  </style>
  