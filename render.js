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
    $('section').append('<div id="' + divID + '">' + title + '<ul>' + instructions + '</ul><a href="#" onClick = "showSolution()()" class = "solution_button">Show solution!</a><p class="solution">' + solution + '</p></div>');
}

$(document).ready(function () {

    let list = [{
        name: 'Hello World',
        type: 'challenge',
        instructions: ['Print "Hello World !!!" to the console'],
        solution: ['print("Hello World !!!")']
    }, {
        name: 'Variables I',
        type: 'diy',
        instructions: ['We can define variables like so:'],
        solution: ['byte_name = "Python for Data Analytics"','language = "Python"','location = "Philadelphia"']
    }, {
        name: 'Variables II',
        type: 'diy',
        instructions: ["We can print variables like so:"],
        solution: ['print(byte_name) # "Python for Data Analytics"','print(language) # "Python"','print(location)  # "Philadelphia"']
    }, {
        name: '',
        type: 'diy',
        instructions: [""],
        solution: [""]
    }, {
        name: '',
        type: 'diy',
        instructions: [""],
        solution: [""]
    }, {
        name: '',
        type: 'challenge',
        instructions: [""],
        solution: [""]
    }, {
        name: '',
        type: 'diy',
        instructions: [""],
        solution: [""]
    }, {
        name: '',
        type: 'diy',
        instructions: [""],
        solution: [""]
    }, {
        name: '',
        type: 'diy',
        instructions: [""],
        solution: [""]
    }, {
        name: '',
        type: 'diy',
        instructions: [""],
        solution: [""]
    }, {
        name: '',
        type: 'diy',
        instructions: [""],
        solution: [""]
    }, {
        name: '',
        type: 'challenge',
        instructions: [""],
        solution: [""]
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