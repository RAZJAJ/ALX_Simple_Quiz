
document.addEventListener('DOMContentLoaded', function() {
   
    const CORRECT_ANSWER = "4";
    const submitButton = document.getElementById('submit-answer');
    const feedbackElement = document.getElementById('feedback');

    
    function checkAnswer() {
        
        const radioButtons = document.getElementsByName('quiz');
        let userAnswer = null;

        
        for (const radio of radioButtons) {
            if (radio.checked) {
                userAnswer = radio.value;
                break;
            }
        }

       
        if (userAnswer === CORRECT_ANSWER) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red";
        }
    }

   
    submitButton.addEventListener('click', checkAnswer);
});