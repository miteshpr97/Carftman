
//toggle function for responsive navbar




function toggleMenu() {
    const navLinks = document.querySelector('#nav-links');
    navLinks.classList.toggle('show');
    console.log("hey")
  }




  document.addEventListener("DOMContentLoaded", () => {
    // Dropdown toggle function
    function setupDropdown(buttonSelector, dropdownSelector) {
      const button = document.querySelector(buttonSelector);
      const dropdown = document.querySelector(dropdownSelector);
  
      // Show dropdown when mouse enters button
      button.addEventListener("mouseenter", () => {
        dropdown.classList.add("show");
      });
  
      // Keep dropdown visible when hovering over dropdown content
      dropdown.addEventListener("mouseenter", () => {
        dropdown.classList.add("show");
      });
  
      // Hide dropdown when mouse leaves both button and dropdown
      button.addEventListener("mouseleave", () => {
        setTimeout(() => {
          if (!dropdown.matches(":hover")) {
            dropdown.classList.remove("show");
          }
        }, 100); // Small delay to allow moving from button to dropdown
      });
  
      dropdown.addEventListener("mouseleave", () => {
        dropdown.classList.remove("show");
      });
    }
  
    // Set up dropdowns
    setupDropdown(".case-btn", ".case-dropdown");
    setupDropdown(".automated-btn", ".automated-dropdown");
    setupDropdown(".storage-btn", ".storage-dropdown");
  });









  // const activeLinks = document.getElementsByClassName("dropdown-btn");

 
// // Convert HTMLCollection to an array and add click event to each button
// Array.from(activeLinks).forEach((btn) => {
//   console.log("fhfhfh");
//   btn.addEventListener("click", function () {

//     console.log("Button clicked:", this.textContent);
    
//   });
// });




function toggleDropdown(button, dropdownId) {
  // Close all dropdowns before opening the clicked one
  document.querySelectorAll(".dropdown-btn").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".dropdown-content").forEach(menu => menu.classList.remove("show"));

  // Toggle the selected dropdown
  button.classList.toggle("active");
  document.getElementById(dropdownId).classList.toggle("show");
}






  

