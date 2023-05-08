<script setup>
import { ref } from 'vue'
import router  from "../router"
import { 
    createUserWithEmailAndPassword, 
    updateProfile 
} from 'firebase/auth'
import { auth } from '../firebase/firebase.js'

const registrationForm = ref({
  email: "",
  password: ""
})

async function registerUser() {
  try {
    const { email, password, username } = registrationForm.value
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user
    console.log("Successfully registered user:", user.email)
    // Update user profile display name
    await updateProfile(user, { displayName: username })
    console.log("Successfully updated user profile:", user.displayName)
    // Redirect to the homepage
    router.push("/")
  } catch (error) {
    alert("Failed to register user. " + error.message)
    // TODO: Show error message to user
  }
}

</script>

<template>
<div class="headline">
    <h1>Velkommen</h1>
    <p>Vennligst skriv inn email, brukernavn og passord for å registrere ny bruker</p>
</div>

<div class="register">
    <h2>Email</h2>
    <input v-model="registrationForm.email" type="text" color="black">
    <h2>Passord</h2>
    <input v-model="registrationForm.password" type="password" color="black">

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
    margin-left: 6rem;
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
    margin-left: 6rem;
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