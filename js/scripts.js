function comparePoints(a,b) {
  if (a.Points > b.Points)
     return -1;
  if (a.Points < b.Points)
    return 1;
  return 0;
}


function getCurrentResults() {
	var data = localStorage.getItem("current");	

	return data;
}

function setCurrentResults(data) {

	localStorage.setItem("current", JSON.stringify(data));
}

function convertResultsToLeague(data) {

	var teams = getDistinctTeams(data);
	var league = getLeague(teams, data);

	league = setGoalDifference(league);

	return league;
}


function setGoalDifference(league) {
	for (var l in league) {
		league[l].GD = (league[l].For + league[l].Against);
	}
	return league;
}


function getLeague(teams,data) {

	var league = [];

	for (var i = 0; i < teams.length; i++) {
    	var leagueRow = { Pos: 0, Team: teams[i].toString(), Played: 0,  For: 0, Against: 0, GD: 0, Points: 0 };
    	league.push(leagueRow);
	}

    var blnRowRead = false;
    var homeTeam = '';
    var awayTeam = '';
    var homeScore = '';
    var awayScore = '';


	for (var key in data) {
	   var obj = data[key];

	   for (var prop in obj) {

	   		if (prop == 'HomeTeam') {
	   			homeTeam = (obj[prop]);
	   		}
	   		if (prop == 'AwayTeam') {
	   			awayTeam = (obj[prop]);
	   		}
	   		if (prop == 'HomeScore') {
	   			var homeScore = (obj[prop]);
	   		}
	   		if (prop == 'AwayScore') {
	   			awayScore = (obj[prop]);
	   			blnRowRead = true;
	   		}

	   		if (blnRowRead == true) {

	   			for (var l in league) {
	   				// Set home team details
	   				if (league[l].Team === homeTeam) {
						league[l].Played = (league[l].Played + 1);
						league[l].For = (league[l].For + homeScore);	   					
						league[l].Against = (league[l].Against - awayScore);	   					
						league[l].Points = (league[l].Points + getHomePoints(homeScore, awayScore));
	   				}
	   			}

	   			for (var l in league) {
	   				// Set away team details
	   				if (league[l].Team === awayTeam) {
						league[l].Played = (league[l].Played + 1);
						league[l].For = (league[l].For + awayScore);	   					
						league[l].Against = (league[l].Against - homeScore);	   					
						league[l].Points = (league[l].Points + getAwayPoints(homeScore, awayScore));
	   				}
	   			}
	   			blnRowRead = false;
	   		}
	   	}
	}

	league.sort(comparePoints);

	return league;
}


function getDistinctTeams(data) {
   var teams = [];
   for (var key in data) {
   	  var obj = data[key];
	   for (var prop in obj) {
	      if ((prop == 'HomeTeam') || (prop == 'AwayTeam')) {
	      	teams.push(obj[prop]);
	      }
	   }
	}
	teams = eliminateDuplicates(teams);
	return teams;
}



function eliminateDuplicates(arr) {
  var i,
      len=arr.length,
      out=[],
      obj={};

	  for (i=0;i<len;i++) {
	    obj[arr[i]]=0;
	  }
	  for (i in obj) {
	    out.push(i);
	  }
  return out;
}


function findById(source, id) {
    return source.filter(function( obj ) {
        return +obj.id === +id;
    })[ 0 ];
}

function getHomePoints(homeScore, awayScore) {
	if (homeScore > awayScore) {
		return 3;
	} else if (homeScore === awayScore) {
		return 1;
	} else {
		return 0;
	}
}

function getAwayPoints(homeScore, awayScore) {
	if (homeScore < awayScore) {
		return 3;
	} else if (homeScore === awayScore) {
		return 1;
	} else {
		return 0;
	}
}


