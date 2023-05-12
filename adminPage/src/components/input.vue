<script setup>
// Define props to be passed to the component
const props = defineProps({
    color: String,
    placeholderColor: String,
    modelValue: String,
})

// Define the events that can be emitted by the component
const emit = defineEmits(['update:modelValue'])

// Define a function that updates the model value and emits the update event
function updateValue (event) {
    emit('update:modelValue', event.target.value)
}
</script>

<template>
<!-- The template for the component -->
<div class="container">
    <!-- An input field that is bound to $attrs and the modelValue prop -->
    <input 
        v-bind="$attrs"
        :value="modelValue"
        @input="updateValue"
    >
    <!-- A div element that serves as an underline for the input field -->
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
    font-weight: bold;
   
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
    font-weight: bold;
   
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

