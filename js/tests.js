//test( "hello test", function() {
//  ok( 1 == "1", "Passed!" );
//});

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
	results.push({ Id: 1, HomeTeam: "Villa", HomeScore: 2, AwayTeam: "Newcastle", AwayScore: 1 });

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
	results.push({ Id: 1, HomeTeam: "Villa", HomeScore: 2, AwayTeam: "Newcastle", AwayScore: 1 });
	results.push({ Id: 2, HomeTeam: "Newcastle", HomeScore: 2, AwayTeam: "Villa", AwayScore: 1 });

	// Act
	var remainingFixtures = getRemainingFixtures(results);

	// Assert
	equal(remainingFixtures.length, 0, "Passed!");
});


test("getRemainingFixtures Test Two Results Supplied Same Home and Away Teams", function() {

	// Arrange
	var results = [];
	results.push({ Id: 1, HomeTeam: "Villa", HomeScore: 2, AwayTeam: "Newcastle", AwayScore: 1 });
	results.push({ Id: 2, HomeTeam: "Villa", HomeScore: 0, AwayTeam: "Newcastle", AwayScore: 1 });

	// Act
	var remainingFixtures = getRemainingFixtures(results);

	// Assert
	equal(remainingFixtures.length, 2, "Passed!");
	equal(remainingFixtures[0].HomeTeam, "Newcastle", "Passed!");
	equal(remainingFixtures[0].AwayTeam, "Villa", "Passed!");
	equal(remainingFixtures[1].HomeTeam, "Newcastle", "Passed!");
	equal(remainingFixtures[1].AwayTeam, "Villa", "Passed!");
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
