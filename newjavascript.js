/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(inicio);

function inicio()
{
    mostrarRecetas();
    $("#seleccionarPais").change(filtrarPorPais);
    $("#filtrarDificultad").change(filtrarPorDificultad);
    $("#filtrarHorario").change(filtrarPorHrario);
}


function filtrarPorPais(){
    $("#ss").empty();
    var paisSeleccionado=$("#seleccionarPais").val();


  for(var i=0; i<=recetas.length-1;i++)
    {
        if(recetas[i]["pais"]===paisSeleccionado)
        {
            $("#ss").append("<div class='col-lg-4 col-md-6'><a><img src='img/" + recetas[i]['imagen'] + "'></a><h3>"+recetas[i]['titulo']+"</h3><h4>"+recetas[i]['subtitulo']+"</h4><p>"+recetas[i]['tiempo']+""+" MINUTOS"+"</p></div>");
        }
    }
}
function filtrarPorDificultad(){
    $("#ss").empty();
    var dificultadSeleccionada=$("#filtrarDificultad").val();


  for(var i=0; i<=recetas.length-1;i++)
    {
        if(recetas[i]["dificultad"]===dificultadSeleccionada)
        {
            $("#ss").append("<div class='col-lg-4 col-md-6'><a><img src='img/" + recetas[i]['imagen'] + "'></a><h3>"+recetas[i]['titulo']+"</h3><h4>"+recetas[i]['subtitulo']+"</h4><p>"+recetas[i]['tiempo']+""+" MINUTOS"+"</p></div>");
        }
    }
}
function filtrarPorHrario(){
    $("#ss").empty();
    var horarioSeleccionado=$("#filtrarHorario").val();


  for(var i=0; i<=recetas.length-1;i++)
    {
        if(recetas[i]["momentoDia"]===horarioSeleccionado)
        {
            $("#ss").append("<div class='col-lg-4 col-md-6'><a><img src='img/" + recetas[i]['imagen'] + "'></a><h3>"+recetas[i]['titulo']+"</h3><h4>"+recetas[i]['subtitulo']+"</h4><p>"+recetas[i]['tiempo']+""+" MINUTOS"+"</p></div>");
        }
    }
}
function mostrarRecetas()
{
     for (var i = 0; i <= recetas.length - 1; i++)
     {
         $("#ss").append("<div class='col-lg-4 col-md-6'><a href='ampliación.html?posicion="+i+"'><img src='img/" + recetas[i]['imagen'] + "'></a><h3>"+recetas[i]['titulo']+"</h3><h4>"+recetas[i]['subtitulo']+"</h4><p>"+recetas[i]['tiempo']+""+" MINUTOS"+"</p></div>");
     }
}





