
function homeAction(container) {

	var view = renderHomeView();

    $(container).html(view);
}



function allResultsAction(data, container) {

	var view = renderAllResultsView();

	var html = Mustache.to_html(view, {data:data});

	$(container).html(html);
}



function resultsGetAction(leagueName, data, container) {

	var view = renderResultsGetView(leagueName);

	var html = Mustache.to_html(view, {data:data});
	
	$(container).html(html);
}


function leaguesAction(data, container) {

	var view = renderLeaguesView();

	var html = Mustache.to_html(view, {data:data});

	$(container).html(html);
}


function leagueAction(leagueName, data, container) {

	var league = convertResultsToLeague(data);	

	var view = renderLeagueView(leagueName);

	var html = Mustache.to_html(view, {league:league});

	$(container).html(html);
}


function createLeagueAction(container) {

	var view = renderCreateLeagueView();

	var html = Mustache.to_html(view);

	$(container).html(html);
}


function editLeaguesAction(data, container) {

	var view = renderEditLeaguesView();

	var html = Mustache.to_html(view, {data:data});

	$(container).html(html);
}

function deleteLeaguesAction(data, container) {

	var view = renderDeleteLeaguesView();

	var html = Mustache.to_html(view, {data:data});

	$(container).html(html);
}

function deleteNamedLeaguesAction(leagueName, container) {

	var view = renderDeleteNamedLeaguesView(leagueName);

	var html = Mustache.to_html(view, {leagueName:leagueName});

	$(container).html(html);
}




