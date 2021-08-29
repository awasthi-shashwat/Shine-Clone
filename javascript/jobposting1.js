// JSON.parse(localStorage.getItem('completeDetail'))[0].discount;

document.querySelector('#orderAmt').textContent =
	parseInt(JSON.parse(localStorage.getItem('completeDetail'))[0].discount) +
	parseInt(JSON.parse(localStorage.getItem('completeDetail'))[0].youPay);

// console.log(document.querySelector('#orderAmt'));

document.querySelector('#discountAmt').textContent = JSON.parse(localStorage.getItem('completeDetail'))[0].discount;

// console.log(document.querySelector('#discountAmt'));

document.querySelector('#finalTotal').textContent = JSON.parse(localStorage.getItem('completeDetail'))[0].youPay;

// console.log(document.querySelector('#finalTotal'));

document.querySelector('#paymentAmount').textContent = document.querySelector('#finalTotal').textContent;

// console.log(document.querySelector('#paymentAmount'));

document.querySelector('#SubmitBillShip').addEventListener('click', () => {
	setTimeout(() => {
		alert(`Payment of Rs ${document.querySelector('#finalTotal').textContent} is sucessfull`);
		window.location.href = '../html/home.html';
	}, 3000);
});
