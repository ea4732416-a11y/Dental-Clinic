let cursor = document.querySelector(".cursor");

document.addEventListener( "mousemove" , (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

let cursorDot = document.querySelector(".cursor-dot");

document.addEventListener ( "mousemove", (e) => {
    cursorDot.style.left = e.clientX + "px";
    cursorDot.style.top = e.clientY + "px";      
})

document.querySelectorAll("button").forEach((button) => {

    button.addEventListener( "mouseenter" , () => {
        cursor.classList.add("hover");
        cursorDot.classList.add("hover");
    });

    button.addEventListener( "mouseleave" , () => {
        cursor.classList.remove("hover");
        cursorDot.classList.remove("hover");
    })
});

document.querySelectorAll("a").forEach((a) => {

    a.addEventListener( "mouseenter" , () => {
        cursor.classList.add("hover");
        cursorDot.classList.add("hover");
    });

    a.addEventListener( "mouseleave" , () => {
        cursor.classList.remove("hover");
        cursorDot.classList.remove("hover");
    })
});


document.addEventListener( "mousedown" , () => {
    cursor.classList.add("click");
    cursorDot.classList.add("click");
});
document.addEventListener( "mouseup" , () => {
    cursor.classList.remove("click");
    cursorDot.classList.remove("click"); 
});

document.addEventListener ( "click", (e) => {

    for(let i = 0; i < 10; i++){

        let particle = document.createElement("span");

        particle.className = "particle" ;

        let angle = (Math.PI * 2 * i) / 10;
        let distance = 300 ;
        
        let x = (Math.cos(angle)) * distance;
        let y = (Math.sin(angle)) * distance;

        particle.style.left = e.clientX + "px";
        particle.style.top = e.clientY + "px";

        particle.style.setProperty ( "--x", x + "px");
        particle.style.setProperty ("--y", y + "px");
        
        document.body.appendChild(particle);

        particle.addEventListener( "animationend", () => {
            particle.remove();
        });
    }


});

document.addEventListener ( "click", (e) => {

    for(let i = 0; i < 20; i++){

        let particles = document.createElement("span");

        particles.className = "particles" ;

        let angle = (Math.PI * 5 * i) / 50;

        let distance = 100 ;
        
        let x = (Math.cos(angle)) * distance;
        let y = (Math.sin(angle)) * distance;

        particles.style.left = e.clientX + "px";
        particles.style.top = e.clientY + "px";

        particles.style.setProperty ( "--x", x + "px");
        particles.style.setProperty ("--y", y + "px");
        
        document.body.appendChild(particles);

        particles.addEventListener( "animationend", () => {
            particles.remove();
        });
    }


});




