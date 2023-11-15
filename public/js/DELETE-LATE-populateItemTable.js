//-----------------------
// Query Selectors
//-----------------------
const itemDisplayArea = document.querySelector("#parentItemHolder");
const itemTypeBtnsParent = document.querySelector("#itemSelectionTab"); 

//-----------------------
// Drag and Drop Code
//-----------------------
function dragstartHandler(event){
  const helmet = event.target.getAttribute('data-helmet');
  console.log(helmet)
  event.dataTransfer.setData("text/plain", helmet);
}



function dropHandler(event){
  event.preventDefault();
  console.log("we dropped!")
  const data = event.dataTransfer.getData("text/plain");
  console.log(data)
}


function dragoverHandler(event){
  event.preventDefault();

}


//-----------------------
// REPLACE WITH FECTH
// Hard Coded items
//-----------------------
const items = [
  {
    "id": 1,
    "name":"base helmet",
    "item_type": "helmet",
    "health":3,
    "armor":4,
    "attack":0,
    "defense":4,
    "speed":5,
    "link_to_photo":"../assets/images/items/helmets/helmet1.png"
  },
  {
    "id": 2,
    "name":"knights helmet",
    "item_type":"helmet",
    "health":5,
    "armor":6,
    "attack":0,
    "defense":6,
    "speed":4,
    "link_to_photo":"../assets/images/items/helmets/helmet2.png"
  },
  {
    "id": 3,
    "name":"Enchanted helmet",
    "item_type":"helmet",
    "health":7,
    "armor":7,
    "attack":0,
    "defense":6,
    "speed":5,
    "link_to_photo":"../assets/images/items/helmets/helmet3.png"
  },
  {
    "id": 4,
    "name":"silver helmet",
    "item_type":"helmet",
    "health":6,
    "armor":5,
    "attack":0,
    "defense":7,
    "speed":6,
    "link_to_photo":"../assets/images/items/helmets/helmet4.png"
  },
  {
    "id": 5,
    "name":"Gold helmet",
    "item_type":"helmet",
    "health":6,
    "armor":9,
    "attack":0,
    "defense":8,
    "speed":7,
    "link_to_photo":"../assets/images/items/helmets/helmet5.png"
  }
]

async function buildItemOptions(itemType) {
  //---------------------------------------------------
  // fetch request here based on itemType
  // const items = await fetch(`/api/${itemType}`)
  //---------------------------------------------------
  itemDisplayArea.innerHTML = "";
  items.map(item => {
    const itemBtn = document.createElement('button')
    itemBtn.setAttribute("id", item.id) 
    itemBtn.innerHTML = `
      <div class="card bg-dark-subtle shadow-lg border-light justify-content-center align-center" style="max-width:7rem; max-height: 7rem; min-width:7rem; min-height: 7rem;" draggable='true' data-helmet='ultra'>
        <div class="card-body text-wrap"><span class="itemName">${item.name}</span>
          <img src="${item.link_to_photo}" class="itemImage card-img"
          style="max-width:3rem; max-height: 3rem; min-width:3rem; min-height: 3rem;" alt="..." draggable="false">
          <div class="card-values">
            <span class="healthClass">${item.health}</span>
            <span class="armorClass">${item.armor}</span>
            <span class="attackClass">${item.attack}</span>
            <span class="defenseClass">${item.defense}</span>
            <span class="speedClass">${item.speed}</span>
            <span hidden class="itemType">${item.item_type}</span>
          </div>
        </div>
      </div>
    `
    itemBtn.addEventListener("dragstart", dragstartHandler)
    itemDisplayArea.appendChild(itemBtn)

  })
}

function getTheButtonClicked(event) {
  // check to see which item was clicked on 
  switch (event.target.getAttribute("id")) {
    case "selectHelmets":
      buildItemOptions('helmet');
      break;

    case "selectTorso":
      buildItemOptions('torso');
      break;

    case "selectBoots":
      buildItemOptions('boots');
      break;

    case "selectWeapons":
      buildItemOptions('weapons');
      break;

    case "selectShields":
      buildItemOptions('shields');
      break;

    case "selectGems":
      buildItemOptions('gems');
      break;
    
    default:
      break;
  }
}


itemTypeBtnsParent.addEventListener("click", getTheButtonClicked)



// Calculates the sum off each stat type based off the selected items
function calculateCharacterStats() {
  // Grab Helmet Stats
  const helmetHealthStats = document.querySelector("#helmetStats .healthClass").textContent
  const helmetArmorStats = document.querySelector("#helmetStats .armorClass").textContent
  const helmetAttackStats = document.querySelector("#helmetStats .attackClass").textContent
  const helmetDefenseStats = document.querySelector("#helmetStats .defenseClass").textContent
  const helmetSpeedStats = document.querySelector("#helmetStats .speedClass").textContent

  // Grab Shield Stats
  const shieldHealthStats = document.querySelector("#shieldStats .healthClass").textContent
  const shieldArmorStats = document.querySelector("#shieldStats .armorClass").textContent
  const shieldAttackStats = document.querySelector("#shieldStats .attackClass").textContent
  const shieldDefenseStats = document.querySelector("#shieldStats .defenseClass").textContent
  const shieldSpeedStats = document.querySelector("#shieldStats .speedClass").textContent

  // Grab Torso Stats
  const torsoHealthStats = document.querySelector("#torsoStats .healthClass").textContent
  const torsoArmorStats = document.querySelector("#torsoStats .armorClass").textContent
  const torsoAttackStats = document.querySelector("#torsoStats .attackClass").textContent
  const torsoDefenseStats = document.querySelector("#torsoStats .defenseClass").textContent
  const torsoSpeedStats = document.querySelector("#torsoStats .speedClass").textContent

  // Grab Weapon Stats
  const weaponHealthStats = document.querySelector("#weaponStats .healthClass").textContent
  const weaponArmorStats = document.querySelector("#weaponStats .armorClass").textContent
  const weaponAttackStats = document.querySelector("#weaponStats .attackClass").textContent
  const weaponDefenseStats = document.querySelector("#weaponStats .defenseClass").textContent
  const weaponSpeedStats = document.querySelector("#weaponStats .speedClass").textContent
  // Grab Gem Stats
  const gemHealthStats = document.querySelector("#gemStats .healthClass").textContent
  const gemArmorStats = document.querySelector("#gemStats .armorClass").textContent
  const gemAttackStats = document.querySelector("#gemStats .attackClass").textContent
  const gemDefenseStats = document.querySelector("#gemStats .defenseClass").textContent
  const gemSpeedStats = document.querySelector("#gemStats .speedClass").textContent

  // Grab Boots Stats
  const bootsHealthStats = document.querySelector("#bootStats .healthClass").textContent
  const bootsArmorStats = document.querySelector("#bootStats .armorClass").textContent
  const bootsAttackStats = document.querySelector("#bootStats .attackClass").textContent
  const bootsDefenseStats = document.querySelector("#bootStats .defenseClass").textContent
  const bootsSpeedStats = document.querySelector("#bootStats .speedClass").textContent
  
  // Total Health Stats
  const healthStats = Number(helmetHealthStats) + Number(shieldHealthStats) + Number(torsoHealthStats) + Number(weaponHealthStats) + Number(gemHealthStats) + Number(bootsHealthStats);

  // Total Armor Stats
  const armorStats = Number(helmetArmorStats) + Number(shieldArmorStats) + Number(torsoArmorStats) + Number(weaponArmorStats) + Number(gemArmorStats) + Number(bootsArmorStats);

  // Total Attack Stats
  const attackStats = Number(helmetAttackStats) + Number(shieldAttackStats) + Number(torsoAttackStats) + Number(weaponAttackStats) + Number(gemAttackStats) + Number(bootsAttackStats);

  // Total Defense Stats
  const defenseStats = Number(helmetDefenseStats) + Number(shieldDefenseStats) + Number(torsoDefenseStats) + Number(weaponDefenseStats) + Number(gemDefenseStats) + Number(bootsDefenseStats);

  // Total Speed Stats
  const speedStats = Number(helmetSpeedStats) + Number(shieldSpeedStats) + Number(torsoSpeedStats) + Number(weaponSpeedStats) + Number(gemSpeedStats) + Number(bootsSpeedStats);

  // Creates object with all stats and returns that object
  const totalStats = {
    health: healthStats,
    armor: armorStats,
    attack: attackStats,
    defense: defenseStats,
    speed: speedStats
  }

  return totalStats
}


// Grabs the clicked item's into aand returns an object of it
function grabItemInfo (event) {
  const selectedItemName = event.target.querySelector(".itemName").textContent
  const selectedItemHealth = event.target.querySelector(".healthClass").textContent
  const selectedItemArmor = event.target.querySelector(".armorClass").textContent
  const selectedItemAttack = event.target.querySelector(".attackClass").textContent
  const selectedItemDefense = event.target.querySelector(".defenseClass").textContent
  const selectedItemSpeed = event.target.querySelector(".speedClass").textContent
  const selectedItemImage = event.target.querySelector(".itemImage").getAttribute("src")
  const selectedItemType = event.target.querySelector(".itemType").textContent

  const itemInfo = {
    name: selectedItemName,
    health: selectedItemHealth,
    armor: selectedItemArmor,
    attack: selectedItemAttack,
    defense: selectedItemDefense,
    speed: selectedItemSpeed,
    link_to_photo: selectedItemImage,
    item_type: selectedItemType,
  }
  return itemInfo;
}


function updateSlot(slotId){
  // find slot to update
  const updateSlot = document.querySelector(`#${slotId.item_type}StatsCard`)

  // clear that slot
  updateSlot.innerHTML = "";

  //create div to append to slot
  const divEl = document.createElement('div')
  divEl.innerHTML = `
  <div class="card-body text-wrap">${slotId.name}
    <img src="${slotId.link_to_photo}" class="card-img"
      style="max-width:3rem; max-height: 3rem; min-width:3rem; min-height: 3rem;" alt="...">
    <div class="card-values">
      <span class="healthClass">${slotId.health}</span>
      <span class="armorClass">${slotId.armor}</span>
      <span class="attackClass">${slotId.attack}</span>
      <span class="defenseClass">${slotId.defense}</span>
      <span class="speedClass">${slotId.speed}</span>
    </div>
  </div>
  `
  updateSlot.appendChild(divEl)
}

function updateCharacter (event){
  // grabs item info
  const itemInfo = grabItemInfo(event)
  console.log("=====================")
  console.log("Selected Item Stats")
  console.log(itemInfo)

  // Runs function to update item slot
  updateSlot(itemInfo)

  // Runs function to calculate each stat total, it recieves an object with all the stats
  const characterStats = calculateCharacterStats()
  console.log("Character's new stats:")
  console.log(characterStats)
  console.log("=====================")

  // Queries for stat container location
  const characterStatsEl = document.querySelector("#characterStatTotals")

  // Clears previous stats
  characterStatsEl.innerHTML = ""

  // Creates a span to add all new stats into and appends it
  const statsSpan = document.createElement('span')
  statsSpan.innerHTML = `
  <span><i class="bi bi-heart-fill"> </i><span class="healthClass">${characterStats.health}</span></span>
  <span><i class="bi bi-shield-shaded"></i> <span class="armorClass">${characterStats.armor}</span></span>
  <span><i class="bi bi-hammer"></i> <span class="attackClass">${characterStats.attack}</span></span>
  <span><i class="bi bi-bricks"></i> <span class="defenseClass">${characterStats.defense}</span></span>
  <span><i class="bi bi-lightning-fill"></i> <span class="speedClass">${characterStats.speed}</span></span>
  `
  characterStatsEl.appendChild(statsSpan);
}


itemDisplayArea.addEventListener("click", updateCharacter)