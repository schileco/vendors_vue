<template>
  <div id="app">
    <Header :username="nameFromToken"/>
    <router-view path="$router.key" />
    <Footer />
  </div>
</template>

<script>
import './styles/global.css'

import Header from './components/Header'
import Footer from './components/Footer'
import jwt_decode from 'jwt-decode'
export default {
  name: 'App',
  data(){
    return{
      nameFromToken: ''
    }
  },
  components: {
    Header,
    Footer
  },
  methods:{
        checkToken(){
            const token = this.$cookies.get('token')
            if(token){
                const decodedToken = jwt_decode(token)
                this.nameFromToken = decodedToken.name
            }
        }
    },
    mounted(){
        this.checkToken()
    }
}
</script>

<style>

</style>
