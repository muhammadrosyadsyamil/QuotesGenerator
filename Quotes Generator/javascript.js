var name = prompt("What is your name ?");
var greet = alert("Hi "+name+" Welcome to this site :"); 

var iquotes = [
	'❝There is no relationship between Allah and anyone except through obedience to Him.❞ ––– Umar Ibn Al Khattab.',
	'❝We were the most humiliated people on earth & Allah gave us honour through Islam.❞ ––– Umar Ibn Al Khattab.',
	'❝If you want to focus more on Allah in your prayers, focus more on Him outside your prayers.❞ ––– Yasmin Mogahed',
	'❝The most beloved actions to Allah are those performed consistently, even if they are few.❞ ––– Prophet Muhammad PBUH, Sahih Bukhari.',
	'❝Once prayer becomes a habit, success becomes a lifestyle.❞ ––– Anonymous',
	'❝Indeed, I am near.❞ ––– Quran 2:186',
	'❝The more you read The Quran the more you’ll fall in love with The Author.❞ ––– Anonymous.',
	'❝Allah comes in between a person and his heart.❞ ––– Quran 8:24.',
	'❝When was the last time you read the Quran? If you want to change, start with the book of Allah.❞ ––– Anonymous.',
	'❝Allah does not burden a soul beyond that it can bear.❞ ––– Quran 2:286'
];

var motivquotes = [
	'❝All our dreams can come true, if we have the courage to pursue them.❞ – Walt Disney',
	'❝The secret of getting ahead is getting started.❞ – Mark Twain',
	'❝I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed.❞ – Michael Jordan',
	'❝Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.❞ – Mary Kay Ash',
	'❝If something is important enough, even if the odds are stacked against you, you should still do it.❞ – Elon Musk',
	'❝Don’t be afraid to give up the good to go for the great.❞ – John D. Rockefeller',
	'❝Some people want it to happen, some wish it would happen, others make it happen.❞ – Michael Jordan',
	'❝If opportunity doesn’t knock, build a door.❞ – Kurt Cobain',
	'❝Work hard in silence, let your success be the noise.❞ – Frank Ocean',
	'❝If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is.❞ – Angelina Jolie'
];

var ibquotes = [
	'❝Success is not final, failure is not fatal, it is the courage to continue that counts.❞ – Winston Churchill',
	'❝Business opportunities are like buses, there is always another one coming.❞ – Richard Branson',
	'❝Every problem is a gift—without problems we would not grow.❞ – Anthony Robbins',
	'❝You only have to do a few things right in your life so long as you don’t do too many things wrong.❞ – Warren Buffett',
	'❝Success usually comes to those who are too busy to be looking for it.❞ – Henry David Thoreau',
	'❝There is no shortage of remarkable ideas, what is missing is the will to execute them.❞ – Seth Godin',
	'❝If you really look closely, most overnight successes took a long time.❞ – Steve Jobs',
	'❝The way to get started is to quit talking and begin doing.❞ – Walt Disney',
	'❝Whether you think you can or whether you think you can’t, you’re right!.❞ – Henry Ford',
	'❝There are no secrets to success. It is the result of preparation, hard work and learning from failure.❞ – Colin Powell'
];

var musicquotes = [
	'❝I used to think that nothing could be better than touring the world with my songs . I chased the picture perfect life. I think they painted it wrong.❞ – Eraser, Ed Sheeran',
	'❝A vision of the one I see. A million dreams is all it’s gonna take. A million dreams for the world we’re gonna make.❞ – A Million Dreams, Hugh Jackman&Michelle Williams',
	'❝And it’s like the sky is new. And it’s warm and real and bright. And the world has somehow shifted. All at once everything is different.❞ – It Is The Light, Mandy Moore',
	'❝Don’t worry your pretty little mind, people throw rocks at things that shine.❞ – Ours, Taylor Swift',
	'❝Nothing is impossible. So, never say never!.❞ – Never Say Never, Justin Bieber feat Jaden Smith',
	'❝Even if you knock it, ain’t no way to stop it.❞ – Come and Get It, Selena Gomez',
	'❝Everything you want is a dream away.❞ – Advanture of Lifetime, Coldplay',
	'❝When I say I’ma do something I do it, I don’t give a damn what you think, I’m doing this for me.❞ – Not Afraid, Eminem',
	'❝People moving all the time inside a perfectly straight line.❞ – Strawberry Swing, Coldplay',
	'❝Do you feel cold and lost in desperation You’ve build up hope but failure’s all you’ve know remember all the sadness and frustration, and let it go.❞ – Iridescent, Linkin Park'
];

function IslamicQuote(){
	var rand = Math.floor(Math.random() * (iquotes.length));
	document.getElementById('quoteDisplay1').innerHTML = iquotes[rand];
}

function MotivationalQuote(){
	var rand = Math.floor(Math.random() * (motivquotes.length));
	document.getElementById('quoteDisplay2').innerHTML = motivquotes[rand];
}

function InspiringBusinessQuote(){
	var rand = Math.floor(Math.random() * (ibquotes.length));
	document.getElementById('quoteDisplay3').innerHTML = ibquotes[rand];
}

function MusicQuote(){
	var rand = Math.floor(Math.random() * (musicquotes.length));
	document.getElementById('quoteDisplay4').innerHTML = musicquotes[rand];
}

