let form = document.querySelector('form');

form.addEventListener('submit', registerDetail);

function registerDetail(e) {
	e.preventDefault();

	let registerDetail = {
		name: document.querySelector('#id_name').value,
		email: document.querySelector('#id_email').value,
		number: document.querySelector('#id_cell_phone').value,
		password: document.querySelector('#id_password').value
	};

	console.log('completeDetail:', registerDetail);

	if (localStorage.getItem('registerCandidateData') === null) {
		localStorage.setItem('registerCandidateData', JSON.stringify([]));
	}

	let registerObject = JSON.parse(localStorage.getItem('registerCandidateData'));
	registerObject.push(registerDetail);
	localStorage.setItem('registerCandidateData', JSON.stringify(registerObject));

	setTimeout(() => {
		alert('registeration successful');

		document.location.href = '../html/home.html';
	}, 1000);
}
