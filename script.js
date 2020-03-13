// selection getElementById
const container = document.getElementById('container');
// console.log(container)
container.style.backgroundColor = 'lightblue'

const header = document.getElementById('header')
header.innerHTML = '<h1>ini judul baru </h1>';

// selection getElementsByTagName
const li = document.getElementsByTagName('li');
for (let i = 0; i < li.length; i++) {
    li[i].style.color= 'blue';
}

// selection getElementsByClassName
const p1 = container.getElementsByClassName('p1')[0];
p1.innerHTML = 'p yang sudah di edit'

// selection querySelector
const link = container.querySelector('a');
link.style.textDecoration="none";
link.style.color="red";
// selection querySelectorAll
const content = container.querySelectorAll('#content p')
content.forEach(function(e){
    e.style.backgroundColor= 'salmon'
})

link.setAttribute('class','link')
const textBaru = document.createTextNode('paragraf baru');
const pBaru = document.createElement('p')

pBaru.appendChild(textBaru);
console.log(pBaru)

const contentP = document.getElementById('content')
contentP.appendChild(pBaru);

const h1Judul = document.querySelector('h1');
h1Judul.addEventListener('dblclick', function (){
    const ul = document.querySelector('ul');
    console.log(ul)
    ul.style.backgroundColor='lightgreen'
});

function helloWorld() {
    alert('hello')
}

console.log(link)
link.onclick = function(e) {
    console.log(e.target)
    e.target.style.backgroundColor = 'yellow'
}