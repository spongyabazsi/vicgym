const header = document.querySelector("#header");

window.onscroll = function(){
    var top = window.scrollY;
    this.console.log(top);
    if(top > document.documentElement.clientHeight){
        this.document.getElementById("header").style.background = "black";
        this.document.getElementById("header").style.transition = "all 0.5s";
    }
    else{
        this.document.getElementById("header").style.background = "rgba(0,0,0,0.6)";
        this.document.getElementById("header").style.transition = "all 0.5s";
    };
}