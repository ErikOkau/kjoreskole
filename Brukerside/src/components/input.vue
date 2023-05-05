<script setup>
const props = defineProps({
    color: String,
    placeholderColor: String
})
</script>

<template>
<div class="container">
    <input v-bind="$attrs">
    <div class="underline"></div>
</div>
</template>

<style scoped>

.container {
    display: flex;
    flex-direction: column;
    width: 25rem;
    padding-top: 1rem;  
    
}

.container input {
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 36px;
    color: black;
   
}

.underline {
    height: 3px;
    background-color: v-bind(color);
}

input::placeholder {
    color: v-bind(placeholderColor);
}



</style>


<style scoped>


@media only screen and (max-width: 400px) { 

.container {
    display: flex;
    flex-direction: column;
    width: 21rem;
    padding-top: 1rem;  
    
}

.container input {
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 24px;
    color: black;
   
}

.underline {
    height: 3px;
    background-color: v-bind(color);
}

input::placeholder {
    color: v-bind(placeholderColor);
}

}
</style>
