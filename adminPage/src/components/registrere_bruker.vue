<script setup>

import { ref } from 'vue'
import router  from "../router" // Import Vue Router to redirect to homepage
import { collection, setDoc, doc, getDocs, deleteDoc, onSnapshot, updateDoc } from 'firebase/firestore'
import { 
    createUserWithEmailAndPassword, // Import Firebase Auth method for user registration
    updateProfile // Import Firebase Auth method for updating user profile
} from 'firebase/auth' 
import { auth, db } from '../firebase/firebase.js' // Import Firebase authentication instance

const registrationForm = ref({ // Declare reactive registration form object
  email: "",
  password: ""
})

const brukerRef = collection(db, 'brukere')

async function registerUser() { // Define async function to register user
  try {
    const { email, password, username } = registrationForm.value // Get user email and password from registration form
    const userCredential = await createUserWithEmailAndPassword(auth, email, password) // Create Firebase user credential with email and password
    const user = userCredential.user

    await setDoc(doc(brukerRef, user.uid), { // Create user profile in Firestore database
      email: user.email,
      role: "admin"
    })


    // Redirect to homepage
    router.push("/") // Redirect user to homepage after successful registration
  } catch (error) {
    // Show error message to user
    alert("Failed to register user. " + error.message) // Show error message to user if registration fails
  }
}

</script>
<!-- HTML template for user registration form -->
<template>
<div class="headline">
    <h1>Velkommen</h1>
    <p>Vennligst skriv inn email og passord for å registrere ny bruker</p>
</div>
<div class="register">
    <h2>Email</h2>
    <input v-model="registrationForm.email" type="text" color="black"> <!-- Bind email input field to reactive registrationForm object -->
    <h2>Passord</h2>
    <input v-model="registrationForm.password" type="password" color="black"> <!-- Bind password input field to reactive registrationForm object -->

        <button class="register_button" @click="registerUser()">Registrer bruker</button>

    </div>
</template>

<style scoped>


.headline {
    margin-left: 35%;
    padding-bottom: 1rem;
}

.headline h1 {
    color: black;
    font-size: 64px;
}

.headline p {
    color: black;
    font-size: 24px;
    max-width: 32rem;
}


.register {
    display: flex;
    flex-direction: column;
    width: 30%;
    margin-left: 35%;
    gap: 1rem;
}

.register h2 {
    font-size: 30px;
}

.register input {
    border-radius: 10;
    height: 40px;
    padding-left: 0.5rem;
    font-size: 24px;
}

.register_button, .google {
    border-radius: 10;
    font-size: 20px;
    font-weight: bold; 
    padding: 0.6rem 1.1rem;
    cursor: pointer;
    transition: 0.3s ease-in-out;
}

.register_button:hover, .google:hover {
    opacity: 0.8;
    border-color: pink;
}

.register_button {
    background-color: var(--blue);
    color: white;
}

.google {
    background-color: white;
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
}


img {
    max-width:  25px;
    max-height: 25px;
    justify-content: center;
    align-items: center;
}

.Registrere_bruker {
    align-self: center;
}

.Registrere_bruker a {
    font-style: none;
    list-style: none;
    text-decoration: none;
    color: var(--blue);
    font-weight: bold;
}

</style>




<style scoped>


@media only screen and (max-width: 400px) { 
.headline {
    margin-left: 4.5rem;
    padding-bottom: 3rem;
    padding-top: 2rem;
    max-width: 250px;
}
.headline h1 {
    color: black;
    font-size: 36px;
    padding-bottom: 0.5rem;
}

.headline p {
    color: black;
    font-size: 18px;
}


.register {
    display: flex;
    flex-direction: column;
    width: 15rem;
    gap: 1rem;
    margin-left: 4.5rem;
    padding-bottom: 12.7rem;
}

.register h2 {
    font-size: 24px;
}

.register input {
    border-radius: 10;
    height: 40px;
    padding-left: 0.5rem;
    font-size: 20px;
}

.register_button, .google {
    border-radius: 10;
    font-size: 12px;
    font-weight: bold; 
    padding: 0.6rem 1.1rem;
    cursor: pointer;
    transition: 0.3s ease-in-out;
}

.register_button:hover, .google:hover {
    opacity: 0.8;
    border-color: pink;
}

.register_button {
    background-color: var(--blue);
    color: white;
}

.google {
    background-color: white;
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
}


img {
    max-width:  25px;
    max-height: 25px;
    justify-content: center;
    align-items: center;
}

}

</style>