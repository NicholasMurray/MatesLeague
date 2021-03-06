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
	var league = getLeagueTable(teams, data);

	league = setGoalDifference(league);

	return league;
}


function setGoalDifference(league) {
	for (var i = 0; i < league.length; i++) {
		league[i].GD = (league[i].For - league[i].Against);
	};
	return league;
}

function getRemainingFixtures(results) {

	var teams = getDistinctTeams(results);

	var mostPlayedFixtureCount = getMostPlayedFixtureCount(results);


	var fixtureList = getFixtureList(teams,mostPlayedFixtureCount);
	var fixturesToPlay = [];

	fixtureList = getFixtureListWithPlayedGamesMarked(results, fixtureList);

	for (var a = 0; a < fixtureList.length; a++) {
		var currentFixtureListRow = fixtureList[a];
		if (!(currentFixtureListRow.Played)) {
			fixturesToPlay.push({ HomeTeam: currentFixtureListRow.HomeTeam, AwayTeam: currentFixtureListRow.AwayTeam });
		}
	};	

	if (fixturesToPlay.length === 0){
		for (var i = 0; i < fixtureList.length; i++) {
			var currentFixtureListRow = fixtureList[i];
			fixturesToPlay.push({ HomeTeam: currentFixtureListRow.HomeTeam, AwayTeam: currentFixtureListRow.AwayTeam });
		};
	}
/*
	for (var x = 1; x < mostPlayedFixtureCount; x++) {
		var currentFixturesToPlay = [];
		currentFixturesToPlay = fixturesToPlay;
		fixturesToPlay.push.apply(fixturesToPlay, currentFixturesToPlay);
	};
*/
	return fixturesToPlay;
}


function getMostPlayedFixtureCount(results) {

	var mostPlayedFixtureCount = 0;
	var fixturesPlayed = [];

	for (var i = 0; i < results.length; i++) {
		
		var result = results[i];
		var fixtureRow = { HomeTeam: result.HomeTeam , AwayTeam: result.AwayTeam, Count: 1 };
		var fixtureExistsInFixturesAlready = false;

		if (fixturesPlayed.length != 0) {
			fixtureExistsInFixturesAlready = fixtureExistsInFixtures(fixturesPlayed, fixtureRow);
		}

		if (fixtureExistsInFixturesAlready) {
			addOneToExistingFixtureCount(fixturesPlayed, fixtureRow);
		} else {
			fixturesPlayed.push(fixtureRow);
		}
	};

	fixturesPlayed.sort(function(a,b) { a.Played > b.Played });

	mostPlayedFixtureCount = fixturesPlayed[0].Count;

	return mostPlayedFixtureCount;
}


function getFixtureListWithPlayedGamesMarked(results, fixtureList) {
	//var fixturesPlayed = [];

	for (var i = 0; i < results.length; i++) {

		var currentResult = { Id: results[i].Id, HomeTeam: results[i].HomeTeam, HomeScore: results[i].HomeScore, AwayTeam: results[i].AwayTeam, AwayScore: results[i].AwayScore };

		for (var n = 0; n < fixtureList.length; n++) {

			var currentFixture = fixtureList[n];	

			if (!(currentFixture.Played)) {

				if ((currentFixture.HomeTeam === currentResult.HomeTeam) && (currentFixture.AwayTeam === currentResult.AwayTeam)) {

					fixtureList[n].Played = true;
					break;
				}
			}
		};
	};
	return fixtureList;

/*
	for (var n = 0; n < results.length; n++) {

		var result = results[n];
		var fixtureRow = { HomeTeam: result.HomeTeam , AwayTeam: result.AwayTeam, Count: 1 };
		var fixtureExistsInFixturesAlready = false;

		if (fixturesPlayed.length != 0) {
			fixtureExistsInFixturesAlready = fixtureExistsInFixtures(fixturesPlayed, fixtureRow);
		}

		if (fixtureExistsInFixturesAlready) {
			addOneToExistingFixtureCount(fixturesPlayed, fixtureRow);
		} else {
			fixturesPlayed.push(fixtureRow);
		}
	}

	// find and mark fixtures already played
	for (var i = 0; i < fixturesPlayed.length; i++) {

		var currentFixturePlayed = fixturesPlayed[i];

		for (var a = 0; a < fixtureList.length; a++) {
			var currentFixtureRow = fixtureList[a];
			if ((currentFixtureRow.HomeTeam === currentFixturePlayed.HomeTeam) && (currentFixtureRow.AwayTeam === currentFixturePlayed.AwayTeam)) {
				fixtureList[a].Played = true;
			}
		};
	};
*/
	return fixtureList;
}


function getFixtureList(teams, mostPlayedFixtureCount) {

	var homeAndAwayFixtures = [];
	var teamsCopy = teams;
	var fixtureId = 0;

	for (var i = 0; i < teams.length; i++) {

		var currentTeam = teams[i].toString();

		for (var n = 0; n < teamsCopy.length; n++) {

			var currentTeamFromCopy = teamsCopy[n].toString();

			if (currentTeam != currentTeamFromCopy) {
				var fixture = { Id: fixtureId, HomeTeam: currentTeam, AwayTeam: currentTeamFromCopy, Played: false };
				homeAndAwayFixtures.push(fixture);
				fixtureId++;
			}
		};
	};

	if (mostPlayedFixtureCount <= 1) {
		return homeAndAwayFixtures;
	}

	fixtureId = 0;
	var fixtures = [];
	for (var x = 0; x < mostPlayedFixtureCount; x++) {
		for (var i = 0; i < homeAndAwayFixtures.length; i++) {

			var currentFixture = homeAndAwayFixtures[i];
			
			fixtures.push({ Id: fixtureId, HomeTeam: currentFixture.HomeTeam, AwayTeam: currentFixture.AwayTeam, Played: currentFixture.Played });
			fixtureId++;
		};
	};
	return fixtures;

	//return homeAndAwayFixtures;


	// for (var x = 1; x < mostPlayedFixtureCount; x++) {
	// 	var fixtures = [];
	// 	fixtures = homeAndAwayFixtures;
	// 	homeAndAwayFixtures.push.apply(homeAndAwayFixtures, fixtures);
	// };


	// for (var a = 0; a < homeAndAwayFixtures.length; a++) {
	// 	homeAndAwayFixtures[a].Id = a;
	// };

	//return homeAndAwayFixtures;

/*
	for (var i = 0; i < teams.length; i++) {

		var currentTeam = teams[i].toString();

		for (var n = 0; n < teamsCopy.length; n++) {

			var currentTeamFromCopy = teamsCopy[n].toString();

			if (currentTeamFromCopy != currentTeam) {

				var homeFixture = { HomeTeam: currentTeam, AwayTeam: currentTeamFromCopy, Played: false };
				var awayFixture = { HomeTeam: currentTeamFromCopy, AwayTeam: currentTeam, Played: false };

				var fixtureAlreadyCreated = false;

				for (var x = 0; x < completeFixtures.length; x++) {
					if ((homeAndAwayFixtures[x].HomeTeam === homeFixture.HomeTeam) && (homeAndAwayFixtures[x].AwayTeam === homeFixture.AwayTeam)) {
						fixtureAlreadyCreated = true;
					}
				};

				if (fixtureAlreadyCreated === false) {
					homeAndAwayFixtures.push(homeFixture);
					homeAndAwayFixtures.push(awayFixture);
				}
			}
		};
	};

	completeFixtures = homeAndAwayFixtures;

	if (!(completeFixtures.length === (teams.length * mostPlayedFixtureCount))) {
		for (var i = 0; i < mostPlayedFixtureCount; i++) {
			completeFixtures.push.apply(completeFixtures, homeAndAwayFixtures);
		};
	}

	return completeFixtures;
*/
	
}


function fixtureExistsInFixtures(fixturesPlayed, fixtureRow) {
	var fixtureExists = false;

	for (var n = 0; n < fixturesPlayed.length; n++) {

		var currentFixturesRow = fixturesPlayed[n];

		if ((currentFixturesRow.HomeTeam === fixtureRow.HomeTeam) && (currentFixturesRow.AwayTeam === fixtureRow.AwayTeam)) {
			fixtureExists = true;
		}
	};
	return fixtureExists;
}


function addOneToExistingFixtureCount(fixtures, fixtureRow) {

	for (var n = 0; n < fixtures.length; n++) {

		var currentFixturesRow = fixtures[n];

		if ((currentFixturesRow.HomeTeam === fixtureRow.HomeTeam) && (currentFixturesRow.AwayTeam === fixtureRow.AwayTeam)) {
			fixtures[n].Count += 1;
		}
	};
}



function getLeagueTable(teams,data) {

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

	for (var i = 0; i < league.length; i++) {
    	league[i].Pos = (i + 1);
	}	

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


function findById(source, Id) {
    return source.filter(function( obj ) {
        return +obj.Id === +Id;
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


