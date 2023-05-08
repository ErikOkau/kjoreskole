<script setup>
import Buttons from '/Github/kjoreskole/Website/src/components/Buttons.vue'

import Input from '../components/input.vue'
import { ref } from "vue"


</script>

<template>

    <div class="flexer">
        <div class="header">
            <h1>Kjøretimer</h1>
        </div>

        <div class="flexer2">
            <div class="tittel">
                <h2>Timer</h2>
                
            </div>
            <div class="tabell">

            </div>
        </div>
    

        <div class="flex">

            <div class="tittel">
                <h2>Legg til ny time</h2>
            </div>

            <div class="forms">
                <Input placeholder="Elev" type='text' color="black"/>
                <select class="select_dropdown">
                    <option class="font1">Type førerkort</option>
                    <option class="font">Personbil (B)</option>
                    <option class="font">Lett motorsykkel (A1)</option>
                    <option class="font">Motorsykkel (A2)</option>
                    <option class="font">Tung motorsykkel (A)</option>
                </select>  
                <Input type='date' color="black"/>
                <Input type='time' color="var(--blue)" placeholder-color="var(--blue)"/>
                <Input placeholder="Sted" type='text' color="var(--blue)" placeholder-color="var(--blue)"/>
                <Input placeholder="Adresse" type='text' color="var(--blue)" placeholder-color="var(--blue)"/>  
            </div>
    
            <button class="submit">Legg til time</button>

        </div>
    </div>  

</template>

<style scoped>

.flexer {
    display: flex;
    flex-direction: column;
    gap: 4rem;
}
.header {
    font-size: 2.5rem;
}

.tittel {
    font-size: 2.5rem;
}

.tittel p {
    font-size: 2rem;
    padding-top: 1rem;
}

</style>


<!-- Forms -->
<style scoped>

form {
    max-width: 85rem;
}

.submit {
    border-radius: 10;
    font-size: 24px;
    background-color: #2C008B;
    color: white;
    
    padding: 0.6rem 1.1rem;
    align-self: flex-start;
    font-weight: bold;
    border-radius: 10;
    transition: 0.2s ease-in-out;
}


.submit:hover {
    opacity: 70%;
    cursor: pointer;
    border-color: pink;
}

.forms {
    color: black;
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
}



.select_dropdown {
    width: 400px;
}

.font1 {
    color: var(--blue);
    font-size: 24px;
    font-weight: bold;
}

.font {
    font-size: 24px;
}

.select_dropdown {
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-color: black;
    color: black;
    border-width: 3px;   
    font-size: 36px;
    font-weight: bold;
}

.flex {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

</style>

<style scoped>

.flexer {
    display: flex;
    flex-direction: column;
    gap: 4rem;
}
.header {
    font-size: 2.5rem;
}

.tittel {
    font-size: 2.5rem;
}

</style>








<!-- Forms -->
<style scoped>

@media only screen and (max-width: 400px) {

form {
    max-width: 30rem;
}

.submit {
    border-radius: 10;
    font-size: 12px;
    background-color: #2C008B;
    color: white;
    
    padding: 0.6rem 1.1rem;
    align-self: flex-start;
    font-weight: bold;
    border-radius: 10;
    transition: 0.2s ease-in-out;
}


.submit:hover {
    opacity: 70%;
    cursor: pointer;
    border-color: pink;
}

.forms {
    color: black;
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
}



.select_dropdown {
    width: 21rem;
}

.font1 {
    color: var(--blue);
    font-size: 18px;
    font-weight: bold;
}

.font {
    font-size: 16px;
}

.select_dropdown {
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-color: black;
    color: black;
    border-width: 3px;   
    font-size: 24px;
    font-weight: bold;
}

.flex {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
}

}

</style>



<style scoped>


@media only screen and (max-width: 400px) {

.flexer {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding-left: 3rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
}
.header {
    font-size: 24px;
}

.tittel {
    font-size: 24px;
}

}


</style>