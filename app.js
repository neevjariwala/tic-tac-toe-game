let box=document.querySelectorAll(".box");
turnvalue=true;
const winnercheck=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
box.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnvalue){
            box.innerText="X";
            turnvalue=false;

        }else{
            box.innerText="O";
            turnvalue=true;
        }
        checkwinner();
        box.disabled=true;
    
    });
});

const disablebox=()=>{
    for(b of box){
        b.disabled=true;
    }
}

const checkwinner=()=>{
    for(let pattern of winnercheck){
        let pos1=box[pattern[0]].innerText;
        let pos2=box[pattern[1]].innerText;
        let pos3=box[pattern[2]].innerText;
     
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner");
                disablebox();
            }
        }
    }
}


