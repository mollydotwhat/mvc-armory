// function allowDrop(event) {
//   console.log(event)
//   if (event.target.id === "head_slot"){
//     event.preventDefault();
//   }
// }

// function drag(event) {
//   console.log(event)
//   event.dataTransfer.setData("text", event.target.id);
// }

// function drop(event) {
//   event.preventDefault()
//   const data = event.dataTransfer.getData("text")
//   event.target.appendChild(document.getElementById(data))
// }

// const headItems = document.querySelectorAll(".head")
// const torsoItems = document.querySelectorAll(".torso")
// const pantItems = document.querySelectorAll(".pant")
// const legItems = document.querySelectorAll(".leg")

// headItems.forEach(headItem => {
//   // Adds 'dragging' class when dragging starts
//   headItem.addEventListener('dragstart', () => {
//     headItem.classList.add('head_dragging')
//   })
//   // Removes 'dragging' class when dragging ends
//   headItem.addEventListener('dragend', () => {
//     headItem.classList.remove('head_dragging')
//   })
// })

// Adds a dragstart and drag end to each item
// function addDragListeners() {
//   const items = document.querySelectorAll(".item")
//   items.forEach(item => {
//     if (item.classList.contains("head")) {
//       item.addEventListener('dragstart', () => {
//         item.classList.add('head_dragging')
//       })
//       item.addEventListener('dragend', () => {
//         item.classList.remove('head_dragging')
//       })
//     }
//   })
// }

// function addHeadItemListeners(item) {
//   item.addEventListener('dragstart', () => {
//     item.classList.add('head_dragging')
//   })
//   item.addEventListener('dragend', () => {
//     item.classList.remove('head_dragging')
//   })
// }

// Functions that allow character slots to accept certain items based off HTML class
// const headSlot = document.querySelector('#head_slot')
// const torsoSlot = document.querySelector('#torso_slot')
// const legSlot = document.querySelector('#leg_slot')
// const feetSlot = document.querySelector('#feet_slot')

// headSlot.addEventListener('dragover', (event) => {
//   try {
//     event.preventDefault()
//     const headDrag = document.querySelector('.head_dragging')
//     headSlot.appendChild(headDrag)
//   } catch (error) {
//   }
// })
// -------------------------------------------
// Usable Code Below

$(function () {
  $("#draggable, #draggable-nonvalid").draggable();
  $("#droppable").droppable({
    accept: "#draggable",
    classes: {
      "ui-droppable-active": "ui-state-active",
      "ui-droppable-hover": "ui-state-hover"
    },
    drop: function (event, ui) {
      $(this)
        .addClass("ui-state-highlight")
        .find("p")
        .html("Dropped!");
    }
  });
});
// Functions that make items draggable
// function setupDragListeners() {
//   const items = document.querySelectorAll(".item")
//   items.forEach(item => {
//     switch (true) {
//       case item.classList.contains('head'): {
//         addStartEndListeners(item, 'head')
//         break;
//       }
//       case item.classList.contains('torso'): {
//         addStartEndListeners(item, 'torso')
//         break;
//       }
//       case item.classList.contains('leg'): {
//         addStartEndListeners(item, 'leg')
//         break;
//       }
//       case item.classList.contains('feet'): {
//         addStartEndListeners(item, 'feet')
//         break;
//       }
//     }
//   })
// }

// function addStartEndListeners(item, itemType) {
//   item.addEventListener('dragstart', () => {
//     item.classList.add(`${itemType}_dragging`)
//   })
//   item.addEventListener('dragend', () => {
//     item.classList.remove(`${itemType}_dragging`)
//   })
// }

// setupDragListeners()

// Functions that make slots accept certain items
// function setUpSlotListeners() {
//   const slots = document.querySelectorAll(".slot")
//   slots.forEach(slot => {
//     switch (true) {
//       case slot.id === 'head_slot': {
//         addDragOverListener(slot, 'head')
//         break;
//       }
//       case slot.id === 'torso_slot': {
//         addDragOverListener(slot, 'torso')
//         break;
//       }
//       case slot.id === 'leg_slot': {
//         addDragOverListener(slot, 'leg')
//         break;
//       }
//       case slot.id === 'feet_slot': {
//         addDragOverListener(slot, 'feet')
//         break;
//       }
//     }
//   })
// }

// function addDragOverListener(slot, slotType) {
//   slot.addEventListener('dragover', (event) => {
//     try {
//       const item = document.querySelector(`.${slotType}_dragging`)

//       slot.target.appendChild(item)
//       event.preventDefault()
//     } catch (error) {
//     }
//   })
// }

// setUpSlotListeners()