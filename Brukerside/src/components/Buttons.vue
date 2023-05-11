<script setup>


</script>

<template>
    <RouterLink to="/Bestill">
    <button class="button"><p>Bestill time nå</p></button>
    </RouterLink>   
</template>

<style scoped>

.button {
    user-select: none;
    border-radius: 10;
    font-size: 24px;
    background-color: #2C008B;
    color: white;
    
    padding: 0.6rem 1.1rem;
    transition: 0.2s ease-in-out;
}

.button p {
    font-weight: bold;
}

.button:hover {
    opacity: 70%;
    cursor: pointer;
    border-color: pink;
}


</style>


<style scoped>

@media only screen and (max-width: 400px) { 

.button {
    border-radius: 10;
    font-size: 8px;
    background-color: #2C008B;
    color: white;
    width: 11.5vh;
    
    padding: 0.6rem 1.1rem;
    transition: 0.2s ease-in-out;
}

.button p {
    font-weight: bold;
}

.button:hover {
    opacity: 70%;
    cursor: pointer;
    border-color: pink;
}


}


</style>