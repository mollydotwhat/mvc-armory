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

const headItem = document.querySelector(".head")
const torsoItem = document.querySelector(".torso")
const pantItem = document.querySelector(".pant")
const legItem = document.querySelector(".leg")

const headSlot = document.querySelector('#head_slot')
const torsoSlot = document.querySelector('#torso_slot')
const legSlot = document.querySelector('#leg_slot')
const feetSlot = document.querySelector('#feet_slot')

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault()
  const data = event.dataTransfer.getData("text")
  event.target.appendChild(document.getElementById(data))
}