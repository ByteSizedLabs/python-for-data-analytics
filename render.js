let showSolution = function () {
    return function () {
        $('.solution').show()
    }
}

let addItem = function (itemCount, item) {
    //Adds in an element to the menu list and section
    let listID = (item.type == 'diy') ? 'diy' + itemCount : 'chal' + itemCount
        , divID = ((item.type == 'diy') ? 'diy' + itemCount : 'chal' + itemCount) + '-section'
        , title = '<h2>' + ((item.name.length == 0) ? ((item.type == 'diy') ? 'DIY ' + itemCount : 'Challenge #' + itemCount) : item.name) + '</h2>'
        , instructions = ''
        , solution = '';
    //Make the list of instructions
    for (let i in item.instructions) {
        instructions += '<li>' + item.instructions[i] + '</li>';
    }

    //Make the list of solutions
    for (let i in item.solution) {
        solution += item.solution[i] + '<br>';
    }

    //Insert into the DOC
    $('menu ul').append('<li id="' + listID + '" class="">' + title + '</li>');
    $('section').append('<div id="' + divID + '">' + title + '<ul>' + instructions + '</ul><a href="#" onClick = "showSolution()()" class = "solution_button">Show solution!</a>' + solution + '</div>');
}

$(document).ready(function () {

    let list = [{
        name: 'Hello World',
        type: 'challenge',
        instructions: ['Print "Hello World !!!" to the console'],
        solution: ['<img class = "solution" src="solution_images/challenge/challenge_0.png" alt="challenge0">']
    }, {
        name: 'Let me tell you something',
        type: 'diy',
        instructions: ['Create a new file in day1 directory called “questions.py"', 'Write a program that asks the user for their name, age and why they want to learn python', 'Write a print statement combining those strings to make sentences describing the user using concatenation (“+”)'],
        solution: ['<img class = "solution" src="solution_images/diy/diy_1.png" alt="diy1">']
    }, {
        name: 'Types',
        type: 'diy',
        instructions: ['Create a new file in day1 directory called “types.py”', 'Have the program ask the user for the price of something', 'Convert this string to an int', 'Add a 20% tax to the price', 'Convert the price with tax back to a string', 'Print out the response in a full statement'],
        solution: ['<img class = "solution" src="solution_images/diy/diy_2.png" alt="diy2">']
    }, {
        name: 'If Statements',
        type: 'diy',
        instructions: ['Create a new file "if_statments.py"', 'Define a float variable “portfolio_returns” that is between 0 and 1', 'Create an if-elif-else statement that prints:', '"My portfolio has very high returns” if the return percent is greater than 12%', '“My portfolio has high returns” if the return percent is greater than 12% but less than 8%', '“My portfolio has bad returns” otherwise'],
        solution: ['<img class = "solution" src="solution_images/diy/diy_3.png" alt="diy3">']
    }, {
        name: 'Buy Buy Buy!',
        type: 'challenge',
        instructions: ['Create a new file in day1 directory called “buy_stock.py”','Write a program that asks a user for the price of AAPL stock (Apple inc)','In future lessons we’ll show you how your program can get stock information on its own','The price of AAPL stays around $165 but it’s possible to profit off the day-to-day fluctuations','If the price is above $170 tell the user to sell','If the price is below $160, tell the user to buy','Otherwise tell the user to hold'],
        solution: ['<img class = "solution" src="solution_images/challenge/challenge_1.png" alt="challenge1">']
    }, {
        name: '',
        type: 'diy',
        instructions: [""],
        solution: ['']
    }, {
        name: '',
        type: 'diy',
        instructions: [""],
        solution: ['']
    }, {
        name: '',
        type: 'diy',
        instructions: [""],
        solution: ['']
    }, {
        name: '',
        type: 'diy',
        instructions: [""],
        solution: ['']
    }, {
        name: '',
        type: 'challenge',
        instructions: [""],
        solution: ['']
    },



    ];

	/*
	,{
		name:'',
		type: 'diy',
        instructions: []
        solution:[]
	}
	*/

    //Add the DIY and Challenges
    let diyCount = 1, chalCount = 1, downloadCount = 1;

    for (let item in list) {
        if (list[item].type == 'diy') {
            addItem(diyCount, list[item]);
            diyCount++;
        } else if (list[item].type == 'challenge') {
            addItem(chalCount, list[item]);
            chalCount++;
        }
    }

    //Hide everyting and only show div clicked on
    $('section div').hide();
    $('menu li').click(function (evt) {
        //If click on menu item
        evt.preventDefault();
        let divID = $(this).attr('id') + '-section'; //Get relevant ID
        $('section div').hide();
        $('#' + divID).show();
        $('.solution').hide();
    });

});