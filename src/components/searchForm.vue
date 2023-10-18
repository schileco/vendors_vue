<template>
    
    <div class="container">
        <form @submit.prevent="search" class="search-form">
            <div class="search-input">
                <input type="text" name="vendorState" v-model="vendorState" placeholder="Filtre por estado" required>
                <button type="submit" class="search-button">Buscar</button>
            </div>
        </form>
   </div>
</template>

<script>
import api from "@/services/api.js"
    export default {
        name: "searchForm",

        data(){
            return{
                vendorState: null,
                results:[]
            }
        },
        methods:{
            async search(e){
                e.preventDefault()
                const data={
                    vendorState: this.vendorState
                }
                api.post("/search/" + this.$route.params.category, data).then(response =>{
                    this.results = response.data
                })
                this.$emit("filter", this.vendorState)
            }
        }
    }
</script>

<style scoped>
.container{
  display: flex;
  justify-content: flex-end;

}
.search-form {
  text-align: center;
  margin: 20px;
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
}

.search-input {
  border-bottom: 2px solid red; /* Linha inferior do campo de entrada */
  margin-right: 10px;
  padding-bottom: 5px;
  transition: border-color 0.3s ease; /* Transição suave para a cor da borda */
}

.search-input input {
  border: none;
  outline: none;
  font-size: 16px;
  padding: 5px;
  background-color: transparent;
  color:#ccc;
  font-size:20px;
  transition:linear 
}

.search-button {
  background-color: #141717; /* Cor de fundo do botão */
  color: #fff; /* Cor do texto do botão */
  border: 1px solid red; /* Tornando o botão redondo */
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Transição suave para a cor de fundo */
}

.search-button:hover {
  background-color: #bbd4e5; /* Cor de fundo do botão ao passar o mouse */
}

.search-results {
  list-style-type: none;
  padding: 0;
}

.search-results li {
  margin: 5px;
}

</style>