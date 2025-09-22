const myImage=document.querySelector("img");
myImage.onclick=()=>{const mySrc = myImage.getAttribute("src");
    if(mySrc==="iamges/firefox-icon.png")
    {
        myImage.setAttribute("src","images/firefox3.png");
    }
    else {
            myImage.setAttribute("src","images/firefox-icon.png");  
        }
    };
    let myButton=document.querySelector("button");
    let myHeading = document.querySelector("h1");
    function setUserName(){
        const myName=prompt("Please enter your name.");
        localStorage.setItem("name",myName);
        myHeading.textContent=`Mozilla is cool, ${myName}`;
    }
    if(!localStorage.getItem("name")){
        setUserName();
    } else{
        const storeName=localStorage.getItem("name");
        myHeading.textContent=`mozilla is coll,${storeName}`;
    }
    myButton.onclick=function(){
        setUserName();
    };
    function setUserName(){
        const myName=prompt("Please enter your name.");
        if(!myName){
            setUserName();
        }else{
            localStorage.setItem("name",myName);
            myHeading.textContent=`Mozilla is cool,${myName}`;
        }
    }