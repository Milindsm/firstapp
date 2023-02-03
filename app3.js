//PARENT NODE
var itemlist = document.querySelector('#items');

//console.log(itemlist.parentNode);
//itemlist.parentNode.style.backgroundColor ="yellow";

//PARENT ELEMENT
console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor = "grey";

//LAST ELEMENT CHILD
//console.log(itemlist.lastElementChild);
//itemlist.lastElementChild.textContent="HELLO 4"

//LAST CHILD
//console.log(itemlist.lastChild);

//CREATE CHILD

//FIRST ELEMENT CHILD
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent="HELLO 1"

//FIRST CHILD
//console.log(itemlist.firstChild);

//NEXT SIBLING
//console.log(itemlist.nextSibling);

//NEXT ELEMENT SIBLING
//console.log(itemlist.nextElementSibling);      //it will return null because we dont have any sibiling in body

//PREVIOUS SIBLING
console.log(itemlist.previousSibling);     // returns text as beacuse of the space after h2

//PREVIOUS ELEMENT SIBLING
console.log(itemlist.previousElementSibling);


//CREATE ELEMENT
var newDiv= document.createElement("div");
//add class
newDiv.className='hello';

//add id
newDiv.id='hello 1';

//SET ATTRIBUTE
newDiv.setAttribute('title','hello div');



//CREATE TEXT NODE
var newDivText = document.createTextNode('Hello World');

//APPEND CHILD
newDiv.appendChild(newDivText); 

var container = document.querySelector('header.container');
var h1 = document.querySelector('header h1');
console.log(newDiv);

container.insertBefore(newDiv, h1);


