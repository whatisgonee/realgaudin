var isClosed = false

// Load certain repeating elements
function load() {
	$("#sidebar").load("/sidebar.html")
	$("#images").load("/backgroundImages.html")
	// Change in final version ^
}

// Closes the window with the ability to put it back up
function closeWindow() {
	if(isClosed) {
		$("#window").css("display", "inherit")
	} else {
		$("#window").css("display", "none")
	}

	isClosed = !isClosed
}

// Possible answers to the magicask (yes, it's just a randomiser)
var answers = ["No.", "No?", "Uh...", "Yes!", "Yes.", "YES!", "What??", "No, I don't think so.", "This answer is a lie.", "This answer is the truth.", "Nope.", "Mallbury Hall.", "36.", "Creativity!", "Help.", "That's an awful thing to say.", "Really?", "Huh.", "No, I didn't murder them.", "Yes, I did murder them, but it was justified.", "Yes, absolutely, yes, yes.", "Street 123.", "I usually just type 'hey!'.", "Lorem ipsum.", "Foxes.", "Love!", "Gay.", "Lesbian.", "Fuck!", "You got me.", "I was at home during 9/11.", "I hate that guy.", "I love that guy.", "Crippling depression.", "Crippling anxiety.", "No, I'm fine.", "My dad.", "Your mom.", "Inside my pussy.", "Inside my dick.", "I think i have couvid.", "I think cats.", "I think dogs.", "It was Jerry.", "Let's kill him!", "That's a pretty good idea.", "That's a pretty bad idea.", "That's an idea.", "Absolutely no.", "Absolutely yes.", "Tom Scott.", "Joan of Ark.", "That's actually the scientist, not the monster.", "Moffser Hamagy.", "Pens and pencils.", "On paper, where else?", "In the desert, where else?", "Of course I don't do that.", "Of course I do that.", "I use Firefox.", "Next year.", "Next month.", "It's absolutely randomised.", "You don't make sense.", "I don't make sense.", "Just go to bed.", "Maybe one day, I don't know.", "Probably never.", "Most likely.", "A cool rock.", "Men.", "Women.", "George W. Bush.", "Money.", "Capitalism.", "Anarchy.", "No idea.", "Yes idea.", "Not gonna tell you.", "None of your business.", "No, officer.", "Yes, officer.", "Yes...", "My cat.", "Did I already say this?", "Oh, oh, oooohhhhh...", "Ow!", "OWWWWWW!", "Jay Foreman.", "You.", "Me.", "Today.", "Yesterday.", "Last week.", "Tomorrow.", "Shite.", "Awful.", "Pretty good.", "Horrible.", "Great!", "Last month.", "Next month.", "Behind you!", "Behind you...", "Cute.", "Haha.", "?", "No!", "Bloody hell!", "Your mama.", "Your dada.", "Linguistics.", "Kant.", "Cunt.", "Sorry.", "Not sorry.", "Excuse me?", "Lalala.", "No, you don't."]

// Responds to an ask in the sidebar
function magicask(e) {
	if(e == "Click" || e.key == "Enter") {
		let ask = $("#question").val()
		if(!ask) {
			$("#output").text("Why are you quiet?")
		} else if(answers.indexOf(ask) >= 0) {
			$("#output").text(answers[answers.indexOf(ask)])
		} else {
			$("#output").text(answers[Math.floor(Math.random() * answers.length)])
		}
		$("#question").val("")
		$("#question").css("height", "28px")
	}
}

function auto_grow(element) {
	element.style.height = "5px"
	element.style.height = (element.scrollHeight)+"px"
}