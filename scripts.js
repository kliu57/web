// Create an event handler to run when the page is loaded
window.onload = function () {
  let document = window.document;
  let form = document.querySelector("#contactform"); // contact me form
  let newHash = "";

  // clear hash upon refresh
  history.pushState(null, null, location.pathname + location.search);

  // Add event listener to hash change
  // When a new menu link is clicked, hide all the sections and just show the section clicked
  // Deactivate all the links and make current link active
  window.addEventListener("hashchange", function (e) {
    newHash = window.location.hash;
    loadMenuItem(newHash);
  });

  // clear the contact me form
  form.reset();

  // Add event listener to contact me form, stop form from submitting if message
  // is blank or only contains spaces
  form.addEventListener("submit", function (e) {
    if (!validateNotBlank("message", "Please enter a message!")) {
      e.preventDefault(); //stop form from submitting
    }
  });

  console.log("scripts loaded");
};

function showDiplomaPopup() {
  const popupOverlay = document.getElementById("diplomaPopup");
  popupOverlay.style.display = "flex";

  popupOverlay.addEventListener("click", function (event) {
    if (event.target === this) {
      closeDiplomaPopup();
    }
  });
}

function closeDiplomaPopup() {
  document.getElementById("diplomaPopup").style.display = "none";
}

// show/hide different page content depending on which link is clicked
function loadMenuItem(hash) {
  let document = window.document;
  let links = document.querySelector("#menu").getElementsByTagName("li");
  const menuItems = ["#home", "#about", "#education", "#contact"];

  // deactivate all links
  menuItems.forEach(
    (item) => {
      let linkElement = document.querySelector(`${item}Link`);
      linkElement.className = "single";
      // prevent clicking on the active link
      linkElement.addEventListener('click', function(event) {
        if (linkElement.classList.contains("active")) {
          event.preventDefault();
        }
      });
    }
  );

  // hide all the menu items
  menuItems.forEach(
    (item) => (document.querySelector(item).className = "content-region hide")
  );

  // show the desired menu item
  document.querySelector(hash).className = "content-region show";

  // make the current link active
  document.querySelector(`${hash}Link`).className = "single active";
}

// sets the field type to a new value
function setFieldType(elementId, newFieldType) {
  let document = window.document;
  let field = document.querySelector(`#${elementId}`);
  let label = document.querySelector(`#${elementId}Label`);

  if (newFieldType === "hidden") {
    // we want to hide the field and label
    if (!label.hasAttribute("hidden")) {
      label.setAttribute("hidden", "hidden"); // hide label
    }
    field.setAttribute("type", "hidden"); // hide field
  } else {
    // we want to show the field and label
    if (label.hasAttribute("hidden")) {
      label.removeAttribute("hidden"); // show label
    }
    field.setAttribute("type", newFieldType); // show field
  }
}

// Trims leading and trailing white spaces
function trimField(str) {
  return str.replace(/^\s+|\s+$/g, "");
}

// Returns true if field contains one or more non-space characters
// Displays alert and returns false otherwise
function validateNotBlank(elementId, errorMsg) {
  let isValid = true;
  let obj = document.querySelector(`#${elementId}`);

  // check to make sure the message has more than just spaces
  if (trimField(obj.value) == "") {
    alert(errorMsg);
    obj.focus();
    isValid = false;
  }
  return isValid;
}
