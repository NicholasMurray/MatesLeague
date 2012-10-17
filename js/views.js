
function renderHomeView() {
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


function renderAllResultsView() {
    var view = "<ul class='nav'>" +
                            "<li class='first'><a href='Javascript:history.back(-1);' class='back'>Back</a></li>" +
                            "<li><a href='Javascript:void();' class='no_arrow'>All Results</a></li>" +
                            "{{#data}}"+
                                "<li><a href='#/view_results/{{LeagueName}}'>{{LeagueName}}</a></li>" +
                            "{{/data}}"+
                       "</ul>";
    return view;
}


function renderResultsGetView(leagueName) {
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
                "home:<br />" +
                "team<input id='home_team' name='home_team' type='text' class='input_medium' />" +
                " score:<input id='home_score' name='home_score' type='text' class='input_small' />" +
                "<br />" +
                "away<br />" +
                "team:<input id='away_team' name='away_team' type='text' class='input_medium' />" +
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


function renderLeagueView(leagueName) {
    var start = "<ul class='nav'>" +
                            "<li class='first'><a href='Javascript:history.back(-1);' class='back'>Back</a></li>" +
                            "<li><a href='Javascript:void();' class='no_arrow'>" + leagueName + "</a></li>" +
                            "<li>";
    var template = "<div class='league'><span class='pos'>Pos</span><span class='team'>Team</span>" +
                    "<span class='played'>P</span><span class='for'>F</span><span class='against'>A</span>" +
                    "<span class='gd'>GD</span><span class='pts'>Pts</span><div>" +
                           "{{#league}}"+
                           "<div class='league_table clear'>" +
                             "<span class='pos'>{{Pos}}</span><span class='team'>{{Team}}</span>" +
                             "<span class='played'>{{Played}}</span><span class='for'>{{For}}</span><span class='against'>{{Against}}</span>" +
                             "<span class='gd'>{{GD}}</span><span class='pts'>{{Points}}</span>" +
                           "</div>"+
                           "{{/league}}"+
                    "</div>" +
                    "<br />" +
                        "</li>"+
                       "<li>";

    var frm = "<form action='#/view_league/" + leagueName + "' method='post'>" +
                "home:<br />" +
                "team<input id='home_team' name='home_team' type='text' class='input_medium' />" +
                " score:<input id='home_score' name='home_score' type='text' class='input_small' />" +
                "<br />" +
                "away<br />" +
                "team:<input id='away_team' name='away_team' type='text' class='input_medium' />" +
                "score:<input id='away_score' name='away_score' type='text' class='input_small' />" +
                "<br />" +
                "<input id='home_team' type='submit' value='add' class='btn' />" +
                "</form>";

    var end =          "</li>"+
                    "</ul>";

    var view = (start + template + frm + end);

    return view;
}


function renderCreateLeagueView() {
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


function renderLeaguesView() {
    var view = "<ul class='nav'>" +
                            "<li class='first'><a href='Javascript:history.back(-1);' class='back'>Back</a></li>" +
                            "<li><a href='Javascript:void();' class='no_arrow'>All Leagues</a></li>" +
                            "{{#data}}"+
                                "<li><a href='#/view_league/{{LeagueName}}'>{{LeagueName}}</a></li>" +
                            "{{/data}}"+
                       "</ul>";
    return view;
}


function renderEditLeaguesView() {
    var view = "<ul class='nav'>" +
                            "<li class='first'><a href='Javascript:history.back(-1);' class='back'>Back</a></li>" +
                            "<li><a href='Javascript:void();' class='no_arrow'>Select a league to Edit</a></li>" +
                            "{{#data}}"+
                                "<li><a href='#/view_league/{{LeagueName}}'>{{LeagueName}}</a></li>" +
                            "{{/data}}"+
                       "</ul>";
    return view;
}


function renderDeleteLeaguesView() {
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

function renderDeleteNamedLeaguesView(leagueName) {
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
