function renderDssv() {
    var contentHTML = "";
    //duyet mang
    for (let i = 0; i < dssv.length; i++) {
      var data = dssv[i];
      var trString = `<tr> 
                          <td>${data.ma}</td> 
                          <td>${data.ten}</td> 
                          <td>${data.email}</td> 
                          <td> 0 </td>
                          <td>
                            <button onclick= "xoaSv('${data.ma}')" class= "btn btn-danger">xoá</button>
                            <button class= "btn btn-warning">sửa</button>
                          </td>
                      </tr>`;
      contentHTML = contentHTML + trString;
    }
    document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}
