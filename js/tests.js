
var resultsTestData = [];
resultsTestData.push({ Id: 1, HomeTeam: "Villa", HomeScore: 2, AwayTeam: "Newcastle", AwayScore: 1 });
resultsTestData.push({ Id: 2, HomeTeam: "Newcastle", HomeScore: 2, AwayTeam: "Villa", AwayScore: 1 });
resultsTestData.push({ Id: 3, HomeTeam: "ManUtd", HomeScore: 0, AwayTeam: "Newcastle", AwayScore: 1 });
resultsTestData.push({ Id: 4, HomeTeam: "Villa", HomeScore: 2, AwayTeam: "Newcastle", AwayScore: 1 });

var teamsTestData = [];
teamsTestData.push("Villa");
teamsTestData.push("Newcastle");
teamsTestData.push("ManUtd");
teamsTestData.push("Villa");
teamsTestData.push("ManUtd");

var fixturesTestData = [];
fixturesTestData.push({ HomeTeam: "Villa", AwayTeam: "Newcastle", Played: false });
fixturesTestData.push({ HomeTeam: "Newcastle", AwayTeam: "Villa", Played: false });

var leagueTableTestData = [];
leagueTableTestData.push({Pos:1, Team: "Villa", Played: 2, For: 3, Against: 1, GD: 0, Points: 6});
leagueTableTestData.push({Pos:2, Team: "Newcastle", Played: 2, For: 1, Against: 3, GD: 0, Points: 0});


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
	equal(remainingFixtures[0].HomeTeam, "Newcastle", "Passed!");
	equal(remainingFixtures[0].AwayTeam, "Villa", "Passed!");
	equal(remainingFixtures.length, 1, "Passed!");
});


test("getRemainingFixtures Test Two Results Supplied Home and Away", function() {

	// Arrange
	var results = [];
	results.push(resultsTestData[0]);
	results.push(resultsTestData[1]);

	// Act
	var remainingFixtures = getRemainingFixtures(results);

	// Assert
	equal(remainingFixtures.length, 2, "Passed!");
	equal(remainingFixtures[0].HomeTeam, "Villa", "Passed!");
	equal(remainingFixtures[0].AwayTeam, "Newcastle", "Passed!");
	equal(remainingFixtures[1].HomeTeam, "Newcastle", "Passed!");
	equal(remainingFixtures[1].AwayTeam, "Villa", "Passed!");
});


test("getRemainingFixtures Test Two Results Supplied Same Home and Away Teams Villa Versus Newcastle", function() {

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


test("getRemainingFixtures Test three Results Supplied One Fixture needs played", function() {

	// Arrange
	var results = [];
	results.push(resultsTestData[0]);
	results.push(resultsTestData[1]);
	results.push(resultsTestData[3]);

	// Act
	var remainingFixtures = getRemainingFixtures(results);

	// Assert
	equal(remainingFixtures.length, 1, "Passed!");
	equal(remainingFixtures[0].HomeTeam, "Newcastle", "Passed!");
	equal(remainingFixtures[0].AwayTeam, "Villa", "Passed!");
});



test("getMostPlayedFixtureCount", function() {

	// Arrange
	var results = [];
	results.push(resultsTestData[0]);
	results.push(resultsTestData[1]);
	results.push(resultsTestData[2]);
	results.push(resultsTestData[3]);

	// Act
	var mostPlayedFixtureCount = getMostPlayedFixtureCount(results);

	// Assert
	equal(mostPlayedFixtureCount, 2, "Passed!");
});

test("getDistinctTeams Test", function() {

	// Arrange
	var teams = teamsTestData;

	// Arrange
	var results = eliminateDuplicates(teams);

	// Assert
	equal(results.length, 3, "Passed!");
});


test("getLeagueTable Test", function() {

	// Arrange
	var teams = teamsTestData;
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
	var fixtures = [];
	fixtures.push({ HomeTeam: "Villa", AwayTeam: "Newcastle", Count: 1});
	var fixtureRow = { HomeTeam: "Villa", AwayTeam: "Newcastle", Count: 1};

	// Act
	var fixtureExists = fixtureExistsInFixtures(fixtures, fixtureRow);

	// Assert
	equal(fixtureExists, true, "Passed!");
});



test("getFixtureList Test Two Teams", function() {

	// Arrange
	var results = [];
	results.push(resultsTestData[0]);
	var teams = []
	teams.push(results[0].HomeTeam);
	teams.push(results[0].AwayTeam);

	// Act
	var fixtures = getFixtureList(teams, results.length);

	// Assert
	equal(fixtures[0].HomeTeam, "Villa", "Passed!");
	equal(fixtures[0].AwayTeam, "Newcastle", "Passed!");
	equal(fixtures.length, 2, "Passed!");
});


test("getFixtureList Test Three Teams", function() {

	// Arrange
	var teams = []
	teams.push(teamsTestData[0]);
	teams.push(teamsTestData[1]);
	teams.push(teamsTestData[2]);
	var mostPlayedFixtureCount = 0;

	// Act
	var fixtures = getFixtureList(teams, mostPlayedFixtureCount);

	// Assert
	equal(fixtures[0].HomeTeam, "Villa", "Passed!");
	equal(fixtures[0].AwayTeam, "Newcastle", "Passed!");
	equal(fixtures.length, 6);
});


test("getFixtureListWithPlayedGamesMarked One Game Test", function() {

	// Arrange
	var results = [];
	results.push(resultsTestData[0]);
	results.push(resultsTestData[3]);
	var teams = [];
	teams.push(teamsTestData[0]);
	teams.push(teamsTestData[1]);
	var mostPlayedFixtureCount = 0;

	var fixtures = getFixtureList(teams, 1);

	// Act
	var fixtures = getFixtureListWithPlayedGamesMarked(results, fixtures);

	// Assert
	equal(fixtures[0].Played, true, "Passed!");
	equal(fixtures[1].Played, false, "Passed!");
	equal(fixtures.length, 2, "Passed!");
});



test("getFixtureListWithPlayedGamesMarked Three Game Test", function() {

	// Arrange
	var results = [];
	results.push(resultsTestData[0]);
	results.push(resultsTestData[1]);
	results.push(resultsTestData[3]);
	var teams = [];
	teams.push(teamsTestData[0]);
	teams.push(teamsTestData[1]);

	var fixtureList = getFixtureList(teams,2);

	// Act
	var fixtures = getFixtureListWithPlayedGamesMarked(results, fixtureList);

	// Assert
	equal(fixtures[0].Played, true, "Passed!");
	equal(fixtures[1].Played, true, "Passed!");
	equal(fixtures[2].Played, true, "Passed!");
	equal(fixtures[3].Played, false, "Passed!");
});



test("setGoalDifference Test", function() {

	//  Arrange
	var leagueTable = leagueTableTestData;

	// Act
	var updatedLeagueTable = setGoalDifference(leagueTable);

	// Assert
	equal(updatedLeagueTable[0].GD, 2, "Passed!");
	equal(updatedLeagueTable[1].GD, -2, "Passed!");
});


test("convertResultsToLeague", function() {

	// Arrange
	var results = []
	results.push(resultsTestData[0]);
	results.push(resultsTestData[1]);

	// Act
	var leagueTable = convertResultsToLeague(results);

	// Assert
	equal(leagueTable[0].Team, "Villa", "Passed!");
	equal(leagueTable[0].Points, 3, "Passed!");
});


test("setCurrentResults Test", function() {
	expect(0);
});


test("getCurrentResults", function() {
	expect(0);
});


// 
// Generic Functions Test
//
test("comparePoints Test", function() {

	// Arrange
	var leagueTable = [];
	leagueTable.push(leagueTableTestData[1]);
	leagueTable.push(leagueTableTestData[0]);

	// Act
	leagueTable.sort(comparePoints);

	// Assert
	equal(leagueTable[0].Team, "Villa", "Passed!");
	equal(leagueTable[1].Team, "Newcastle", "Passed!");
});


test("findById Test", function() {

	// Arrange
	var results = resultsTestData;

	// Act
	var result = findById(results, 2);

	// Assert
	equal(result.HomeTeam, "Newcastle", "Passed!");
});


test("eliminateDuplicates Test", function() {

	// Arrange
	var teams = teamsTestData;

	// Arrange
	var results = eliminateDuplicates(teams);

	// Assert
	equal(results.length, 3, "Passed!");
});
