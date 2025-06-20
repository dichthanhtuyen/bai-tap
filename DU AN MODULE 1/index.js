function checkLogin() {
    let isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
        showLoginScreen();
    } else {
        showHomePage();
    }
}

function showLoginScreen() {
    document.getElementById("mainContent").innerHTML = `
        <center>
            <div class="login" id="login">
                <h2>Đăng nhập</h2>
                <input type="text" placeholder="Nhập tài khoản" id="username">
                <br>
                <br>
                <input type="password" placeholder="Mật khẩu" id="password">
                <br>
                <br>
                <button onclick="login()">Đăng nhập</button><span> Hoặc </span><button onclick ="showSigninScreen()">Đăng ký</button>
            </div>
        </center>   
        `
}

function showHomePage() {
    document.getElementById("mainContent").innerHTML = `
        <button onclick="logout()" style="float: right;">Đăng xuất</button>
        <center>
        <H2 style="text-align: center; margin-top: 40px;">HÓA ĐƠN BÁN HÀNG</H2>
            <button onclick="goToDetail()">Chi tiết hóa đơn</button>
            <div id="homePage"></div>   
        </center>
        `
}

function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let message = document.getElementById("message");
    let storedUser = localStorage.getItem(user);

    if (!storedUser) {
        message.textContent = "Tài khoản không tồn tại!";
        return;
    }
    let userData = JSON.parse(storedUser);

    if (pass === userData.password) {
        localStorage.setItem("isLoggedIn", "true");
        showHomePage();
    } else {
        message.textContent = "Sai mật khẩu!";
    }
}

function signin() {
    let signinun = document.getElementById("signinun").value.trim();
    let signinps = document.getElementById("signinps").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let message = document.getElementById("message");

    if (!signinun || !signinps || !confirmPassword) {
        message.textContent = "Vui lòng nhập đầy đủ thông tin.";
        return;
    }

    if (signinps !== confirmPassword) {
        message.textContent = "Mật khẩu không khớp.";
        return;
    }

    if (localStorage.getItem(signinun)) {
        message.textContent = "Tên đăng nhập đã tồn tại.";
        return;
    }

    let userData = {
        username: signinun,
        password: signinps
    };

    localStorage.setItem(signinun, JSON.stringify(userData));
    message.style.color = "green";
    message.textContent = "Đăng ký thành công!";
}

function logout() {
    localStorage.removeItem("isLoggedIn");
    showLoginScreen();
}

function showSigninScreen() {
    document.getElementById("mainContent").innerHTML = `
     <center>
        <div class="signin" id="signin">
            <h2>Đăng ký</h2>
            <label for="">Tên đăng nhập </label><input type="text" placeholder="Nhập tài khoản" id="signinun">
            <br>
            <br>
            <label for="">Mật khẩu </label><input type="password" placeholder="Nhập mật khẩu" id="signinps">
            <br>
            <br>
            <label for="">Nhập lại mật khẩu </label><input type="password" placeholder="Nhập lại mật khẩu" id="confirmPassword">
            <br>
            <br>
            <p id="message" style="color:red;"></p>
            <button onclick = "signin()">Đăng ký</button>
            <br>
            <button onclick = "showLoginScreen()">Quay lại đăng nhập</button>
        </div>
    </center>     
        `
}

let newInvoice = new Invoice(1, 'Công ty A');

function getInvoiceData(list) {

    let html = "";
    let grandTotal = 0;
    let totalAmount = 0;
    let totalTax = 0;
    for (let i = 0; i < list.length; i++) {
        let item = list[i];
        let amount = item.quantity * item.price;
        let tax = amount * item.vat;
        let total = amount + tax;
        totalAmount += amount;
        totalTax += tax;
        grandTotal += total;
        html += `
                    <tr>    
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.quantity}</td>
                    <td>${item.price.toLocaleString()}</td>
                    <td>${amount.toLocaleString()}</td>
                    <td>${item.vat}</td>
                    <td>${tax.toLocaleString()}</td>
                    <td><button onclick ="deleteItem(${item.id})">Xóa</button></td>
                    <td><button onclick ="goToUpdate(${item.id})">Sửa</button></td>
                </tr>
    `
    }
    html += `
                <tr>
                    <td colspan="6">Tổng tiền chưa bao gồm VAT</td>
                    <td>${totalAmount.toLocaleString()}</td>
                </tr>
                <tr>
                    <td colspan="6">VAT</td>
                    <td>${totalTax.toLocaleString()}</td>
                </tr>
                <tr>
                    <td colspan="6">Tổng tiền bao gồm VAT</td>
                    <td>${grandTotal.toLocaleString()}</td>
                </tr>
                <br>
                
    `
    document.getElementById("list_Item").innerHTML = html;
}

function addItem() {
    let list = newInvoice.getListItem();
    let id = list.length + 1;
    let name = document.getElementById("name").value;
    let quantity = Number(document.getElementById("quantity").value);
    let price = Number(document.getElementById("price").value);
    let vat = Number(document.getElementById("vat").value);
    let item = new Item(id, name, quantity, price, vat);
    newInvoice.add(item);
    goToDetail();
}

function deleteItem(id) {
    let isConfirm = confirm("Bạn đồng ý xóa?");
    if (isConfirm) {
        newInvoice.remove(id);
        let list = newInvoice.getListItem();
        getInvoiceData(list);
    }
}

function searchItemByName() {
    let nameSearch = document.getElementById("search").value;
    let priceFrom = +document.getElementById("priceFrom").value;
    let priceTo = +document.getElementById("priceTo").value;
    if (!priceFrom) priceFrom = -Infinity;
    if (!priceTo) priceTo = Infinity;
    let list = newInvoice.getListByName(nameSearch, priceFrom, priceTo);
    getInvoiceData(list);
}

function goToDetail() {
    document.getElementById("homePage").innerHTML = `
        <P>Thông tin chi tiết hóa đơn</P>
            <label for="">Tên đơn vị </label><input type="text" placeholder="Nhập tên người mua" value="${newInvoice.customer}">
            <br>
            <br>
            <input type="text" placeholder="Tìm kiếm" id="search" oninput = "searchItemByName()">
            <br>
            <input type="number" placeholder="Giá từ" id="priceFrom" oninput = "searchItemByName()">
            <br>
            <input type="number" placeholder="Giá đến" id="priceTo" oninput = "searchItemByName()">
            <br>
            <br>
            <button onclick="goToAdd()">Thêm hàng hóa</button>
            <br>
            <br>

            <table border="1">
                <tr>
                    <th>STT</th>
                    <th>Tên hàng hóa</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                    <th>VAT</th>
                    <th>Tiền thuế</th>
                </tr>
                <tbody id="list_Item">
                </tbody>
            </table>
        `
    newInvoice.getDataInStorage();
    let list = newInvoice.getListItem();
    getInvoiceData(list);
}

function goToAdd() {
    let list = newInvoice.getListItem();
    document.getElementById("homePage").innerHTML = `
            <p>Thêm hàng hóa vào hóa đơn</p>
            <input type="text" placeholder="Thêm hàng hóa" id="name"><br><br>
            <input type="text" placeholder="Số lượng" id="quantity"><br><br>
            <input type="text" placeholder="Đơn giá" id="price"><br><br>
            <input type="number" placeholder="VAT" id="vat"><br><br>
            <button onclick="addItem()">Thêm</button>
            <br>
            <br>
            <table border="1">
                <tr>
                    <th>STT</th>
                    <th>Tên hàng hóa</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                    <th>VAT</th>
                    <th>Tiền thuế</th>
                </tr>
                <tbody id="list_Item">
                </tbody>
            </table>
        `
    getInvoiceData(list);
}

function updateItem(id) {
    let name = document.getElementById("name").value;
    let quantity = Number(document.getElementById("quantity").value);
    let price = Number(document.getElementById("price").value);
    let vat = Number(document.getElementById("vat").value);
    let item = new Item(id, name, quantity, price, vat);
    newInvoice.update(id, item);
    goToDetail();
}

function goToUpdate(id) {
    let item = newInvoice.getItemById(id);
    document.getElementById("homePage").innerHTML = `
            <p>Chỉnh sửa dòng hàng</p>
            <input type="text" placeholder="Thêm hàng hóa" id="name" value="${item.name}"><br><br>
            <input type="text" placeholder="Số lượng" id="quantity" value="${item.quantity}"><br><br>
            <input type="text" placeholder="Đơn giá" id="price" value="${item.price}"><br><br>
            <input type="number" placeholder="VAT" id="vat" value="${item.vat}"><br><br>
            <button onclick="updateItem(${id})">Lưu</button>
    `
}

checkLogin();
