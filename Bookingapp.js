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
        userList.appendChild(li);

        let name = nameInput.value;
        let email = emailInput.value;
        
        const userdetails = {
            name,
            email
        }

         

        

        
       localStorage.setItem('UserDetails',JSON.stringify(userdetails));
       
        
        

        //Clear field
        nameInput.value='';
        emailInput.value='';
        
    }
}


