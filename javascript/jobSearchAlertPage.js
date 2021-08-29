function disapp() {
	var elem1 = document.getElementById('upper1a');
	elem1.style.display = 'none';
	var elem2 = document.getElementById('upper1b');
	elem2.style.display = 'none';
	var elem3 = document.getElementById('upper1c');
	elem3.style.display = 'grid';
}
function disapp2() {
	var elem1 = document.getElementById('upper1a');
	elem1.style.display = 'block';
	var elem2 = document.getElementById('upper1b');
	elem2.style.display = 'block';
	var elem3 = document.getElementById('upper1c');
	elem3.style.display = 'none';
}

if (JSON.parse(localStorage.getItem('signInData'))[0].isCorrect === true) {
	document.querySelector('.spanName').textContent = JSON.parse(localStorage.getItem('signInData'))[0].email;
}

let alertObjectArray = JSON.parse(localStorage.getItem('alertObjectArrayData'));

// console.log('alertObjectArray:', alertObjectArray[0].keywords);

let jobProfileData = JSON.parse(localStorage.getItem('jobProfleData'));

let mainDiv = document.querySelector('#displayAlertResult');

jobProfileData.forEach((element) => {
	if (alertObjectArray[0].keywords == element.keyword) {
		let divOuter = document.createElement('div');
		divOuter.setAttribute('class', 'alertResult');

		let h1 = document.createElement('h1');
		h1.innerText = element.keyword;

		let h2 = document.createElement('h2');
		h2.innerText = element.company;

		let divInner = document.createElement('div');
		divInner.setAttribute('class', 'display-flex');

		let p1 = document.createElement('p');
		p1.innerText = element.exp;

		let p2 = document.createElement('p');
		p2.innerText = element.package;

		let p3 = document.createElement('p');
		p3.innerText = element.place;

		let p4 = document.createElement('p');
		p4.innerText = element.address;

		divInner.append(p1, p2, p3, p4);

		let btn = document.createElement('button');
		btn.setAttribute('class', 'btn');
		btn.innerText = 'Apply';
		function applyForJob() {
			alert(` You have successfully apply for ${element.keyword} in ${element.company} `);
		}

		btn.addEventListener('click', applyForJob);

		divOuter.append(h1, h2, divInner, btn);
		mainDiv.appendChild(divOuter);
	}
});

let jobTitle = document.querySelector('#jobTittle');
let locations = document.querySelector('#location');
let experience = document.querySelector('#experience');

let displaySearchDiv = document.querySelector('#displaySearch');

let form = document.querySelector('form');

form.addEventListener('submit', submitForm);

function submitForm(e) {
	e.preventDefault();
	console.log('jobTitle:', jobTitle.value);
	console.log('locations:', locations.value);

	if (jobTitle.value != null && locations.value != null) {
		mainDiv.style.display = 'none';

		jobProfileData.forEach((element) => {
			if (jobTitle.value == element.keyword) {
				let divOuter = document.createElement('div');
				divOuter.setAttribute('class', 'alertResult');

				let h1 = document.createElement('h1');
				h1.innerText = element.keyword;

				let h2 = document.createElement('h2');
				h2.innerText = element.company;

				let divInner = document.createElement('div');
				divInner.setAttribute('class', 'display-flex');

				let p1 = document.createElement('p');
				p1.innerText = element.exp;

				let p2 = document.createElement('p');
				p2.innerText = element.package;

				let p3 = document.createElement('p');
				p3.innerText = element.place;

				let p4 = document.createElement('p');
				p4.innerText = element.address;

				divInner.append(p1, p2, p3, p4);

				let btn = document.createElement('button');
				btn.setAttribute('class', 'btn');
				btn.innerText = 'Apply';
				btn.addEventListener('click', applyForJob);
				function applyForJob() {
					alert(` You have successfully apply for ${element.keyword} in ${element.company} `);
				}

				divOuter.append(h1, h2, divInner, btn);
				displaySearchDiv.appendChild(divOuter);
			}
		});
	}
}
