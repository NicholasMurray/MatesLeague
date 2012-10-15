
function renderHomeAction(container) {

	var view = renderHomeView();

    $(container).html(view);
}



function renderAllResultsAction(data, container) {

	var view = renderAllResultsView();

	var html = Mustache.to_html(view, {data:data});

	$(container).html(html);
}



function renderResultsGet(leagueName, data, container) {

	var view = renderResultsGetView(leagueName);

	var html = Mustache.to_html(view, {data:data});
	
	$(container).html(html);
}


function renderLeaguesAction(data, container) {

	var view = renderLeaguesView();

	var html = Mustache.to_html(view, {data:data});

	$(container).html(html);
}


function renderLeagueAction(leagueName, data, container) {

	var league = convertResultsToLeague(data);	

	var view = renderLeagueView(leagueName);

	var html = Mustache.to_html(view, {league:league});

	$(container).html(html);
}


function renderCreateLeagueAction(container) {

	var view = renderCreateLeagueView();

	var html = Mustache.to_html(view);

	$(container).html(html);
}


function renderEditLeaguesAction(data, container) {

	var view = renderEditLeaguesView();

	var html = Mustache.to_html(view, {data:data});

	$(container).html(html);
}

function renderDeleteLeaguesAction(data, container) {

	var view = renderDeleteLeaguesView();

	var html = Mustache.to_html(view, {data:data});

	$(container).html(html);
}

function renderDeleteNamedLeaguesAction(leagueName, container) {

	var view = renderDeleteNamedLeaguesView(leagueName);

	var html = Mustache.to_html(view, {leagueName:leagueName});

	$(container).html(html);
}




