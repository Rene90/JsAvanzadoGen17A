console.log("API de la NASA")
import fetch from "node-fetch"
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

var urlMarte = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=${llave}`

async function fotosMarte(url){
    var respuestaApi = await fetch(url)
    var respuestaApiJson = await respuestaApi.json()
    console.log(respuestaApiJson.photos[0].camera)
    console.log(respuestaApiJson.photos[0].rover)
}



fotosMarte(urlMarte)