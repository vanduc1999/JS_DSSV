var dssv = [];

function themSV() {
  /**
   * 1. tao 1 array rong;
   * 2. lay thong tin tu from => tao object => push object vao array
   * 3. render array object len layout (tao cac the tr tuong ung)
   */
  var _ma = document.getElementById("txtMaSV").value;
  var _ten = document.getElementById("txtTenSV").value;
  var _email = document.getElementById("txtEmail").value;
  var _matKhau = document.getElementById("txtPass").value;
  var _toan = document.getElementById("txtDiemToan").value;
  var _van = document.getElementById("txtDiemVan").value;

  // tao oblect
  var sv = {
    ma: _ma,
    ten: _ten,
    email: _email,
    matKhau: _matKhau,
    toan: _toan,
    van: _van,
  };
  dssv.push(sv);
  renderDssv();
}

function xoaSv(id) {
  /**
   * splice( vi tri can xoa, so luong xoa)
   * 1. tu id tim vi tri => findIndex
   * 2. su dung splice de remove
   * 3. update lai layput
   */
  console.log("xoa-id", id);
  var viTri = dssv.findIndex(function (item) {
    return item.ma == id;
  });
  dssv.splice(viTri, 1);
  renderDssv();
  console.log("vitri - tri tri", viTri);
}
