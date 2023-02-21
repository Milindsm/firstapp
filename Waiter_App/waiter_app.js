
var form = `<div>
  <div class="form-group">
  <label for="order">Choose Category:</label>

  <select name="order" id="order">
    <option value="Electronics">Electronics</option>
    <option value="Food Items">Food Items</option>
    <option value="Grocery">Grocery</option>
    <option value="Kitchen">Kitchen</option>
  </select>
  <br><br>
    <label for="name">Product</label>
    <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Product">
    
    </div>

  <div class="form-group mt-3">
    <label for="email">Price</label>
    <input type="number" class="form-control" id="email" placeholder="Enter Price">
  </div>
  <button type="submit" class="btn btn-primary mt-3" onclick="save()">Save</button>
</div>`;

function table() {
    let table = `<table class="table">
  <thead>
    <tr>
      <th clsaa="col-1">Category</th>
      <th clsaa="col-3">Product</th>
      <th clsaa="col-4">Price</th>
      <th clsaa="col-2">Action</th>
    </tr>
  </thead>
  <tbody>`;
    for (let i = 0; i < details.length; i++){
        table = table + `<tr>
      <td>${details[i].order}</td>
      <td>${details[i].name}</td>
      <td>${details[i].email}</td>
      <td><button type="button" class="btn btn-warning" onclick="edit(${i})">Edit</button></td>
      <td><button type="button" class="btn btn-danger" onclick="deleteData(${i})">Delete</button></td>
      
    </tr> `;
    };
    table = table+`</tbody>
    </table>`;
    document.getElementById("table").innerHTML = table;
};
document.getElementById("form").innerHTML = form;
details = [];
getData();
table();
function getData(){
    axios.get("https://crudcrud.com/api/3c941a5ae2954fca8f176f92dbe9e71b/details" )
     .then((response)=>{
        console.log(response)
     })
     .catch((err)=>{
        console.log(err)
     })
     let Data = localStorage.getItem("details");
     if (Data) {
         details = JSON.parse(Data);
     } else {
         setData();
     };
};
function setData() {
    localStorage.setItem("details", JSON.stringify(details));
    

    
};
function save() {
    let order = document.getElementById("order");
    let name = document.getElementById("name");
    let email = document.getElementById("email");

    if (name.value == 0) {
        alert("name is Empty");
        return
    }
    let data = {
        order: order.value,
        name: name.value,
        email: email.value
    };
    axios.post("https://crudcrud.com/api/3c941a5ae2954fca8f176f92dbe9e71b/details",data )
     .then((response)=>{
        console.log(response)
     })
     .catch((err)=>{
        console.log(err)
     })
    details.push(data);
    
    setData();

    // console.log(details)
    // console.log(email.value)
    table();
    order.value = "";
    name.value = "";
    email.value = "";
};
function deleteData(index) {
    details.splice(index, 1);
    setData();
    table();

    // console.log('delete work')
    // console.log(details)
};

function edit(index) {
    let editForm = `<div>
    <div class="form-group">
  <label for="order">Choose Category:</label>

  <select name="order"value="${details[index].order}"  id="neworder">
    <option value="Electronics">Electronics</option>
    <option value="Food Items">Food Items</option>
    <option value="Grocery">Grocery</option>
    <option value="Kitchen">Kitchen</option>
  </select>
  <br><br>
    
  <div class="form-group">
    <label for="name">Update Name</label>
    <input type="text" value="${details[index].name}" class="form-control" id="newName" aria-describedby="emailHelp" placeholder="Update Your Name">
  </div>
  <div class="form-group mt-3">
    <label for="email">Email</label>
    <input type="email" value="${details[index].email}" class="form-control" id="newEmail" placeholder="Update Your email">
  </div>
  <button type="submit" class="btn btn-primary mt-3" onclick="update(${index})">Update</button>
</div>`;
    document.getElementById("form").innerHTML = editForm;
    // console.log('edit work');
};
function update(index) {
    let neworder = document.getElementById('neworder')
    let newName = document.getElementById('newName');
    let newEmail = document.getElementById('newEmail');

    details[index] = {
        order: neworder.value,
        name: newName.value,
        email: newEmail.value
    };
    setData();
    table();
    document.getElementById("form").innerHTML = form;
// console.log('update work')
// console.log(details)
}



