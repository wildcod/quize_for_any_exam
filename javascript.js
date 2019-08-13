$(function(){
    var curQues = 1;
    function renderQuestion(){
        $('.question-panel-discription').empty();
        $('.question-panel-discription').append(`
        <p>Q${curQues}</p>
        <p>
           ${data[curQues].qnstext}
        </p>
        `)
        $('.options').empty();
        for(let i = 0; i <  data[curQues]["options"].length ; i++){
            $('.options').append(`
            <input type="radio" name="option" index="${i}" value="${data[curQues]["options"][i]["text"]}">${data[curQues]["options"][i]["text"]}<br><br>
            `) 
         }
    }
    renderQuestion();

})

const data = {
    '1' : {
             options : [
             { optionId : 0, option_lebel : "A" , text : "17:19" , quesid : 1 },
             { optionId : 1, option_lebel : "B" , text : "289:361" , quesid : 1 },
             { optionId : 2, option_lebel : "C" , text : "361:289" , quesid : 1 },
             { optionId : 3, option_lebel : "D" , text : "19:17" , quesid : 1 }
             ],
             qnstext : "A walks from points Jammu to Delhi and at the same time B starts walking from Delhi to Jammu. After passing each other, they complete their journeys in 361 hours and 289 hours, respectively. Find the ratio of speed of A to that of B?",
             quesid : 1,
             correct : 3
         },
    '2' : {
            options : [
            { optionId : 0, option_lebel : "A" , text : "17:19" , quesid : 2 },
            { optionId : 1, option_lebel : "B" , text : "289:361" , quesid : 2 },
            { optionId : 2, option_lebel : "C" , text : "361:289" , quesid : 2 },
            { optionId : 3, option_lebel : "D" , text : "19:17" , quesid : 2 }
            ],
            qnstext : "A walks from points Jammu to Delhi and at the same time B starts walking from Delhi to Jammu. After passing each other, they complete their journeys in 361 hours and 289 hours, respectively. Find the ratio of speed of A to that of B?",
            quesid : 2,
            correct : 2
        },
    '3' : {
            options : [
            { optionId : 0, option_lebel : "A" , text : "17:19" , quesid : 3 },
            { optionId : 1, option_lebel : "B" , text : "289:361" , quesid : 3 },
            { optionId : 2, option_lebel : "C" , text : "361:289" , quesid : 3 },
            { optionId : 3, option_lebel : "D" , text : "19:17" , quesid : 3 }
            ],
            qnstext : "A walks from points Jammu to Delhi and at the same time B starts walking from Delhi to Jammu. After passing each other, they complete their journeys in 361 hours and 289 hours, respectively. Find the ratio of speed of A to that of B?",
            quesid : 3,
            correct : 0
        },
 }