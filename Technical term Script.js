function Home(){
    location.href = ("Prolang NL.html")
}
function About() {
    location.href = ("About.html") //replace current tab with the html
} //just a creating a function

function ContactUs() {
    location.href = ("Contact Us.html")
}

function TechTerm() {
    location.href = ("Technical term.html")
}

function GlowingLogo(){
    document.getElementById("ShadowBanner").style.left = "50.5%" ;
    document.getElementById("ShadowBanner").style.top = "14.7%" ;
    document.getElementById("ShadowBanner").style.transform = "translate(-50%,0)"
    document.getElementById("JSLogo2").style.left = "-59%";
    document.getElementById("JSLogo2").style.top = "12%";
}
function LightoutLogo(){
    document.getElementById("ShadowBanner").style.left = "50%" ;
    document.getElementById("ShadowBanner").style.top = "14%" ;
    document.getElementById("ShadowBanner").style.transform = "translate(-50%,0)"
    document.getElementById("JSLogo2").style.left = "-60%";
    document.getElementById("JSLogo2").style.top = "10%";
}