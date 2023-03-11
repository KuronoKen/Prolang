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

function LoadIn(){
    document.getElementById("firstarticle").style.opacity = 1;
    document.getElementById("firstarticle").style.transform = "translate(0,0)";
    const elementpart = document.getElementById("firstarticle").children;
    for (let i = 0; i < elementpart.length; i++) {
        elementpart[i].style.opacity = "1";
        elementpart[i].style.transform = "translate(0,0)";
    }
    document.getElementById("secondarticle").style.opacity = 1;
    document.getElementById("secondarticle").style.transform = "translate(0,0)";
    const elementpart2 = document.getElementById("secondarticle").children;
    for (let i = 0; i < elementpart.length; i++) {
        elementpart2[i].style.opacity = "1";
        elementpart2[i].style.transform = "translate(0,0)";
    }
    document.getElementById("thirdarticle").style.opacity = 1;
    document.getElementById("thirdarticle").style.transform = "translate(0,0)";
    const elementpart3 = document.getElementById("thirdarticle").children;
    for (let i = 0; i < elementpart.length; i++) {
        elementpart3[i].style.opacity = "1";
        elementpart3[i].style.transform = "translate(0,0)";
    }
    document.getElementById("fourtharticle").style.opacity = 1;
    document.getElementById("fourtharticle").style.transform = "translate(0,0)";
    const elementpart4 = document.getElementById("fourtharticle").children;
    for (let i = 0; i < elementpart.length; i++) {
        elementpart4[i].style.opacity = "1";
        elementpart4[i].style.transform = "translate(0,0)";
    }
    document.getElementById("learnmore").style.opacity = 1;
    document.getElementById("learnmore").style.transform = "translate(0,0)";
    
}