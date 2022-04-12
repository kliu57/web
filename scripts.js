// Katie Liu
// 018889121
// kliu57@myseneca.ca
// WEB 222 NAA
// Final assessment
// scripts.js

// Create an event handler to run when the page is loaded
window.onload = function () {
  console.log('scripts loaded');
  var document = window.document;

  document.getElementById("contactform").reset();   // clear the contact me form

};

// show/hide different page content depending on which link is clicked
function loadMenuItem(elementId) { 
  let document = window.document;
  let links = document.querySelector('#menu').getElementsByTagName('li');
  let aElements;
  const menuItems = ['home', 'about', 'contact'];   // get all menu items

  // deactivate all links
  menuItems.forEach(item => document.querySelector(`#${item}Link`).className = 'single');

  // hide all the menu items
  menuItems.forEach(item => document.querySelector(`#${item}`).className = 'content-region hide');

  // show the desired menu item
  document.querySelector(`#${elementId}`).className = 'content-region show';

  // make the current link active
  document.querySelector(`#${elementId}Link`).className = 'single active';
}

// sets the field type to a new value
function setFieldType(elementId, newFieldType) { 
  let document = window.document;
  let field = document.querySelector(`#${elementId}`);
  let label = document.querySelector(`#${elementId}Label`);

  if (newFieldType === 'hidden') {
    // we want to hide the field and label
    if (!label.hasAttribute('hidden')) {
      label.setAttribute('hidden', 'hidden'); // hide label
    }
    field.setAttribute('type', 'hidden');     // hide field
  } else {
    // we want to show the field and label
    if (label.hasAttribute('hidden')) {
      label.removeAttribute('hidden');        // show label
    }
    field.setAttribute('type', newFieldType); // show field
  }
}

function trimField(str) { 
    return str.replace(/^\s+|\s+$/g,''); 
}

function validate() {
  let isValid = true;
  let obj1 = document.querySelector('#message');

  // check to make sure the message has more than just spaces
  if (trimField(obj1.value) == '') {      
      alert('Please Provide Message Details!');
      obj1.focus();
      isValid = false;      
  }

  return isValid;
}