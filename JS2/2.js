function Task2(){
    const incorrectSymbols=  /[^а-яА-Яa-zA-Z\s.]/;
    let FIO=prompt("Type fio");

    if(incorrectSymbols.test(FIO)){
        alert("Incorrect symbols")
    }
    else{
       let size = FIO.split(' ').length;
        if(size<3){
           alert("Мало данных")
        }
        else if(size>3){
            alert("Много данных")
        }
        else{
            alert("Correct")
        }
    }
}
Task2();
