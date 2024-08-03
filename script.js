// =====> <navbar-section> <===== \\
    // =====> 1 <=====\\
    const btnOne = document.getElementById("animate1");
    btnOne.addEventListener( "mouseover",(e) =>{
        const x = e.pageX - btnOne.offsetLeft;
    
        const y = e.pageY - btnOne.offsetTop;
        btnOne.style.setProperty("--pageX", x + "px");
        btnOne.style.setProperty("--pageY", y + "px")
    })
    // =====> 2 <=====\\
    const btnTwo = document.getElementById("animate2");
    btnTwo.addEventListener( "mouseover",(e) =>{
        const x = e.pageX - btnTwo.offsetLeft;
        const y = e.pageY - btnTwo.offsetTop;
        btnTwo.style.setProperty("--pageX", x + "px");
        btnTwo.style.setProperty("--pageY", y + "px")
    })
    // =====> 3 <=====\\

    const btnthree = document.getElementById("animate3");
    btnthree.addEventListener( "mouseover",(e) =>{
        const x = e.pageX - btnthree.offsetLeft;

        const y = e.pageY - btnthree.offsetTop;
        btnthree.style.setProperty("--pageX", x + "px");
        btnthree.style.setProperty("--pageY", y + "px")
    })
    // =====> 4 <=====\\
    const btnFour = document.getElementById("animate4");
    btnFour.addEventListener( "mouseover",(e) =>{
        const x = e.pageX - btnFour.offsetLeft;
    
        const y = e.pageY - btnFour.offsetTop;
        btnFour.style.setProperty("--pageX", x + "px");
        btnFour.style.setProperty("--pageY", y + "px")
    })
    // =====> 5 <=====\\
    const btnFive = document.getElementById("animate5");
    btnFive.addEventListener( "mouseover",(e) =>{
        const x = e.pageX - btnFive.offsetLeft;
    
        const y = e.pageY - btnFive.offsetTop;
        btnFive.style.setProperty("--pageX", x + "px");
        btnFive.style.setProperty("--pageY", y + "px")
    }) 

    // =====> <small-device-hambarger> <===== \\
    const menu = document.getElementById("menu-btn");
    const smNav = document.getElementById("smNav");
    menu.addEventListener("click", () =>{
        smNav.style.right = '0'
    } )
    const crossBtn = document.getElementById("btn-cross")
    crossBtn.addEventListener("click", () =>{
        smNav.style.right = "-80%"
    })
    // =====> </small-device-hambarger> <===== \\
    
// =====></navbar-section> <===== \\
// =====> <mode-button-section> <===== \\
const body = document.getElementById("main");
const chkbox = document.getElementById('mode');
const toggle = document.getElementById('toggle');

toggle.addEventListener("click", () => {
    if(chkbox.checked === false){
        body.style.backgroundColor  = "#d8dcff"
    }else{
        body.style.backgroundColor = "#150a3a"
    }
})

// =====><small-device-toggle-mood> <===== \\
const bodySm = document.getElementById("main");
const chkboxSm = document.getElementById('modes');
const toggleSm = document.getElementById('toggles');

toggleSm.addEventListener("click", () => {
    if(chkboxSm.checked === false){
        bodySm.style.backgroundColor  = "#d8dcff"
    }else{
        bodySm.style.backgroundColor = "#150a3a"
    }
})
// =====></small-device-toggle-mood> <===== \\
// =====> </mode-button-section> <===== \\

// =====>  <hamburger-section> <===== \\
    const hamburger = document.getElementById("menu-btn");
    
// =====>  </hamburger-section> <===== \\