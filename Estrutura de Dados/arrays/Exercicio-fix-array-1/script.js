let array = ["M4-A1", "AK-47", "M95"];
let text = document.getElementById("input");
let addBtn = document.getElementById("addBtn");
let orderBtn = document.getElementById("orderBtn");

addBtn.addEventListener("click",  () => {
const inputText = text.value
  if (text === "") {
    array.push(inputText);
    console.warn(array);
  } else console.log("Informe um valor válido");
});

orderBtn.addEventListener("click", () => {
  array.sort();
  console.warn(array);
});
