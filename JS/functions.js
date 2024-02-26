
/*tijdelijke testen om te zien als message kommen */
let isLoggedIn = false;
//#region POPUP
function createPopup() {
    if(!isLoggedIn){
        message = "je moet eerst inloggen"
    }
    else{
        message = "je hebt geen toegang tot deze project"
    }
    const popup = document.createElement('section');
    popup.classList.add('popup'); 
    popup.textContent = message;
  
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.classList.add('close-button');
    closeButton.addEventListener('click', () => {
      popup.remove();
    });
    popup.appendChild(closeButton);
  
    document.body.appendChild(popup);
    popup.style.opacity = 0;
    popup.style.transition = 'opacity 0.3s ease-in-out';
    setTimeout(() => {
      popup.style.opacity = 1;
    }, 20);
  
    setTimeout(() => {
      popup.remove();
    }, 3000);
}

//#endregion




//#region SHOW_HIDE_SECTIONS
  function Show_Hide_HeaderSection() {
    var A = document.getElementById("tohide");
    var B = document.getElementById("toshow");
    var C = document.getElementById("info_text");
    if(A.style.display === "none"){
      A.style.display = "flex";
      B.style.display = "none";
      C.style.display= "none";
      isLoggedIn = false;  /*dit is om te testen de popups !*/
    }
    else{
      A.style.display = "none";
      B.style.display = "flex";
      isLoggedIn = true; /*dit is om te testen de popups !*/
    }
  }



function ShowExtraInfo() {
  var x = document.getElementById("info_text");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//#endregion

//#region Dropdown_section
// SOURCE : https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown
function showDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// dit zorgt ervoor dat als user buiten de dropdown clickt , de dropdown gaat dicht
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//#endregion


/**
 * dit is om de popup te tonen met een addEventListener
 */
const projectElements = document.querySelectorAll('.landing_page_projects')
projectElements.forEach(projectElement => {
  projectElement.addEventListener('click', () => {
    createPopup('You don\'t have access to this project.')
  })
})