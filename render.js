$(document).ready(function () {

    let diyList = [{
        name: '',
        type: 'diy',
        instructions: [""],
        solution: [""]
    },{
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
    let diyCount = 1
        , chalCount = 1;
    for (let d in diyList) {
        if (diyList[d].type == 'diy') {
            addDIY(diyCount, diyList[d]);
            diyCount++;
        } else if (diyList[d].type == 'challenge') {
            addDIY(chalCount, diyList[d]);
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
    });

    function addDIY(diyNum, diy) {
        //Adds in an element to the menu list and section
        let listID = (diy.type == 'diy') ? 'diy' + diyNum : 'chal' + diyNum
            , divID = ((diy.type == 'diy') ? 'diy' + diyNum : 'chal' + diyNum) + '-section'
            , title = '<h2>' + ((diy.name.length == 0) ? ((diy.type == 'diy') ? 'DIY ' + diyNum : 'Challenge #' + diyNum) : diy.name) + '</h2>'
            , instructions = '';
        //Make the list of instructions
        for (let i in diy.instructions) {
            instructions += '<li>' + diy.instructions[i] + '</li>';
        }
        //Insert into the DOC
        $('menu ul').append('<li id="' + listID + '" class="">' + title + '</li>');
        $('section').append('<div id="' + divID + '">' + title + '<ul>' + instructions + '</ul></div>');
    }

});