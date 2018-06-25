/*
 * Author: Wanjawa W. B. <wanjawawb@gmail.com>
 * Date: 25-Jun-2018
 * Description: Script to create user defined grid size, then select colors to mark the grid squares 
 *              works along with HTML and CSS
 * Purpose: Udacity project for Front End Web Development course
 */
 
const sizePicker = $('#sizePicker');
const pixelScreen = $('#pixel_canvas');

//Create a grid of variable rows and columns on screen.
function makeGrid() {
	let cell;
	pixelScreen.find('tr').remove();  //reset the screen in case anything is drawn

	//declare grid object with Rows and Columns
	const fullGrid = {  
		rows: $('#input_height').val(), 
		cols: $('#input_width').val()   
	}

	//Draw the grid
	for (let i = 0; i < fullGrid.rows; i++ ){
		cell += '<tr>'; 
		for (let j = 0; j < fullGrid.cols; j++) {
			cell += '<td></td>'; 
		}
		cell += '</tr>'; 
	}
	pixelScreen.html(cell); 
}

//What to do on click i.e. fill with choice color.
pixelScreen.on('click', 'td', function () { 
	const color = $('#colorPicker').val(); 
	$(this).css('background-color', color); 
});

//Erase on double click i.e. fill with white color.
pixelScreen.on('dblclick', 'td', function () { 
	$(this).css('background-color', '#ffffff');
});

//When size is submitted by the user, call makeGrid().
sizePicker.on('submit', function(e){ 
	e.preventDefault();
	$(makeGrid())
});
