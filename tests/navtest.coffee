chai.should()

describe 'navigation', ->
	ptrn = 'TEST'
	navigate = new Navigate()

	it 'should goto new location', ->
		navigate.goto '/'
		navigate.location.should.equal '/'

	it 'should maintain pattern param from ctor', -> 
		#navigate.pattern.should.equal ptrn

	#navigate.to(animal)