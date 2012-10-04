
function convertResultsToLeague(data) {

	/*var leagueRow = new Object.Create(null);

	defineProperty(leagueRow, 'Pos', '');
	defineProperty(leagueRow, 'Team', '');
	defineProperty(leagueRow, 'Played', '');
	defineProperty(leagueRow, 'GD', '');
	defineProperty(leagueRow, 'Pts', '');*/

	var leaguePos1 = { Pos:'1', Team: 'Villa', Played: '2', GD: '3', Pts: '6' };
	var leaguePos2 = { Pos:'2', Team: 'Newcastle', Played: '2', GD: '-3', Pts: '0' };


/*	for (var prop in data) {
      //alert(prop + " = " + obj[prop]);
      Console.log(prop.HomeTeam);
   }*/


   for (var key in data) {
   	  var obj = data[key];
	   for (var prop in obj) {
	      //alert(prop + " = " + obj[prop]);
	      console.log(prop);
	   }
	}

}
