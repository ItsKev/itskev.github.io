let entries = new Map();

function onSubmit() {
  let rawSaveGame = document.getElementById("save.dat").value;
  if (!rawSaveGame) {
    return;
  }
  let decodedSaveGame = atob(rawSaveGame);
  decodedSaveGame = decodedSaveGame.slice(0, decodedSaveGame.length - 42);
  let jsonSaveGame = JSON.parse(decodedSaveGame);

  addBlcValues(jsonSaveGame);
  addCelestialValues(jsonSaveGame);

  let string = "";

  entries.forEach((value, key) => {
    string += "#" + key + "|";
    for (const entry of value) {
      string += entry.minifiedString + "|";
    }
  })

  location.href = "./?value=" + btoa(string);
}

function addBlcValues(jsonSaveGame) {
  let list = [
    new Entry("Prestige+++++", jsonSaveGame.shops.blc.prestige_value_multiplier.count),
    new Entry("BLC++", jsonSaveGame.shops.blc.blc_value_adder.count),
    new Entry("More Converter Transistors", jsonSaveGame.shops.blc.converter_speed.count),
    new Entry("Increase Converter Output", jsonSaveGame.shops.blc.converter_increase_output_count.count),
    new Entry("Better Printer Ink", jsonSaveGame.shops.blc.printers_upgrade.count),
    new Entry("Master of Leaves", jsonSaveGame.shops.blc.leaf_multiplier_all.count, true),
    new Entry("Super Fruits", jsonSaveGame.shops.blc.fruit_value.count),
    new Entry("Fruit Leaves", jsonSaveGame.shops.blc.fruit_leaves_upgrade.count),
    new Entry("Fruit Magnet", jsonSaveGame.shops.blc.fruit_magnet.count),
    new Entry("What The Combo", jsonSaveGame.shops.blc.combo_multiplier.count, true),
    new Entry("Nuclear Apocaleaves", jsonSaveGame.shops.blc.nuclear_fuel.count),
    new Entry("Moar Gems", jsonSaveGame.shops.blc.daily_reward_gems.count),
    new Entry("ALB Tools", jsonSaveGame.shops.blc.albs_tools.count),
    new Entry("Area Teleport Bot", jsonSaveGame.shops.blc.auto_teleport_best_area.count),
    new Entry("Coin Upgrade Bot", jsonSaveGame.shops.blc.auto_buy_all_coin_upgrades.count),
    new Entry("Science Upgrade Bot", jsonSaveGame.shops.blc.auto_buy_all_science_upgrades.count),
    new Entry("Gold Leaves Upgrade Bot", jsonSaveGame.shops.blc.auto_buy_gold_shop.count),
    new Entry("Crunchy Coins", jsonSaveGame.shops.blc.coins_persist_blc.count),
    new Entry("Bigger Bag", jsonSaveGame.shops.blc.increase_max_leaves.count, true),
    new Entry("Unlock Unique Leaves", jsonSaveGame.shops.blc.unlock_unique_leaves.count),
    new Entry("Greedy Uniques", jsonSaveGame.shops.blc.unique_leaves_concurrent.count),
    new Entry("Unlock Pets", jsonSaveGame.shops.blc.unlock_pets.count),
    new Entry("Perma HP Regeneration", jsonSaveGame.shops.blc.player_hp_reg_perma.count)
  ];

  entries.set("BLC", list);
}

function addCelestialValues(jsonSaveGame) {
  let list = [
    new Entry("Unlock Mythical Leaves", jsonSaveGame.shops.celestial.unlock_mythical_leaves.count),
    new Entry("ALBs Love Seeds", jsonSaveGame.shops.celestial.alb_pickup_seeds.count),
    new Entry("Celestial Marketing", jsonSaveGame.shops.celestial.leaf_marketing.count, true),
    new Entry("Worthy Enemies", jsonSaveGame.shops.celestial.enemy_drop_multiplier.count, true),
    new Entry("ALB Hit Damage", jsonSaveGame.shops.celestial.auto_leaf_blower_hit_damage.count),
    new Entry("More Enemies, Please", jsonSaveGame.shops.celestial.enemy_spawn_chance.count, true),
    new Entry("Moar BLC", jsonSaveGame.shops.celestial.blc_value_adder_real.count, true),
    new Entry("Celestial Combo", jsonSaveGame.shops.celestial.combo_affects_celestial.count),
    new Entry("Max Combo", jsonSaveGame.shops.celestial.combo_max.count),
    new Entry("Combo Multiplier", jsonSaveGame.shops.celestial.combo_rewards.count),
    new Entry("Unlock Celestial Apples", jsonSaveGame.shops.celestial.celestial_apples.count)
  ]

  entries.set("Celestial", list);
}