localStorage.setItem('current_card', 0);

function addQuestion() {

    let card_number = Number(localStorage.getItem('current_card')) + 1;

    let questionForm = document.getElementById('creating');

    let container = document.getElementById('container');

    localStorage['current_card'] = card_number;

    let form = questionForm.innerHTML.replace('${№}', card_number);

    container.innerHTML += form;

}

function createQuize() {

    localStorage.removeItem('current_card');

    data = [];

lol = {
    "question": [

    ],

    "answers": [

    ],

    "correct_answer": [

    ]
}

    let questions = document.getElementsByClassName('text_question');

    let answers = document.getElementsByClassName('text_answer');

    let correct_answers = document.getElementsByClassName('text_correct');

    let answer_option = Object.entries(answers);

    for (let i = 0; i < questions.length; i++) {

        let question_id = i + 1;

        let question_content = questions[i].value;

        let arr = answer_option.splice(0, 3);

        let answer_option1 = arr[0][1].value;
        let answer_option2 = arr[1][1].value;
        let answer_option3 = arr[2][1].value;

        let correct_answer = correct_answers[i].value;

        lol = {
            "question": [
                question_id,
                question_content
            ],
        
            "answers": [
                answer_option1,
                answer_option2,
                answer_option3
            ],
        
            "correct_answer": [
                correct_answer
            ]
        }

        data.push(lol);

    }

    console.log(data);

    createCard(data);

}


function createCard(data) {

    let buttons = document.getElementById('buttons');

    let form = document.getElementById('form');

    let quiz = document.getElementById('quiz');

    let container = document.getElementById('container');

    container.innerHTML = '';

    buttons.innerHTML = '';
    

    for (k = 0; k < data.length; k++) {
        
        let card = quiz.innerHTML.replace('${number}', data[k]['question'][0])
                                .replace('${question}', data[k]['question'][1])
                                .replace('${number}', data[k]['question'][0])
                                .replace('${number}', data[k]['question'][0])
                                .replace('${number}', data[k]['question'][0])
                                .replace('${number}', data[k]['question'][0])
                                .replace('${number}', data[k]['question'][0] - 1)
                                .replace('${answer}', data[k]['answers'][0])
                                .replace('${answer}', data[k]['answers'][1])
                                .replace('${answer}', data[k]['answers'][2])
                                .replace('${correct_answer}', data[k]['correct_answer']);

        form.innerHTML += card;
    }

    form.innerHTML += `<pre id="log"></pre>`;

    container.innerHTML +=   `<p><button id="final" onclick="showResults()">Show Results</button></p>`;

}