// - Hoàn thành lại bài quản lý như đã demo (bắt buộc)
// - Nâng cao:  Hoàn thành các tính năng nâng cao của bài quản lý:
// + Tạo 1 ô input cho phép người dùng tìm kiếm theo tên (Nên tạo 1 mảng mới chứa dữ liệu tìm kiếm)
// + Tìm gần đúng
// + Nhập đến đâu lọc dữ liệu đến đó
// + Edit không đùng prompt mà dùng html
// + Lưu dữ liệu (local storage)

// CRUD 

let productNames = [];
function add() {
    let newData = document.getElementById("addProduct").value;
    if (newData !== "") {
        productNames.push(newData);
        getData();
        document.getElementById("addProduct").value = "";
    }
}

function getData() {
    let html = "";
    for (let i = 0; i < productNames.length; i++) {
        html += `
        <tr>
                <td>${productNames[i]}</td>
                <td><button onclick = "edit(${i})">Edit</button></td>
                <td><button onclick = "remove(${i})">Delete</button></td>
            </tr>
        `;
    }
    document.getElementById("data").innerHTML = html;
}

function edit(index) {
    let updateData = prompt("Nhập dữ liệu mới cho " + productNames[index]);
    if (updateData !== null && updateData.trim() !== "") {
        productNames[index] = updateData;
        getData();
    }
}

function remove(index) {
if(confirm("Bạn chắc chắc muốn xóa " + productNames[index])){
    productNames.splice(index, 1);
    getData()
}
}

function search(){
    let nameSearch = document.getElementById("name-search").value;
    let productSearch = [];
    for(let i = 0; i < productNames.length; i++){
        if(productNames[i].toLowerCase().includes(nameSearch.toLowerCase())){
            productSearch.push(productNames[i]);
        }
    }

    let html ="";
    for(let i=0;i<productSearch.length;i++){
        html += `<li>${productSearch[i]}</li>`
    }
    document.getElementById("showdata").innerHTML = html
}   