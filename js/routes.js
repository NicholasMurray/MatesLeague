var matesLeague = $.sammy(function() {

    this.element_selector = '#content';

    $(function() {
	  matesLeague.run('#/');
	});


    this.get('#/', function(context) {
    	context.app.swap('');

    	homeAction('#content');
    });

	this.get('#/view_all_results', function(context) {
	    context.app.swap('');

	    var leagueNames = getLeagueNamesArray(); 

	    allResultsAction(leagueNames, '#content');
	});

    
	this.get('#/view_results/:name', function(context) {
	    context.app.swap('');

	    var leagueName = this.params["name"];
	    var leagueResults = getResults(leagueName);

	    resultsGetAction(leagueName, leagueResults, '#content');
	});


	this.post('#/view_results/:name', function(context) {
	    context.app.swap('');

	    var leagueName = this.params["name"];
		var postData = this.params;

		saveResult(leagueName, postData);

		var redirectUrl = '#/view_results/' + leagueName;

		context.redirect(redirectUrl);		
	});


	this.get('#/view_leagues', function(context) {
	    context.app.swap('');

	    var leagueNames = getLeagueNamesArray();

	    leaguesAction(leagueNames, '#content');
	});


	this.get('#/view_league/:name', function(context) {
	    context.app.swap('');

	    var leagueName = this.params["name"];
	    var league = getLeague(leagueName);

	    var fixturesRemaining = getRemainingFixtures(league);

	    leagueAction(leagueName, league, fixturesRemaining, '#content');
	});


	this.post('#/view_league/:name', function(context) {
	    context.app.swap('');

	    var leagueName = this.params["name"];
		var postData = this.params;

		saveResult(leagueName, postData);

		var redirectUrl = '#/view_league/' + leagueName;

		context.redirect(redirectUrl);		
	});


	this.get('#/create_league', function(context) {
	    context.app.swap('');

	    createLeagueAction('#content');
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

	    editLeaguesAction(leagueNames, '#content');
	});


	this.get('#/delete_league', function(context) {
	   context.app.swap('');

	    var leagueNames = getLeagueNamesArray();

	    deleteLeaguesAction(leagueNames, '#content');
	});


	this.get('#/delete_league/:name', function(context) {
	   context.app.swap('');

	    var leagueName = this.params["name"];

	    deleteNamedLeaguesAction(leagueName, '#content');
	});


	this.post('#/delete_league/:name', function(context) {
	   context.app.swap('');

	    var postData = this.params;

	    deleteLeague(postData.league_name);

	    context.redirect('#/delete_league');
	});

}).run("#/");

