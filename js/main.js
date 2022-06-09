var elForm = document.querySelector('.js-form');
var elInput = document.querySelector('.js-input');
var elResult = document.querySelector('.result');
var elSelect = document.querySelector('.js-select');
var USD = 11000;
var RUBL = 180;
var EURO = 11800;

elForm.addEventListener('submit', function (e) {
	e.preventDefault();
	if (elSelect.value == 'USD') {
		console.log('dollar');
		elResult.textContent = elInput.value / USD + ' $';
	} else if (elSelect.value == 'RUBL') {
		console.log('rubl');
		elResult.textContent = elInput.value / RUBL + ' rubl';
	} else if (elSelect.value == 'EURO') {
		console.log('euro');
		elResult.textContent = elInput.value / EURO + ' euro';
	} else {
		elResult.textContent = 'Please choose one of currency';
	}
});

// var son = elInput.value;
// if (son % 3 == 0 && son % 5 == 0) {
// 	console.log(`${son} 3ga ham 5ga ham qoldiqsiz bo'linadi`);
// 	elResult.textContent = `${son} 3ga ham 5ga ham qoldiqsiz bo'linadi`;
// } else if (son % 5 == 0) {
// 	console.log(`${son} faqat 5ga qoldiqsiz bo'linadi`);
// 	elResult.textContent = `${son} faqat 5ga qoldiqsiz bo'linadi`;
// } else if (son % 3 == 0) {
// 	console.log(`${son} faqat 3ga qoldiqsiz bo'linadi`);
// 	elResult.textContent = `${son} faqat 3ga qoldiqsiz bo'linadi`;
// } else {
// 	console.log(`${son} faqat 3ga ham 5ga ham qoldiqsiz bo'linmaydi`);
// 	elResult.textContent = `${son} faqat 3ga ham 5ga ham qoldiqsiz bo'linmaydi`;
// }
