import './style.css';

// using selectors inside the element
const questions = document.querySelectorAll('.question');
questions.forEach(function (question) {
	console.log(question);
	const btn = question.querySelector('.question-btn');
	btn.addEventListener('click', function () {
		// close other questions
		questions.forEach(function (item) {
			console.log(item);
			if (item !== question) {
				item.classList.remove('show-text');
			}
		});
		question.classList.toggle('show-text');
	});
});

// traversing the DOM
/* 
const btns = document.querySelectorAll('.question-btn');
btns.forEach(function (btn) {
	btn.addEventListener('click', function (button) {
		console.log(button.currentTarget.parentElement.parentElement);
		const question = button.currentTarget.parentElement.parentElement;
		question.classList.toggle('show-text');
	});
});
*/
