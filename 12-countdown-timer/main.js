import './style.css';

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];
const weekdays = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
console.log(items);

let futureDate = new Date();
console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth(); // value : [0,11]
// console.log(months[month]);
month = months[month];

const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];
console.log(weekday);

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${year} ${hours}: ${minutes}`;

// future time in ms
const futureTime = futureDate.getTime();
console.log(futureTime);

function getRemainingTime() {
	const today = new Date().getTime();
	const t = futureTime - today;
	// console.log(t);

	// values in ms : 1s = 1000ms; 1m = 60s; 1hr = 60mins; 1D = 24hr
	const oneDay = 24 * 60 * 60 * 1000;
	const oneHour = 60 * 60 * 1000;
	const oneMinute = 60 * 1000;

	// calculate all values
	let days = t / oneDay;
	days = Math.floor(days); // convert to int
	// console.log(days);

	let hours = Math.floor((t % oneDay) / oneHour);
	let minutes = Math.floor((t % oneHour) / oneMinute);
	let seconds = Math.floor((t % oneMinute) / 1000);

	// set values array
	const values = [days, hours, minutes, seconds];

	function format(item) {
		if (item < 10) {
			return (item = `0${item}`);
		}
		return item;
	}
	items.forEach(function (item, index) {
		item.innerHTML = format(values[index]);
	});
}
getRemainingTime();
