<script setup>

// Define props for the component
const props = defineProps({
    name:String,
    imgSrc:String

})

</script>

<template>
<div class="wrapper">
    <!-- Image tag for the image source -->
    <img :src="imgSrc">
    <!-- p tag for the name prop -->
    <p>{{ name }}</p>
</div>
</template>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.wrapper img {
    border-radius: 50%;
    background-color: lightgrey;
    width: 250px;
    height: 250px;
}

</style>



<style scoped>

@media only screen and (max-width: 400px) { 

.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.wrapper img {
    border-radius: 50%;
    background-color: lightgrey;
    width: 140px;
    height: 140px;
}


}

</style>
