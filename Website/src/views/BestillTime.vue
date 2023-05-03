<script setup>
import Input from '../components/input.vue'
import LicenceTypes from '../components/licenceTypes.vue';
var tester
function test(){
console.log('penger')
console.log(tester)
}

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
            <Input placeholder="Fornavn" type='text' color="black"/>
            <Input placeholder="Etternavn" type='text' color="black"/>
            <Input type='date' color="black"/>
            <Input placeholder="Epost" type="email" id="email" pattern=".+@globex\.com" color="var(--blue)" placeholder-color="var(--blue)"/>
            <Input placeholder="Telefon" type="tel" id="phone" name="phone" color="var(--blue)" placeholder-color="var(--blue)"/>
            <select class="select_dropdown">
                <option class="font1">Fullførte kurs</option>
                <option class="font">Trafikalt grunnkurs</option>
                <option class="font">Mørkekjøring</option>
                <option class="font">Trafikalt + mørkekjøring</option>
            </select>
            
        </div>

        <div class="licencetypes">
            <h1>Type førerkort</h1>

            <div class="wrap-bilder">
                <LicenceTypes v-for="item in licenceTypes" :name="item.name" :img-src="item.imgSrc" />
            </div>
        </div>
        
        
    </form>

    <div class="button_flex">
        <button class="submit">Send inn</button>
    </div>
    

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


.wrap-bilder {
    display: flex;
    flex-direction: row;
    flex-direction: wrap;

    gap: 5rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
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