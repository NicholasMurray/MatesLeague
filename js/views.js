
function homeView() {
    var view = "<nav class='nav'>" +
            "<ul>" +
                "<li class='first'><a href='#/view_all_results'>View All Results</a></li>" +
                "<li><a href='#/view_leagues'>View Leagues</a></li>" +
                "<li><a href='#/create_league'>Create League</a></li>" +
                "<li><a href='#/edit_league'>Edit League</a></li>" +
                "<li><a href='#/delete_league'>Delete League</a></li>" +
            "</ul>" +
        "</nav>";
    return view;
}


function allResultsView() {
    var view = "<ul class='nav'>" +
                            "<li class='first'><a href='Javascript:history.back(-1);' class='back'>Back</a></li>" +
                            "<li><a href='Javascript:void();' class='no_arrow'>All Results</a></li>" +
                            "{{#data}}"+
                                "<li><a href='#/view_results/{{LeagueName}}'>{{LeagueName}}</a></li>" +
                            "{{/data}}"+
                       "</ul>";
    return view;
}


function resultsGetView(leagueName) {
    var start = "<ul class='nav'>" +
                            "<li class='first'><a href='Javascript:history.back(-1);' class='back'>Back</a></li>" +
                            "<li><a href='Javascript:void();' class='no_arrow'>All Leagues</a></li>" +
                            "<li class='non_link'>" +
                            "<div class='padding_left_14'>";
    var tpl = "<span>Latest Results for <i>" + leagueName + "</i></span>"+
              "<br />" +
              "{{#data}}"+
              "<div class='result_row clear'>"+
                "<span class='home_team'>{{HomeTeam}} </span>" +
                "<span class='score'>{{HomeScore}} - " + "{{AwayScore}}</span>" +
                "<span class='away_team'>{{AwayTeam}}</span>"+
               "</div>"+
              "{{/data}}";
    var spcr = "<div class='clear padding_top_10'></div>";
    var frm = "<form action='#/view_results/" + leagueName + "' method='post'>" +
                "home<br />" +
                "team:<input id='home_team' name='home_team' type='text' class='input_medium' /> " +
                "score:<input id='home_score' name='home_score' type='text' class='input_small' />" +
                "<br />" +
                "away<br />" +
                "team:<input id='away_team' name='away_team' type='text' class='input_medium' /> " +
                "score:<input id='away_score' name='away_score' type='text' class='input_small' />" +
                "<br />" +
                "<input id='home_team' type='submit' value='add' class='btn' />" +
                "</form>";
    var end =          "</div>"+
                        "</li>"+
                    "</ul>";

    var view = (start + tpl + spcr + frm + end);

    return view;
}



function leagueView (leagueName) {

    var startHtml = "<ul class='nav'>" +
                            "<li class='first'><a href='Javascript:history.back(-1);' class='back'>Back</a></li>" +
                            "<li><a href='Javascript:void();' class='no_arrow'>" + leagueName + "</a></li>" +
                            "<li>";

    var leagueHtml = "<div class='league'><span class='pos'>Pos</span><span class='team'>Team</span>" +
                    "<span class='played'>P</span><span class='for'>F</span><span class='against'>A</span>" +
                    "<span class='gd'>GD</span><span class='pts'>Pts</span><div>" +
                           "{{#viewModel.League}}"+
                           "<div class='league_table clear'>" +
                             "<span class='pos'>{{Pos}}</span><span class='team'>{{Team}}</span>" +
                             "<span class='played'>{{Played}}</span><span class='for'>{{For}}</span><span class='against'>{{Against}}</span>" +
                             "<span class='gd'>{{GD}}</span><span class='pts'>{{Points}}</span>" +
                           "</div>"+
                           "{{/viewModel.League}}"+
                    "</div>" +
                    "<br />" +
                        "</li>" +
                        "<li>" +
                        "Next Fixtures<br />";

    var fixturesHtml = "<div class='league clear'>" +
                           "{{#viewModel.FixturesRemaining}}"+
                           "<div class='league_table clear'>" +
                             "<span class='team float_left'>{{HomeTeam}}</span><span class='float_left'>&nbsp;v&nbsp;</span><span class='team float_left'>{{AwayTeam}}</span>" +
                           "</div>"+
                           "{{/viewModel.FixturesRemaining}}"+
                    "</div>"+
                    "<div class='clear'><br /></div>";
    
    var endHtml =   "</li>"+
                    "</ul>";

    var view = (startHtml + leagueHtml + fixturesHtml + endHtml);

    return view;
}


function createLeagueView() {

    var start = "<ul class='nav'>" +
                            "<li class='first'><a href='Javascript:history.back(-1);' class='back'>Back</a></li>" +
                            "<li><a href='Javascript:void();' class='no_arrow'>Create a new league</a></li>" +
                            "<li>";
    var frm =   "<div class='padding_left_14'>" +
                "<br />" +
                "<form action='#/create_league' method='post'>" +
                "league name:<br />" +
                "<input id='league_name' name='league_name' type='text' class='input_large' /><br />" +
                "<input id='add_league' type='submit' value='add' class='btn' />" +
                "</form>" +
                "<br />" +
                "</div>";

    var end =          "</li>"+
                    "</ul>";

    var view = (start + frm + end);
    return view;
}


function leaguesView() {
    var view = "<ul class='nav'>" +
                            "<li class='first'><a href='Javascript:history.back(-1);' class='back'>Back</a></li>" +
                            "<li><a href='Javascript:void();' class='no_arrow'>All Leagues</a></li>" +
                            "{{#data}}"+
                                "<li><a href='#/view_league/{{LeagueName}}'>{{LeagueName}}</a></li>" +
                            "{{/data}}"+
                       "</ul>";
    return view;
}


function editLeaguesView() {
    var view = "<ul class='nav'>" +
                            "<li class='first'><a href='Javascript:history.back(-1);' class='back'>Back</a></li>" +
                            "<li><a href='Javascript:void();' class='no_arrow'>Select a league to Edit</a></li>" +
                            "{{#data}}"+
                                "<li><a href='#/view_league/{{LeagueName}}'>{{LeagueName}}</a></li>" +
                            "{{/data}}"+
                       "</ul>";
    return view;
}


function deleteLeaguesView() {
    var view = "<ul class='nav'>" +
                            "<li class='first'><a href='Javascript:history.back(-1);' class='back'>Back</a></li>" +
                            "<li><a href='Javascript:void();' class='no_arrow'>Select a league to Delete</a></li>" +
                            "{{#data}}"+
                                "<li>" +
                                    "<a href='#/delete_league/{{LeagueName}}'>{{LeagueName}}</a>" +
                                "</li>" +
                            "{{/data}}"+
                       "</ul>";
    return view;
}

function deleteNamedLeaguesView(leagueName) {
    var view = "<ul class='nav'>" +
                            "<li class='first'><a href='Javascript:history.back(-1);' class='back'>Back</a></li>" +
                            "<li><a href='Javascript:void();' class='no_arrow'>Delete a League</a></li>" +
                            "<li class='non_link'>" +
                                "<div class='non_link'>" +
                                    "<form action='#/delete_league/{{leagueName}}' method='post'>" +
                                        "<div class='float_left'>{{leagueName}}</div>" +
                                        "<div class='float_left'>" +
                                            "<input type='hidden' name='league_name' value='{{leagueName}}' />" +
                                            "<input type='submit' value='delete' class='btn' />" +
                                        "</div>" +
                                    "</form>" +
                                "</div>" +
                                "<div class='clear'></div>" +
                            "</li>" +
                       "</ul>";
    return view;
}
