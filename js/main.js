document.getElementById("btnAdd").addEventListener("click", addList); // 추가
document.getElementById("btnDelAll").addEventListener("click", delAllEle); // 전체삭제
document.getElementById("btnDelLast").addEventListener("click", delLastEle); // 마지막 요소 삭제
document.getElementById("DeleteSel").addEventListener("click", delSelected); // 선택 삭제
// 추가
function addList() {
  let contents = document.querySelector(".text-basic");
  if (!contents.value) {
    alert("내용을 입력해주세요.");
    contents.focus();
    return false;
  }
  let tr = document.createElement("tr");
  let input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("class", "btn-chk");
  let td01 = document.createElement("td");
  td01.appendChild(input);
  tr.appendChild(td01);
  let td02 = document.createElement("td");
  td02.innerHTML = contents.value;
  tr.appendChild(td02);
  document.getElementById("listBody").appendChild(tr);
  contents.value = "";
  contents.focus();
}
// 전체삭제
function delAllEle() {
  let list = document.getElementById("listBody");
  let listChild = list.children;
  for (let i = 0; i < listChild.length; i++) {
    list.removeChild(listChild[i]);
    i--;
  }
}
// 마지막 항목 삭제
function delLastEle() {
  let body = document.getElementById("listBody");
  let list = document.querySelectorAll("#listBody > tr");
  if (list.length > 0) {
    let liLen = list.length - 1;
    body.removeChild(list[liLen]);
  } else {
    alert("삭제할 항목이 없습니다.");
    return false;
  }
}
// 선택 삭제
function delSelected() {
  let body = document.getElementById("listBody");
  let chkbox = document.querySelectorAll("#listBody .btn-chk");
  for (let i in chkbox) {
    if (chkbox[i].nodeType == 1 && chkbox[i].checked == true) {
      body.removeChild(chkbox[i].parentNode.parentNode);
    }
  }
}
