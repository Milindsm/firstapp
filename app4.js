var form = document.getElementById('addForm');
var itemlist = document.getElementById('items');
var filter = document.getElementById('filter');

//Form Submit Event
form.addEventListener('submit',addItem);

//Delete item
itemlist.addEventListener('click',removeItem);

//filter even
filter.addEventListener('keyup',filterItems);

//Add item
function addItem(e){
    e.preventDefault();

    //Get Input Value
    var newItem = document.getElementById('item').value;
    var decr = document.getElementById('discription').value;

    //Create new Li element
    var li = document.createElement('li');
    //Add Class
    li.className = 'list-group-item';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(" "+decr));
    

    //create del button element
    var dltbtn = document.createElement('button');

    //add classes to delete button
    dltbtn.className = 'btn btn-danger btn-sm float-right delete';
    //append text node
    dltbtn.appendChild(document.createTextNode('X'));
    //appende button to li
    li.appendChild(dltbtn);
    //append li to list

    //create edit button
    var editbtn = document.createElement('button');
    editbtn.className ='btn btn-sm float-right edit';
    editbtn.appendChild(document.createTextNode('edit'));
    li.appendChild(editbtn);

    
    itemlist.appendChild(li);
}

//Function remove item
function removeItem(e){
    if (e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li  = e.target.parentElement;
            itemlist.removeChild(li);
            
        }
    }
}



//Filter Item
function filterItems(e){
    //convert tect to lowercase
    var text = e.target.value.toLowerCase();
    //Get list
    var items = itemlist.getElementsByTagName('li'); 
    //convert to array
    Array.from(items).forEach(function(item){
        var  itemName =  item.firstChild.textContent;
        var descritpion = item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 || descritpion.toLowerCase().indexOf(text) !=-1){
            item.style.display ='block';

        }else{
            item.style.display ='none';
        }
    });
}