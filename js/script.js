
function menu(){
    navbarID.style.display = "block";
    navbarExitID.style.display = "block";

    navButtonID.style.marginLeft ="76%";
    navButtonID.style.marginRight = "-76%";
    headerID.style.marginLeft ="94%";
    headerID.style.marginRight = "-94%";
    contentID.style.marginLeft ="76%";
    contentID.style.marginRight = "-76%";
}

function exit(){
    navbarID.style.display = "none";
    navbarExitID.style.display = "none";

    navButtonID.style.marginLeft ="15px";
    navButtonID.style.marginRight = "15px";
    headerID.style.marginLeft ="85px";
    headerID.style.marginRight = "10px";
    contentID.style.marginLeft ="10px";
    contentID.style.marginRight = "10px";
}




function navInOpenUnsereHunde(){
    if(navInUnsereHundeID.hidden === true){
        navInUnsereHundeID.hidden = false;
    }else{
        navInUnsereHundeID.hidden = true;
    }
    
    if(navInUnsereHundeID.hidden === false){
        navButtonInImageUnsereHundeID.style.rotate = "45deg";
    }else{
        navButtonInImageUnsereHundeID.style.rotate = "315deg";
    }
}

function navInOpenNachzucht(){
    if(navInNachzuchtID.hidden === true){
        navInNachzuchtID.hidden = false;
    }else{
        navInNachzuchtID.hidden = true;
    }

    if(navInNachzuchtID.hidden === false){
        navButtonInIn.hidden = false;
    }else{
        navButtonInIn.hidden = true;
    }
    
    if(navInNachzuchtID.hidden === false){
        navButtonInImageNachzuchtID.style.rotate = "45deg";
    }else{
        navButtonInImageNachzuchtID.style.rotate = "315deg";
    }
}

function navInOpenWelpentagebücher(){
    if(navInWelpentagebücherID.hidden === true){
        navInWelpentagebücherID.hidden = false;
    }else{
        navInWelpentagebücherID.hidden = true;
    }
    
    if(navInWelpentagebücherID.hidden === false){
        navButtonInImageWelpentagebücherID.style.rotate = "45deg";
    }else{
        navButtonInImageWelpentagebücherID.style.rotate = "315deg";
    }
}

function navInNachzuchtInNola(){
    if(navInNachzuchtInNolaID.hidden === true){
        navInNachzuchtInNolaID.hidden = false;
    }else{
        navInNachzuchtInNolaID.hidden = true;
    }

    if(navInNachzuchtInNolaID.hidden === false){
        navButtonInNachzuchtInNolaID.style.rotate = "45deg";
    }else{
        navButtonInNachzuchtInNolaID.style.rotate = "315deg";
    }
}