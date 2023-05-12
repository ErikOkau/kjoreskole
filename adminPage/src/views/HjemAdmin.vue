<script setup>

import Input from '../components/input.vue'

import { collection, setDoc, doc, getDocs } from 'firebase/firestore'

import { db, auth } from '../firebase/firebase.js'
import { ref, onMounted } from "vue"

const brukere = ref([])

onMounted(async () => {
    const querySnapshot = await getDocs(collection(db, "brukere"));
    querySnapshot.forEach((doc) => {
        brukere.value.push({
            id: doc.id,
            ...doc.data()
        })
    });

    console.log(brukere.value)
});


const formSend = ref(false)

const form = ref({
    Elev: "0",
    Type_førerkort: "0",
    Dato: "",
    Tid: "",
    Sted: "",
    Adresse: "",
})

const formRef = collection(db, 'Kjøretimer')

const message = ref('')


async function sendForm() {
    const { Elev, Type_førerkort, Dato, Tid, Sted, Adresse } = form.value

    try {
        await setDoc(doc(formRef), {
            elevId: Elev,
            Type_førerkort,
            Dato,
            Tid,
            Sted,
            Adresse,
        })

        formSend.value = true

        message.value = 'Time lagt til!'
    } catch (error){
        message.value = 'Noe gikk galt, prøv igjen senere' + error.message
        formSend.value = true
    }
}


</script>

<template>

    <form
    @submit.prevent="sendForm"
    >
        <div class="flexer">
            <div class="header">
                <h1>Kjøretimer</h1>
            </div>

            <div class="flexer2">
                <div class="tittel">
                    <h2>Timer</h2>
                </div>
                <div class="tabell">
                    <table>
                        <thead>
                            <tr>
                                <th>Elev</th>
                                <th>Type førerkort</th>
                                <th>Dato</th>
                                <th>Tid</th>
                                <th>Sted</th>
                                <th>Adresse</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="forms in form">
                                <td>{{ forms.Elev }}</td>
                                <td>{{ forms.Type_førerkort }}</td>
                                <td>{{ forms.Dato }}</td>
                                <td>{{ forms.Tid }}</td>
                                <td>{{ forms.Sted }}</td>
                                <td>{{ forms.Adresse }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        

            <div class="flex">

                <div class="tittel">
                    <h2>Legg til ny time</h2>
                </div>

                <div class="forms">
                    <select class="select_dropdown" v-model="form.Elev">
                        <option class="font1" value="0">Velg elev</option>
                        <option class="font" :value="bruker.id" v-for="bruker in brukere">{{  bruker.Fornavn + " " + bruker.Etternavn }}</option>
                    </select> 
                    <select class="select_dropdown" v-model="form.Type_førerkort">
                        <option class="font1" value="0">Type førerkort</option>
                        <option class="font" value="B">Personbil (B)</option>
                        <option class="font" value="A1">Lett motorsykkel (A1)</option>
                        <option class="font" value="A2">Motorsykkel (A2)</option>
                        <option class="font" value="A">Tung motorsykkel (A)</option>
                    </select>  
                    <Input type='date' color="black" v-model="form.Dato"/>
                    <Input type='time' color="var(--blue)" placeholder-color="var(--blue)" v-model="form.Tid"/>
                    <Input placeholder="Sted" type='text' color="var(--blue)" placeholder-color="var(--blue)" v-model="form.Sted"/>
                    <Input placeholder="Adresse" type='text' color="var(--blue)" placeholder-color="var(--blue)" v-model="form.Adresse"/>  
                </div>
        
                <div class="submit_flex">
                    <button :disabled="formSend" class="submit">Legg til time</button>
                </div>
                

                <div class="bekreftelse_flex">
                    <div class="bekreftelse" v-if="formSend">
                        <p>{{ message }}</p>
                    </div>
                </div>
            </div>
        </div> 

    </form>
    

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

.bekreftelse {
    border: 2px solid;
    text-align: center;
    font-size: 18px;
   
    border: 2px solid;
    text-align: center;
    padding: 0rem;
    
    user-select: none;
}

.bekreftelse_flex {
    padding-left: 1rem;
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
    width: 22rem;
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
    padding-left: 1rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
}
.header {
    font-size: 24px;
}

.tittel {
    font-size: 24px;
}

.bekreftelse {
    border: 2px solid;
    text-align: center;
    font-size: 18px;
   
    border: 2px solid;
    text-align: center;
    padding: 0rem;
    
    user-select: none;
}

.bekreftelse_flex {
    padding-left: 1rem;
}

}


</style>