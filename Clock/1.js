
let divElement = document.createElement("div");
divElement.id = "Clock";
divElement.style.height="300px";
divElement.style.width="Auto"
document.body.appendChild(divElement);

let img = [document.createElement("img"), document.createElement("img"),
document.createElement("img"),
document.createElement("img"),
document.createElement("img"),
document.createElement("img"),
document.createElement("img"),
document.createElement("img")];


for(let i=0;i<img.length;i++){
    img[i].src="img/SVG/0.gif"
    img[i].style.height="200px"
    divElement.appendChild(img[i]);
}
img[2].src="img/SVG/points.gif"
img[5].src="img/SVG/points.gif"






function Timer(){
    let curDate=new Date();
  
    let hours =curDate.getHours();
    let minutes=curDate.getMinutes();
    let seconds= curDate.getSeconds();

    img[0].src = `img/SVG/${Math.floor(hours/10)}.gif`;
    img[1].src = `img/SVG/${Math.floor(hours%10)}.gif`;

    img[3].src = `img/SVG/${Math.floor(minutes/10)}.gif`;
    img[4].src = `img/SVG/${Math.floor(minutes%10)}.gif`;
   
    img[6].src = `img/SVG/${Math.floor(seconds/10)}.gif`;
    img[7].src = `img/SVG/${Math.floor(seconds%10)}.gif`;

}

let myTimer = setInterval(Timer,1000);

Timer();

