let allButtons = document.querySelectorAll('.btn');
let equalBtn = document.querySelector('.zero');
let answerScreen = document.querySelector('.myInput');
let deleteBtn = document.querySelector('.btnDelete');
console.log(allButtons);
allButtons.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		answerScreen.value += e.target.value;
     
})
});
equalBtn.addEventListener('click', () => {
     	let answer = eval(answerScreen.value);
     	answerScreen.value = answer;
     })
deleteBtn.addEventListener('click', () => {
	answerScreen.value = '';
})