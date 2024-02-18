let date;
do{
let pr= prompt("Type date with month/day/year");
date= new Date(pr);
}
while(isNaN(date)) 

let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let m = document.createElement("h1");

document.body.appendChild(m);

let monthText = months[date.getMonth()];
m.innerHTML = monthText;

let divElement = document.createElement("div");
divElement.id = "Gridder";






document.body.appendChild(divElement);
document.getElementById('Gridder').style.display="grid"
document.getElementById('Gridder').style.gridTemplateColumns="repeat(7,1fr)";
document.getElementById('Gridder').style.gridTemplateRows="repeat(6, 1fr)"
document.getElementById('Gridder').style.columnGap="0px"
document.getElementById('Gridder').style.rowGap="0px"
document.getElementById('Gridder').style.height="300px"
document.getElementById('Gridder').style.width="350px"

if (date.getMonth() >= 0 && date.getMonth() < 2||date.getMonth()>=11) {
   
    divElement.style.background = `url("img/1.jpg")`;
  } 
  else if (date.getMonth() >= 2 && date.getMonth() < 5) {
  
    divElement.style.background = `url("img/2.jpg")`;
  } 
  else if (date.getMonth() >= 5 && date.getMonth() < 9) 
  {
    
    divElement.style.background = `url("img/3.jpg")`;
  } 
  else
  {
    divElement.style.background = `url("img/4.jpg")`;
  }

let thisMonth=new Date(date.getFullYear(),date.getMonth(),1);


let days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ' ,'ВС'];

switch (thisMonth.getDay()) {
    
    case 0:
      thisMonth.setDate(thisMonth.getDate() - 6);
      break;
    case 1:
        thisMonth.setDate(thisMonth.getDate());
        break;
    case 2:
      thisMonth.setDate(thisMonth.getDate() - 1);
      break;
    case 3:
      thisMonth.setDate(thisMonth.getDate() - 2);
      break;
    case 4:
      thisMonth.setDate(thisMonth.getDate() - 3);
      break;
      case 5:
        thisMonth.setDate(thisMonth.getDate() - 4);
        break;
    case 6:
      thisMonth.setDate(thisMonth.getDate() - 5);
      break;
  }

for(let i=0; i<7 ; i++){
    for(let j=0; j<7; j++){
        if(i==0){
            let YellowBox = document.createElement("div");
            YellowBox.className="Yellow";
          
            divElement.appendChild(YellowBox);
            
            
        }
        else{
            
            let box = document.createElement("div");
            box.className="WeekDays";
            divElement.appendChild(box);
            box.style.border="1px solid white"
            box.innerHTML=`${thisMonth.getDate()}`
            
            if(thisMonth.getDay()==0||thisMonth.getDay()==6){
                box.style.color="red";
            }
            else{
            box.style.color="lime";
           
            }
            box.style.display="flex";
            box.style.justifyContent="center";
            box.style.alignItems="center";
            box.style.fontSize="24px";



            if(thisMonth.getDate()==date.getDate()){
            
                box.style.color="aqua";
                box.style.fontWeight="1000";
            }


            thisMonth.setDate(thisMonth.getDate()+1);
          
       
            
        }

    }
}


SetStyle();
function SetStyle(){
let z=0;
document.querySelectorAll('.Yellow').forEach(el=> {
    el.innerHTML=`${days[z]}`
    z++;
    if(z>5){
   
    el.style.cssText =
      `
      height: 50px;
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background:yellow;
      color:red;
    `;
    }
    else{
        el.style.cssText =
        `
        height: 50px;
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background:yellow;
      `;
    }
  });

 

}