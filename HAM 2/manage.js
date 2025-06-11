let productNames = [];

function getAllData() {
    let html = '';
    for (let i = 0; i < productNames.length; i++) {
        html += `
            <tr>
                <td>${productNames[i]}</td>
                <td><button onclick = "edit(${i})">edit</button></td>
                <td><button onclick = "remove(${i})">delete</button></td>
            </tr>
            `
    }
    document.getElementById("data").innerHTML = html;

}
getAllData();

function add() {
    let newData = document.getElementById("newProduct").value;
    productNames.push(newData);
    getAllData()
    document.getElementById("newProduct").value = '';
}

function remove(index) {
    let isConfirm = confirm("are you sure ?");
    if (isConfirm) {
        productNames.splice(index, 1);
        getAllData();
    }
}

function edit(index){
let newData = prompt("enter new name of "+ productNames[index]);
if(newData){
productNames[index] = newData;
getAllData()
}
}



