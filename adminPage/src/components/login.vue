<script setup>
// Import necessary functions and modules
import { ref } from 'vue';
import router  from "../router"
import { 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth'
import { auth } from '../firebase/firebase.js'

// Define a reactive reference object for the login form data
const loginForm = ref({
    password: "",
    email: ""
})

// Define the login function
async function login() {
  try {
    // Destructure email and password from the loginForm reactive object
    const { email, password } = loginForm.value
    // Attempt to sign in with the given email and password
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const user = userCredential.user
    console.log("Successfully logged in as:", user.email)
    // Redirect to the home page after successful login
    router.push("/")
  } catch (error) {
    // Show error message to user
    alert("Feil email eller passord", error)
  }
}   

</script>

<template>

<div class="headline">
    <h1>Velkommen</h1>
    <p>Vennligst skriv inn brukernavn og passord</p>
</div>
<div class="login">
    <h2>E-postadresse</h2>
    <!-- Bind the email input to the loginForm reactive object -->
    <input v-model="loginForm.email" type="email" color="black">
    <h2>Passord</h2>
    <!-- Bind the password input to the loginForm reactive object -->
    <input v-model="loginForm.password" type="password" color="black">

    <button class="login_button" @click="login">Logg inn</button>

    <div class="Registrere_bruker">
        <RouterLink to="/signup">Ikke bruker? Registrer nå</RouterLink>
    </div>
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
}


.login {
    display: flex;
    flex-direction: column;
    width: 30%;
    margin-left: 35%;
    gap: 1rem;
}

.login h2 {
    font-size: 30px;
}

.login input {
    border-radius: 10;
    height: 40px;
    padding-left: 0.5rem;
    font-size: 24px;
}

.login_button, .google {
    border-radius: 10;
    font-size: 20px;
    font-weight: bold; 
    padding: 0.6rem 1.1rem;
    cursor: pointer;
    transition: 0.3s ease-in-out;
}

.login_button:hover, .google:hover {
    opacity: 0.8;
    border-color: pink;
}

.login_button {
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
    margin-left: 5rem;
    padding-bottom: 3rem;
    padding-top: 2rem;
    max-width: 350px;
}
.headline h1 {
    color: black;
    font-size: 36px;
    padding-bottom: 0.5rem;
}

.headline p {
    color: black;
    font-size: 18px;
    max-width: 15rem;
}


.login {
    display: flex;
    flex-direction: column;
    width: 15rem;
    gap: 1rem;
    margin-left: 5rem;
    padding-bottom: 12.7rem;
}

.login h2 {
    font-size: 24px;
}

.login input {
    border-radius: 10;
    height: 40px;
    padding-left: 0.5rem;
    font-size: 20px;
}

.login_button, .google {
    border-radius: 10;
    font-size: 12px;
    font-weight: bold; 
    padding: 0.6rem 1.1rem;
    cursor: pointer;
    transition: 0.3s ease-in-out;
}

.login_button:hover, .google:hover {
    opacity: 0.8;
    border-color: pink;
}

.login_button {
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