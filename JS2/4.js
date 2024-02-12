function task4(){


    let divElement = document.createElement("div");
    divElement.id = "Gridder";

   
 

   

    document.body.appendChild(divElement);
    document.getElementById('Gridder').style.display="grid"
    document.getElementById('Gridder').style.gridTemplateColumns="repeat(8,1fr)";
    document.getElementById('Gridder').style.gridTemplateRows="repeat(8, 1fr)"
    document.getElementById('Gridder').style.columnGap="0px"
    document.getElementById('Gridder').style.rowGap="0px"
    document.getElementById('Gridder').style.height="400px"
    document.getElementById('Gridder').style.width="400px"
    for(let i=0; i<8 ; i++){
        for(let j=0; j<8; j++){
            if(i%2==0){
                if(j%2==0){
                    let YellowBox = document.createElement("div");
                    YellowBox.id="Yellow";
                    YellowBox.style.height="50px";
                    YellowBox.style.width="50px";
                    YellowBox.style.background="Yellow"
                     divElement.appendChild(YellowBox);
                }
                else{
                    let BrownBox = document.createElement("div");
                    BrownBox.id="Brown";
                    BrownBox.style.height="50px";
                    BrownBox.style.width="50px";
                    BrownBox.style.background="Brown"
                     divElement.appendChild(BrownBox);
                }
            }
            else{
                if(j%2==0){
                    let BrownBox = document.createElement("div");
                    BrownBox.id="Brown";
                    BrownBox.style.height="50px";
                    BrownBox.style.width="50px";
                    BrownBox.style.background="Brown"
                     divElement.appendChild(BrownBox);
                }
                else{
                    let YellowBox = document.createElement("div");
                    YellowBox.id="Yellow";
                    YellowBox.style.height="50px";
                    YellowBox.style.width="50px";
                    YellowBox.style.background="Yellow"
                     divElement.appendChild(YellowBox);
                }
            }
        }
    }



}
task4();