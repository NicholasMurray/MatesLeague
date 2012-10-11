
function renderHome(container) {

	var tpl = "<nav class='nav'>" +
		        "<ul>" +
		            "<li class='first'><a href='#/view_all_results'>View All Results</a></li>" +
		            "<li><a href='#/view_results'>View Results</a></li>" +
		            "<li><a href='#/view_leagues'>View Leagues</a></li>" +
		            "<li><a href='#/create_league'>Create League</a></li>" +
		            "<li><a href='#/edit_league'>Edit League</a></li>" +
		            "<li><a href='#/delete_league'>Delete Leage</a></li>" +
		        "</ul>" +
		    "</nav>";

    $(container).html(tpl);
}



function renderAllResults(data, container) {

	var template = "<div class='clear'>" +
						"<ul class='nav'>" +
							"<li class='first'><a href='Javascript:history.back(-1);'>Back</a></li>" +
							"<li><a href='Javascript:void();'>All Results</a></li>" +
			           		"{{#data}}"+
			             		"<li><a href='#/view_results/{{LeagueName}}'>{{LeagueName}}</a></li>" +
			           		"{{/data}}"+
			           "</ul>"+
		    		"</div>";

	var html = Mustache.to_html(template, {data:data});

	$(container).html(html);
}



function renderResultsGet(data, container) {


	var start = "<div class='clear'>" +
			           "<ul class='nav'>" +
							"<li class='first'><a href='Javascript:history.back(-1);'>Back</a></li>" +
							"<li><a href='Javascript:void();'>All Leagues</a></li>" +
							"<li>";

	var tpl = "<span>Latest Results</span>"+
			  "{{#data}}"+
			  "<div class='result_table clear'>"+
			    "<span class='home_team'>{{HomeTeam}} </span><span class='score'>{{HomeScore}} - " +
	            "{{AwayScore}}</span><span class='away_team'>{{AwayTeam}}</span>"+
	           "</div>"+
	          "{{/data}}";

	var spcr = "<div class='clear padding_top_10'></div>";

	var frm = "<form action='#/view_results' method='post'>" +
				"home team:<input id='home_team' name='home_team' type='text' />" +
				"home score:<input id='home_score' name='home_score' type='text' width='10' />" +
				"<br />" +
				"away score:<input id='away_score' name='away_score' type='text' width='10' />" +
				"away team:<input id='away_team' name='away_team' type='text' />" +
				"<br />" +
				"<input id='home_team' type='submit' value='add' />" +
				"</form>";

	var end	=          "</li>"+
			        "</ul>"+
		    		"</div>";		


	var viewResult = (start + tpl + spcr + frm + end);

	var html = Mustache.to_html(viewResult, {data:data});
	
	$(container).html(html);
}


function renderResultsPost(data, container) {

	var tpl = "<span>Latest Results</span>" +
			  "{{#data}}" +
			  "<div class='result_table clear'>" +
			    "<span class='home_team'>{{HomeTeam}} </span><span class='score'>{{HomeScore}} - " +
	            "{{AwayScore}}</span><span class='away_team'>{{AwayTeam}}</span>"+
	           "</div>" +
	          "{{/data}}";

	var spcr = "<div class='clear top_margin_10'></div>";

	var frm = "<form action='#/view_results' method='post'>" +
				"home team:<input id='home_team' name='home_team' type='text' />" +
				"home score:<input id='home_score' name='home_score' type='text' />" +
				"away score:<input id='away_score' name='away_score' type='text' width='10' />" +
				"away team:<input id='away_team' name='away_team' type='text' width='10' />" +
				"<input id='add_result' type='submit' value='add' />" +
				"</form>";


	var viewResult = (tpl + spcr + frm);

	var html = Mustache.to_html(viewResult, {data:data});
	
	$(container).html(html);
}


function renderLeagues(data, container) {

	var template = "<div class='clear'>" +
			           "<ul class='nav'>" +
							"<li class='first'><a href='Javascript:history.back(-1);'>Back</a></li>" +
							"<li><a href='Javascript:void();'>All Leagues</a></li>" +
			           		"{{#data}}"+
			             		"<li><a href='#/view_results/{{LeagueName}}'>{{LeagueName}}</a></li>" +
			           		"{{/data}}"+
			           "</ul>"+
		    		"</div>";

	var html = Mustache.to_html(template, {data:data});

	$(container).html(html);
}


function renderLeague(data, container) {

	var league = convertResultsToLeague(data);	

	var template = "<div class='clear'><span class='pos'>Pos</span><span class='team'>Team</span>" +
			"<span class='played'>P</span><span class='for'>F</span><span class='against'>A</span><span class='gd'>GD</span><span class='pts'>Pts</span><div>" +
		           "{{#league}}"+
		           "<div class='league_table clear'>" +
		             "<span class='pos'>{{Pos}}</span><span class='team'>{{Team}}</span>" +
			         "<span class='played'>{{Played}}</span><span class='for'>{{For}}</span><span class='against'>{{Against}}</span>" +
			         "<span class='gd'>{{GD}}</span><span class='pts'>{{Points}}</span>" +
			       "</div>"+
		           "{{/league}}"+
		    "</div>";

	var html = Mustache.to_html(template, {league:league});

	$(container).html(html);
}


function renderCreateLeague(container) {

	var spcr = "<div class='clear top_margin_10'></div>";

	var frm = "<form action='#/create_league' method='post'>" +
				"league name:<input id='league_name' name='league_name' type='text' />" +
				"<input id='add_league' type='submit' value='add' />" +
				"</form>";

	var viewResult = (spcr + frm);

	var html = Mustache.to_html(viewResult);

	$(container).html(html);
}


