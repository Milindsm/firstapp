var items = document.getElementsByClassName('list-group-item');
console.log(items);
items[2].style.backgroundColor = "green";

for(var i = 0; i<items.length; i++){
    items[i].style.fontWeight ="bold";
    items[i].style.color = "red";
}


var li = document.getElementsByTagName('li');
console.log(li);
li[4].style.fontWeight = "bold";
li[4].style.backgroundColor ='pink';