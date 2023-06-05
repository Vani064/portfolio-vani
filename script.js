var menutags = document.querySelectorAll('.menu a');

for(var i=0;i<menutags.length;i++)
{
   menutags[i].addEventListener('click',function(event){
    event.preventDefault();
    var targetsectionID = this.textContent.trim().toLowerCase(); 
    var targetsection = document.getElementById(targetsectionID);
    var interval = setInterval(function(){
        var targetCoordinates = targetsection.getBoundingClientRect();
        if(targetCoordinates.top<=0)
        {
            clearInterval(interval);
            return;
        }
        window.scrollBy(0,50);
    },50);
   });
}
var anidone = false;
var d1done = false;
var d2done = false;
var d3done = false;
var d4done = false;
var d5done = false;
var d6done = false;
var bars = document.querySelectorAll('.skill-progress div');
var skillcon = document.getElementById('skills-container');
var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
var div3 = document.getElementById('div3');
var div4 = document.getElementById('div4');
var div5 = document.getElementById('div5');
var div6 = document.getElementById('div6');
window.addEventListener('scroll',checkscroll);

function inibars(){
    for(let b of bars)
    {
        b.style.width = 0 + 'rem';
    }
}
var v;
inibars();

function fillbars(v)
{
        let atr = v.getAttribute('data');
        let i = 0;
        let interval = setInterval(function(){
            if(i>atr)
            {
               clearInterval(interval);
               return;
            }
                v.style.width = i + 'rem';
                i++;
        },30);
        
}

function checkscroll()
{
    var sc = skillcon.getBoundingClientRect();
    var d1 = div1.getBoundingClientRect();
    var d2 = div2.getBoundingClientRect();
    var d3 = div3.getBoundingClientRect();
    var d4 = div4.getBoundingClientRect();
    var d5 = div5.getBoundingClientRect();
    var d6 = div6.getBoundingClientRect();

    if(!anidone && sc.top < window.innerHeight )
    {
        if(!d1done && d1.top < window.innerHeight)
       {
        fillbars(div1);
        d1done = true;
       }
        if(!d2done && d2.top < window.innerHeight)
       {
        fillbars(div2);
        d2done = true;
       }
        if(!d3done && d3.top < window.innerHeight)
       {
        fillbars(div3);
        d3done = true;
       }
        if(!d4done && d4.top < window.innerHeight)
       {
        fillbars(div4);
        d4done = true;
       }
        if(!d5done && d5.top < window.innerHeight)
       {
        fillbars(div5);
        d5done = true;
       }
        if(!d6done && d6.top < window.innerHeight)
       {
        fillbars(div6);
        d6done = true;
        anidone = true;
       }
    }
    else if(sc.top > window.innerHeight){
        anidone = false;
        d1done = false;
        d2done = false;
        d3done = false;
        d4done = false;
        d5done = false;
        d6done = false;
        inibars();
    }
}