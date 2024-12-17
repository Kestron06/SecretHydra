//*
//Replace Main Chunk script with a modified one
var newMainChunk = document.createElement('script');
newMainChunk.src = chrome.runtime.getURL("scripts/main-chunk.js");
document.body.appendChild(newMainChunk);

//Various grammar
document.body.innerHTML=document.body.innerHTML.replaceAll("english / german", "English/German,");
document.body.innerHTML=document.body.innerHTML.replaceAll("italian", "Italian");
document.body.innerHTML=document.body.innerHTML.replaceAll("about", "About");
document.body.innerHTML=document.body.innerHTML.replaceAll(">discord", ">Secret-hitler.com Discord</a> <a href='https://discord.gg/k3yVkrrvez' target=`_blank`>Secret Hydra Discord</a>");
document.body.innerHTML=document.body.innerHTML.replaceAll("Buy me a coffee :)", "Buy Secret-hitler.com devs a coffee");

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
            console.log("History Checkbox Background");
        }
    }

    //Vote buttons
    els=document.getElementsByTagName("ion-icon");
    for(var i=0;i<els.length;i++){
        if(els[i].title.includes("vote")&&els[i].style.backgroundColor!=="rgba(50,50,50,148)"){
            els[i].style.backgroundColor="rgba(50,50,50,148)";
            console.log(`Voting Buttons Background\n\n${els[i].innerHTML}`);
        }
    }

    //Game status
    els=document.getElementsByClassName("bPjLkT");
    for(var i=0;i<els.length;i++){
        if(els[i].innerHTML.includes("Liberal")||els[i].innerHTML.includes("Fascist")||els[i].innerHTML.includes("Hitler")){
            els[i].innerHTML=els[i].innerHTML.replaceAll("Liberals","SHIELD Agents").replaceAll("Liberal","SHIELD Agent").replaceAll("Fascists","Hydra Agents").replaceAll("Hitler","Pierce").replaceAll("Fascist","Hydra Agent");
            console.log("Div Text Replacement");
        }
    }
    els=document.getElementsByTagName("h4");
    for(var i=0;i<els.length;i++){
        if(els[i].innerHTML.includes("Liberal")||els[i].innerHTML.includes("Fascist")||els[i].innerHTML.includes("Hitler")){
            els[i].innerHTML=els[i].innerHTML.replaceAll("Liberals","SHIELD Agents").replaceAll("Liberal","SHIELD Agent").replaceAll("Fascists","Hydra Agents").replaceAll("Hitler","Pierce").replaceAll("Fascist","Hydra Agent");
            console.log("H4 Text Replacement");
        }
    }
    els=document.getElementsByClassName("jyFGLZ");
    for(var i=0;i<els.length;i++){
        if(/\-\s(Chancellor|President)/ig.test(els[i].innerHTML)){
            els[i].innerHTML=els[i].innerHTML.replace(/\-\sChancellor/ig,"- Director").replace(/\-\sPresident/ig,"- Deputy Director");
            console.log("- Director Replacement");
        }
    }
    //Images
    els=document.getElementsByTagName("img");
    for(var i=0;i<els.length;i++){
        switch(els[i].src.split("/")[els[i].src.split("/").length-1]){
            case "a-bad.jpg":
                //Hydra logo
                els[i].src=chrome.runtime.getURL("images/hydraLoyalty.jpg");
                console.log("Hydra Loyalty");
            break;
            case "boss.jpg":
                //Alexander Pierce
                els[i].src=chrome.runtime.getURL("images/pierce.jpg");
                console.log("Pierce");
            break;
            case "bad.jpg":
                //Rumlow
                els[i].src=chrome.runtime.getURL("images/rumlow.jpg");
                console.log("Hydra");
            break;
            case "good.jpg":
                //Coulson
                els[i].src=chrome.runtime.getURL("images/phil.jpg");
                console.log("Coulson");
            break;
            case "a-good.jpg":
                //SHIELD card
                els[i].src=chrome.runtime.getURL("images/shieldLoyalty.png");
                console.log("SHIELD Loyalty");
            break;
            case "track-good.jpg":
                //SHIELD Icon
                els[i].src=chrome.runtime.getURL("images/shield-icon.png");
                console.log("SHIELD Icon");
            break;
            case "track-bad.jpg":
                //Hydra Icon
                els[i].src=chrome.runtime.getURL("images/hydra-icon.jpg");
                console.log("Hydra Icon");
            break;
            case "policy-good.jpg":
                els[i].src=chrome.runtime.getURL("images/shieldLoyalty.png");
                console.log("SHIELD Policy");
            break;
            case "policy-bad.jpg":
                els[i].src=chrome.runtime.getURL("images/hydraLoyalty.jpg");
                console.log("Hydra Policy");
            break;
        }
    }
}
const observer = new MutationObserver(repeatedly);
observer.observe(document.body,{childList:true,subtree:true});
//*/