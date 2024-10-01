/*let identificador, etiqueta;
//antes de colocar el numero, primero es el nombre de la variable para ver el numero que ocupamos
 
//getElementByID
 
seccion = document.getElementsByTagName("section");
console.log(seccion[0].innerText);
 
//getElementByTagName
 
seccion = document.getElementsByTagName("section");
console.log(seccion[0].innerText);
 
etiqueta = document.getElementsByTagName("p");
console.log(etiqueta[0].innerText);
 
//getElementbyClassName
 
clase = document.getElementsByClassName("parrafo");
console.log(clase[1].innerText);
 
//getElementbyName
 
nombre = document.getElementsByName("subtitulo")
console.log(nombre[1].textContent); //textContent o innerTexto, se pueden usar ambos
 
// crear un modo en el DOM
 
let elemento, contenido;
elemento = document.createElement("p");
contenido = document.createTextNode("Nuevo parrafo");
elemento.appendChild(contenido);
//etiqueta[2].appendChild(elemento);
//seccion[1].insertBefore(elemento, etiqueta[2]);
etiqueta[2].insertAdjacentElement("beforebegin", elemento);
//etiqueta[2].insertAdjacentElement("afterbegin", elemento);
//etiqueta[2].insertAdjacentElement("beforeend", elemento);
//etiqueta[2].insertAdjacentElement("afterend", elemento);
 
//Reemplazar NODO
elemento = document.createElement("p");
contenido = document.createTextNode("Reemplazo");
elemento.setAttribute("class", "parrafo")
elemento.appendChild(contenido);
seccion[1].replaceChild(elemento, clase[0]);
 
//eliminar nodo
 
seccion[0].removeChild(nombre[0]);
 
//crear nodo dentro de otro nodo
 
elemento = document.createElement("article");
contenido = document.createTextNode("Articulo e Sección");

 
elemento.appendChild(contenido);
document.getElementById("nodo").appendChild(elemento);
//seccion[2].appendChild("elemento2");
 
//Inseertar Contenido en un NODO
 
document.getElementById("contenido").innerHTML = 'Hola <br/> <p class = "nuevo"> Otro parrafo en el Nodo </p>';
document.getElementById("enlace").innerHTML = "Google";
 
//cambiar atributos de un NODO
 
etiqueta[0].setAttribute("class", "parrafo nuevo");
etiqueta[2].setAttribute("class", "contenido");
etiqueta[3].setAttribute("class", "contenido");
 
// Eatilos (Cambiar el fomdo)
document.getElementById("titulo").style.background = '#f00';
document.getElementById('contenido').style.marginTop = '30px';
document.getElementById("contenido").style.background = '#6b098c';*/


//Actividad
// Primer artículo con texto
let nuevo = document.createElement("article");
let texto = document.createTextNode("Mi Foto");
nuevo.appendChild(texto);
document.getElementById("nuevo").appendChild(nuevo);

// Segundo artículo con imagen
nuevo = document.createElement("article");
let image = document.createElement("img");
image.setAttribute('src', './imagen/m.png');  // Ruta de la imagen subida
nuevo.appendChild(image);

// Inserta el segundo artículo en el mismo contenedor
document.getElementById("nuevo").appendChild(nuevo);


    






























