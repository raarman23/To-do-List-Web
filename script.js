let count = 0;

document.getElementById("todoForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const polytechnic = document.getElementById("polytechnic").value;
  const classNo = document.getElementById("classNo").value;
  const classDate = document.getElementById("classDate").value;
  const tools = document.getElementById("tools").value;
  const details = document.getElementById("details").value;
  const remarks = document.getElementById("remarks").value;

  const table = document.getElementById("todoTable").querySelector("tbody");
  count++;

  const row = table.insertRow();
  row.innerHTML = `
    <td>${count}</td>
    <td>${name}</td>
    <td>${polytechnic}</td>
    <td>${classNo}</td>
    <td>${classDate}</td>
    <td>${tools}</td>
    <td>${details}</td>
    <td>${remarks}</td>
    <td>
      <button class="editBtn">Edit</button>
      <button class="deleteBtn">Delete</button>
    </td>
  `;

  document.getElementById("todoForm").reset();

  // Edit function
  row.querySelector(".editBtn").addEventListener("click", () => {
    document.getElementById("name").value = row.cells[1].textContent;
    document.getElementById("polytechnic").value = row.cells[2].textContent;
    document.getElementById("classNo").value = row.cells[3].textContent;
    document.getElementById("classDate").value = row.cells[4].textContent;
    document.getElementById("tools").value = row.cells[5].textContent;
    document.getElementById("details").value = row.cells[6].textContent;
    document.getElementById("remarks").value = row.cells[7].textContent;
    table.deleteRow(row.rowIndex - 1);
  });

  // Delete function
  row.querySelector(".deleteBtn").addEventListener("click", () => {
    table.deleteRow(row.rowIndex - 1);
  });
});
