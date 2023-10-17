<template>
  
  <div class="container">
    <div class="card" v-for="card in cards" :key="card.id">
      <router-link :to="'/vendors/'+ card.categoryName">
      <slot name="header"> <!-- Slot para o cabeçalho do card -->
        <div class="card-header">{{card.categoryName}}</div>     
      </slot>
    </router-link>
      <button class="delete-button" @click="deleteCategory(card._id)">
         <img src="@/assets/icon_lixo.png" alt="lixo">
       </button>
      
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
    background-color: var(--color-background-cards);
    border: 1px outset #f10000;
    border-radius: 5px;
    padding: 10px;
    cursor:pointer;
    margin: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 300px;
    height: auto;
    display: flex;
    justify-content: space-between;
  }

  .card:hover{
    transition:0.5s;
    background: rgb(121, 118, 114);
  }
  
  .card-header {
    font-weight: bold;
    color: #ccc;
    width: auto;
    display: grid;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 20px;
    text-align: center;
    align-content: center;
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
  