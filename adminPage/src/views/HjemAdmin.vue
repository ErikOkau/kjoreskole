<script setup>

// Importing necessary components and libraries
import Input from '../components/input.vue'
import { collection, setDoc, doc, getDocs, deleteDoc } from 'firebase/firestore'
import { db, auth } from '../firebase/firebase.js'
import { ref, onMounted, computed } from "vue"



// Creating references to our data that we fetch from firebase
const brukere = ref([]) 
const forms = ref([]) 
const bestillinger = ref([]) 
const kjøretimer = ref([]) 

// Creating a reference to a form
const form = ref({ 
    Elev: "0",
    Type_førerkort: "0",
    Dato: "",
    Tid: "",
    Sted: "",
    Adresse: "",
})

// Creating a reference to the Kjøretimer collection in firebase
const formRef = collection(db, 'Kjøretimer') 
// Creating a reference to a message that we use for displaying a message to the user
const message = ref('')
// Creating a reference to a form submission status
const formSend = ref(false) 



// Creating an async function to send the form to firebase
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

        // push data to forms array
        forms.value.push({
            Elev,
            Type_førerkort,
            Dato,
            Tid,
            Sted,
            Adresse,
        })

        message.value = 'Time lagt til!'
        formSend.value = true
          setTimeout(() => {
            formSend.value = false
          }, 3000)
    } catch (error){
        message.value = 'Noe gikk galt, prøv igjen senere' + error.message
    }
}



// Fetching all users from firebase and pushing it to brukere array
onMounted(async () => {
    const querySnapshot = await getDocs(collection(db, "brukere"))
    querySnapshot.forEach((doc) => {
        brukere.value.push({
            id: doc.id,
            ...doc.data()
        })
    });

    console.log(brukere.value)
});



// Fetching all Kjøretimer from firebase and pushing it to kjøretimer array
onMounted(async () => {
  const bestillingerSnapshot = await getDocs(collection(db, 'brukere'))
  bestillingerSnapshot.forEach((doc) => {
    bestillinger.value.push({
      id: doc.id,
      ...doc.data(),
    })
  })

  console.log(bestillinger.value)
})



// Fetching all Kjøretimer from firebase and pushing it to kjøretimer array
onMounted(async () => {
  const kjøretimerSnapshot = await getDocs(collection(db, 'Kjøretimer'))
  kjøretimerSnapshot.forEach((doc) => {
    kjøretimer.value.push({
      id: doc.id,
      ...doc.data(),
    })
  })

  console.log(kjøretimer.value)
  
})

 

// Creating a computed property that maps the bestillinger array and returns it
const mappedBestillinger = computed(() => {
  return bestillinger.value.map((bestilling) => {
    return {
      ...bestilling,
    }
  })
})



// Creating a computed property that maps the kjøretimer array and returns it
const mappedClasses = computed(() => {
  return kjøretimer.value.map((kjøretimer) => {
    return {
      ...kjøretimer,
    }
  })
})



// function for deleting the form from the database
const deleteForm = (form) => {
  try {
    // delete the form from the database
    deleteDoc(doc(db, 'Kjøretimer', form.id))

    // remove the form from the kjøretimer array
    const index = kjøretimer.value.findIndex((item) => item.id === form.id)
    if (index !== -1) {
      kjøretimer.value.splice(index, 1)
    }
  } catch (error) {
    console.error(error)
  }

  console.log(form)
}

// check if the user is authenticated
const isAuthenticated = computed(() => {
  return !!auth.currentUser
})


</script>

<template>

    <div v-if="isAuthenticated" class="loggedin">
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
                                    <th>Fullført</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="form in mappedClasses" :key="form.id">
                                    <td>{{ form.Elev }}</td>
                                    <td>{{ form.Type_førerkort }}</td>
                                    <td>{{ form.Dato }}</td>
                                    <td>{{ form.Tid }}</td>
                                    <td>{{ form.Sted }}</td>
                                    <td>{{ form.Adresse }}</td>
                                    <td>
                                        <button class="delete" @click="deleteForm(form)">Fullført</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="bestillinger">
                        <div class="tittel">
                            <h2>Bestillinger</h2>
                        </div>
                        <div class="tabell1">
                            <table>
                                <thead>
                                |   <tr>
                                        <th>Fornavn</th>
                                        <th>Fornavn</th>
                                        <th>Bursdag</th>
                                        <th>Mail</th>
                                        <th>Mobilnumber</th>
                                        <th>Fullførte_kurs</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="bestilling in mappedBestillinger" :key="bestilling.id">
                                        <td>{{ bestilling.Fornavn }}</td>
                                        <td>{{ bestilling.Fornavn }}</td>
                                        <td>{{ bestilling.Bursdag }}</td>
                                        <td>{{ bestilling.Mail }}</td>
                                        <td>{{ bestilling.Mobilnumber }}</td>
                                        <td>{{ bestilling.Fullførte_kurs }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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
    color: var(--blue);
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



.tabell {
  margin-top: 20px;
}

.tabell table {
  border: 1px solid #ddd;
  width: 100%;
  border-collapse: collapse;

}

.tabell table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  padding: 1rem 1rem 1rem;
  text-align: center;
}

.tabell table th {
  background-color: #f2f2f2;
  padding: 1rem 1rem 1rem;
  font-weight: bold;
}

.tabell tbody {
   padding-left: 1rem;
}

.tabell table tr:hover {
  background-color: #f5f5f5;
}

.tabell thead {
  position: sticky;
  top: 0;
}



.tabell1 {
  margin-top: 20px;
}

.tabell1 table {
  border: 1px solid #ddd;
  width: 100%;
  border-collapse: collapse;

}

.tabell1 table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  padding: 1rem 1rem 1rem;
  text-align: center;
}

.tabell1 table th {
  background-color: #f2f2f2;
  padding: 1rem 1rem 1rem;
  font-weight: bold;
}

.tabell1 tbody {
   padding-left: 1rem;
}

.tabell1 table tr:hover {
  background-color: #f5f5f5;
}

.tabell1 thead {
  position: sticky;
  top: 0;
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

.flexer {
    display: flex;
    flex-direction: column;
    gap: 4rem;
}

.delete {
    background-color: #2C008B;
    color: white;
    border-radius: 10;
    font-size: 8px;
    padding: 0.3rem 0.7rem;
    align-self: flex-start;
    font-weight: bold;
    border-radius: 10;
    transition: 0.2s ease-in-out;
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

.submit_flex {
    padding-left: 0.7rem;
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
    padding-left: 1.5rem;
}



.select_dropdown {
    width: 21.5rem;
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



/* Tabell */
.tabell {
  margin-top: 1rem;
}

.tabell table {
  border: 1px solid #ddd;
  width: 100%;
  border-collapse: collapse;
}

.tabell table td {
  padding: 0px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  padding: 0.5rem 0.5rem 0.5rem ;
  text-align: center;
  font-size: 10px;
}

.tabell table th {
  background-color: #f2f2f2;
  padding: 0.5rem 0.5rem 0.5rem;
  font-size: 10px;
}

.tabell tbody {
   padding-left: 0rem;
}

.tabell table tr:hover {
  background-color: #f5f5f5;
}

.tabell thead {
  position: sticky;
  top: 0;
}



/* Tabell */
.tabell1 {
  margin-top: 1rem;
}

.tabell1 table {
  border: 1px solid #ddd;
  width: 0%;
  border-collapse: collapse;
}

.tabell1 table td {
  padding: 0px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  padding: 0.5rem 0.5rem 0.5rem ;
  text-align: center;
  font-size: 9.1px;
}

.tabell1 table th {
  background-color: #f2f2f2;
  padding: 0.5rem 0.5rem 0.5rem;
  font-size: 8px;
}

.tabell1 tbody {
   padding-left: 0rem;
}

.tabell1 table tr:hover {
  background-color: #f5f5f5;
}

.tabell1 thead {
  position: sticky;
  top: 0;
}

}

</style>



<style scoped>


@media only screen and (max-width: 400px) {

.flexer {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding-left: 0rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
}
.header {
    font-size: 1.5rem;
    padding-left: 1.5rem;
}

.tittel {
    font-size: 1.5rem;
    padding-left: 1.5rem;
}


.bekreftelse {
    border: 2px solid;
    text-align: center;
    font-size: 18px;
   
    border: 2px solid;
    text-align: center;
    padding: 0rem;
    margin-left: 1rem;
    
    user-select: none;
}

.bekreftelse_flex {
    padding-left: 0rem;
    padding-right: 0.75rem;
}

}


</style>