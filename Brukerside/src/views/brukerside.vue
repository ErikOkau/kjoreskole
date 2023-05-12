<script setup>
    import Input from '../components/input.vue'
    import { collection, setDoc, doc, getDocs } from 'firebase/firestore' // Importing firestore functions from firebase library
    import { db, auth } from '../firebase/firebase.js' // Importing firebase database and authentication objects
    import { ref, onMounted, computed } from "vue" // Importing vue reactive objects

    const brukere = ref([]) // Creating a reactive reference for the 'brukere' array
    const forms = ref([]) // Creating a reactive reference for the 'forms' array

    onMounted(async () => { // On component mount, fetch data from Firestore
        const querySnapshot = await getDocs(collection(db, "Kjøretimer")) // Querying the 'Kjøretimer' collection from Firestore
        querySnapshot.forEach((doc) => { // Looping through each document in the collection and adding it to the 'forms' array
            forms.value.push({
                id: doc.id,
                ...doc.data()
            })
        });

        const brukerSnapshot = await getDocs(collection(db, "brukere")); // Querying the 'brukere' collection from Firestore
        brukerSnapshot.forEach((doc) => { // Looping through each document in the collection and adding it to the 'brukere' array
            brukere.value.push({
                id: doc.id,
                ...doc.data()
            })
        });

        console.log(forms.value) // Logging the 'forms' array to the console
    });

    const form = ref({ // Creating a reactive reference for the 'form' object
        Elev: "0",
        Type_førerkort: "0",
        Dato: "",
        Tid: "",
        Sted: "",
        Adresse: "",
    })

    const formRef = collection(db, 'Kjøretimer') // Creating a reference to the 'Kjøretimer' collection in Firestore

    const message = ref('') // Creating a reactive reference for the error message

    async function sendForm() { // Function to send form data to Firestore
        const { Elev, Type_førerkort, Dato, Tid, Sted, Adresse } = form.value // Destructuring the values from the 'form' object

        try {
            await setDoc(doc(formRef), { // Adding a new document to the 'Kjøretimer' collection with the form data
                elevId: Elev,
                Type_førerkort,
                Dato,
                Tid,
                Sted,
                Adresse,
            })

            // push data to forms array
            forms.value.push({ // Adding the form data to the 'forms' array
                id: doc.id,
                Elev,
                Type_førerkort,
                Dato,
                Tid,
                Sted,
                Adresse,
            })

            localStorage.setItem('forms', JSON.stringify(forms.value)) // Saving the 'forms' array to local storage

        } catch (error) {
            message.value = error.message // Setting the error message
        }
    }


    const mappedForms = computed(() => { // Creating a computed property for the 'mappedForms' array
        return forms.value.map((form) => { // Mapping the 'forms' array to add the 'Elev' name from the 'brukere' array
            const bruker = brukere.value.find((bruker) => bruker.id === form.Elev)
            return {
                ...form,
                id: form.id,
                Elev: bruker ? bruker.Fornavn + " " + bruker.Etternavn : null,
            }
        })
    })


</script>

<template>

    <div class="flex">
        <div class="headline">
            <h1>Dine timer</h1>
            <h3>Nedenfor kan du se dine fremtidige timer</h3>
        </div>

        <div class="fremtidige_timer">
            <h2>Fremtidige timer</h2>

            <div class="tabell">
                <table>
                    <thead>
                        <tr>
                            <th>Type førerkort</th>
                            <th>Dato</th>
                            <th>Tid</th>
                            <th>Sted</th>
                            <th>Adresse</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="form in mappedForms" :key="form.id">
                            <td>{{ form.Elev }}</td>
                            <td>{{ form.Type_førerkort }}</td>
                            <td>{{ form.Dato }}</td>
                            <td>{{ form.Tid }}</td>
                            <td>{{ form.Sted }}</td>
                            <td>{{ form.Adresse }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
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

}
</style>