document.querySelector('#popUp').addEventListener('click', () => {
	document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('#close-sign-up-form').addEventListener('click', () => {
	document.querySelector('.bg-modal').style.display = 'none';
});

let signInDetail = document.querySelector('form');
console.log('signInDetail:', signInDetail);

signInDetail.addEventListener('submit', getdata);

function getdata(e) {
	e.preventDefault();

	let detailOfSignIn = {
		email: document.querySelector('#form-signIn-email').value,
		password: document.querySelector('#form-signIn-password').value,
		isCorrect: false
	};

	const registerObject = JSON.parse(localStorage.getItem('registerCandidateData'));

	registerObject.forEach((element) => {
		if (element.email == detailOfSignIn.email && element.password == detailOfSignIn.password) {
			if (localStorage.getItem('signInData') === null) {
				localStorage.setItem('signInData', JSON.stringify([]));
			}

			detailOfSignIn.isCorrect = true;
			// const signInObjectArray = JSON.parse(localStorage.getItem('signInData'));
			signInObjectArray = [ detailOfSignIn ];
			localStorage.setItem('signInData', JSON.stringify(signInObjectArray));

			console.log('detailOfSignIn:', detailOfSignIn);
		}
	});

	if (detailOfSignIn.isCorrect === false) {
		alert('Invalid credential');
	} else {
		document.location.href = './html/free-job-alerts.html';
	}
}
