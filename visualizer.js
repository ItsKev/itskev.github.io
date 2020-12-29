let compactMode = false;

function drawTables() {
  let encodedValue = new URLSearchParams(window.location.search).get("value");
  if (!encodedValue) {
    return;
  }

  document.getElementById("parsed_values").innerText = "Parsed Values";

  let valuesDiv = document.getElementById("values");
  valuesDiv.innerHTML = '';

  let decodedValue = atob(encodedValue);
  for (const rows of decodedValue.split("#")) {
    if (rows && rows.length > 1) {
      let entries = rows.split("|");

      let header = document.createElement("h2");
      header.textContent = entries[0];
      let table = createTable();
      let tableBody = table.createTBody();
      for (let i = 1; i < entries.length - 1; i++) {
        addTableRow(tableBody, entries[i]);
      }

      valuesDiv.appendChild(header);
      valuesDiv.appendChild(table);
    }
  }
}

function toggleCompactMode() {
  compactMode = !compactMode;
  if (compactMode) {
    document.getElementById("compact_mode").innerText = "Show All Details"
  } else {
    document.getElementById("compact_mode").innerText = "Compact Mode"
  }
  drawTables();
}

function createTable() {
  let table = document.createElement("table");
  table.style.width = "80%";
  createTableHeader(table);
  return table;
}

function createTableHeader(table) {
  let tableHeader = table.createTHead();
  let header = tableHeader.insertRow(0);
  let firstColumn = document.createElement("th");
  firstColumn.style.width = "50%";
  firstColumn.style.textAlign = "center";
  firstColumn.innerText = "Name";
  header.appendChild(firstColumn);
  let secondColumn = document.createElement("th");
  secondColumn.style.width = "50%";
  secondColumn.style.textAlign = "center";
  secondColumn.innerText = "Value";
  header.appendChild(secondColumn);
}

function addTableRow(tableBody, entry) {
  let split = entry.split(";");

  if (compactMode && split[2] === 'false') {
    return;
  }

  let tableRow = tableBody.insertRow();
  let firstCell = tableRow.insertCell(0);
  firstCell.innerText = split[0];
  let secondCell = tableRow.insertCell(1);
  secondCell.style.textAlign = "right";
  secondCell.innerText = split[1];
}