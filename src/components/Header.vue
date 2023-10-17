<template>
    <header>
        <nav class="container">
            <router-link to="/">
            <img id="logo" src="../assets/logo.png" alt="logo">
            </router-link>
            <router-view v-if="isAuthenticated">
        <span>Sistema sendo operado por {{ username }}</span>
      </router-view>
         <router-view v-if="isDefaultRoute"><Button/></router-view>
         <router-view v-if="isVendorsRoute"><ButtonVendors/></router-view>
            
            
        </nav>
    </header>
</template>

<script>
import Button from "./Button.vue"
import ButtonVendors from "./ButtonVendors.vue"
export default{
    name: 'Header',
    props:['username'],
    
    data(){
        return{
            reloadPageOnce:false
        }
    },
    components:{
        Button,
        ButtonVendors
    },
    computed:{
        isDefaultRoute(){
            return this.$route.path === '/';
        },
        isVendorsRoute(){
            return this.$route.path.startsWith('/vendors/') && this.$route.params.category !== undefined;
        },
        isAuthenticated(){
            const token =  this.$cookies.isKey("token")
            if(token){
                if(this.reloadPageOnce){
                    window.location.reload()

                    this.reloadPageOnce = true
                }
            }
            return token
        }
    }
}
</script>
<style scoped>
    header{
        background-color: var(--color-background-nav);
        width: 100%;
        height: 130px;
        display: flex;
    }
    nav{
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    #logo{
        height: 90px;
        padding-left: 20px;
    }
</style>