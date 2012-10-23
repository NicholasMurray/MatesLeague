

var resultsTestData = [];
	resultsTestData.push({ Id: 1, HomeTeam: "Villa", HomeScore: 2, AwayTeam: "Newcastle", AwayScore: 1 });
	resultsTestData.push({ Id: 2, HomeTeam: "Newcastle", HomeScore: 2, AwayTeam: "Villa", AwayScore: 1 });
	resultsTestData.push({ Id: 3, HomeTeam: "ManUtd", HomeScore: 0, AwayTeam: "Newcastle", AwayScore: 1 });
	resultsTestData.push({ Id: 4, HomeTeam: "Villa", HomeScore: 2, AwayTeam: "Newcastle", AwayScore: 1 });

test("getHomePoints Test", function() {
	
	// Arrange and Act
	var homeWin = getHomePoints(2,1);
	var awayWin = getHomePoints(1,2);
	var draw = getHomePoints(1,1);

	// Assert
	equal(homeWin, 3, "Passed!");
	equal(awayWin, 0, "Passed!");
	equal(draw, 1, "Passed!");
});


test("getAwayPoints Test", function() {

	// Arrange and Act
	var homeWin = getAwayPoints(2,1);
	var awayWin = getAwayPoints(1,2);
	var draw = getAwayPoints(1,1);

	// Assert
	equal(homeWin, 0, "Passed!");
	equal(awayWin, 3, "Passed!");
	equal(draw, 1, "Passed!");
});


test("getRemainingFixtures Test One Result Supplied", function() {

	// Arrange
	var results = [];
	results.push(resultsTestData[0]);

	// Act
	var remainingFixtures = getRemainingFixtures(results);

	// Assert
	equal(remainingFixtures.length, 1, "Passed!");
	equal(remainingFixtures[0].HomeTeam, "Newcastle", "Passed!");
	equal(remainingFixtures[0].AwayTeam, "Villa", "Passed!");
});


test("getRemainingFixtures Test Two Results Supplied Home and Away", function() {

	// Arrange
	var results = [];
	results.push(resultsTestData[0]);
	results.push(resultsTestData[1]);

	// Act
	var remainingFixtures = getRemainingFixtures(results);

	// Assert
	equal(remainingFixtures.length, 0, "Passed!");
});


test("getRemainingFixtures Test Two Results Supplied Same Home and Away Teams", function() {

	// Arrange
	var results = [];
	results.push(resultsTestData[0]);
	results.push(resultsTestData[3]);

	// Act
	var remainingFixtures = getRemainingFixtures(results);

	// Assert
	equal(remainingFixtures.length, 2, "Passed!");
	equal(remainingFixtures[0].HomeTeam, "Newcastle", "Passed!");
	equal(remainingFixtures[0].AwayTeam, "Villa", "Passed!");
	equal(remainingFixtures[1].HomeTeam, "Newcastle", "Passed!");
	equal(remainingFixtures[1].AwayTeam, "Villa", "Passed!");
});


test("getDistinctTeams Test", function() {

	// Arrange
	var teams = [];
	teams.push("Villa");
	teams.push("Newcastle");
	teams.push("ManUtd");
	teams.push("Villa");
	teams.push("ManUtd");

	// Arrange
	var results = eliminateDuplicates(teams);

	// Assert
	equal(results.length, 3, "Passed!");
});


test("getLeagueTable Test", function() {

	// Arrange
	var teams = [];
	teams.push("Villa");
	teams.push("Newcastle");
	teams.push("ManUtd");
	var results = resultsTestData;

	// Act
	var leagueTable = getLeagueTable(teams, results);

	// Assert
	equal(leagueTable[0].Team, "Villa", "Passed!");
	equal(leagueTable[0].Points, 6, "Passed!");
});


test("addOneToExistingFixtureCount Test", function() {

	// Arrange
	var fixtures = [];
	fixtures.push({ HomeTeam: "Villa", AwayTeam: "Newcastle", Count: 1});
	var fixtureRow = { HomeTeam: "Villa", AwayTeam: "Newcastle", Count: 1};

	// Act
	addOneToExistingFixtureCount(fixtures, fixtureRow);

	// Assert
	equal(fixtures[0].Count, 2, "Passed!");
});


test("fixtureExistsInFixtures Test", function() {

	// Arrange


	// Act


	// Assert

});


test("getFixtureList Test", function() {

});


test("getFixtureListWithPlayedGamesMarked Test", function() {

});


test("getRemainingFixtures Test", function() {

});

// setGoalDifference
// convertResultsToLeague
// setCurrentResults
// getCurrentResults
// comparePoints



// 
// Generic Functions Test
//
test("findById Test", function() {

	// Arrange
	var results = [];
	results.push({ Id: 1, HomeTeam: "Villa", HomeScore: 2, AwayTeam: "Newcastle", AwayScore: 1 });
	results.push({ Id: 2, HomeTeam: "Newcastle", HomeScore: 0, AwayTeam: "Villa", AwayScore: 1 });

	// Act
	var result = findById(results, 2);

	// Assert
	equal(result.HomeTeam, "Newcastle", "Passed!");
});


test("eliminateDuplicates Test", function() {

	// Arrange
	var teams = [];
	teams.push("Villa");
	teams.push("Newcastle");
	teams.push("ManUtd");
	teams.push("Villa");
	teams.push("ManUtd");

	// Arrange
	var results = eliminateDuplicates(teams);

	// Assert
	equal(results.length, 3, "Passed!");
});
