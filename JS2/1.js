alert("a");
function FirstTask(){

    // Вопросы и оценки
    const Questions = {
        "Вода кипит при температуре 100 градусов Цельсия?": true,
        "Земля вращается вокруг своей оси?": true,
        "Солнце вращается вокруг Земли?": false,
        "Медведи - хищники?": true,
        "Все люди видят сны во время сна?": false,
        "Кофе содержит кофеин?": true,
        "Вода состоит из двух атомов водорода и одного атома кислорода?": true,
        "Кенгуру - млекопитающее?": true,
        "Москва - столица Франции?": false,
        "Все живые организмы состоят из клеток?": true
      };
      
      
 
  function test(){
        let totalscore = 0;
        for (const question in Questions) {
           
              const userAnswer = prompt(question);
              const correctAnswer = Questions[question];
          
              if (userAnswer.toLowerCase() === 'да' && correctAnswer || userAnswer.toLowerCase() === 'нет' && !correctAnswer) {
                alert("Правильный ответ!");
                totalscore+=1;
              } 
              else {
                alert("Неправильный ответ!");
              }
            
          }
       

      alert("Результат " + totalscore + " / " +Object.keys(Questions).length);

  }
  test();

}

FirstTask();