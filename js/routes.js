var ratPack = $.sammy(function() {

    this.element_selector = '#content';

    $(function() {
	  ratPack.run('#/view_league');
	});
    
    // routes
	this.get('#/view_results', function(context) {
	    context.app.swap('');
	    context.$element().append('<h1>View Results</h1>');

	    renderResults(currentResults);
	});

	this.get('#/view_league', function(context) {
	    context.app.swap('');
	    context.$element().append('<h1>View League</h1>');

	    renderLeague(currentLeague);
	});

	this.get('#/edit_league', function(context) {
	    context.app.swap('');
	    context.$element().append('<h1>Edit League</h1>');
	});

	this.get('#/delete_league', function(context) {
	    context.app.swap('');
	    context.$element().append('<h1>Delete League</h1>');
	});

});

