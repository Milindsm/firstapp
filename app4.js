var form = document.getElementById('addForm');
var itemlist = document.getElementById('items');

//Form Submit Event
form.addEventListener('submit',addItem);

//Delete item
itemlist.addEventListener('click',removeItem);

//Add item
function addItem(e){
    e.preventDefault();

    //Get Input Value
    var newItem = document.getElementById('item').value;

    //Create new Li element
    var li = document.createElement('li');
    //Add Class
    li.className = 'list-group-item';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));


    //create edit button
    var editbtn = document.createElement('button');
    editbtn.appendChild(document.createTextNode('edit'));
    li.appendChild(editbtn);
    editbtn.className ='btn btn-sm float-right edit';


    //create del button element
    var dltbtn = document.createElement('button');

    //add classes to delete button
    dltbtn.className = 'btn btn-danger btn-sm float-right delete';
    //append text node
    dltbtn.appendChild(document.createTextNode('X'));
    //appende button to li
    li.appendChild(dltbtn);
    //append li to list

    



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