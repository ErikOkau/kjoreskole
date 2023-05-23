<script setup>
    import { collection, setDoc, doc, getDoc, query, where, onSnapshot } from 'firebase/firestore' // Importing firestore functions from firebase library
    import { db, auth } from '../firebase/firebase.js' // Importing firebase database and authentication objects
    import { ref, onMounted, computed } from "vue" // Importing vue reactive objects
    import { onAuthStateChanged } from "firebase/auth" // Importing firebase authentication state change functionnpm ru
    import { Bar } from 'vue-chartjs'


    const forms = ref([]) // Creating a reactive reference for the 'forms' array
    const formRef = collection(db, "Kjøretimer") // Creating a reference to the 'Kjøretimer' collection in Firestore
    const completedFormsCount = ref(0) // Creating a reactive reference for the 'completedFormsCount' variable

    function getData(id) { // On component mount, fetch data from Firestore
        const queryKjøretimer = query(collection(db, "Kjøretimer"), where("elevId", "==", id)) // Querying the 'Kjøretimer' collection from Firestore
        
        onSnapshot(queryKjøretimer, (querySnapshot)=>{
            forms.value = []

            querySnapshot.forEach((doc) => { // Looping through each document in the collection and adding it to the 'forms' array
                forms.value.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
        })
        

        console.log(forms.value) // Logging the 'forms' array to the console
    }


    onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is signed in")

        getData(user.uid)
    } else {
        console.log("No user is signed in")
    }
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
                        <tr v-for="form in forms" :key="form.id">
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
        <div class="chart-container">
            <bar-chart :chart-data="chartData" :options="chartOptions"></bar-chart>
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
    padding-bottom: 7.9rem;
}

.fremtidige_timer {
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
    padding-left: 1rem;
}

.fremtidige_timer h2{
    font-size: 24px;
    padding-left: 1rem;
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
    margin-left: 0rem;
    padding-top: 2rem;
}






/* Tabell */
.tabell {
  margin-top: 1rem;
  padding-bottom: 19.2rem;
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
  font-size: 9px;
}

.tabell table th {
  background-color: #f2f2f2;
  padding: 0.5rem 0.5rem 0.5rem;
  font-size: 9px;
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

}
</style>


