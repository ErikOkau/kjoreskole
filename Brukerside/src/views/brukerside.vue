<script setup>

</script>

<template>

    <div class="flex">
        <div class="headline">
            <h1>Dine timer</h1>
            <h3>Nedenfor kan du se fullførte timer <br> og fremtidige timer</h3>
        </div>

        <div class="fremtidige_timer">
            <h2>Fremtidige timer</h2>

        </div>
        <div class="fullførte_timer">
            <h2>Fullførte timer</h2>
        
        </div>
    </div>

</template>

<style scoped>

.headline {
    align-self: flex-start;
    font-weight: bold;
}

.headline h1 {
    color: #2C008B;
    font-size: 64px;
    padding-bottom: 1rem;
}

.headline h3 {
    font-size: 24px;
    padding-bottom: 1.5rem;
}

.flex {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.fremtidige_timer, .fullførte_timer{
    font-size: 24px;
}

.fullførte_timer {

}

.fremtidige_timer {
    
}


</style>



<!-- Media queries -->
<style scoped>

@media only screen and (max-width: 400px) {
.headline {
    font-weight: bold;
}

.headline h1 {
    color: #2C008B;
    font-size: 36px;
    padding-bottom: 0.5rem;
}

.headline h3 {
    font-size: 16px;
}


.flex {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 4rem;
    padding-top: 2rem;
}

}
</style>