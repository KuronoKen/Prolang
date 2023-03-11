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


function LoadIn(){
    document.getElementById("mainpart").style.top = "15%";
    document.getElementById("mainpart").style.opacity = "1";
    const elementpart = document.getElementById("mainpart").children;
    for (let i = 0; i < elementpart.length; i++) {
        elementpart[i].style.opacity = "1";
      }
    
}

function LoadIn2(){
    document.getElementById("firstarticle").style.top = "5%";
    document.getElementById("firstarticle").style.opacity = "1";
    const elementpart = document.getElementById("firstarticle").children;
    for (let i = 0; i < elementpart.length; i++) {
        elementpart[i].style.opacity = "1";
      }
    
}