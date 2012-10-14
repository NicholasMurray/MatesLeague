
function renderHome(container) {

	var view = renderHomeView();

    $(container).html(view);
}



function renderAllResults(data, container) {

	var view = renderAllResultsView();

	var html = Mustache.to_html(view, {data:data});

	$(container).html(html);
}



function renderResultsGet(leagueName, data, container) {

	var view = renderResultsGetView();

	var html = Mustache.to_html(view, {data:data});
	
	$(container).html(html);
}


function renderLeagues(data, container) {

	var view = renderLeaguesView();

	var html = Mustache.to_html(view, {data:data});

	$(container).html(html);
}


function renderLeague(leagueName, data, container) {

	var league = convertResultsToLeague(data);	

	var view = renderLeagueView(leagueName);

	var html = Mustache.to_html(template, {league:league});

	$(container).html(start + html + end);
}


function renderCreateLeague(container) {

	var view = renderCreateLeagueView();

	var html = Mustache.to_html(view);

	$(container).html(html);
}


function renderEditLeagues(data, container) {

	var view = renderEditLeaguesView();

	var html = Mustache.to_html(view, {data:data});

	$(container).html(html);
}


function renderDeleteLeagues(data, container) {

	var view = renderDeleteLeaguesView();

	var html = Mustache.to_html(view, {data:data});

	$(container).html(html);
}

