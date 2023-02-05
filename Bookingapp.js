const myform = document.querySelector('#my-form');
const msg = document.querySelector('.msg');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const userList = document.querySelector('#users');




myform.addEventListener('submit', onsubmit);
function onsubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML ='Please enter all field';
        setTimeout(()=> msg.remove(),3000);
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`));
        //userList.appendChild(li);

        let name = nameInput.value;
        let email = emailInput.value;
        
        const userdetails = {
            name,
            email
        }
        var dltbtn = document.createElement('dltbtn');

    //add classes to delete button
    dltbtn.className = 'dltbtn';
    //append text node
    dltbtn.appendChild(document.createTextNode('Delete'));
    //appende button to li
    li.appendChild(dltbtn);

    
    //event for delete
    userList.addEventListener('click',removeItem);
    
    

    function removeItem(e){
        if (e.target.classList.contains('dltbtn')){

            if(confirm('Are you sure?')){
                
                var li  = e.target.parentElement;
                userList.removeChild(li);
                localStorage.removeItem(emailInput.value);
                }
            
        }
        
    }

    var editbtn = document.createElement('editbtm');
    editbtn.className ='editbtn';
    editbtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editbtn);


    userList.appendChild(li);
    
     
       localStorage.setItem(emailInput.value,JSON.stringify(userdetails));
       
       
       

       
        
        

        //Clear field
        nameInput.value='';
        emailInput.value='';
        
    }
}



