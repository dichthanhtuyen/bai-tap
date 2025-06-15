let myStore = new Store(1, "Shopee");

function getAll() {
    let list = myStore.getListProduct();
    let html = "";
    for (let i = 0; i < list.length; i++) {
        let product = list[i];
        html += `
                <tr>
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td>${product.quantity}</td>
                    <td><button onclick = "deleteProduct(${product.id})">Xóa</button></td>
                    <td><button onclick = "navigateToUpdate(${product.id})">Sửa</button></td>
                </tr>
        `
    }
    document.getElementById("list_product").innerHTML = html;
}

function addProduct() {
    let list = myStore.getListProduct();
    let id = list.length + 1;
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let quantity = document.getElementById("quantity").value;
    let p = new Product(id, name, price, quantity);
    myStore.add(p);
    navigateToHome();
}

function deleteProduct(id) {
    let isConfirm = confirm("bạn chắc chắn?");
    if (isConfirm) {
        myStore.remove(id);
    }
    navigateToHome();
}


function navigateToHome() {
    document.getElementById("ui").innerHTML = `
     <h2>Danh sách sản phẩm</h2>
        <table border="1" style="border-collapse: collapse;">
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th colspan="2">ACTION</th>
            </tr>
            <tbody id="list_product">

            </tbody>
        </table>  
    `
    getAll();
}

function updateProduct(id) {
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let quantity = document.getElementById("quantity").value;
    let p = new Product(id,name,price,quantity);
    myStore.update(id,p); 
    navigateToHome();
}


function navigateToUpdate(id) {
    let product = myStore.getProductById(id);
    document.getElementById("ui").innerHTML = `
     <h2>Sửa sản phẩm</h2>
        <div>
            <input type="text" placeholder="name" id = "name" value = "${product.name}">
            <br>
            <br>
            <input type="text" placeholder="price" id = "price" value ="${product.price}">
            <br>
            <br>
            <input type="text" placeholder="quantity" id = "quantity" value="${product.quantity}">
            <br>
            <br>
            <button onclick = "updateProduct(${id})">Lưu</button>
        </div>
        `
}


function navigateToAdd() {
    document.getElementById("ui").innerHTML = `
     <h2>Lưu sản phẩm</h2>
        <div>
            <input type="text" placeholder="name" id = "name">
            <br>
            <br>
            <input type="text" placeholder="price" id = "price">
            <br>
            <br>
            <input type="text" placeholder="quantity" id = "quantity">
            <br>
            <br>
            <button onclick = "addProduct()">Lưu</button>
        </div>
    `
}
navigateToHome()