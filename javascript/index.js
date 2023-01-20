function navigateToAbout() {
    //code to navigate to about page
    location.href = 'about.html';
}

// Get the about link element
var aboutLink = document.getElementById("about-link");

// Add an event listener to the about link
aboutLink.addEventListener("click", navigateToAbout);

