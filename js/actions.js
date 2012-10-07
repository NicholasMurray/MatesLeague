
function renderResults(data, container) {

	var tpl = "<span>Latest Results</span>"+
			  "{{#data}}"+
			  "<div class='result_table clear'>"+
			    "<span class='home_team'>{{HomeTeam}} </span><span class='score'>{{HomeScore}} - " +
	            "{{AwayScore}}</span><span class='away_team'>{{AwayTeam}}</span>"+
	           "</div>"+
	          "{{/data}}";

	var html = Mustache.to_html(tpl, {data:data});
	
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
