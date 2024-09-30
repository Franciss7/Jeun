const myNavBar = document.getElementById("navBar");
const openBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close");

function openAndClose(){
    if(myNavBar.style.display==="flex"){
        myNavBar.style.display="none"
    }

    else{
        myNavBar.style.display="flex"
    }
}

openBtn.addEventListener('click', openAndClose);
closeBtn.addEventListener('click', openAndClose);
