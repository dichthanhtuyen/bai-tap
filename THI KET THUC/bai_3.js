let so1 = new SOTIETKIEM("00001","Loại 1","Tuyền","123456789","03/06/2025",100000000);
let list = [so1];
function getAll(){
    let html = "";
    for (let i = 0; i < list.length; i++) {
        let sotk = list[i];
        html +=`
        <tr>
                            <td>${sotk.maso}</td>
                            <td>${sotk.loaitk}</td>
                            <td>${sotk.tenkh}</td>
                            <td>${sotk.cmnd}</td>
                            <td>${sotk.ngay}</td>
                            <td>${sotk.sotien}</td>
              </tr>
        `   
}
document.getElementById("listso").innerHTML = html;
}

function goToThem(){
    document.getElementById("them").innerHTML =`
    <center>
    <h3>Thêm Tổ tiết kiệm</h3>
        <input type="text" placeholder="Mã sổ" id="maso">
        <br>
        <input type="text" placeholder="Loại tiết kiệm" id="loai">
        <br>
        <input type="text" placeholder="Họ tên khách hàng" id="ten">
        <br>
        <input type="number" placeholder="Chứng minh nhân dân" id="cmnd">
        <br>
        <input type="date" placeholder="Ngày mở sô" id="ngay">
        <br>
        <input type="number" placeholder="Số tiền" id="sotien">
        <br>
        <button onclick="themso()">Lưu</button>
        <button onclick="navigateToHome()">Hủy</button>
        </center>
    `
}

function themso(){
    let maso = document.getElementById("maso").value;
    let loai = document.getElementById("loai").value;
    let ten = document.getElementById("ten").value;
    let cmnd = document.getElementById("cmnd").value;
    let ngay = document.getElementById("ngay").value;
    let sotien = +document.getElementById("sotien").value;
    let somoi = new SOTIETKIEM(maso,loai,ten,cmnd,ngay,sotien);
    list.push(somoi);
    alert("Thêm thành công!");
    navigateToHome();
}

function navigateToHome() {
    document.getElementById("them").innerHTML = "";
    document.getElementById("ui").innerHTML =`
    <h2 style="text-align: center;">Thông tin sổ tiết kiệm</h3>
            <center>
                <button onclick="goToThem()">Thêm sổ tiết kiệm</button>
                <button onclick="goToXoa()">Xóa sổ tiết kiệm</button>
                <br>
                <br>
                <table border="1" style="border-collapse: collapse; text-align: center;">
                    <tr>
                        <th>Mã số</th>
                        <th>Loại tiết kiệm</th>
                        <th>Họ tên khách hàng</th>
                        <th>Chứng minh nhân dân</th>
                        <th>Ngày mở sổ</th>
                        <th>Số tiền gửi</th>
                    </tr>
                    <tbody id="listso">

                    </tbody>
                </table>
            </center>
    `
getAll()
}

function goToXoa() {
  document.getElementById("them").innerHTML = `
    <h3 style="text-align: center;">Xóa sổ tiết kiệm</h3>
    <center>
      <input type="text" id="masoXoa" placeholder="Nhập mã sổ cần xóa"><br><br>
      <button onclick="xoaSo()">Xóa</button>
      <button onclick="navigateToHome()">Hủy</button>
    </center>
  `;
}

function xoaSo() {
  let maso = document.getElementById("masoXoa").value.trim();
  if (!maso) {
    alert("Vui lòng nhập mã sổ!");
    return;
  }

  let index = -1;
for (let i = 0; i < list.length; i++) {
  if (list[i].maso === maso) {
    index = i;
    break;
  }
}
  if (index === -1) {
    alert("Mã sổ không tồn tại. Vui lòng nhập lại!");
    return;
  }

  let confirmXoa = confirm(`Bạn có chắc chắn muốn xóa sổ tiết kiệm mã số ${maso}?`);
  if (confirmXoa) {
    list.splice(index, 1);
    alert("Xóa thành công!");
    navigateToHome();
  }
}

navigateToHome();