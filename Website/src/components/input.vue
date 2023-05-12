<script setup>
const props = defineProps({
    color: String,
    placeholderColor: String,
    modelValue: String,
})


const emit = defineEmits(['update:modelValue'])

function updateValue (event) {
    emit('update:modelValue', event.target.value)
}

</script>

<template>
<div class="container">
    <input 
        v-bind="$attrs"
        :value="modelValue"
        @input="updateValue"
    >
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
    width: 21.5rem;
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
