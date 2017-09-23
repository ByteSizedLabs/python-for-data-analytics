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
    $('menu ul').append('<li id="' + listID + '" class="">' + title.split("-")[0] + '</li>');
    $('section').append('<div id="' + divID + '">' + title + '<ul>' + instructions + '</ul><a href="#!" onClick = "showSolution()()" class = "solution_button">Show solution!</a>' + solution + '</div>');
}

$(document).ready(function () {

    let list = [{
        name: 'Hello World',
        type: 'challenge',
        instructions: ['Print "Hello World !!!" to the console'],
        solution: ['<img class = "solution" src="solution_images/challenge/challenge_0.png" alt="challenge0">']
    }, {
        name: 'DIY 1 - Let me tell you something',
        type: 'diy',
        instructions: ['Create a new file in day1 directory called questions.py', 'Write a program that asks the user for their name, age and why they want to learn python', 'Write a print statement combining those strings to make sentences describing the user using concatenation ("+")'],
        solution: ['<img class = "solution" src="solution_images/diy/diy_1.png" alt="diy1">']
    }, {
        name: 'DIY 2 - Types',
        type: 'diy',
        instructions: ['Create a new file in day1 directory called types.py', 'Have the program ask the user for the price of something', 'Convert this string to an int', 'Add a 20% tax to the price', 'Convert the price with tax back to a string', 'Print out the response in a full statement'],
        solution: ['<img class = "solution" src="solution_images/diy/diy_2.png" alt="diy2">']
    }, {
        name: 'DIY 3 - If Statements',
        type: 'diy',
        instructions: ['Create a new file if_statments.py', 'Define a float variable "portfolio_returns" that is between 0 and 1', 'Create an if-elif-else statement that prints:', '"My portfolio has very high returns" if the return percent is greater than 12%', '"My portfolio has high returns" if the return percent is greater than 12% but less than 8%', '"My portfolio has bad returns" otherwise'],
        solution: ['<img class = "solution" src="solution_images/diy/diy_3.png" alt="diy3">']
    }, {
        name: 'Challenge 1 - Hospital Optimization',
        type: 'challenge',
        instructions: ["You are the operations manager for a major hospital. You're looking to make your nurses more effective by removing the repetitive tasks they have to do. One such task is calculating how much pain medication to administer a patient. The amount of medication a patient should receive is one tablet for every 50 pounds the patient weighs but never more than 3 tablets.", 'Write a program that asks the patient their weight and returns the number of tablets they should take',"(in a real-world scenario you would have an IOT device get the patient's weight and communicate with your program!)"],
        solution: ['<img class = "solution" src="solution_images/challenge/challenge_1.png" alt="challenge1">']
    }, {
        name: 'DIY 4 - Election Analysis',
        type: 'diy',
        instructions: ['Create a new file in day2 election_analytics.py', 'Create a list of 3 presidential candidates from 2016', "Each candidate should be represented as a dictionary with keys for name, money raised, and votes won. (Make them up – doesn't have to reflect real life)", 'Write a program that calculates and prints out the total number of dollars raised'],
        solution: ['<img class = "solution" src="solution_images/diy/diy_4.png" alt="diy4">']
    }, {
        name: 'Challenge 2 - Buy Real Estate',
        type: 'challenge',
        instructions: ["You are looking to buy realty in a new neighborhood and want to know if it's a good investment. To do this you get a list of 5 properties in the neighborhood with their current price as well as their price 10 years ago. You want to calculate how much prices have risen, on average over the last 10 years.", 'Make a list of 5 houses. Each house should be a dictionary with keys for their "old_price" and "new_price"', 'Calculate the average change in price for the 5 houses over the past 10 years'],
        solution: ['<img class = "solution" src="solution_images/challenge/challenge_2.png" alt="challenge2">']
    }, {
        name: 'Challenge 3 - Supply Me',
        type: 'challenge',
        instructions: ['You own a construction company and need to find a new wood supplier. You have a list of suppliers where each is supplier is a dictionary with values for name, price, and distance', 'Create a new file supply.py in your day3 directory', 'Define a function is_close(supplier) which takes a dictionary and returns if the supplier is less than 10 miles away', 'Define a function is_cheap(supplier) which takes a dictionary and returns if the supplier price is less than $100', 'Define a function get_cheap_close_suppliers(list_of_suppliers) which takes a list of supplier dictionaries and returns a new list of the suppliers which are cheap and close using the functions above'],
        solution: ['<img class = "solution" src="solution_images/challenge/challenge_3.png" alt="challenge3">']
    }, {
        name: 'DIY 5 - Word Count',
        type: 'diy',
        instructions: ['Create a new file in day3 word_count.py', 'Choose one of your files in your data folder and save the file name as a variable', 'Write a function word_count(file_name) that takes a file name, reads the file and returns the total number of words in the file'],
        solution: ['<img class = "solution" src="solution_images/diy/diy_5.png" alt="diy5">']
    }, {
        name: 'Challenge 4 - Buy Buy Buy!',
        type: 'challenge',
        instructions: ['Create a new file in day1 directory called buy_stock.py','Write a program that asks a user for the price of AAPL stock (Apple inc)',"In future lessons we'll show you how your program can get stock information on it's own","The price of AAPL stays around $165 but it's possible to profit off the day-to-day fluctuations",'If the price is above $170 tell the user to sell','If the price is below $160, tell the user to buy','Otherwise tell the user to hold'],
        solution: ['<img class = "solution" src="solution_images/challenge/challenge_4.png" alt="challenge4">']
    }
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
    let diyCount = 1, chalCount = 0, downloadCount = 1;

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