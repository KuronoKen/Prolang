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
    document.getElementById("ShadowBanner").style.left = "50.7%" ;
    document.getElementById("ShadowBanner").style.top = "15%" ;
    document.getElementById("ShadowBanner").style.transform = "translate(-50%,0)"
}
function LightoutLogo(){
    document.getElementById("ShadowBanner").style.left = "50%" ;
    document.getElementById("ShadowBanner").style.top = "14%" ;
    document.getElementById("ShadowBanner").style.transform = "translate(-50%,0)"

}