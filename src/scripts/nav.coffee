class Navigate
	@position = null

	constructor: (@pattern) ->

	goto: (location) ->
		@location = location

		
###
/facebook -> /news/2/article1/map
/news/2/article1/map -> /facebook 
###