var startButton = document.getElementById("start");
var questionContainerElement = document.getElementById("questions");

var questionTitleElement = document.getElementById("question-title")
var choicesElement = document.getElementById("choices")

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    console.log("started");
    startButton.classList.add("hide");
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion();
}

function setNextQuestion() {
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionTitleElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.CreateElement("button");
        button.innerText = answer.text;
        button.classList.add("button");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
        answerButtonElement.appendChuld(button)
    })


}


function selectAnswer() {

}

var questions = [
    {
        question: " what is  ",
        answers: [
            { text: "answer 1", correct: true },
            { text: "answer 2", correct: false },

        ]
    }

]