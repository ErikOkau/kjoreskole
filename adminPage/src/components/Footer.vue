
<template>
  
  <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Untitled</title>
      <link rel="stylesheet" href="assets/css/style.css">
  </head>
  
  <body>
      <div class="footer">
          <footer>
              <div class="container">
                    <div class="adresse">
                        <h3>Adresse</h3>
                        <ul>
                            <li><a href="#">Skogedalsvegen 5</a></li>
                            <li><a href="#">Brattholmen, <br>5350</a></li>
                        </ul>
                    </div>
                    <div class="kontakt">
                        <h3>Kontakt oss</h3>
                        <ul>
                            <li><a href="#">Tlf: 960 44 191</a></li>
                            <li><a href="#">E-post: erikmsorheim@yahoo.no</a></li>
                        </ul>
                    </div>
                    <div class="kolonne">
                        <ul>
                            <li><a href="#">Til toppen</a></li>
                            <li><a href="#">Personvern</a></li>
                        </ul>
                  </div>
              </div>  
          </footer>
      </div>
      
  </body>
  
</template>

    
<style scoped>

.footer {
  padding:50px 0;
  background-color: black;
  color: white;
}

.footer h3 {
  margin-bottom:12px;
  font-weight:bold;
  font-size:16px;
}

.footer ul {
  list-style:none;
  line-height:1.6;
  font-size:14px;
}

.footer ul p {
    font-weight: bold;
}

.footer ul a {
  color:inherit;
  text-decoration:none;
  opacity:0.8;
}

.footer ul a:hover {
  opacity:1;
}

.container {
    display: flex;
    background-color: black;
    margin-left: 7rem;
    justify-content: space-between;
}

.footer .item.social > a:hover {
  opacity:0.9;
}

.kolonne {
  margin-right: 7rem;
}

</style>




<style scoped>

@media only screen and (max-width: 400px) {


  .footer {
  padding:50px 0;
  background-color: black;
  color: white;
  width: 53.5vh;
}

.footer h3 {
  margin-bottom: 8px;
  font-weight:bold;
  font-size:16px;
}

.footer ul {
  list-style:none;
  line-height:1.6;
  font-size:14px;
}

.footer ul p {
    font-weight: bold;
}

.footer ul a {
  color:inherit;
  text-decoration:none;
  opacity:0.8;
}

.footer ul a:hover {
  opacity:1;
}

.container {
    display: flex;
    background-color: black;
    margin-left: 2rem;
    justify-content: space-between;
    gap: 2rem;
}

.footer .item.social > a:hover {
  opacity:0.9;
}

}

</style>
    