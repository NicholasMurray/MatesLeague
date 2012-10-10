var ratPack = $.sammy(function() {

    this.element_selector = '#content';


    $(function() {
	  ratPack.run('#/view_league');
	});

    
	this.get('#/view_results', function(context) {
	    context.app.swap('');
	    context.$element().append('<h1>View Results</h1>');

	    var currentResults = [];
	    if ((localStorage["current"] !== null) && (localStorage["current"] !== undefined)) {
	    	currentResults = JSON.parse(localStorage["current"]);
	    }

	    renderResultsGet(currentResults, '#content');
	});


	this.post('#/view_results', function(context) {
	    context.app.swap('');
	    context.$element().append('<h1>View Results</h1>');

		var postData = this.params;
	    var currentResults = [];
	    if ((localStorage["current"] !== null) && (localStorage["current"] !== undefined)) {
	    	currentResults = JSON.parse(localStorage["current"]);
	    }

	    var nextId = (currentResults.length + 1);

	    currentResults.push({
			Id: parseInt(nextId.toString()),
			HomeTeam: postData.home_team.toString(),
			AwayTeam: postData.away_team.toString(),
			HomeScore: parseInt(postData.home_score.toString()),
			AwayScore: parseInt(postData.away_score.toString())
		});

		localStorage.setItem('current',JSON.stringify(currentResults));

	    renderResultsPost(currentResults, '#content');
	});

	this.get('#/view_leagues', function(context) {
	    context.app.swap('');
	    context.$element().append('<h1>View League</h1>');

	    var leagues = [];

	    for (i=0; i<=localStorage.length-1; i++)  
	    {  
	        key = localStorage.key(i);  
	        leagues.push( { LeagueName: key.toString() } );
	    } 

	    renderLeagues(leagues, '#content');
	});

	this.get('#/view_league/:name', function(context) {
	    context.app.swap('');
	    context.$element().append('<h1>View League</h1>');

	    var currentResults = [];
	    if ((localStorage["current"] !== null) && (localStorage["current"] !== undefined)) {
	    	currentResults = JSON.parse(localStorage[this.params["name"]]);
	    }

	    renderLeague(currentResults, '#content');
	});

	this.get('#/create_league', function(context) {
	    context.app.swap('');
	    context.$element().append('<h1>Create League</h1>');

	    renderCreateLeague('#content');
	});

	this.post('#/create_league', function(context) {
	    var postData = this.params;

	    context.app.swap('');
	    localStorage.setItem(postData.league_name,'[]');

	    context.redirect('#/create_league');
	});



	this.get('#/edit_league', function(context) {
	    context.app.swap('');
	    context.$element().append('<h1>Edit League</h1>');
	});


	this.get('#/delete_league', function(context) {
	    context.app.swap('');
	    context.$element().append('<h1>Delete League</h1>');
	});


}).run("#/");

