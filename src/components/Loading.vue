<template>
    <div class="loading">
      <b-modal ref="myModal" centered hide-header no-close-on-esc no-close-on-backdrop>
      <div class="text-center">
        <!-- Ícone de carregamento animado (substitua pelo ícone de charuto) -->
        <i class="fas fa-spinner fa-spin fa-3x"></i>

        <!-- Mensagem opcional de carregamento -->
        <p>Carregando...</p>
      </div>
    </b-modal>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Loading',
  };
  </script>
  
  <style scoped>
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  
  .loading-icon {
    font-size: 24px;
  }
  </style>
  