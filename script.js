var nav_btn = document.getElementById("nav-btn");
var nav_btn_close = document.getElementById('nav-btn-close');
var mob_nav = document.getElementById('mob-nav');

nav_btn.addEventListener(
    "click",
    function show(){
        
        mob_nav.style.display = "block";
        mob_nav.style.position = "fixed";
        mob_nav.style.right = "0";
        mob_nav.style.top = "0";
        document.getElementById("nav-btn").style.display = "none";
    }
);

nav_btn_close.addEventListener(
    "click",
    function close(){
        
        mob_nav.style.display = "none";
        document.getElementById("nav-btn").style.display = "block";
    }
);

