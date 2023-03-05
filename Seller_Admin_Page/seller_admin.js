let submitBtn = document.getElementById("submitBtn");


//Read data from local storage and print it on the screen
function setLocalStorage(){
    if(localStorage.getItem("SellerProducts")){
        let showDiv =document.getElementById("show");
        showDiv.innerHTML = ""
        let arr = JSON.parse(localStorage.getItem("SellerProducts"));

        axios.get('https://crudcrud.com/api/cc931506e0f942f596ac697ebc7e8129/SellerProducts')
        .then(res=>{
            console.log("Getting Data",res.arr)
            setData(res.arr)})
        .catch(err=>console.log(err))
        
        arr.forEach((item,id) => {
            let newDiv = document.createElement("div");
            newDiv.setAttribute("class","newData");
            let htmldata=`Category:<span>${item.category}</span>
            Product:<span> ${item.product}</span>
            Price:<span>${item.price}</span>
            <button onClick='onDelete(${id})'>Delete</button>
            <button id="btnEdit" onClick='onEdit(${id})'>Edit</button>`;
            
            //it will add the html on the page while adding new element in next row
           newDiv.insertAdjacentHTML("afterbegin",htmldata);
           showDiv.insertAdjacentElement("afterbegin",newDiv)
        });
    }
     else{
         let arr=[]
        let arrData={
            price:"",
            product:""
        }
        arr.push(arrData)
         localStorage.setItem("SellerProducts",JSON.stringify(arr))
    }

}

// setTimeout(()=>{
//     setLocalStorage()
// },2000);

setLocalStorage()

//function for submitBtn to add data
submitBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    let arr = JSON.parse(localStorage.getItem("SellerProducts"));
    let product = document.getElementById("name").value;
    let price = document.getElementById("number").value;
    let category = document.getElementById("order").value;

    if(product.length<=0 && price.length<=0){
        alert("Something went wrong!")
    }else if(product.length>0 && price.length>0 && category.length>0){
        let arrData={
            product: product,
            price : price,
            category : category
        }

        axios.post('https://crudcrud.com/api/cc931506e0f942f596ac697ebc7e8129/SellerProducts',arrData )
        .then(res=>console.log("Data Posted!",res))
        .catch(err=>console.log(err))
        
        arr.push(arrData);
        localStorage.setItem("SellerProducts",JSON.stringify(arr));
        setLocalStorage(); 
        
        
    }

})


//Delete 

function onDelete(id){
    let arr=JSON.parse(localStorage.getItem("SellerProducts"));
    let deleteArr=[...arr];
    deleteArr.splice(id,1)
    arr=[...deleteArr]
    localStorage.setItem("SellerProducts",JSON.stringify(arr))
    
    setLocalStorage()
}


//Edit

function onEdit(id){
    //to get the data from localstorage and reassign the data as per their labels using thier ID tp the form for editing
    let arr=JSON.parse(localStorage.getItem("SellerProducts"));
    let product = document.getElementById("name").value = arr[id].product;
    let price = document.getElementById("number").value = arr[id].price;
    let category = document.getElementById("order").value = arr[id].category;

    submitBtn.setAttribute("disabled",true)

    let editBtn= document.createElement("button");
    let form = document.getElementById("form");
    let btnEdit=document.querySelectorAll("#btnEdit");
    editBtn.innerHTML="Update";

    btnEdit.forEach((elements)=>{
        //when an edit is going on other edit button will disabled
        elements.setAttribute("disabled",true)
    })  
    //adds update button before form tag ends
    form.insertAdjacentElement("beforeend",editBtn)

    editBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        let newProduct = document.getElementById("name");
        let newPrice = document.getElementById("number");
        let newCategory = document.getElementById("order")
        arr.splice(id,1,{product:newProduct.value,price:newPrice.value,category:newCategory.value});
        localStorage.setItem("SellerProducts",JSON.stringify(arr))
        
        setLocalStorage();
        newProduct.value=""
        newPrice.value=""
        newCategory.value=""
        //to remove update button after editing
        form.removeChild(form.lastElementChild)
        submitBtn.removeAttribute("disabled")

    })
}
