var gender = {
	male: [{name: 'BERNHARD', meaning: 'A stately, but easy to approach kind of name. Let\'s find out more about you!', info: 'A man of many layers. On first impression, flamboyant and flashy, but actually very chill and flexible, who just has a great time wherever he is.', price: 169.00},
		{name: 'BOSSE', meaning: 'A strong name. Like a boss, Bosse.', info: 'A man\'s man. Strong, reliable and likes his beer cold and within reach. Dislikes complications and doesn\'t have the word \'impossible\' in his vocabulary. There\'s a problem? Not anymore.', price: 49.99},
		{name: 'DRAGAN', meaning: 'A name with a indescribable pull. When people ask you to hold onto something, be it their soap, or life-long secrets, you keep that nugget cradled.. forever.', info: 'Words of knowledge eloquently flow out of your mouth, while your brain effortlessly absorbs new information. You\'re a natural born scholar, with a calm disposition and a penchant for nature.', price: 9.99},
		{name: 'TORBJORN', meaning: 'I have no idea how to pronounce your name, but damn, you\'re mysterious.', info:'You exude an air of mystery and charm, and are so cool and adaptable that you\'ve often been described as the inspiration to the likes of James Bond, and The Most Interesting Man in the World. Need I say more, except, charm on good sir.', price: 39.99},
		{name: 'GOLIAT', meaning: 'You must be a goddamn giant. Just don\'t forget to not underestimate the little guys. Especially with ones with a slingshot. I\'m assuming we\'re talking about kids in this day and age.', info:'Sturdy and unbreakable, you\'re a tank with bonus features. You may seem like you\'re 100% brute force, but you\'re also highly cunning and resourceful. Assembly required? No problem.', price: 99.00}
	],
	female: [{name: 'AKERKULLA', meaning: 'No definition found, or needed. This is one fucking cool name that only the tough can rock.', info:'You\'re a female warrior. Durable, strong, resourceful - Only a few words from the many that describe your bad-assery. Known for many things, but most remembered for the colorful language that one wouldn\'t dare to dream of. Also, likes to take walks in the rain.', price: 14.99},
		{name: 'VILBORG', meaning: 'Origin, unknown. Definition, unknown. There really isn\'t much information on you. What are you and where did you come from?', info:'The female version of Data; nothing less than logical, and highly intelligent. If you had a debate with a computer, you could make it cry - if it had feelings that is.', price: 49.99},
		{name: 'CHARMTROLL', meaning: 'You\'re so damn charming, that in any language, it is understood: you are as charming as fuck.', info:'Known to be a wise, and eloquent speaker, your words are honey to the ears. It\'s been said that at the sound of your voice, infants fall silent to listen. Charm on, milady.', price: 3.99},
		{name: 'HJARTEVAN', meaning: 'Your name literally means bosom friend. I\'m going to assume that you give really great hugs.', info:'A sweet, and caring gentle soul, most turn to you for comfort and sound advice. Your hugs are world-known to melt away sorrow and troubles. Most definitely a first-class comforter.', price: 9.99},
		{name: 'RACKA', meaning: 'The literal translation of your name means hand. What you do with them, I\'m sure, is talented in all ways.', info:'You have high moral standards and defend those from the scorching rays of injustice. You\'re not afraid to go the length to ensure that justice has been served, even if it means taking it into your own hands.', price: 8.96}
	]
};

var drinks = {
	coffee: {
		name: 'KAFFE',
		meaning: 'Your name means coffee. I\'m assuming you\'re addictive as fuck. I need you now.',
		info: 'You\'re also dark and brooding. You often contemplate on the many issues of the world and bring them to light. We all need more of you. Lots more.',
		price: 4.99
	},
	tea: {
		name: 'LOVA',
		meaning: 'Your name means leaf. I\'m going to go out on a limb here and assume you\'re full of life and vitality.',
		info: 'You\'re also fresh and light-hearted, and bring cheer and hope to those around you.',
		price: 24.99
	}
};

var dayNight = {
	day: {
		name: 'GODMORGON',
		meaning: 'Good morning is you and a good morning is what you love.',
		info: 'You\'re also a go-getter, and you like to start things early and get them done as planned. Organized and classy. Very nice',
		price: 379.00
	},
	night: {
		name: 'NATTLIG',
		meaning: 'What is sleep? With you being nocturnal, I\'m obviously asking the wrong person.',
		info: 'You also like to explore the unknown, be it in a book from the comfort of your bed, to the shady streets of a new city. Unconventional and mysterious is what you are.',
		price: 14.99
	}
};

var taste = {
	sweet: {
		name: 'GODIS SKUM',
		meaning: 'GODIS as candy seems like a sweet start, but who knew that the word \'foam\' would be SKUM in Swedish. Maybe IKEA. Anyway, that\'s what your name means: \'candy foam\', the blasphemous child of Swedish candy and foam.',
		info: 'You\'re also playful in nature, and love to test the limits of everything institutionalized and established. Strangely enough however, your favourite flavour is vanilla. Anarchy, right down to your core.',
		price: 0.99
	},
	savoury: {
		name: 'GRILLA',
		meaning: 'Your name means barbecue and I want to eat you. Mmm.. barbecue..',
		info: 'You\'re also serious and resourceful. You like to follow the rules and proceed in an orderly manner. Did I mention that you\'re sizzling hot? Well, you are and quite frequently, you get eyed like a piece of meat. Sorry.',
		price: 13.99
	}
}

var money = {
	frugal: {
		name: 'SPARSAM',
		meaning: 'You\'re just like the energy expenditure of these light bulbs - Frugal as fuck.',
		info: 'You\'re also a careful planner. Most often than not, you\'re the one people turn to in all cases of emergency, because, let\'s be honest, you WILL be prepared. Zombie apocalypse? You\'re the person people want around. I predict a long long lifespan with a well stocked everything. Keep on saving.',
		price: 4.99
	},
	generous: {
		name: 'SKANKA',
		meaning: 'Your name means to give or donate.. So much to say, all inappropriate.',
		info: 'You\'re also a person full of enough love to spread around evenly. You\'re not one to shy away from getting dirty to get things done. And the result? You take care of the needs of many. Love on, friend.',
		price: 49.99
	}
}

$(function() {

	// Prevent page from refreshing when user submits form

	$('#questionsForm').on('submit', function(e) {
		e.preventDefault();
		// Take value of selected option and store it somewhere
		var genderSelected = $('input[name=gender]:checked').val();
		var drinksSelected = $('input[name=drinks]:checked').val();
		var dayNightSelected = $('input[name=dayNight]:checked').val();
		var tasteSelected = $('input[name=taste]:checked').val();
		var moneySelected = $('input[name=money]:checked').val();

		// Look for selected value within an object's key. Store that into a pool (array) of furniture objects that relates to the selected answer. This will later be used to randomly generate the one furniture within the pool (array).
		// For every name within the selected gender array, push the names into another empty array. 
		var selectedFirstPool = []
		for(i = 0; i < gender[genderSelected].length; i = i + 1) {
			selectedFirstPool.push(gender[genderSelected][i]);
		}
		// Randomly select one name within the new array.
		var firstPoolRandom = Math.floor(Math.random() * selectedFirstPool.length)
		var firstName = selectedFirstPool[firstPoolRandom];

		// Push through the selected names from questions 2 - 5.
		var selectedSecondPool = []
		selectedSecondPool.push(drinks[drinksSelected], dayNight[dayNightSelected], taste[tasteSelected], money[moneySelected]);

		// From the pool, randomly generate one furniture object.
		var secondPoolRandom = Math.floor(Math.random() * selectedSecondPool.length);
		var secondName = selectedSecondPool[secondPoolRandom];

		// Display randomized name onto the screen.
		$('h3.ikeaName').text(firstName.name + ' ' + secondName.name);

		// Display object properties of firstName in cart
		$('.productOne .productImgContainer').html('<img src="assets/image_' + firstName.name + '.JPG">')
		$('.productOne .productTxtContainer h4').text(firstName.name);
		$('.productOne .productMeaning').text(firstName.meaning);
		$('.productOne .productInfo').text(firstName.info);
		$('.productOne .productPrice').text('$' + firstName.price.toFixed(2));

		//Display object properties of secondName in cart
		$('.productTwo .productImgContainer').html('<img src="assets/image_' + secondName.name + '.JPG">')
		$('.productTwo .productTxtContainer h4').text(secondName.name);
		$('.productTwo .productMeaning').text(secondName.meaning);
		$('.productTwo .productInfo').text(secondName.info);
		$('.productTwo .productPrice').text('$' + secondName.price.toFixed(2));

		// Total the price of both randomized objects
		var totalPrice = firstName.price + secondName.price;
		$('.productPriceContainer .totalPrice').text('$' + totalPrice.toFixed(2));

		$('.userName').slideUp(750);
		$('form').slideUp(750);
		$('.yourName').slideDown(750);
		$('.yourCart').slideDown(750);

		// Get name from input field and seperate string into first and last name.
		var userName = $('#userName').val().split(' ')
		var userFirst = userName[0];
		var userLast = userName[userName.length - 1];

		//Display first and last name 
		$('.userFirst').text(userFirst);
		$('.userLast').text(userLast);

	}); //Form


	// Refreshes page
	$('.clearButton').on('click', function() {
		location.reload();
	});


	// Smooth scroll back to top
	$('.submitButton, .refreshButton').on('click', function() {
		$.smoothScroll ({
			offset: 152,
			speed: 750
		});
	});

});
