
function renderResults(data, container) {

	var tpl = "<span>Latest Results</span>";

	tpl += "{{#results}}<div class='result_table clear'><span class='home_team'>{{HomeTeam}} </span><span class='score'>{{HomeScore}} - " +
	          "{{AwayScore}}</span><span class='away_team'>{{AwayTeam}}</span></div>{{/results}}";

	var html = Mustache.to_html(tpl, data);
	$(container).html(html);
}


function renderLeague(data, container) {

	convertResultsToLeague(data);

	var tpl = "<span>Latest League</span>";

	tpl += "<div class='clear'><span class='pos'>Pos</span><span class='team'>Team</span>" +
			"<span class='played'>P</span><span class='gd'>GD</span><span class='pts'>Pts</span><div>";

	tpl += "{{#league}}<div class='league_table clear'><span class='pos'>{{Pos}}</span><span class='team'>{{Team}}</span>" +
	          "<span class='played'>{{P}}</span><span class='gd'>{{GD}}</span><span class='pts'>{{Pts}}</span></div>{{/league}}";

	var html = Mustache.to_html(tpl, data);
	$(container).html(html);
}
