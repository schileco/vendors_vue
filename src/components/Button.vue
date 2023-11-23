<template>
    <div>
    <button @click="showModal" class="styled-button">Adicionar Categorias</button>
    <CategoryModal v-if="isModalVisible" @close="closeModal"></CategoryModal>
    </div>
</template>

<script>
import CategoryModal from "./CategoryModal"

export default {
    name:"Button",
    components:{
        CategoryModal
    },
    data(){
        return{
            isModalVisible: false
       };
    },
    methods:{
        showModal(){
            this.isModalVisible = true
        },
        closeModal(){
            this.isModalVisible = false
        }
    }
}
</script>

<style scoped>
    /* Estilização do botão */
    .styled-button {
            display: inline-block;
            padding: 10px 20px; background-color: var(--color-background-buttons);; /* Cor de fundo do botão */
            color: #fff; /* Cor do texto do botão */
            font-size: 16px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        /* Efeito hover no botão */
        .styled-button:hover {
            background-color: #2980b9; /* Cor de fundo ao passar o mouse */
        }
</style>