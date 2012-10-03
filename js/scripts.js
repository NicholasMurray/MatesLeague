
function renderResults(data) {

	var tpl = "<span>Latest Results</span>";

	tpl += "{{#results}}<div class='result_table clear'><span class='home_team'>{{HomeTeam}} </span><span class='score'>{{HomeScore}} - " +
	          "{{AwayScore}}</span><span class='away_team'>{{AwayTeam}}</span></div>{{/results}}";

	var html = Mustache.to_html(tpl, data);
	$('#current_results').html(html);
}


function renderLeague(data) {

	var tpl = "<span>Latest League</span>";

	tpl += "<leaguetable id='leaguetable'><ul><li>Pos</li><li>Team</li><li>P</li><li>GD</li><li>Pts</li></ul><leaguetable>";

	tpl += "{{#league}}<div class='league_table clear'><span class='pos'>{{Pos}}</span><span class='team'>{{Team}}" +
	          "</span><span class='played'>{{P}}</span><span class='gd'>{{GD}}</span><span class='pts'>{{Pts}}</span></div>{{/league}}";

	var html = Mustache.to_html(tpl, data);
	$('#current_league').html(html);
}
