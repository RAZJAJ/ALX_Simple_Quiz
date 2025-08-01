function checkAnswer() {
    
    const correctAnswer = "4";
    
    
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedRadio ? selectedRadio.value : null;
    
   
    const feedbackElement = document.getElementById('feedback');
    
   
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}


document.getElementById('submit-answer').addEventListener('click', checkAnswer);