<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Buttons from '../components/Buttons.vue'

</script>


<template>
    <div class="body">
        <nav class="navbar">
            
                <div class="logo">
                    <RouterLink to="/">Rask & Tidig</RouterLink>
                </div>
        
                <div class="login">
                    <a href="/login">Logg inn</a>
                </div>
                
            <Buttons class="bestill" />
            
        </nav>
    </div>
</template>


<style scoped>
.navbar {   
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 100%;
    padding: 1rem;
    background-color: white;
}

.logo a{
    color: var(--blue);
    margin-left: 7rem;
    font-size: 36px;
    font-weight: bold;
    text-decoration: none;
}


.bestill {
    padding-right: 14rem;
}

.login a{
    font-size: 24px;
    padding-left: 50rem;
    font-weight: bold;
    text-decoration: underline;
    list-style: none;
    color: black;
}

.login a:hover {
    opacity: 0.7;
    transition: 0.2s ease-in-out;
}


</style>

<style scoped>

@media only screen and (max-width: 400px) {

.navbar {  
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: none;
    padding: 0rem;
    background-color: white;
    flex-wrap: wrap;
    background-color: white;   
}

.logo a{
    color: var(--blue);
    margin-left: 0.5rem;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
}



.bestill {
    padding: 0.5rem;
}

.login {
    padding: 0.5rem;
}

.logo {
    padding: 0.5rem;
}

.login a{
    font-size: 12px;
    padding-left: 0rem;
}
.login a:hover {
    opacity: 0.7;
    transition: 0.2s ease-in-out;
}

}

</style>