
function getLeagueNamesArray() {
	var leagues = [];
    for (i=0; i<=localStorage.length-1; i++)  
    {  
        key = localStorage.key(i);  
        leagues.push( { LeagueName: key.toString() } );
    } 
    return leagues;
}


function getLeague(leagueName) {
	var league = [];
    if ((localStorage[leagueName] !== null) && (localStorage[leagueName] !== undefined)) {
    	league = JSON.parse(localStorage[leagueName]);
    }
    return league;
}

function getResults(leagueName) {
	var league = [];
    if ((localStorage[leagueName] !== null) && (localStorage[leagueName] !== undefined)) {
    	league = JSON.parse(localStorage[leagueName]);
    }
    return league;
}

function saveResult(leagueName, postData) {
    var leagueResults = [];

    if ((localStorage[leagueName] !== null) && (localStorage[leagueName] !== undefined)) {
        leagueResults = JSON.parse(localStorage[leagueName]);
    }

    var nextId = (leagueResults.length + 1);

    leagueResults.push({
        Id: parseInt(nextId.toString()),
        HomeTeam: postData.home_team.toString(),
        AwayTeam: postData.away_team.toString(),
        HomeScore: parseInt(postData.home_score.toString()),
        AwayScore: parseInt(postData.away_score.toString())
    });
    localStorage.setItem(leagueName,JSON.stringify(leagueResults));
}


function deleteLeague(leagueName) {
	localStorage.removeItem(leagueName);
}
