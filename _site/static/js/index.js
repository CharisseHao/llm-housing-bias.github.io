document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            const targetElement = (targetId === "#") ? document.body : document.querySelector(targetId);
  
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
  
  });
  
  $(document).ready(function(){
      $("#abstract .container").load("sections/abstract.html", function() { setupFadeInObserver(); });
      $("#methods .container").load("sections/methods.html", function() { setupFadeInObserver(); });
      $("#prompts .container").load("sections/prompts.html", function() { setupFadeInObserver(); });
      $("#apps .container").load("sections/apps.html", function() { setupFadeInObserver(); });
      $("#about_team .container").load("sections/about_team.html", function() { setupFadeInObserver(); });
      $("#results .container").load("sections/results.html", function() { setupFadeInObserver(); });
      $("#conclusion .container").load("sections/conclusion.html", function() { setupFadeInObserver(); });
      $("#differences .container").load("sections/differences.html", function() { setupFadeInObserver(); });
  
  });
//   $(document).ready(function(){
//     const sections = ["intro", "methods", "prompts", "apps", "team", "results", "conclusion", "differences"];

//     sections.forEach(section => {
//         $("#" + section + " .container").load("sections/" + section + ".html", function() { 
//             setupFadeInObserver(); // Run after content loads
//         });
//     });
// });