// ----------------------------------------------------------------------------
// update ID querySelector for itemDisplayArea
// update ID querySelector for itemButtonsParent
// update fetch route in buildItemOptions???
// ----------------------------------------------------------------------------
const itemDisplayArea = document.querySelector("#parentItemHolder");   // NEW BUTTONS GO HERE
const itemButtonsParent = document.querySelector("#itemSelectionTab");   // ONE BUTTON PER ITEM GOES HERE


// function buildHelmetOptionsEXAMPLE() {
//   const helmets = []
//   helmets.map(helmet => {
//     // create a button with data attributes for that helmet
//     // append that button to itemDisplayArea
//   })
// }

const items = [
  {
    "name":"base helmet",
    "Item_type": "helmet",
    "health":3,
    "armor":4,
    "attack":0,
    "defense":4,
    "speed":5,
    "link_to_photo":"../assets/images/items/helmets/helmet1.png"
  },
  {
    "name":"knights helmet",
    "Item_type":"helmet",
    "health":5,
    "armor":6,
    "attack":0,
    "defense":6,
    "speed":4,
    "link_to_photo":"../assets/images/items/helmets/helmet2.png"
  },
  {
    "name":"Enchanted helmet",
    "Item_type":"helmet",
    "health":7,
    "armor":7,
    "attack":0,
    "defense":6,
    "speed":5,
    "link_to_photo":"../assets/images/items/helmets/helmet3.png"
  },
  {
    "name":"silver helmet",
    "Item_type":"helmet",
    "health":6,
    "armor":5,
    "attack":0,
    "defense":7,
    "speed":6,
    "link_to_photo":"../assets/images/items/helmets/helmet4.png"
  },
  {
    "name":"Gold helmet",
    "Item_type":"helmet",
    "health":6,
    "armor":9,
    "attack":0,
    "defense":8,
    "speed":7,
    "link_to_photo":"../assets/images/items/helmets/helmet5.png"
  }
]


async function buildItemOptions(itemType) {
  // const items = await fetch(`/api/${itemType}`)
  itemDisplayArea.innerHTML = "";
  items.map(item => {
    const divL = document.createElement('div')
    divL.innerHTML = `
      <div class="card bg-dark-subtle shadow-lg border-light justify-content-center align-center"
      style="max-width:7rem; max-height: 7rem; min-width:7rem; min-height: 7rem;">
        <div class="card-body text-wrap">${item.name}
          <img src="${item.link_to_photo}" class="card-img"
          style="max-width:3rem; max-height: 3rem; min-width:3rem; min-height: 3rem;" alt="...">
          <div class="card-values">
            <span class="healthClass">${item.health}</span>
            <span class="armorClass">${item.armor}</span>
            <span class="attackClass">${item.attack}</span>
            <span class="defenseClass">${item.defense}</span>
            <span class="speedClass">${item.speed}</span>
          </div>
        </div>
      </div>
    `
    itemDisplayArea.appendChild(divL)
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



function assignItemClicked(event) {
  console.log(event.target)
}

itemDisplayArea.addEventListener("click", assignItemClicked)
itemButtonsParent.addEventListener("click", getTheButtonClicked)