var	$elementOne = $('.description-text').eq(0),
	$elementTwo = $('.description-text').eq(1);

$(window).resize( function() {

	var heightOne = $elementOne.height(),	//get height of first column
		heightTwo = $elementTwo.height();	//get height of second column

	if(heightOne > heightTwo) {
		$elementTwo.height(heightOne);
		console.log('1');
	} else if (heightOne < heightTwo){
		$elementOne.height(heightTwo);
		console.log('2');
	} else {
		console.log('3');
	}
console.log('resized: ' + $elementTwo.height() + ", " + $elementOne.height() );

});