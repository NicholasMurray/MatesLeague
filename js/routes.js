var matesLeague = $.sammy(function() {

    this.element_selector = '#content';

    $(function() {
	  matesLeague.run('#/');
	});


    this.get('#/', function(context) {
    	context.app.swap('');

    	renderHomeAction('#content');
    });

	this.get('#/view_all_results', function(context) {
	    context.app.swap('');

	    var leagueNames = getLeagueNamesArray(); 

	    renderAllResultsAction(leagueNames, '#content');
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

	    renderLeaguesAction(leagueNames, '#content');
	});


	this.get('#/view_league/:name', function(context) {
	    context.app.swap('');

	    var leagueName = this.params["name"];
	    var league = getLeague(leagueName);

	    renderLeagueAction(leagueName, league, '#content');
	});




	this.get('#/create_league', function(context) {
	    context.app.swap('');

	    renderCreateLeagueAction('#content');
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

	    renderEditLeaguesAction(leagueNames, '#content');
	});


	this.get('#/delete_league', function(context) {
	   context.app.swap('');

	    var leagueNames = getLeagueNamesArray();

	    renderDeleteLeaguesAction(leagueNames, '#content');
	});


	this.get('#/delete_league/:name', function(context) {
	   context.app.swap('');

	    var leagueName = this.params["name"];

	    renderDeleteNamedLeaguesAction(leagueName, '#content');
	});


	this.post('#/delete_league/:name', function(context) {
	   context.app.swap('');

	    var postData = this.params;

	    deleteLeague(postData.league_name);

	    context.redirect('#/delete_league');
	});

}).run("#/");

