var matesLeague = $.sammy(function() {

    this.element_selector = '#content';

    $(function() {
	  matesLeague.run('#/');
	});


    this.get('#/', function(context) {
    	context.app.swap('');

    	renderHome('#content');
    });

	this.get('#/view_all_results', function(context) {
	    context.app.swap('');
	    context.$element().append('<h1>View All Results</h1>');

	    var leagueNames = getLeagueNamesArray(); 

	    renderAllResults(leagueNames, '#content');
	});

    
	this.get('#/view_results/:name', function(context) {
	    context.app.swap('');

	    var leagueName = this.params["name"];
	    var leagueResults = getResults(leagueName);

	    renderResultsGet(leagueName, leagueResults, '#content');
	});


	this.post('#/view_results/:name', function(context) {
	    context.app.swap('');

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

		renderResultsGet(currentResults, '#content');
	});

	this.get('#/view_leagues', function(context) {
	    context.app.swap('');

	    var leagueNames = getLeagueNamesArray();

	    renderLeagues(leagueNames, '#content');
	});

	this.get('#/view_league/:name', function(context) {
	    context.app.swap('');

	    var leagueName = this.params["name"];
	    var league = getLeague(leagueName);

	    renderLeague(leagueName, league, '#content');
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

	    context.redirect('#/view_leagues');
	});

	
	this.get('#/edit_league', function(context) {
		context.app.swap('');

	    var leagueNames = getLeagueNamesArray();

	    renderEditLeagues(leagueNames, '#content');
	});


	this.get('#/delete_league', function(context) {
	   context.app.swap('');

	    var leagueNames = getLeagueNamesArray();

	    renderDeleteLeagues(leagueNames, '#content');
	});

}).run("#/");

