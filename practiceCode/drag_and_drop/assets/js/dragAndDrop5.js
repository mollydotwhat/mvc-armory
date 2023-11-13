/*
https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/setData

https://stackoverflow.com/questions/13007582/html5-drag-and-copy

https://www.w3schools.com/html/html5_draganddrop.asp

https://stackoverflow.com/questions/15543320/how-can-i-replace-the-content-of-a-div-when-i-drag-and-drop

    => https://jsbin.com/ruwotusitu/1/edit?html,css,js,output

*/

// Default handling is to not allow dropping elements
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  // Here is specified what should be dragged
  // This data will be dropped at the place where the mouse button is released
  // Here, we want to drag the element istelf, so we set it's ID.
  ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev) {
  // Default handing is not to process a drop action and hand it to the next higher html element in your DOM
  ev.preventDefault();
  // In the drag event, we set the *variable* (it is not a variable name but a format, please check the reference!) "text/html", now we read it out
  // As we put the ID of the source element into this variable, we can now use this ID to manipulate the dragged element as we wish.
  var data = ev.dataTransfer.getData("Text");
  var s = document.getElementById(data);
  ev.target.appendChild(s);
  ev.target.src = s.src;
}