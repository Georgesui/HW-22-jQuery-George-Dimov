const $tagsWithTestClass = $('.test')
	.css({
		'color': 'red'
	})

const $tagsNameHeadTwo = $('h2.test')
	.css({
		'color': 'red'
	})


const $tagsNamedParagraphs = $('p + p')
	.css({
		'color': 'red'
	})

const $tagsLiWithTrippleWClass = $('li.www + li')
	.css({
		'color': 'red'
	})

const $tagsIInsideSecondH = $('h2 i')
	.css({
		'color': 'red'
	})

const $tagsIOnlyInsideSecondH = $('h2>i')
	.css({
		'color': 'red'
	})

const $tagsHWithNotTestCllassName = $('h2:not(.test)')
	.css({
		'color': 'red'
	})

const $allHWithNotTestClassName = $(':header:not(.test)')
	.css({
		'color': 'red'
	})

const $allHAfterHTags = $(':header + :header')
	.css({
		'color': 'red'
	})

const $allHTestAfterHTestClassName = $(':header.test + :header.test')
	.css({
		'color': 'red'
	})