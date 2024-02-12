//FirstTask();
SecondTask();
//ThirdTask();
function FirstTask(){
let name = prompt("Type name");
let surname = prompt('type surname');

let age;

do {
    age = prompt("Type age >0 <99",0);
}
while(isNaN(age)||(!isNaN(age))&&((Number(age)<0||Number(age)>99)))




let gender = prompt("Type gender");

let email;

do{
   email = prompt("Type Email include @"," ");
}while(!email.includes("@"))

let a = confirm(
    'Correct ' + "Name:" + name +'\n'
    + "Surname:" + surname +'\n'
    + "Age:" + age+'\n'
    + "Gender:" + gender +'\n'
    + "Email:" + email +'\n'
)
if(a){
    
}
else{
    FirstTask();
}

}

function isLucky(lucky){
    const firstThree = lucky.slice(0, 3);
    const lastThree = lucky.slice(-3);
    console.log(firstThree)
    console.log(lastThree)
   
    const sum1 = Array.from(firstThree).map(char => Number(char)).reduce((acc, num) => acc + num, 0);
    const sum2 = Array.from(lastThree).map(char => Number(char)).reduce((acc, num) => acc + num, 0);
    if(sum1!=sum2){
        return false;
    }
    else{
        return true;
    }
   
    
}

function SecondTask(){
    let lucky;
    do {
    lucky = prompt("Type lucky number 6");

    }while(lucky.length!=6||isNaN(lucky))

    if(isLucky(lucky)){
        console.log("lucky")
    }
    else{
        console.log("unlucky")
    }
}


function ThirdTask(){

    let bottom=0;
    let top=100;
    let myNum=prompt("Случайное число от 0 до 100:");


   
    let ans='';
   outer:while(true){
    const num =Math.round((top+bottom)/2); 
    do
    {
       ans = prompt("Ваше число > < = ?" + num);
    
    }while(!ans.includes('>')&&!ans.includes('<')&&!ans.includes('='))
    switch(ans)
    {
        case '>':console.log('>');
                bottom=num;

        
        break;
        case '<':console.log('<');
                top=num;
        break;
        case '=':console.log('=');
         break outer;
    }
    console.log(top,bottom,num)

}


}
