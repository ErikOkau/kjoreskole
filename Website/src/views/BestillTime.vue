<script setup>

import Input from '../components/input.vue'
import LicenceTypes from '../components/licenceTypes.vue';
import RadioInput from '../components/radioInput.vue';

import { ref } from 'vue'

    // define the licence types
const licenceTypes = [
    {
        name:"Personbil (B)",
        imgSrc: "/src/components/Bilder/cuate.svg"
    },
    {
        name:"Lettsykkel (A1)",
        imgSrc: "/src/components/Bilder/Lett_motorsykkel-removebg-preview-removebg-preview.png"
    },
    {
        name:"Motorsykkel (A2)",
        imgSrc: "/src/components/Bilder/Tung_motorsykkel_transformed-removebg-preview 2.png"
    },
    {
        name:"Tung (A)",
        imgSrc: "/src/components/Bilder/Tung_motorsykkel_transformed-removebg-preview 2.png"
    },
]

const form = ref({
    Fornavn: "",
    Etternavn: "",
    Bursdag: "",
    Mail: "",
    Mobilnumber: "",
    Fullførte_kurs: ""
})

const selectedOption = ref(null)

function test() {
    console.log(form.value)
}
</script>

<template>

    <form
    @submit.prevent="test"
    >
        <div class="headliner">
            <h1>Bestill time</h1>
            <h2>Deltaker informasjon</h2>
        </div>

        <div class="forms">
            <Input placeholder="Fornavn" type='text' color="black" v-model="form.Fornavn"/>
            <Input placeholder="Etternavn" type='text' color="black" v-model="form.Etternavn"/>
            <Input type='date' color="black" v-model="form.Bursdag"/>
            <Input placeholder="Epost" type="email" id="email" color="var(--blue)" placeholder-color="var(--blue)" v-model="form.Mail"/>
            <Input placeholder="Telefon" type="text" id="phone" name="phone" color="var(--blue)" placeholder-color="var(--blue)" v-model="form.Mobilnumber"/>
            <select class="select_dropdown" v-model="form.Fullførte_kurs">
                <option class="font1">Fullførte kurs</option>
                <option class="font">Trafikalt grunnkurs</option>
                <option class="font">Mørkekjøring</option>
                <option class="font">Begge kurs</option>
            </select>
            
        </div>

        <div class="licencetypes">
            <h1>Type førerkort</h1>
            <p>Trykk på hvilke kjøretimer du vil ha -- {{ selectedOption }}</p>

            <div class="wrap-bilder">
                <RadioInput v-for="item in licenceTypes" name="førerkort" :img-src="item.imgSrc" :id="item.name" v-model="selectedOption"/>
            </div>
        </div>
        
        <div class="button_flex">
            <button class="submit">Send inn</button>
        </div>
    </form>

    
    

</template>


<style scoped>

form {
    max-width: 85rem;
}

.headliner {
    padding-bottom: 3rem;
}
.headliner h1 {
    font-size: 64px;
}

.headliner h2 {
    font-size: 36px;
    color: var(--blue);
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


.wrap-bilder{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    gap: 5rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
}

.wrap-bilder div {
    flex: 1 1 13.5rem;
}

.font1 {
    color: black;
    font-size: 24px;
}

.font {
    font-size: 24px;
}

.select_dropdown {
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-color: var(--blue);
    color: var(--blue);
    border-width: 4px;   
    font-size: 36px;
    width: 400px;
}

.licencetypes {
    padding-top: 5rem;
    font-size: 24px;
}

.licencetypes h1 {
    padding-bottom: 0.5rem;
}



</style>



<style scoped>

@media only screen and (max-width: 400px) { 

    
form {
    max-width: 50rem;
}

.headliner {
    padding-top: 2rem;
    padding-bottom: 3rem;
    padding-left: 4rem;
}
.headliner h1 {
    font-size: 36px;
    padding-bottom: 0.5rem;
}

.headliner h2 {
    font-size: 24px;
    color: var(--blue);
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

.button_flex {
    padding-left: 4rem;
    padding-bottom: 5rem;
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
    padding-left: 4rem;
    max-width: 30rem;
}


.wrap-bilder {
    display: flex;
    flex-direction: row;
    flex-direction: wrap;

    gap: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    flex-wrap: wrap;
    justify-content: center;

}

.wrap-bilder div {
    flex: 1 1 9rem;
}


.font1 {
    color: black;
    font-size: 18px;
}

.font {
    font-size: 16px;
}

.select_dropdown {
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-color: var(--blue);
    color: var(--blue);
    border-width: 3px;   
    font-size: 24px;

    width: 21rem;
}

.licencetypes {
    padding-top: 5rem;
    font-size: 18px;
    padding-left: 4rem;
}


}

</style>