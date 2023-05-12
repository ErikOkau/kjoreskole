<script setup>
// Define props for the component
const props = defineProps({
    name:String,
    imgSrc:String, 
    id:String,
    modelValue:String,
})

// Define emits for the component
// The component emits an 'update:modelValue' event when the input value changes
const emit = defineEmits(['update:modelValue'])

</script>
<template>
<div>
    <!-- Radio input element -->
    <input 
        class="Input" 
        type="radio" 
        :id="id" 
        :name="name"
        :value="modelValue"
        @input="$emit('update:modelValue', id)"
    >
    <!-- Label element for radio input, with background image and label text as the id prop -->
    <label :for="id" class="radioLabel" :style="{ backgroundImage: `url('${imgSrc}')` }">{{ id }}</label>
</div>
</template>

<style scoped>
.radioLabel {
    display: inline-block;
    width: 10rem;
    height: 10rem;
    background-size: cover;

    background-size: 10rem;
    background-repeat: no-repeat;
    background-position: 50%;
    user-select: none;
}

.radioLabel:hover {
    cursor: pointer;
    opacity: 0.5;
}

.Input {
    display: none;
}

.Input:checked + .radioLabel {
    border: 2px solid #000;
    border-radius: 10;
    opacity: 1;
    background-size: 11rem;
}

</style>

<style scoped>

@media only screen and (max-width: 400px) { 

    .radioLabel {
    display: inline-block;
    width: 9rem;
    height: 9rem;
    background-size: cover;

    background-size: 9rem;
    background-repeat: no-repeat;
    background-position: 50%;
    user-select: none;
}

.Input:checked + .radioLabel {
    border: 2px solid #000;
    border-radius: 10;
    opacity: 1;
    background-size: 10rem;
}

}

</style>