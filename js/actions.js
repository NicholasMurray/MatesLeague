
function homeAction(container) {

	var view = homeView();

    $(container).html(view);
}



function allResultsAction(data, container) {

	var view = allResultsView();

	var html = Mustache.to_html(view, {data:data});

	$(container).html(html);
}



function resultsGetAction(leagueName, data, container) {

	var view = resultsGetView(leagueName);

	var html = Mustache.to_html(view, {data:data});
	
	$(container).html(html);
}


function leaguesAction(data, container) {

	var view = leaguesView();

	var html = Mustache.to_html(view, {data:data});

	$(container).html(html);
}


function leagueAction(leagueName, data, fixturesRemaining, container) {

	var league = convertResultsToLeague(data);	
	var view = leagueView(leagueName); 

	var viewModel = {
		League : league,
		FixturesRemaining : fixturesRemaining
	};

	var html = Mustache.to_html(view, {viewModel:viewModel});

	$(container).html(html);
}


function createLeagueAction(container) {

	var view = createLeagueView();

	var html = Mustache.to_html(view);

	$(container).html(html);
}


function editLeaguesAction(data, container) {

	var view = editLeaguesView();

	var html = Mustache.to_html(view, {data:data});

	$(container).html(html);
}


function deleteLeaguesAction(data, container) {

	var view = deleteLeaguesView();

	var html = Mustache.to_html(view, {data:data});

	$(container).html(html);
}


function deleteNamedLeaguesAction(leagueName, container) {

	var view = deleteNamedLeaguesView(leagueName);

	var html = Mustache.to_html(view, {leagueName:leagueName});

	$(container).html(html);
}




