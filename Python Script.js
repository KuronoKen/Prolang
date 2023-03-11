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
    document.getElementById("ShadowBanner").style.top = "15%" ;
    document.getElementById("ShadowBanner").style.transform = "translate(-50%,0)"
    document.getElementById("Logo").style.filter = "contrast(120%)"
}
function LightoutLogo(){
    document.getElementById("ShadowBanner").style.left = "50%" ;
    document.getElementById("ShadowBanner").style.top = "14%" ;
    document.getElementById("ShadowBanner").style.transform = "translate(-50%,0)"
    document.getElementById("Logo").style.filter = "contrast(100%)"
}
function LoadIn(){
    if (window.innerWidth >= 1200 ){
        document.getElementById("SecondArticle").style.transform = "translate(0,0)";
        document.getElementById("SecondArticleShadow").style.transform = "translate(0,0)";
        document.getElementById("FamousLogo").style.transform = "translate(0,0)";
        document.getElementById("FamousLogoBG").style.transform = "translate(0,0)";
        document.getElementById("FamousLogoBG2").style.transform = "translate(0,0)";
    }
    else {
        document.getElementById("SecondArticle").style.transform = "translate(-50%,0)";
        document.getElementById("SecondArticleShadow").style.transform = "translate(-48%,0)";
        document.getElementById("FamousLogo").style.transform = "translate(-50%,0)";
        document.getElementById("FamousLogoBG").style.transform = "translate(-50%,0)";
        document.getElementById("FamousLogoBG2").style.transform = "translate(-50%,0";
    }
    document.getElementById("SecondArticle").style.opacity = 1;
    document.getElementById("SecondArticleShadow").style.opacity = 1;
    document.getElementById("FamousLogo").style.opacity = 1;
    document.getElementById("FamousLogoBG").style.opacity = 1;
    document.getElementById("FamousLogoBG2").style.opacity = 1;
    const elementpart2 = document.getElementById("SecondArticle").children;
    for (let i = 0; i < elementpart2.length; i++) {
        elementpart2[i].style.opacity = "1";
        elementpart2[i].style.transform = "translate(0,0)";
    }
    document.getElementById("FirstArticle").style.opacity = 1;
    document.getElementById("FirstArticle").style.transform = "translate(0,0)";
    document.getElementById("FirstArticleShadow").style.opacity = 1;
    document.getElementById("FirstArticleShadow").style.transform = "translate(0,0)";
    const elementpart = document.getElementById("FirstArticle").children;
    for (let i = 0; i < elementpart.length; i++) {
        elementpart[i].style.opacity = "1";            
        elementpart[i].style.transform = "translate(0,0)";
    }
    
    document.getElementById("ThirdArticle").style.opacity = 1;
    document.getElementById("ThirdArticle").style.transform = "translate(0,0)";
    document.getElementById("ThirdArticleShadow").style.opacity = 1;
    document.getElementById("ThirdArticleShadow").style.transform = "translate(0,0)";
    const elementpart3 = document.getElementById("ThirdArticle").children;
    for (let i = 0; i < elementpart3.length; i++) {
        elementpart3[i].style.opacity = "1";
        elementpart3[i].style.transform = "translate(0,0)";
    }
}

window.onresize = LoadIn;