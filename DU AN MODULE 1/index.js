let newInvoice = new Invoice(1, 'Công ty A');

function getInvoiceData() {
    let list = newInvoice.getListItem();
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
                <td><button>Xóa</button></td>
                <td><button>Sửa</button></td>
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
                <td>${totalTax  .toLocaleString()}</td>
            </tr>
            <tr>
                <td colspan="6">Tổng tiền bao gồm VAT</td>
                <td>${grandTotal.toLocaleString()}</td>
            </tr>
            <br>
            
`
    document.getElementById("list_Item").innerHTML = html;
}

function addItem(){
    let list = newInvoice.getListItem();
    let id = list.length+1;
    let name = document.getElementById("name").value;
    let quantity = Number(document.getElementById("quantity").value);
    let price = Number(document.getElementById("price").value);
    let vat = Number(document.getElementById("vat").value);
    let item = new Product(id,name,quantity,price,vat);
    newInvoice.add(item);
    goToDetail();
}

function goToDetail(){
    document.getElementById("homePage").innerHTML = `
    <P>Thông tin chi tiết hóa đơn</P>
        <label for="">Tên đơn vị </label><input type="text" placeholder="Nhập tên người mua">
        <label for="">Mã số thuế </label><input type="text" placeholder="Nhập mã số thuế">
        <label for="">Ngày hóa đơn</label><input type="date">
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
    getInvoiceData( )
}

function goToAdd(){
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
    getInvoiceData();
}
getInvoiceData();
