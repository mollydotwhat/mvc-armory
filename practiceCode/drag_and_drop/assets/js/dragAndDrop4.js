// Functions that make items draggable
function setupDragListeners() {
  const items = document.querySelectorAll(".item")
  items.forEach(item => {
    switch (true) {
      case item.classList.contains('head'): {
          addStartEndListeners(item, 'head')
        break;
      }
      case item.classList.contains('torso'): {
        addStartEndListeners(item, 'torso')
        break;
      }
      case item.classList.contains('leg'): {
        addStartEndListeners(item, 'leg')
        break;
      }
      case item.classList.contains('feet'): {
        addStartEndListeners(item, 'feet')
        break;
      }
    }
  })
}

function addStartEndListeners(item, itemType) {
  item.addEventListener('dragstart', () => {
    item.classList.add(`${itemType}_dragging`)
  })
  item.addEventListener('dragend', () => {
    item.classList.remove(`${itemType}_dragging`)
  })
}

setupDragListeners()

// Functions that make slots accept certain items
function setUpSlotListeners() {
  const slots = document.querySelectorAll(".slot")
  slots.forEach(slot => {
    switch (true) {
      case slot.id === 'head_slot': {
        addDragOverListener(slot, 'head')
        break;
      }
      case slot.id === 'torso_slot': {
        addDragOverListener(slot, 'torso')
        break;
      }
      case slot.id === 'leg_slot': {
        addDragOverListener(slot, 'leg')
        break;
      }
      case slot.id === 'feet_slot': {
        addDragOverListener(slot, 'feet')
        break;
      }
    }
  })
}

function addDragOverListener(slot, slotType) {
  slot.addEventListener('dragover', (event) => {
    try {
      const item = document.querySelector(`.${slotType}_dragging`)
      event.preventDefault()
      slot.appendChild(item)
    } catch (error) {
    }
  })
}

setUpSlotListeners()