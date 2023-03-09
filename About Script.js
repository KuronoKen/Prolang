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
    document.getElementById("NeonLogo").style.opacity = 1;
    document.getElementById("glowingbar").style.boxShadow = "0 0 15px white"; 

}
function LightoutLogo(){
    document.getElementById("NeonLogo").style.opacity = 0;
    document.getElementById("glowingbar").style.boxShadow = "0 0 0px white"; 
}