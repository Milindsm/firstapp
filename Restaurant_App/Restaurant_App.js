var selectedRow= null;
function onformsubmit(e){

    event.preventDefault();
    var formData= readFromData();
    var readData = readingDataFromLocalStorage(formData);
    
    if(selectedRow === null){
        
        inserNewRecord(formData);
        msg.innerHTML ="Order  Inserted"
        
    }
    else{
        updateRecord(formData);
        msg.innerHTML ="Order Updated"
        
    }
    
    resetform();
}

//Data in local storage
function readingDataFromLocalStorage(formData){
    //storing data in local storage
   var n = window.localStorage.setItem(tableno.value,JSON.stringify(formData))
   //getting values from localstorage to table on screen
    var a = window.localStorage.getItem(tableno.value); 
    return a

}





//function to retrive the data
function readFromData(){
    var formData ={};
    formData['tableno'] = document.getElementById('tableno').value;
    formData['dish'] = document.getElementById('dish').value;
    formData['price'] = document.getElementById('price').value;
    formData['quantity'] = document.getElementById('quantity').value;
    
    return formData;    

}



//insert the data on the same screen
//to display all the data on the screen

function inserNewRecord(data){
    var table = document.getElementById("storelist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length)
    cell1= newRow.insertCell(0);
        cell1.innerHTML=data.tableno;
    cell2= newRow.insertCell(1);
        cell2.innerHTML=data.dish;
    cell3= newRow.insertCell(2);
        cell3.innerHTML=data.price;
    cell4= newRow.insertCell(3);
        cell4.innerHTML=data.quantity;
    cell5= newRow.insertCell(4);
        cell5.innerHTML=`<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`;
}


//Edit data function (when user enetrs the data in input fileds)
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('tableno').value = selectedRow.cells[0].innerHTML;
    document.getElementById('dish').value = selectedRow.cells[1].innerHTML;
    document.getElementById('price').value = selectedRow.cells[2].innerHTML;
    document.getElementById('quantity').value = selectedRow.cells[3].innerHTML;
}
// when user cliks sumbit the updated data will be here
// if we not define this function so the updated data will be created on next row
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.tableno;
    selectedRow.cells[1].innerHTML = formData.dish;
    selectedRow.cells[2].innerHTML = formData.price;
    selectedRow.cells[3].innerHTML = formData.quantity;
}


//Delete the data
function onDelete(td){
    if(confirm('Do you want to Delete this order ?')){
        row= td.parentElement.parentElement;
    document.getElementById('storelist').deleteRow(row.rowIndex)
    
    }
    
    resetform();
}



//Reset the data
function resetform(){
    document.getElementById('tableno').value ='';
    document.getElementById('dish').value ='';
    document.getElementById('price').value ='';
    document.getElementById('quantity').value ='';
}