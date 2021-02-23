var name = prompt("What is your name ?");
var greet = alert("Hi "+name+" Welcome to this site :"); 

var quotes = [
	'There is no relationship between Allah and anyone except through obedience to Him. [Umar Ibn Al Khattab].',
	'We were the most humiliated people on earth & Allah gave us honour through Islam. [Umar Ibn Al Khattab].',
	'If you want to focus more on Allah in your prayers, focus more on Him outside your prayers. [Yasmin Mogahed]',
	'The most beloved actions to Allah are those performed consistently, even if they are few. [Prophet Muhammad PBUH, Sahih Bukhari].',
	'Once prayer becomes a habit, success becomes a lifestyle. Anonymous',
	'Indeed, I am near. [Quran 2:186]',
	'The more you read The Quran the more you’ll fall in love with The Author.[Anonymous].',
	'Allah comes in between a person and his heart. [Quran 8:24]',
	'When was the last time you read the Quran? If you want to change, start with the book of Allah. [Anonymous].',
	'Turn to Allah and you will find His Mercy heal every aching part of your heart and soul. Allah will guide you, He will bring clarity to your eyes, make soft your heart and make firm your soul.'
];

function newQuote(){
	var rand = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[rand];
}

