//*
//Replace Main Chunk script with a modified one
var newMainChunk = document.createElement('script');
newMainChunk.src = chrome.runtime.getURL("scripts/main-chunk.js");
document.body.appendChild(newMainChunk);

//Various grammar
document.body.innerHTML=document.body.innerHTML.replaceAll("english / german", "English/German,");
document.body.innerHTML=document.body.innerHTML.replaceAll("italian", "Italian");
document.body.innerHTML=document.body.innerHTML.replaceAll(` target="_blank">about`, ">About");
document.body.innerHTML=document.body.innerHTML.replaceAll(">discord", ">Secret-hitler.com Discord</a> <a href='https://discord.gg/k3yVkrrvez' target=`_blank`>Secret Hydra Discord</a>");
document.body.innerHTML=document.body.innerHTML.replaceAll("Buy me a coffee :)", "Buy Secret-hitler.com devs a coffee");

//About page
if(document.body.innerHTML.includes("was born out of my passion")){
    document.body.innerHTML=`What follows is the about section for the default website. The about for the extension can be found on <a href="https://github.com/Kestron06/SecretHydra">Github</a>.<br><a href="/">Go back to the main page?</a><br><br><hr><br>${document.body.innerHTML}`;
}

//Mid-game changes
function repeatedly(){
    //Backgrounds
    var classes=[".fJHnLB",".hEcbdf",".jyFGLZ",".hGPZJU"];
    for(var j=0;j<classes.length;j++){
        els=document.getElementsByClassName(classes[j]);
        for(var i=0;i<els.length;i++){
            if(els[i].style.backgroundColor!=="rgba(50,50,50,148)"){
                els[i].style.backgroundColor="rgba(50,50,50,148)";
            }
        }
    }
    
    //History Checkbox
    els=document.getElementsByTagName("div");
    for(var i=0;i<els.length;i++){
        if(els[i].innerHTML.includes("Allow history")&&els[i].style.backgroundColor!=="rgba(50,50,50,148)"){
            els[i].style.backgroundColor="rgba(50,50,50,148)";
        }
    }

    //Vote buttons
    els=document.getElementsByTagName("ion-icon");
    for(var i=0;i<els.length;i++){
        if(els[i].title.includes("vote")&&els[i].style.backgroundColor!=="rgba(50,50,50,148)"){
            els[i].style.backgroundColor="rgba(50,50,50,148)";
        }
    }

    //Game status
    els=document.getElementsByClassName("bPjLkT");
    for(var i=0;i<els.length;i++){
        if(els[i].innerHTML.includes("Liberal")||els[i].innerHTML.includes("Fascist")||els[i].innerHTML.includes("Hitler")){
            els[i].innerHTML=els[i].innerHTML.replaceAll("Liberals","SHIELD Agents").replaceAll("Liberal","SHIELD Agent").replaceAll("Fascists","Hydra Agents").replaceAll("Hitler","Pierce").replaceAll("Fascist","Hydra Agent");
        }
    }
    els=document.getElementsByTagName("h4");
    for(var i=0;i<els.length;i++){
        if(els[i].innerHTML.includes("Liberal")||els[i].innerHTML.includes("Fascist")||els[i].innerHTML.includes("Hitler")){
            els[i].innerHTML=els[i].innerHTML.replaceAll("Liberals","SHIELD Agents").replaceAll("Liberal","SHIELD Agent").replaceAll("Fascists","Hydra Agents").replaceAll("Hitler","Pierce").replaceAll("Fascist","Hydra Agent");
        }
    }
    els=document.getElementsByClassName("jyFGLZ");
    for(var i=0;i<els.length;i++){
        if(/\-\s(Chancellor|President)/ig.test(els[i].innerHTML)){
            els[i].innerHTML=els[i].innerHTML.replace(/\-\sChancellor/ig,"- Director").replace(/\-\sPresident/ig,"- Deputy Director");
        }
    }
    //Images
    els=document.getElementsByTagName("img");
    for(var i=0;i<els.length;i++){
        switch(els[i].src.split("/")[els[i].src.split("/").length-1]){
            case "a-bad.jpg":
                //Hydra logo
                els[i].src=chrome.runtime.getURL("images/hydraLoyalty.jpg");
            break;
            case "boss.jpg":
                //Alexander Pierce
                els[i].src=chrome.runtime.getURL("images/pierce.jpg");
            break;
            case "bad.jpg":
                //Rumlow
                els[i].src=chrome.runtime.getURL("images/rumlow.jpg");
            break;
            case "good.jpg":
                //Coulson
                els[i].src=chrome.runtime.getURL("images/phil.jpg");
            break;
            case "a-good.jpg":
                //SHIELD card
                els[i].src=chrome.runtime.getURL("images/shieldLoyalty.png");
            break;
            case "track-good.jpg":
                //SHIELD Icon
                els[i].src=chrome.runtime.getURL("images/shield-icon.png");
            break;
            case "track-bad.jpg":
                //Hydra Icon
                els[i].src=chrome.runtime.getURL("images/hydra-icon.jpg");
            break;
            case "policy-good.jpg":
                els[i].src=chrome.runtime.getURL("images/shieldLoyalty.png");
            break;
            case "policy-bad.jpg":
                els[i].src=chrome.runtime.getURL("images/hydraLoyalty.jpg");
            break;
        }
    }
}
const observer = new MutationObserver(repeatedly);
observer.observe(document.body,{childList:true,subtree:true});
//*/
