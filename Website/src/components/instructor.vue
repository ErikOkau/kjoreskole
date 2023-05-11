<script setup>

const props = defineProps({
    name:String,
    imgSrc:String,
    type:String
})

</script>

<template>
<div class="wrapper">
    <img :src="imgSrc">
    <p>{{ name }}</p>
    <p class="opacity_p">{{ type }}</p>
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

.opacity_p {
    opacity: 0.5;
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
    width: 130px;
    height: 130px;
}


}

</style>
