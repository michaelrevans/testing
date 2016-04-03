$(function() {

	$('#color-picker').on('mouseup', function() {
		var $this = $(this);
		var height = $this.height() - 100;
		var width = $this.width() - 100;
		var heighthex = (height*10).toString(16);
		var widthhex = (width*10).toString(16);
		if (widthhex.length === 1) {
			widthhex = '00' + widthhex;
		} else if (widthhex.length === 2) {
			widthhex = '0' + widthhex;
		}
		if (heighthex.length === 1) {
			heighthex = '00' + heighthex;
		} else if (heighthex.length === 2) {
			heighthex = '0' + heighthex;
		}
		var colorhex = heighthex + widthhex;
		colorhex.length > 6 ? colorhex = 'ffffff': colorhex;
		$this.css({'background-color': '#' + colorhex});
		console.log(colorhex);
	});

	$('#setbg').on('click', function() {
		var newbg = $('#color-picker').css('background-color');
		$('body').css({'background-color': newbg});
	});
});