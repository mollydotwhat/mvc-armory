
const itemData = [{
  appendTo: "helmetStatsCard",
  type: "helmet",
  image: "helmets/helmet3.png",
  values: {
    healthClass: 3,
    armorClass: 3,
    attackClass: 3,
    defenseClass: 3,
    speedClass: 3,
  }
}]

async function generateType(itemId){

  // look up data for the item that got dropped
  const query = await fetch(`/api/item/${id}`)
  const data = await query.json()

  const html = `
    <div class="card-body text-wrap">Helm
    <img src="../assets/images/items/${data.image}" class="card-img"
      style="max-width:3rem; max-height: 3rem; min-width:3rem; min-height: 3rem;" alt="...">
    <div class="card-values">
      <span class="healthClass">${data.health}</span>
      <span class="armorClass">4</span>
      <span class="attackClass">10</span>
      <span class="defenseClass">3</span>
      <span class="speedClass">4</span>
    </div>
  </div>
  `
   document.querySelector(`#${itemObj.appendTo}`).innerHTML = html;
}

generateType(15)
generateType(20)