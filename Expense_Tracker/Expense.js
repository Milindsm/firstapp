const currencyHolder = document.getElementById("currency")
const topCard = document.getElementsByClassName("topbar")

const balanceHolder = document.getElementById("balance")

const tnxNameHolder = document.getElementById("name")

const tnxAmountHolder = document.getElementById("amount")

const income = document.getElementById("income")

const expense = document.getElementById("expense")

const saveButton = document.getElementById("save");

const cancelButton = document.getElementById("cancel")
const displayList = document.getElementById("list_of_transactions");

let symbol ="Rs.";
let listOfTransactions =[];

let currentBalance = 0;

let editIndex = -1;

function edit(i){
    transaction = listOfTransactions[i]
    cancelButton.style.display= "block";
    editIndex=i;
    tnxNameHolder.value = transaction.name;
    if(transaction.type == "income"){
        income.checked = true;
        expense.checked = false;
        }else{
        expense.checked = true;
        income.checked = false;
        }
    tnxAmountHolder.value = transaction.amount;
    
 
}

function del(i){
    listOfTransactions = listOfTransactions.filter((e,index) => i!= index);
    render();

}

const saveData = () =>{
    window.localStorage.setItem("symbol",symbol);
    window.localStorage.setItem("balance",currentBalance);
    window.localStorage.setItem("list",JSON.stringify(listOfTransactions));
}

let cancel = () =>{
   editIndex=-1;
    tnxNameHolder.value ="";
    tnxAmountHolder.value="";
    
    cancelButton.style.display= "none";
    render();
    saveData(); 
}

function loadData(){
symbol =localStorage.getItem("symbol");
listOfTransactions =JSON.parse(setItem("list"));

currentBalance = Number( localStorage.getItem("balance"));

}



function render(){
    currentBalance = 0;

    displayList.innerHTML= "";

    if(listOfTransactions.length == 0){
        displayList.innerHTML = `<h3>No Transations found !</h3>`
    }
    
        listOfTransactions.forEach((e,i) =>{
            displayList.innerHTML =`                
            <li class="transaction ${e.type}">
            <p>${e.name}</p>
            <div class="right_side">
            <p>${symbol}${e.amount}</p>
                <button onclick="edit(${i})"><i class="fa-solid fa-pen-to-square"></i></button>
                <button onclick="del(${i})"><i class="fa-solid fa-trash"></i></button>
            </div>
            </li>`+ displayList.innerHTML;

            if(e.type == "income") currentBalance+= e.amount;
            else currentBalance -= e.amount;
        })
    

    currencyHolder.innerHTML=`${symbol}`;
    balanceHolder.innerHTML=`${currentBalance}`;

    
}
render();    
saveData();



//after sumbit add the list

saveButton.addEventListener("click",() =>{
    let name = tnxNameHolder.value;
    let amount = Number(tnxAmountHolder.value);
    let type = income.checked? "income": "expense"
    

    if(name == "" || amount == 0){
        alert("Name and amount can't be empty");
        return;
    }

    if(amount < 0){
        alert("Negetive amounts are not allowed");
        return;
    }

    let transaction = {
        name,
        amount, 
        type,
    }
    if(editIndex == -1) listOfTransactions.push(transaction);
    else{
        listOfTransactions[editIndex] = transaction;
        editIndex = -1;
        cancelButton.style.display = "none"
    }
    tnxNameHolder.value = "";
    tnxAmountHolder.value = "";
    render();
    saveData();

    axios.post('https://crudcrud.com/api/489962127ce746f7a8d64c8d5508516f/Transaction',transaction)
    .then(res=>res)
    .catch(error=>console.log(error));


    
    
})





