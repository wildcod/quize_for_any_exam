$(function(){
    var curQues = 1;
    var answerObject = {};
    var dataLength = Object.keys(data).length;
    function renderQuestion(){

        if($(`#dot-${curQues}`).is(":disabled") === false){
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
        }else{
            curQues++;
            renderQuestion();
        }
    
    }
    function renderDots(){
        $('.navi-btn').empty();
        for(let i = 0; i < dataLength; i++){
            $('.navi-btn').append(`
                 <button class="dot" id="dot-${i+1}" data="${i+1}">${i+1}</button>
            `);
        }
    }
    renderQuestion();
    renderDots();

    $(`.dot`).on('click',(function (e,data){
        curQues = parseInt(e.target.textContent);
      renderQuestion();
    }))

    $(`#saveAndNext`).on('click',(function (e,data){
        let selectedOption = $("input[name=option]:checked").attr("index")
        console.log(selectedOption);
        console.log($("#dot-3").is(":disabled"));

        answerObject[curQues] = selectedOption;

        if(selectedOption){
            //  $(`#dot-${quesid}`).css('background', 'green')
            $(`#dot-${curQues}`).css('color', '#fff')
             $(`#dot-${curQues}`).attr("disabled", true); 
             $(`#dot-${curQues}`).css('background', 'green');
             if(curQues+1 <= dataLength){
                curQues++;
                renderQuestion();
             }
        }else{
            alert("select option first");
        }
        console.log(answerObject);
     
    }))

    $('#skip').click(function(){
        if(curQues+1 <= dataLength){
            $(`#dot-${curQues}`).css('background', 'red');
            curQues++;
            renderQuestion();
         }
    })

    var countDownDate = new Date(2019,09,8,12,20,0,0).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  $("#timer").empty();
  $("#timer").append(minutes + "m " + seconds + "s ");

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    $("#timer").empty();
    $("#timer").append("EXPIRED");
  }
}, 1000);



})

const data = {
    1 : {
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
    2 : {
            options : [
            { optionId : 0, option_lebel : "A" , text : "sahil" , quesid : 2 },
            { optionId : 1, option_lebel : "B" , text : "manish" , quesid : 2 },
            { optionId : 2, option_lebel : "C" , text : "harshiv" , quesid : 2 },
            { optionId : 3, option_lebel : "D" , text : "superman" , quesid : 2 }
            ],
            qnstext : "what is your name?",
            quesid : 2,
            correct : 2
        },
    3 : {
            options : [
            { optionId : 0, option_lebel : "A" , text : "borring" , quesid : 3 },
            { optionId : 1, option_lebel : "B" , text : "bekar" , quesid : 3 },
            { optionId : 2, option_lebel : "C" , text : "chal" , quesid : 3 },
            { optionId : 3, option_lebel : "D" , text : "hindi" , quesid : 3 }
            ],
            qnstext : "Why you so afraid from english?",
            quesid : 3,
            correct : 0
        },
    4 : {
            options : [
            { optionId : 0, option_lebel : "A" , text : "talking" , quesid : 4 },
            { optionId : 1, option_lebel : "B" , text : "speaking" , quesid : 4 },
            { optionId : 2, option_lebel : "C" , text : "listening" , quesid : 4 },
            { optionId : 3, option_lebel : "D" , text : "reading" , quesid : 4 }
            ],
            qnstext : "How can you improve your english?",
            quesid : 4,
            correct : 3
        },
 }