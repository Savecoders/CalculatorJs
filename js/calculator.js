document.addEventListener('DOMContentLoaded', () => {
	const keyboard = document.getElementById('keyboard');
	const displayOfProcess = document.getElementById('displayOfProcess');
	const displayContent = document.getElementById('displayContent');
	keyboard.childNodes.forEach((button) =>
		button.addEventListener('click', () => {
			if (button.id === '=') {
				displayContent.innerHTML = eval(
					displayOfProcess.textContent + displayContent.textContent
				).toFixed(2);
				displayOfProcess.innerHTML = '';
			} else if (button.id === 'clear') {
				displayOfProcess.innerHTML = '';
				displayContent.innerHTML = '';
			} else if (button.id === 'back') {
				let text = displayContent.textContent.split('');
				text.pop();
				displayContent.innerHTML = text.join('');
			} else if (
				displayContent.textContent !== '' &&
				button.className === 'buttons' &&
				button.id !== '='
			) {
				displayOfProcess.innerHTML += displayContent.textContent + button.id;
				displayContent.innerHTML = '';
			} else if (button.className === 'numbers') {
				displayContent.innerHTML += button.id;
			}
		})
	);
});
