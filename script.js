let boxs = document.querySelectorAll(".box");
let restrat_btn = document.querySelector(".restart");
let current_status = document.querySelector("#status");

let o = '<img src="img/o.png"/ width="80%" height="80%">';
let x = '<img src="img/x-png.png"/ width="70%" height="70%">';

let wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let opition = ["","","","","","","","",""];
let currentPlayer = x;
let Player="X";
let runing = false;
init()

function init()
{
    boxs.forEach(box=>box.addEventListener("click",boxClick));
    restrat_btn.addEventListener("click",restart);
    current_status.textContent = `${Player} YOUR TURN`;
    runing=true;
}

function boxClick()
{
    // console.log(this.dataset.index)
    let index = this.dataset.index;
    if(opition[index]!="" || !runing){
            return;
    };
    Checkbox(this,index);
    wincontent();
}

function changeplayer()
{
    Player = Player=="X" ? "O":"X";
    currentPlayer= currentPlayer==x ? o:x;
    current_status.innerHTML = `${Player} YOUR TURN`;
}

function Checkbox(box,index)
{
   opition[index]=Player;
   box.innerHTML = currentPlayer
};

function wincontent()
{
    let win = false;
    for(let i=0; i<wins.length; i++)
        {
            let container = wins[i];
            let box1 = opition[container[0]];
            let box2 = opition[container[1]];
            let box3 = opition[container[2]];

            if(box1=="" || box2=="" || box3=="")
                {
                    continue;
                }
            if(box1==box2 && box2==box3)
                {
                    win=true;
                    boxs[container[0]].classList.add("match")
                    boxs[container[1]].classList.add("match")
                    boxs[container[2]].classList.add("match")
                }
        }
    
    if(win)
    {
        current_status.textContent = `${Player} YOU WIN..`;
        runing=false;
    }
    else if(!opition.includes("")) 
    {
        current_status.textContent = `GAME DRAW...`;
        runing=false;
    }
    else
    {
        changeplayer()
    }
}

function restart()
{
    opition = ["","","","","","","","",""];
    currentPlayer = x;
    Player="X";
    runing = true;
    init()
    current_status.textContent = `${Player} YOUR TURN`;

    boxs.forEach(box=>{
        box.innerHTML=" "
        box.classList.remove("match")
    })
};


let obj = {name:"jhon",age:32}
console.log(obj);
let obj2 = JSON.stringify(obj)
console.log(obj2);

let obj3 = JSON.parse(obj2)
console.log(obj3);


