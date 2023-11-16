//-------------------------------------------------------------------------
// Query Selectors
//-------------------------------------------------------------------------

// Queries to items
const itemDisplayArea = document.querySelector("#parentItemHolder");
const itemTypeBtnsParent = document.querySelector("#itemSelectionTab"); 

// Queries to character item slos
const charSlotHelmet = document.querySelector('#helmetStatsCard')
const charSlotShield = document.querySelector('#shieldStatsCard')
const charSlotTorso = document.querySelector('#torsoStatsCard')
const charSlotWeapon = document.querySelector('#weaponStatsCard')
const charSlotGem = document.querySelector('#gemStatsCard')
const charSlotBoot = document.querySelector('#bootStatsCard')

//-------------------------------------------------------------------------
// REPLACE WITH FECTH
// Hard Coded items to be commented out later and saved for debugging purposes
//-------------------------------------------------------------------------
const hardCodedItems = [
  {
    "id": 1,
    "name":"base helmet",
    "item_type": "helmet",
    "health":3,
    "armor":4,
    "attack":0,
    "defense":4,
    "speed":5,
    "link_to_photo":"/assets/images/items/helmets/helmet1.png"
  },
  {
    'id': 26,
    "name":"wodden shield",
    "item_type":"shield",
    "health":0,
    "armor":0,
    "attack":0,
    "defense":5,
    "speed":0,
    "link_to_photo":"/assets/images/items/shields/shield1.png"     
  },
  {
    'id': 11,
      "name":"leather boots",
      "item_type":"boot",
      "health":2,
      "armor":1,
      "attack":0,
      "defense":1,
      "speed":9,
      "link_to_photo":"/assets/images/items/boots/boots1.png"    
  },
  {
    'id': 21,
    "name":"axe",
    "item_type":"weapon",
    "health":0,
    "armor":0,
    "attack":7,
    "defense":0,
    "speed":0,
    "link_to_photo":"/assets/images/items/weapons/axe5.png"   
},
{
  'id': 16,
  "name":"armor gem",
  "item_type":"gem",
  "health":0,
  "armor":9,
  "attack":0,
  "defense":0,
  "speed":0,
  "link_to_photo":"/assets/images/items/gems/armorGem.png"   
},
{
  'id': 6,
  "name":"Enchanted armor",
  "item_type":"armor",
  "health":7,
  "armor":4,
  "attack":0,
  "defense":5,
  "speed":7,
  "link_to_photo":"/assets/images/items/armors/armor1.png"    
},
]


//-------------------------------------------------------------------------
// Drag and Drop Code
//-------------------------------------------------------------------------

// When an item starts being dragged, this function builds an object with all of that item's info, strinifies it, and sets it as the data to transfer
function dragstartHandler(event){
  // Grabs info from the selected item and 
  const name = event.target.querySelector(".itemName").textContent
  const health = event.target.querySelector(".healthClass").textContent
  const armor = event.target.querySelector(".armorClass").textContent
  const attack = event.target.querySelector(".attackClass").textContent
  const defense = event.target.querySelector(".defenseClass").textContent
  const speed = event.target.querySelector(".speedClass").textContent
  const linkToPhoto = event.target.querySelector(".itemImage").getAttribute("src")
  const itemType = event.target.querySelector(".itemType").textContent
  const itemId = event.target.getAttribute("item_id")

  // Builds an object based on the character stats
  const itemData = {
    id: itemId,
    name: name,
    health: health,
    armor: armor,
    attack: attack,
    defense: defense,
    speed: speed,
    link_to_photo: linkToPhoto,
    item_type:itemType
  }

  // Stringifies the object and sets it as the transfer data
  event.dataTransfer.setData("text/plain", JSON.stringify(itemData));
}

// When an item is dropped, this parses the incoming object and passes it into the 'generateType' 
function dropHandler(event){
  // Prevents default which is to not let something drop here
  event.preventDefault();

  // Parses the incoming object
  const stringifiedData = event.dataTransfer.getData("text/plain");
  data = JSON.parse(stringifiedData)
  generateType(data)
  updateCharacter()
}

// Prevents default of a drag over event
function dragoverHandler(event){
  event.preventDefault();

}


//-------------------------------------------------------------------------
// Populate character item slots based off based in object
// Object must have the fields for:
// item_type, name, link_to_photo, health, armor, attack, defense, & speed
//-------------------------------------------------------------------------

function generateType(data){
  console.log(`Character's ${data.item_type} updated`)
  console.log(data)
  const html = `
    <div class="card-body text-wrap" item_id="${data.id}">${data.name}
    <img src="${data.link_to_photo}" class="card-img"
      style="max-width:3rem; max-height: 3rem; min-width:3rem; min-height: 3rem;" alt="...">
    <div class="card-values">
      <span class="healthClass">${data.health}</span>
      <span class="armorClass">${data.armor}</span>
      <span class="attackClass">${data.attack}</span>
      <span class="defenseClass">${data.defense}</span>
      <span class="speedClass">${data.speed}</span>
    </div>
  </div>
  `
  //  document.querySelector(`#helmetStatsCard`).innerHTML = html;
  // document.querySelector(`#${data.item_type}StatsCard`).innerHTML = html;
  switch (data.item_type){
    case 'helmet':
      charSlotHelmet.innerHTML = html;
      break;
    case 'shield':
      charSlotShield.innerHTML = html;
      break;
    case 'armor':
      charSlotTorso.innerHTML = html;
      break;
    case 'weapon':
      charSlotWeapon.innerHTML = html;
      break;
    case 'gem':
      charSlotGem.innerHTML = html;
      break;
    case 'boot':
      charSlotBoot.innerHTML = html;
      break;
  }
}


// ----------------------------------------------------
// UPDATE TO MAKE FETCH CALL OR HARDCODE STARTING DATA
// ----------------------------------------------------
// const query = await fetch(`/api/item/${id}`)
// const data = await query.json()
// Generate starting Helmet
generateType(hardCodedItems[0])
// Generate Starting Shield
generateType(hardCodedItems[1])
// Generate Starting Boots
generateType(hardCodedItems[2])
// Generate Starting Weapon
generateType(hardCodedItems[3])
// Generate Starting Gem
generateType(hardCodedItems[4])
// Generate Starting Torso
generateType(hardCodedItems[5])


//-------------------------------------------------------------------------
// Builds and displays draggable items depending which item category is passed into it
//-------------------------------------------------------------------------
async function buildItemOptions(itemType) {
  //---------------------------------------------------
  // fetch request here based on itemType
  let items = await fetch(`/api/item/${itemType}`, {
    method: 'GET',
    // body: JSON.stringify({ name, needed_funding, description }),
    headers: {
      'Content-Type': 'application/json',
    }
  })

  items = await items.json()

  // const items = hardCodedItems;
  //---------------------------------------------------

  console.log(items)

  itemDisplayArea.innerHTML = "";
  items.payload.map(item => {
    const divEl = document.createElement('div')
    divEl.setAttribute("class", "card bg-dark-subtle shadow-lg border-light justify-content-center align-center")
    divEl.setAttribute("style", style="max-width:7rem; max-height: 7rem; min-width:7rem; min-height: 7rem; padding: 16px")
    divEl.setAttribute("draggable", 'true')
    divEl.setAttribute("item_id", item.id) 
    divEl.innerHTML = `
        <div class="card-body text-wrap" style="padding: 0px" ><span class="itemName">${item.name}</span>
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
    `
    divEl.addEventListener("dragstart", dragstartHandler)
    itemDisplayArea.appendChild(divEl)
  })
}

// Checks which item category button was clicked on
function getTheButtonClicked(event) {
  switch (event.target.getAttribute("id")) {
    case "selectHelmets":
      buildItemOptions('helmet');
      break;

    case "selectTorso":
      buildItemOptions('torso');
      break;

    case "selectBoots":
      buildItemOptions('boot');
      break;

    case "selectWeapons":
      buildItemOptions('weapon');
      break;

    case "selectShields":
      buildItemOptions('shield');
      break;

    case "selectGems":
      buildItemOptions('gem');
      break;
    
    default:
      break;
  }
}


itemTypeBtnsParent.addEventListener("click", getTheButtonClicked)


//-------------------------------------------------------------------------
// Calculates the sum off each stat type based off the selected items
// SORRY GARY! We tired template literals here to and loop through code but it kept breaking
//-------------------------------------------------------------------------
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


//-------------------------------------------------------------------------
// Updates the displayed character stats
//-------------------------------------------------------------------------
function updateCharacter (){
  // Recatculate Total Stats
  const characterStats = calculateCharacterStats()

  // Find where the character total stats are displayed
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
  // console.log("Character Displayed Stats Updated")
  grabCharacterInfo()
}
updateCharacter()

//-------------------------------------------------------------------------
// Grabs the item id's of the current character loadout and returns it
//-------------------------------------------------------------------------
function grabCharacterInfo() {
  // 
  const helmetId = document.querySelector("#helmetStatsCard").firstElementChild.getAttribute("item_id")
  const shieldId = document.querySelector("#shieldStatsCard").firstElementChild.getAttribute("item_id")
  const torsoId = document.querySelector("#torsoStatsCard").firstElementChild.getAttribute("item_id")
  const weaponId = document.querySelector("#weaponStatsCard").firstElementChild.getAttribute("item_id")
  const gemId = document.querySelector("#gemStatsCard").firstElementChild.getAttribute("item_id")
  const bootId = document.querySelector("#bootStatsCard").firstElementChild.getAttribute("item_id")

  const characterBuild = {
    char_name: "defaultNameForNow",
    helmet_id: Number(helmetId),
    torso_id: Number(torsoId),
    weapon_id: Number(weaponId),
    shield_id: Number(shieldId),
    boots_id: Number(bootId),
    gem_id: Number(gemId),
  }

  console.log(characterBuild)

  return (characterBuild);
}

// function saveCharacter(){
//   const character = grabCharacterInfo()
// }

const saveCharacter = async (event) => {
  event.preventDefault();

  console.log("loginFormHandler Started")
  // Collect values from the login form
  const character = grabCharacterInfo();

  // Send a POST request to the API endpoint
  const response = await fetch('/api/character/', {
    method: 'POST',
    body: JSON.stringify(character),
    headers: { 'Content-Type': 'application/json' },
  });
  console.log(response)
  if (response.ok) {
    // If successful, redirect the browser to the profile page
    document.location.replace('/saved-characters');
    // document.location.replace('/loadout');
  } else {
    alert(response.statusText);
  }
  
};

document
  .querySelector('#saveCharBtn')
  .addEventListener('click', saveCharacter);
