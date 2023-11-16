const characterDisplayArea = document.querySelector("#characterDisplayArea");


async function returnItemInfo(id) {
  let item = await fetch(`/api/item/id/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  item = await item.json()
  return item
}




async function buildCharacters() {
  //---------------------------------------------------
  // fetch request here based on itemType
  let characterArray = await fetch(`/api/character/load`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  characterArray = await characterArray.json()
  characterArray = characterArray.payload


  characterDisplayArea.innerHTML = "";
  
  characterArray.map(async character => {
    const helmet = await returnItemInfo(character.helmet_id)
    const shield = await returnItemInfo(character.shield_id)
    const torso = await returnItemInfo(character.torso_id)
    const weapon = await returnItemInfo(character.weapon_id)
    const gem = await returnItemInfo(character.gem_id)
    const boots = await returnItemInfo(character.boots_id)

    // SORRY AGAIN GARY
    const totalHealth = Number(helmet.payload.health) + Number(shield.payload.health) + Number(torso.payload.health) + Number(weapon.payload.health) + Number(gem.payload.health) + Number(boots.payload.health)

    const totalArmor = Number(helmet.payload.armor) + Number(shield.payload.armor) + Number(torso.payload.armor) + Number(weapon.payload.armor) + Number(gem.payload.armor) + Number(boots.payload.armor)

    const totalAttack = Number(helmet.payload.attack) + Number(shield.payload.attack) + Number(torso.payload.attack) + Number(weapon.payload.attack) + Number(gem.payload.attack) + Number(boots.payload.attack)

    const totalDefense = Number(helmet.payload.defense) + Number(shield.payload.defense) + Number(torso.payload.defense) + Number(weapon.payload.defense) + Number(gem.payload.defense) + Number(boots.payload.defense)

    const totalSpeed = Number(helmet.payload.speed) + Number(shield.payload.speed) + Number(torso.payload.speed) + Number(weapon.payload.speed) + Number(gem.payload.speed) + Number(boots.payload.speed)


    const divEl = document.createElement('div')
    divEl.setAttribute("class", "container shadow-lg border bg-dark-subtle border-2 border-light-subtle mt-2 mb-2 pt-2 pb-2")
    divEl.setAttribute("style", "min-width:500px; max-width:500px; min-height:500px")
    divEl.innerHTML = `
    <!-- character container -->
    <div class="container-fluid justify-content-center">
      <h1 id="cur-character-id" class="border-bottom">Character</h1>
      <button character_id="${character.id}" class="btn btn-outline-danger" type="button" id="deleteBtn">Delete</button>
      <div class="row">
        <div class="char-values" style="font-size:3rem">
          <span><i class="bi bi-heart-fill"> </i><span class="healthClass">${totalHealth}</span></span>
          <span><i class="bi bi-shield-shaded"></i> <span class="armorClass">${totalArmor}</span></span>
          <span><i class="bi bi-hammer"></i> <span class="attackClass">${totalAttack}</span></span>
          <span><i class="bi bi-bricks"></i> <span class="defenseClass">${totalDefense}</span></span>
          <span><i class="bi bi-lightning-fill"></i> <span class="speedClass">${totalSpeed}</span></span>
        </div>
      </div>
    </div>


    <!--helmet-->
    <div class="row justify-content-center">
      <div class="col-3 col-sm-3 col-lg-3 justify-content-center">
        <div class="card bg-dark-subtle shadow-lg border-light justify-content-center align-center"
          style="max-width:7rem; max-height: 7rem; min-width:7rem; min-height: 7rem;">
          <div class="card-body text-wrap">${helmet.payload.name}
            <img src="${helmet.payload.link_to_photo}" class="card-img"
              style="max-width:3rem; max-height: 3rem; min-width:3rem; min-height: 3rem;" alt="...">
            <div class="card-values">
              <span class="healthClass">${helmet.payload.health}</span>
              <span class="armorClass">${helmet.payload.armor}</span>
              <span class="attackClass">${helmet.payload.attack}</span>
              <span class="defenseClass">${helmet.payload.defense}</span>
              <span class="speedClass">${helmet.payload.speed}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--shield-->
    <div class="row justify-content-center">
      <div class="col-3 col-sm-3 col-lg-3">
        <div class="card bg-dark-subtle shadow-lg border-light justify-content-center align-center"
          style="max-width:7rem; max-height: 7rem; min-width:7rem; min-height: 7rem;">
          <div class="card-body text-wrap">${shield.payload.name}
            <img src="${shield.payload.link_to_photo}" class="card-img"
              style="max-width:3rem; max-height: 3rem; min-width:3rem; min-height: 3rem;" alt="...">
            <div class="card-values">
            <span class="healthClass">${shield.payload.health}</span>
            <span class="armorClass">${shield.payload.armor}</span>
            <span class="attackClass">${shield.payload.attack}</span>
            <span class="defenseClass">${shield.payload.defense}</span>
            <span class="speedClass">${shield.payload.speed}</span>
            </div>
          </div>
        </div>
      </div>

      <!--torso-->
      <div class="col-3 col-sm-3 col-lg-3">
        <div class="card bg-dark-subtle shadow-lg border-light justify-content-center align-center"
          style="max-width:7rem; max-height: 7rem; min-width:7rem; min-height: 7rem;">
          <div class="card-body text-wrap">${torso.payload.name}
            <img src="${torso.payload.link_to_photo}" class="card-img"
              style="max-width:3rem; max-height: 3rem; min-width:3rem; min-height: 3rem;" alt="...">
            <div class="card-values">
            <span class="healthClass">${torso.payload.health}</span>
            <span class="armorClass">${torso.payload.armor}</span>
            <span class="attackClass">${torso.payload.attack}</span>
            <span class="defenseClass">${torso.payload.defense}</span>
            <span class="speedClass">${torso.payload.speed}</span>
            </div>
          </div>
        </div>
      </div>

      <!--weapon-->
      <div class="col-3 col-sm-3 col-lg-3">
        <div class="card bg-dark-subtle shadow-lg border-light justify-content-center align-center"
          style="max-width:7rem; max-height: 7rem; min-width:7rem; min-height: 7rem;">
          <div class="card-body text-wrap">${weapon.payload.name}
            <img src="${weapon.payload.link_to_photo}" class="card-img"
              style="max-width:3rem; max-height: 3rem; min-width:3rem; min-height: 3rem;" alt="...">
            <div class="card-values">
            <span class="healthClass">${weapon.payload.health}</span>
            <span class="armorClass">${weapon.payload.armor}</span>
            <span class="attackClass">${weapon.payload.attack}</span>
            <span class="defenseClass">${weapon.payload.defense}</span>
            <span class="speedClass">${weapon.payload.speed}</span>
            </div>
          </div>
        </div>
      </div>


      <!-- gem -->
      <div class="row justify-content-center">
        <div class="col-3 col-sm-3 col-lg-3">
          <div class="card bg-dark-subtle shadow-lg border-light justify-content-center align-center"
            style="max-width:7rem; max-height: 7rem; min-width:7rem; min-height: 7rem;">
            <div class="card-body text-wrap">${gem.payload.name}
              <img src="${gem.payload.link_to_photo}" class="card-img"
                style="max-width:3rem; max-height: 3rem; min-width:3rem; min-height: 3rem;" alt="...">
              <div class="card-values">
              <span class="healthClass">${gem.payload.health}</span>
              <span class="armorClass">${gem.payload.armor}</span>
              <span class="attackClass">${gem.payload.attack}</span>
              <span class="defenseClass">${gem.payload.defense}</span>
              <span class="speedClass">${gem.payload.speed}</span>
              </div>
            </div>
          </div>
        </div>

        <!--boots -->
        <div class="col-3 col-sm-3 col-lg-3">
          <div class="card bg-dark-subtle shadow-lg border-light justify-content-center align-center"
            style="max-width:7rem; max-height: 7rem; min-width:7rem; min-height: 7rem;">
            <div class="card-body text-wrap">${boots.payload.name}
              <img src="${boots.payload.link_to_photo}" class="card-img"
                style="max-width:3rem; max-height: 3rem; min-width:3rem; min-height: 3rem;" alt="...">
              <div class="card-values">
              <span class="healthClass">${boots.payload.health}</span>
              <span class="armorClass">${boots.payload.armor}</span>
              <span class="attackClass">${boots.payload.attack}</span>
              <span class="defenseClass">${boots.payload.defense}</span>
              <span class="speedClass">${boots.payload.speed}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    `
    const deleteBtn = divEl.querySelector('#deleteBtn')
    deleteBtn.addEventListener("click", removedCharacter)


    characterDisplayArea.appendChild(divEl)
  })
}
buildCharacters()

async function removedCharacter(event){
  const idToDelete = Number(event.target.attributes.character_id.value)

  const response = await fetch(`/api/character/delete/${idToDelete}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    this.parentNode.parentNode.remove()
  } else {
    alert('Failed to delete character');
  }


}

{/* <button class="btn btn-outline-warning" type="button" id="customizeBtn">Customize</button> */}