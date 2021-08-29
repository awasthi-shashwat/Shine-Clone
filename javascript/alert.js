const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
	faq.addEventListener('click', () => {
		faq.classList.toggle('active');
	});
});

//displaying salary infront of the lable
let selectSalary = document.querySelector('#selectSalary');
let salDisplay = document.querySelector('#sal-display');
selectSalary.addEventListener('change', () => {
	salDisplay.textContent = selectSalary.value;
});

//displaying experience infront of the lable
let selectExperience = document.querySelector('#selectExperience');
let expDisplay = document.querySelector('#exp-display');
selectExperience.addEventListener('change', () => {
	expDisplay.textContent = selectExperience.value;
});

let selectLocation = document.querySelector('#selectLocation');
let locationDisplay = document.querySelector('#locationDisplay');
selectLocation.addEventListener('change', () => {
	let loc = document.createElement('span');
	loc.textContent = selectLocation.value;
	locationDisplay.append(loc);
	locationDisplay.style.display = 'block';
});

let selectDepartment = document.querySelector('#selectDepartment');
let departmentDisplay = document.querySelector('#departmentDisplay');
selectDepartment.addEventListener('change', () => {
	let dep = document.createElement('span');
	dep.textContent = selectDepartment.value;
	departmentDisplay.append(dep);
	departmentDisplay.style.display = 'block';
});

let selectIndustry = document.querySelector('#selectIndustry');
let industryDisplay = document.querySelector('#industryDisplay');
selectIndustry.addEventListener('change', () => {
	let ind = document.createElement('span');
	ind.textContent = selectIndustry.value;
	industryDisplay.append(ind);
	industryDisplay.style.display = 'block';
});

let form = document.querySelector('form');

form.addEventListener('submit', getdata);

function getdata(e) {
	e.preventDefault();
	let keywords = document.querySelector('#keywords');
	console.log('keywords:', keywords.value);

	let salaryRange = document.querySelector('#sal-display');
	console.log('salary range:', salaryRange.textContent);

	let experienceRange = document.querySelector('#exp-display');
	console.log('experience range:', experienceRange.textContent);

	let location = document.querySelectorAll('#locationDisplay>span');
	let locationArray = [];
	location.forEach((element) => {
		locationArray.push(element.textContent);
	});
	console.log('locationArray:', locationArray);

	let department = document.querySelectorAll('#departmentDisplay>span');
	let departmentArray = [];
	department.forEach((element) => {
		departmentArray.push(element.textContent);
	});
	console.log('departmentArray:', departmentArray);

	let industry = document.querySelectorAll('#industryDisplay>span');
	let industryArray = [];
	industry.forEach((element) => {
		industryArray.push(element.textContent);
	});
	console.log('industryArray:', industryArray);

	let email = document.querySelector('#emailform');
	console.log('email:', email.value);

	let alertName = document.querySelector('#alert-name');
	console.log('Alert Name:', alertName.value);

	let alertObject = {
		keywords: keywords.value,
		salaryRange: salaryRange.textContent,
		experienceRange: experienceRange.textContent,
		location: locationArray,
		department: departmentArray,
		industry: industryArray,
		email: email.value,
		alertName: alertName.value
	};

	// console.log('alertObject:', alertObject);

	if (localStorage.getItem('alertObjectArrayData') === null) {
		localStorage.setItem('alertObjectArrayData', JSON.stringify([]));
	}

	let alertObjectArray = JSON.parse(localStorage.getItem('alertObjectArrayData'));
	alertObjectArray = [ alertObject ];
	localStorage.setItem('alertObjectArrayData', JSON.stringify(alertObjectArray));

	document.location.href = '../html/jobSearchAlertPage.html';
}
