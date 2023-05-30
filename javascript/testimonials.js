let clickIcon = document.getElementById('burgerMenu');
let burgerMenu = document.getElementById('containerHamburger');
let row = document.getElementById('dropdown');
let clickMe = 0;

function menuBars (){
    if(clickMe==0){
        burgerMenu.style.display='block';
        clickIcon.style.transform='rotate(90deg)';
        row.style.marginTop='100px';
        row.style.transition='.8s';
        clickMe=1;
    }else{burgerMenu.style.display='none';
        clickIcon.style.transform='rotate(0)';
        row.style.marginTop='0';
        clickMe=0;
}
};

//OOP//
