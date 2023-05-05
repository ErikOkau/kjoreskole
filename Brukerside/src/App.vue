<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import Buttons from './components/Buttons.vue'


</script>

<template>

<NavBar/>

<div class="router">
   <RouterView />
</div>

<Footer />
 
</template>

<style scoped>

.router { 
  padding: 8rem 8rem; 
} 

</style>


<style scoped>

@media only screen and (max-width: 400px) {
.router { 
  padding: 0rem 0em; 
} 

}


</style>