
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
    var view = "<div class='clear'>" +
                        "<ul class='nav'>" +
                            "<li class='first'><a href='Javascript:history.back(-1);' class='back'>Back</a></li>" +
                            "<li><a href='Javascript:void();' class='no_arrow'>All Results</a></li>" +
                            "{{#data}}"+
                                "<li><a href='#/view_results/{{LeagueName}}'>{{LeagueName}}</a></li>" +
                            "{{/data}}"+
                       "</ul>"+
                    "</div>";
    return view;
}


function renderResultsGetView(LeagueName) {
    var start = "<div class='clear'>" +
                       "<ul class='nav'>" +
                            "<li class='first'><a href='Javascript:history.back(-1);' class='back'>Back</a></li>" +
                            "<li><a href='Javascript:void();' class='no_arrow'>All Leagues</a></li>" +
                            "<li>" +
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
                "home team:<input id='home_team' name='home_team' type='text' class='input_large' />" +
                "home score:<input id='home_score' name='home_score' type='text' class='input_small' />" +
                "<br />" +
                "away team:<input id='away_team' name='away_team' type='text' class='input_large' />" +
                "away score:<input id='away_score' name='away_score' type='text' class='input_small' />" +
                "<br />" +
                "<input id='home_team' type='submit' value='add' class='btn' />" +
                "</form>";
    var end =          "<br />" +
                        "</div>"+
                        "</li>"+
                       "<li><a href='Javascript:void();'></a></li>"+
                    "</ul>"+
                    "</div>";       


    var view = (start + tpl + spcr + frm + end);

    return view;
}


function renderLeagueView(LeagueName) {
    var start = "<div class='clear'>" +
                       "<ul class='nav'>" +
                            "<li class='first'><a href='Javascript:history.back(-1);' class='back'>Back</a></li>" +
                            "<li><a href='Javascript:void();' class='no_arrow'>" + leagueName + "</a></li>" +
                            "<li>";
    var template = "<div class='league'><span class='pos'>Pos</span><span class='team'>Team</span>" +
            "<span class='played'>P</span><span class='for'>F</span><span class='against'>A</span><span class='gd'>GD</span><span class='pts'>Pts</span><div>" +
                   "{{#league}}"+
                   "<div class='league_table clear'>" +
                     "<span class='pos'>{{Pos}}</span><span class='team'>{{Team}}</span>" +
                     "<span class='played'>{{Played}}</span><span class='for'>{{For}}</span><span class='against'>{{Against}}</span>" +
                     "<span class='gd'>{{GD}}</span><span class='pts'>{{Points}}</span>" +
                   "</div>"+
                   "{{/league}}"+
            "</div>";
    var end =          "<br />" +
                        "</li>"+
                       "<li><a href='#/view_results/" + leagueName + "' class='back'>Add Result</a></li>"+
                    "</ul>"+
                    "</div>";       

    var view = (start + template + end);

    return view;
}


function renderCreateLeagueView() {
    var start = "<div class='clear'>" +
                       "<ul class='nav'>" +
                            "<li class='first'><a href='Javascript:history.back(-1);' class='back'>Back</a></li>" +
                            "<li><a href='Javascript:void();' class='no_arrow'>Create a new league</a></li>" +
                            "<li>";
    var frm =   "<div class='padding_left_14'>" +
                "<br />" +
                "<form action='#/create_league' method='post'>" +
                "league name:<input id='league_name' name='league_name' type='text' class='input_large' />" +
                "<input id='add_league' type='submit' value='add' class='btn' />" +
                "</form>" +
                "<br />" +
                "</div>";

    var end =          "</li>"+
                    "</ul>"+
                    "</div>";

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
    var view = "<div class='clear'>" +
                       "<ul class='nav'>" +
                            "<li class='first'><a href='Javascript:history.back(-1);' class='back'>Back</a></li>" +
                            "<li><a href='Javascript:void();' class='no_arrow'>Select a league to Edit</a></li>" +
                            "{{#data}}"+
                                "<li><a href='#/view_league/{{LeagueName}}'>{{LeagueName}}</a></li>" +
                            "{{/data}}"+
                       "</ul>"+
                    "</div>";
    return view;
}


function renderDeleteLeaguesView() {
    var view = "<div class='clear'>" +
                       "<ul class='nav'>" +
                            "<li class='first'><a href='Javascript:history.back(-1);' class='back'>Back</a></li>" +
                            "<li><a href='Javascript:void();' class='no_arrow'>Select a league to Delete</a></li>" +
                            "{{#data}}"+
                                "<li><a href='#/view_league/{{LeagueName}}'>{{LeagueName}}</a></li>" +
                            "{{/data}}"+
                       "</ul>"+
                    "</div>";
    return view;
}


