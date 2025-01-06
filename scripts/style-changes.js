//Title
document.title="Secret Hydra";

//Favicon
var link = document.createElement('link');
link.id = 'dynamic-favicon';
link.rel = 'shortcut icon';
link.href = chrome.runtime.getURL("icons/shield.png");
document.head.appendChild(link);
var els=document.head.getElementsByTagName("link");
for(var i=0;i<els.length;i++){
    if(els[i].rel==="icon") document.head.removeChild(els[i]);
}

//Dark Mode
els=document.body.getElementsByTagName("style");
for(var i=0;i<els.length;i++){
    document.body.removeChild(els[i]);
}
link = document.createElement('link');
link.rel = 'stylesheet';
link.href = chrome.runtime.getURL('styles/dark-mode.css');
document.head.appendChild(link);

//Banner
document.getElementsByTagName("h1")[0].innerHTML=`Secret Hydra Online`;

//Game picker background
els=document.getElementsByTagName("img");
for(var i=0;i<els.length;i++){
    if(els[i].src.includes("background.jpg")){
        els[i].src=chrome.runtime.getURL("images/loadBack.png");
    }
}

//Game description, and misc ads
els=document.getElementsByTagName("p");
for(var i=0;i<els.length;i++){
    if(els[i].innerHTML.startsWith("Secret Hitler is a social deduction game")){
        els[i].innerHTML=`Secret Hydra is a social deduction game for 5-10 people about finding and stopping Alexander Pierce. Players are secretly divided into two teams: the S.H.I.E.L.D. Agents, who have a majority, and the Hydra agents, who are hidden to everyone but each other. If the SHIELD agents can learn to trust each other, they have enough agents to control the missions and save the day. But the Hydra agents will say whatever it takes to get into power, advance their agenda, and win the game.`;
    }
    else if(els[i].innerHTML.includes("voldemort")||els[i].innerHTML.includes("Looking for players?")||els[i].innerHTML.includes("skyjo")||els[i].innerHTML.includes("Privacy (rather a party game")){
        els[i].parentElement.removeChild(els[i]);
        i--;
    }
}
els=document.getElementsByClassName("dark-container");
for(var i=0;i<els.length;i++){
    if(els[i].innerHTML.includes("Mach")){
        els[i].parentElement.removeChild(els[i]);
        i--;
    }
}
