//https://www.youtube.com/watch?v=jfYWwQrtzzY
const draggables = document.querySelectorAll('.item')
const holders = document.querySelectorAll('.holder')

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    // console.log(`Drag started on ${draggable.innerHTML}`)
    draggable.classList.add('dragging');
  })

  draggable.addEventListener('dragend', () => {
    // console.log(`Drag ended on ${draggable.innerHTML}`)
    draggable.classList.remove('dragging');
  })
})

holders.forEach(holder => {
  holder.addEventListener('dragover', (event) =>{
    event.preventDefault()
    // console.log(`Dragging Item over ${holder.id}`)
    const draggable = document.querySelector('.dragging')
    holder.appendChild(draggable)
  })
})