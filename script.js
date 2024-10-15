let id = 0; //creating a variable set to 0

//calling the submit button with the tag from the HMTL page, created afunction to insert new cells and rows for the data being added
document.getElementById("submit").addEventListener("click", () => {
  let table = document.getElementById("list");
  let row = table.insertRow(1);
  row.setAttribute("id", "");
  row.insertCell(0).innerHTML = document.getElementById("new-item-name").value;
  row.insertCell(1).innerHTML = document.getElementById("new-size").value;
  row.insertCell(2).innerHTML =
    document.getElementById("new-return-reason").value;
  let actions = row.insertCell(3);
  actions.appendChild(createDeleteButton(id++));
  document.getElementById("new-item-name").value = "";
  document.getElementById("new-size").value = "";
  document.getElementById("new-return-reason").value = "";
});

//created a delete button to remove the child from the parent item, the child being the added data. I'm unable to get this to work correctly
function createDeleteButton(id) {
  let btn = document.createElement("button");
  btn.className = "btn btn-secondary";
  btn.innerHTML = "Remove";
  btn.onclick = () => {
    console.log(`deleting row with id: item-${id}`);
    let elementToDelete = document.getElementById(`item-${id}`);
    elementToDelete.removeChild(elementToDelete);
  };
  return btn;
}
