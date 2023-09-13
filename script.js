document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById("menu-btn");
    const navlinks = document.getElementById("nav-links");
    const ovrlay = document.getElementById("overlay");

    menuBtn.addEventListener("click", function() {
        menuBtn.classList.toggle("active");
        const bar1 = document.getElementById("bar1");
        const bar2 = document.getElementById("bar2");
        const bar3 = document.getElementById("bar3");
        
        bar1.classList.toggle("active");
        bar2.classList.toggle("active");
        bar3.classList.toggle("active");
        if (menuBtn.classList.contains("active")) {
        navlinks.style.opacity = "1";
        } else {
            navlinks.style.opacity = "0";
        }
        if (menuBtn.classList.contains("active")) {
            ovrlay.style.opacity = "1";
            } else {
                ovrlay.style.opacity = "0";
            }
    });
});