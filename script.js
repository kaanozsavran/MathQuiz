const correctAnswers = ['8', '10', '3', '25'];
const form = document.querySelector('.question-form');
const result = document.querySelector('.result');
const successMessage = document.querySelector('#successMessage');
const button = document.querySelector('.btn');



form.addEventListener('submit', e => {

    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answers, index) => {
        if (answers === correctAnswers[index]) {
            score += 25;
        }
    })

    if (score == 100) {
        successMessage.classList.remove('d-none');
        button.setAttribute('disabled', '');
    }

    result.classList.remove('d-none');
    result.querySelector('#persontage').textContent = `${score}%`;

});

