
//Seleccionar un elemento

    //titulo
var title = document.getElementById('titulo');
var lista = document.getElementsByClassName('lista');
title.innerHTML='Franlex';
    
    //lista
var elements = document.getElementsByClassName('lista-elemento');
elements[0].innerHTML='Yo soy el 1er elemento';
elements[1].innerHTML='Hola, segundo';
elements[2].innerHTML='Franlex tercero';



//Modificar el href de un elemento
var el =document.getElementById('link');
el.href='https://www.sololearn.com/profile/15598020';

//Agregar link a un elemento que no tiene href
var a =document.getElementById('nolink');
a.href='https://www.youtube.com/';


//Modificar los estilos
var x =document.getElementById('fondo');
x.style.color='red';
x.style.backgroundColor='lightgreen';
x.style.padding='3rem'

var color = document.getElementsByClassName('lista-elemento');
color[0].style.color='black';
color[1].style.color='green';
color[2].style.color='brown';

//Cambiar el nombre id de algun elemento
titulo.setAttribute('id','otro-valor');
fondo.setAttribute('id','nuevoFondo');
nolink.setAttribute('id','sinlink');


//Remover un atributo
titulo.removeAttribute('id');

















//Agregar un elemento al documento

const h2 = document.createElement('h2');
console.log(h2);
h2.innerText='Otro titulo';

const fondo=document.querySelector('fondo');
body.appendChild(h2);


//solo learn:

var p =document.createElement('p');
// p.innerText='Some new text.';
var node=document.createTextNode('Create some new text');
p.appendChild(node);

var div=document.getElementById('fondo');

div.appendChild(p);



//Agregar un elemento a la lista:


const li = document.querySelector('li');
li.innerText='Nuevo elemento a la lista';
li.classList.add('lista-elemento');

const lista=document.querySelector('lista');

lista.appendChild(li);