console.log("API de la NASA")
//import fetch from "node-fetch"
const llave = "B4M0OPihTC0U7OFZcfj6PTizGQlDsl21351VamA7"
var urlapi = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-09&api_key=${llave}`

async function ejemploMeteoritos(url){
    const respuestaapi =await fetch(url)
    const respuestajson = await respuestaapi.json()

    var meteoritos = respuestajson.near_earth_objects
    //meteoritos["2015-09-11"] //HARDCODEADO
    //De esta manera recorremos las llaves (fechas) de manera automatica 
    Object.keys(meteoritos).forEach((elemento,indice,arreglo)=>{
        var listaxDia=meteoritos[elemento]
        /*for(let i=0;i <listaxDia.length;i++){
           if(listaxDia[i].is_potentially_hazardous_asteroid){
             console.log(`El meteorito ${listaxDia[i].name} es potencialmente peligroso`)
           }
           else{
            console.log(`El meteorito ${listaxDia[i].name} NOO es potencialmente peligroso`)
           }
        }*/
        // mismo codigo pero con for each
        listaxDia.forEach((elemento,indice,arreglo)=>{
            if(elemento.is_potentially_hazardous_asteroid){
                console.log(`El meteorito ${elemento.name} es potencialmente peligroso`)
            }else{
                console.log(`El meteorito ${elemento.name} NOO es potencialmente peligroso`)
            }
        })


    })
}


//console.log(ejemploMeteoritos(urlapi))

//FOTOS DE MARTE
var rover = "curiosity"
var contadorpag =1
var urlMarte = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=1000&page=${contadorpag}&api_key=${llave}`
async function fotosMarte(contadorp){
    urlMarte = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=1000&page=${contadorp}&api_key=${llave}`
    console.log(urlMarte)
    var respuestaApi = await fetch(urlMarte)
    var respuestaApiJson = await respuestaApi.json()
    var listaFotos =respuestaApiJson.photos
    var botonsiguiente = document.getElementById("pagsig")
    console.log(listaFotos.length)
    if (listaFotos.length>=25 ){
        //contadorpag++
        
        console.log("Removiendo clase")
        botonsiguiente.classList.remove("escondido")
    }
    var contenedor = document.getElementById("contenedorCartas")
    contenedor.innerHTML = ""
    listaFotos.forEach((elemento,indice,arreglo)=>{
        contenedor.innerHTML += `<div class="card mb-2 col-sm-12 col-md-6 col-lg-4" style="width: 18rem;">
        <img src=${elemento.img_src} class="card-img-top" style="height: 100%; alt=${elemento.id}>
        <div class="card-body">
          <h5 class="card-title">${elemento.camera.full_name}</h5>
          <p class="card-text">${elemento.earth_date}</p>
          
        </div>
            </div> 
        `

    })
    //console.log(respuestaApiJson.photos[0].camera)
    //console.log(respuestaApiJson.photos[0].rover)
}
async function siguientepag(){
    var selectrover =document.getElementById("robot")
    contadorpag = contadorpag +1
    rover  =selectrover.value
    fotosMarte(contadorpag)
}
function buscar(){
    var selectrover =document.getElementById("robot")
    rover  =selectrover.value
    fotosMarte(contadorpag)
}



//fotosMarte(urlMarte)