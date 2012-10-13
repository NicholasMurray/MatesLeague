
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


