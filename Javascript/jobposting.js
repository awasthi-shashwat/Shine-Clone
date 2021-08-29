let selectdivPlan = document.querySelector('.selectdiv>select');

// add id to the strong (pay) #payAmount and to the  strong (save)  #saveAmount

selectdivPlan.addEventListener('change', () => {
	document.querySelector('.selectdiv>span').textContent = selectdivPlan.value;
	document.querySelector('#payAmount').textContent = parseInt(selectdivPlan.value) * 999;
	document.querySelector('#saveAmount').textContent = parseInt(selectdivPlan.value) * 499;
});

let selectLocation = document.querySelector('#id_location');

selectLocation.addEventListener('change', () => {
	document.querySelector('#selectlocation>div').textContent =
		selectLocation.options[selectLocation.selectedIndex].text;
});

let form = document.querySelector('.animation');

form.addEventListener('submit', submitForm);

function submitForm(e) {
	e.preventDefault();

	let email = document.querySelector('#userEmail');
	console.log('email:', email.value);
	let number = document.querySelector('#id_mobile_no');
	console.log('number:', number.value);
	let company = document.querySelector('#id_company_name');
	console.log('company:', company.value);
	let name = document.querySelector('#id_contact_name');
	console.log('name:', name.value);
	let location = document.querySelector('#selectlocation>div');
	console.log('location:', location.textContent);

	let completeDetail = [
		{
			email: email.value,
			number: number.value,
			company: company.value,
			name: name.value,
			location: location.textContent,
			youPay: document.querySelector('#payAmount').textContent,
			discount: document.querySelector('#saveAmount').textContent
		}
	];

	console.log('completeDetail:', completeDetail);

	if (localStorage.getItem('completeDetail') === null) {
		localStorage.setItem('completeDetail', JSON.stringify([]));
	}

	let completeDetailArray = JSON.parse(localStorage.getItem('completeDetail'));
	completeDetailArray = completeDetail;
	localStorage.setItem('completeDetail', JSON.stringify(completeDetailArray));

	if (email.value != null && number.value != null && company.value != null && name.value != null) {
		window.location.href = '../html/jobPosting1.html';
	}
}
