<script setup>
import Buttons from '../components/Buttons.vue'
import Instructor from '../components/instructor.vue'


const instructor = [
    {
        name:"Karl McBacon",
        imgSrc: "/src/components/Bilder/ezgif_com-gif-maker-q206eXFwC-transformed-transformed.jpeg",
        type: "Personbil (B)"
    },
    {
        name:"Erik Mikkelborg",
        imgSrc: "/src/components/Bilder/Erik_instruktør.jpg",
        type: "Lettsykkel (A1)"
    },
    {
        name:"Kari Underhaug",
        imgSrc: "/src/components/Bilder/I2_-_Edna.png",
        type: "Motorsykkel (A2)"
    },
    {
        name:"Erik Sørheim",
        imgSrc: "/src/components/Bilder/Erik_instruktør.jpg",
        type: "Tung (A)"
    }
]

</script>

<template>
<main>

    <div class="flex">
        <div class="headline">
            <h1>Kjøreskole</h1>
            <h2>For personbil og MC</h2>
            <h3>Rask&Tidig tilbyr effektive og lærerike <br> kjøretimer for både personbil og motorsykkel.</h3>

            <Buttons />
            
        </div>

        <img class="bil" src="../components/Bilder/bro.svg" alt="">

    </div>

    <div class="flex2">

        <img class="about_us" src="../components/Bilder/Page.png" alt="">

        <div class="headline2">
            <h2>Om oss</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. orem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <br>
            <br>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. orem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor.
            </p>
        </div>
    </div>

        <div class="headline_priser">
            <h2>Priser</h2>
        </div>

    <div class="priser">
        <div class="Generelle_kurs">
            <h2>Generelle kurs</h2>
            <li class="en"><p>Trafikalt grunnkurs (Sommerhalvåret - med førstehjelp)</p><p>1.849,-</p></li>
            <li class="to"><p>Trafikalt grunnkurs (Vinterhalvåret - med mørkekjøring og førstehjelp)</p><p>3.699,-</p></li>
            <li class="en"><p>Trafikant i mørket (mørkekjøring)</p><p>1.848,-</p></li>
            <li class="to"><p>Førstehjelpkurs</p><p>849,-</p></li>
        </div>
        <div class="Førerkort_klasse_B">
            <h2>Førerkort klasse B (Personbil)</h2>
            <li class="en"><p>Kjøretime</p><p>749,-</p></li>
            <li class="to"><p>Sikkerhetskurs på bane (Glattkjøring)</p><p>4.549,-</p></li>
            <li class="en"><p>Sikkerhetskurs på vei</p><p>4.899,-</p></li>
            <li class="to"><p>Trinnvurdering trinn 2 - 3</p><p>2.549,-</p></li>
        </div>
        <div class="Førerkort_klasse_AA1A2">
            <h2>Førerkort klasse A/A1/A2</h2>
            <li class="en"><p>Kjøretime</p><p>999,-</p></li>
            <li class="to"><p>Sikkerhetskurs på bane</p><p>5.249,-</p></li>
            <li class="en"><p>Sikkerhetskurs på vei</p><p>4.899,-</p></li>
            <li class="to"><p>Trinnvurdering trinn 2 - 3</p><p>1.999,-</p></li>
            <li class="en"><p>MC - Grunnkurs</p><p>1.319,-</p></li>
        </div>
    </div>

    <div class="instruktører">
        <h2 class="våre_instruktører">Våre instruktører</h2>

        <div class="wrap-instruktør">
            <Instructor v-for="item in instructor" :name="item.name" :img-src="item.imgSrc" :type="item.type" />
        </div>
    </div>

</main>
</template>


<style scoped>
.bil {
    height: 29rem;
    width: 46rem;
    margin-right: 4%;
}

.headline {
    align-self: flex-start;
    font-weight: bold;
}

.headline h1 {
    color: black;
    font-size: 64px;
    padding-bottom: 1rem;
}

.headline h2 {
    color: #2C008B;
    font-size: 36px;
    padding-bottom: 0.5rem;
}

.headline h3 {
    font-size: 24px;
    padding-bottom: 1.5rem;
}

.headline2 {
    align-self: flex-start;
    font-weight: bold;
    padding-left: 18rem;
}
.headline2 h2 {
    color: #2C008B;
    font-size: 36px;
    padding-bottom: 0.5rem;
}

.headline2 p {
    font-size: 24px;
    font-weight: 300;
    opacity: 0.8;
}

.flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.flex2 {
    padding-top: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
}

.about_us {
    width: 33rem;
    height: 28rem;
}


.priser {
    color: black;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    list-style: none;
    font-weight: 1000;

    
}

.priser li  {
    padding: 1rem 0;
    padding-left: 8px;
}

.priser h2 {
    color: #2C008B;
    padding-bottom: 1rem;
}

.headline_priser {
    padding-top: 5rem;
    padding-bottom: 1rem;
    font-size: 24px;
}

.en, .to {
    display: flex;
    justify-content: space-between;
    align-items: center;
}


.en {
    background-color: #D9D9D9; 
}

.to {
    background-color: #BDBDBD;
}

.en p:last-child, .to p:last-child {
    color: #2C008B;
    padding-right: 8px;
}


.wrap-instruktør {
    display: flex;
    flex-direction: row;
    flex-direction: wrap;

    gap: 5rem;
    padding-top: 2rem;
    padding-bottom: 2rem;

}

.instruktører {
    padding-top: 5rem;
    font-size: 24px;
}

</style>


<!-- Media queries-->
<style scoped>

@media only screen and (max-width: 400px) {
main {
    display: flex;
    flex-direction: column;
    align-items: center;
}


.bil {
    height: 10rem;
    width: 24rem;
    padding-top: 2rem; 
    margin-right: 0%;
}

.headline {
    font-weight: bold;
    align-self: center;
}

.headline h1 {
    color: black;
    font-size: 36px;
    padding-bottom: 0.5rem;
}

.headline h2 {
    color: #2C008B;
    font-size: 24px;
    padding-bottom: 0.5rem;
}

.headline h3 {
    font-size: 16px;
}

.headline2 {
    padding-top: 3rem;
    padding-left: 0px;
}

.headline2 h2 {
    color: #2C008B;
    font-size: 24px;
    padding-bottom: 0.5rem;
}

.headline2 p {
    font-size: 18px;
    font-weight: 300;
    opacity: 0.8;
    max-width: 350px;
}

.flex {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-left: 0rem;
    padding-top: 2rem;
}

.flex2 {
    padding-top: 5rem;
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
}

.about_us {
    width: 17rem;
    height: 17rem;
}


.priser {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}

.priser li  {
    padding: 1rem 0;
    padding-left: 8px;
}

.priser h2 {
    color: #2C008B;
    padding-bottom: 1rem;
}

.headline_priser {
    padding-top: 5rem;
    padding-bottom: 1rem;
    font-size: 24px;
    padding-right: 16rem;
}

.en, .to {
    display: flex;
    justify-content: space-between;
    align-items: center;
}


.en {
    background-color: #D9D9D9; 
}

.to {
    background-color: #BDBDBD;
}

.en p:last-child, .to p:last-child {
    color: #2C008B;
    padding-right: 8px;
}

.Førerkort_klasse_AA1A2 {
    padding-bottom: 5rem;
}



.wrap-instruktør {
    display: flex;
    flex-direction: row;
    flex-direction: wrap;

    gap: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    flex-wrap: wrap;
    justify-content: center;

}


.instruktører {
    padding-top: 0rem;
    font-size: 16px;
}

.våre_instruktører {
    padding-left: 2.3rem;
}

}



</style>
vue