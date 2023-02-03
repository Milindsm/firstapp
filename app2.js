// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// //items[1].style.backgroundColor = "green";
// //items[2].style.backgroundColor = "green";
// //items[2].style.display ="none";


// for(var i = 0; i<items.length; i++){
//     items[i].style.fontWeight ="bold";
//     items[i].style.color = "red";
// }


// var li = document.getElementsByTagName('li');
// console.log(li);
// li[4].style.fontWeight = "bold";
// li[4].style.backgroundColor ='pink';


// var li2 = document.querySelectorAll('li');
// li[1].style.color = "green";

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = "green";
// }



var itemlist = document.querySelector('#items');
console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor = "grey";

console.log(itemlist.childNodes);
