<script setup>

// Importing the necessary components and firebase functionalities
import Input from '../components/input.vue'
import LicenceTypes from '../components/licenceTypes.vue';
import RadioInput from '../components/radioInput.vue';
import { collection, setDoc, doc } from 'firebase/firestore'
import { db, auth } from '../firebase/firebase.js'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { ref } from 'vue'

// Defining the different license types available
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

// Creating a reactive reference for the selected license type and the form submission status
const selectedOption = ref(null)
const formSend = ref(false)

// Creating a reactive reference for the form data
const form = ref({
    Fornavn: "",
    Etternavn: "",
    Bursdag: "",
    Mail: "",
    Mobilnumber: "",
    Fullførte_kurs: "",
})

// Creating a reference to the "brukere" collection in Firestore
const formRef = collection(db, 'brukere')

// Creating a reactive reference for the message displayed after form submission
const message = ref('')

// Async function to send the form data to Firestore
async function sendForm() {
    // Extracting the necessary form data
    const { Fornavn, Etternavn, Bursdag, Mail, Mobilnumber, Fullførte_kurs } = form.value

    let user

    try {
        // Creating a new user in Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, Mail, Mobilnumber)
        user = userCredential.user
    } catch {
        // Displaying an error message if the email is invalid
        message.value = "Invalid Email"
        formSend.value = true
        return
    }

    try {
        // Saving the form data to Firestore
        await setDoc(doc(formRef, user.uid), {
            Fornavn,
            Etternavn,
            Bursdag,
            Mail,
            Mobilnumber,
            Fullførte_kurs,
            Førerkort: selectedOption.value,
        })
        formSend.value = true

        // Displaying a success message after form submission
        message.value = 'Bestillingen ble sendt inn! Logg inn med epost og tlf som passord for å se bestillingen din'
    } catch (error) {
      // Displaying an error message if there was a problem saving the form data
      message.value = 'Noe gikk galt, prøv igjen senere' + error.message
      formSend.value = true
    }
}

</script>

<template>

    <!-- calls the sendForm method when submitted -->
<form @submit.prevent="sendForm">
    <div class="headliner">
        <h1>Bestill time</h1>
        <h2>Deltaker informasjon</h2>
    </div>

    <div class="forms">
        <!-- custom Input component: receives placeholder, type, color, and v-model as props -->
        <Input placeholder="Fornavn" type='text' color="black" v-model="form.Fornavn"/>
        <Input placeholder="Etternavn" type='text' color="black" v-model="form.Etternavn"/>
        <Input type='date' color="black" v-model="form.Bursdag"/>
        <Input placeholder="Epost" type="email" id="email" color="var(--blue)" placeholder-color="var(--blue)" v-model="form.Mail"/>
        <Input placeholder="Telefon" type="text" id="phone" name="phone" color="var(--blue)" placeholder-color="var(--blue)" v-model="form.Mobilnumber"/>
        <!-- A select dropdown component that shows course options -->
        <select class="select_dropdown" v-model="form.Fullførte_kurs">
            <option class="font1">Fullførte kurs</option>
            <option class="font">Trafikalt grunnkurs</option>
            <option class="font">Mørkekjøring</option>
            <option class="font">Begge kurs</option>
        </select>  
    </div>

    <!-- section that shows license types options as radio buttons -->
    <div class="licencetypes">
        <h1>Type førerkort</h1>
        <p>Trykk på hvilke kjøretimer du vil ha -- <span>{{ selectedOption }}</span></p>

        <!-- custom RadioInput component that shows license types as images and allows selection -->
        <div class="wrap-bilder">
            <RadioInput v-for="item in licenceTypes" name="førerkort" :img-src="item.imgSrc" :id="item.name" v-model="selectedOption"/>
        </div>
    </div>
    
    <div class="button_flex">
        <!-- The button is disabled when the form is being sent -->
        <button :disabled="formSend" class="submit">Send inn</button>
    </div>
    
    <!-- confirmation section that shows a message after the form has been sent -->
    <div class="bekreftelse_flex">
        <div class="bekreftelse" v-if="formSend">
            <p>{{ message }}</p>
        </div>
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
    font-size: 18px;
    gap: 3rem;
    padding-top: 3rem;
    padding-bottom: 2rem;
    text-align: center;
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
    width: 25rem;
}

.licencetypes {
    padding-top: 5rem;
    font-size: 24px;
}

.licencetypes h1 {
    padding-bottom: 0.5rem;
}

.licencetypes span {
    color: var(--blue);
    font-weight: bold;
}

.button_flex {
    padding-left: 4rem;
    padding-bottom: 3rem;
    user-select: none;
}

.bekreftelse {
    border: 2px solid;
    text-align: center;
    padding: 1rem;
    color: var(--blue);
    font-size: 24px;
    font-weight: bold;
    width: 93%;
    user-select: none;
}

.bekreftelse span {
    color: black;
}



</style>



<style scoped>

@media only screen and (max-width: 400px) { 

    
form {
    max-width: 55rem;
}

.headliner {
    padding-top: 2rem;
    padding-bottom: 3rem;
    padding-left: 1rem;
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
    padding-left: 1rem;
    padding-bottom: 3rem;
    user-select: none;
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
    padding-left: 1rem;
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

    width: 21.5rem;
}

.licencetypes {
    padding-top: 5rem;
    font-size: 18px;
}

.licencetypes h1, p {
    padding-left: 1rem;
}


}

</style>