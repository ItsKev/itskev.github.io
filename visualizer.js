let compactMode = false;

function toggleCompactMode() {
  compactMode = !compactMode;
  if (compactMode) {
    document.getElementById("compact_mode").innerText = "Show All Details"
  } else {
    document.getElementById("compact_mode").innerText = "Compact Mode"
  }
  onSubmit();
}

function onSubmit() {
  let rawSaveGame = document.getElementById("save.dat").value;
  if (!rawSaveGame) {
    return;
  }
  let decodedSaveGame = atob(rawSaveGame);
  decodedSaveGame = decodedSaveGame.slice(0, decodedSaveGame.length - 42);
  let jsonSaveGame = JSON.parse(decodedSaveGame);

  document.getElementById("parsed_values").innerText = "Parsed Values - v" + jsonSaveGame.version;

  let valuesDiv = document.getElementById("values");
  valuesDiv.innerHTML = ''

  let blcHeader = document.createElement("h2");
  blcHeader.textContent = "BLC";
  let blcTable = createBlcTable(jsonSaveGame);

  valuesDiv.appendChild(blcHeader);
  valuesDiv.appendChild(blcTable);
}

function createBlcTable(jsonSaveGame) {
  let table = createTable();
  let tableBody = table.createTBody();

  addTableRow(tableBody, "Prestige+++++", jsonSaveGame.shops.blc.prestige_value_multiplier.count);
  addTableRow(tableBody, "BLC++", jsonSaveGame.shops.blc.blc_value_adder.count);
  addTableRow(tableBody, "More Converter Transistors", jsonSaveGame.shops.blc.converter_speed.count);
  addTableRow(tableBody, "Increase Converter Output", jsonSaveGame.shops.blc.converter_increase_output_count.count);
  addTableRow(tableBody, "Better Printer Ink", jsonSaveGame.shops.blc.printers_upgrade.count);
  addTableRow(tableBody, "Master of Leaves", jsonSaveGame.shops.blc.leaf_multiplier_all.count, true);
  addTableRow(tableBody, "Super Fruits", jsonSaveGame.shops.blc.fruit_value.count);
  addTableRow(tableBody, "Fruit Leaves", jsonSaveGame.shops.blc.fruit_leaves_upgrade.count);
  addTableRow(tableBody, "Fruit Magnet", jsonSaveGame.shops.blc.fruit_magnet.count);
  addTableRow(tableBody, "What The Combo", jsonSaveGame.shops.blc.combo_multiplier.count, true);
  addTableRow(tableBody, "Nuclear Apocaleaves", jsonSaveGame.shops.blc.nuclear_fuel.count);
  addTableRow(tableBody, "Moar Gems", jsonSaveGame.shops.blc.daily_reward_gems.count);
  addTableRow(tableBody, "ALB Tools", jsonSaveGame.shops.blc.albs_tools.count);
  addTableRow(tableBody, "Area Teleport Bot", jsonSaveGame.shops.blc.auto_teleport_best_area.count);
  addTableRow(tableBody, "Coin Upgrade Bot", jsonSaveGame.shops.blc.auto_buy_all_coin_upgrades.count);
  addTableRow(tableBody, "Science Upgrade Bot", jsonSaveGame.shops.blc.auto_buy_all_science_upgrades.count);
  addTableRow(tableBody, "Gold Leaves Upgrade Bot", jsonSaveGame.shops.blc.auto_buy_gold_shop.count);
  addTableRow(tableBody, "Crunchy Coins", jsonSaveGame.shops.blc.coins_persist_blc.count);
  addTableRow(tableBody, "Bigger Bag", jsonSaveGame.shops.blc.increase_max_leaves.count, true);
  addTableRow(tableBody, "Unlock Unique Leaves", jsonSaveGame.shops.blc.unlock_unique_leaves.count);
  addTableRow(tableBody, "Greedy Uniques", jsonSaveGame.shops.blc.unique_leaves_concurrent.count);
  addTableRow(tableBody, "Unlock Pets", jsonSaveGame.shops.blc.unlock_pets.count);
  addTableRow(tableBody, "Perma HP Regeneration", jsonSaveGame.shops.blc.player_hp_reg_perma.count);

  return table;
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

function addTableRow(tableBody, name, value, compact = false) {
  if (compactMode && !compact) {
    return;
  }

  let tableRow = tableBody.insertRow();
  let firstCell = tableRow.insertCell(0);
  firstCell.innerText = name;
  let secondCell = tableRow.insertCell(1);
  secondCell.style.textAlign = "right";
  secondCell.innerText = value;
}