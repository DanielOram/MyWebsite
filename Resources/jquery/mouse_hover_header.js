//This file animates the mouse hover mask effect
	//this method returns card that is being hovered.


//code for drawing on an html canvas
function canvasHover(x,y) {
	var c = document.getElementById("hover_canvas");
	var ctx = c.getContext("2d");
	var img = new Image();
	var imgclip = new Image();
	imgclip.src = 'Resources/Images/mouse_hover_hex.png';
	img.src = 'Resources/Images/header_bg3.png';
	
img.onload = function () {
	ctx.clearRect(0, 0, c.width, c.height);
	
	ctx.globalCompositeOperation = 'source-over';
	
    ///// draw the shape we want to use for clipping
    ctx.drawImage(imgclip, x, y,imgclip.width,imgclip.height);
    /// change composite mode to use that shape
    ctx.globalCompositeOperation = 'source-in';
    /// draw the image to be clipped
    ctx.drawImage(img, 0, 0, img.width, img.height);
	//canvasHexHover(c,ctx,img,imgclip);
	//clear the area you don't want drawn on.
	//document.getElementById("hover_canvas").getContext("2d").clearRect(600, 100, 100, 100);
	
}
}

	
	function HoverHeader(hex,div,e) {
		var offsetX = div.parent().get(0).offsetLeft;
		var offsetY = div.parent().get(0).offsetTop;
    	var xPosition = e.clientX - offsetX - 126;
    	var yPosition = e.clientY - offsetY - 126;
		//had to manually put hex's w and h in..
		//hex.style.marginLeft = xPosition -126 + 'px';
		//hex.style.marginTop = yPosition -126 + 'px';
		document.getElementById('mouse').innerHTML = (" hover: " + (xPosition + 126) + ", " + (yPosition + 126));
		//edit canvas here
		
		canvasHover(xPosition,yPosition);
		
	}
	
	//additional function for adding and removing hex from view.
	function hover_over_header() {
		$('#hoverEffectContainer').hover(function(){
			//$('#mouse_hex').animate({border:'10px solid #fff'},100);	
			//document.getElementById('mouse_hex').fadeIn(200);
			//document.getElementById('mouse_hex').style.visibility='visible';
		},function(){
			//hide hex when outside of the gameArea.
			
			//$('#mouse_hex').animate({border:'1px solid #fff'},100);
			//document.getElementById('mouse_hex').style.visibility='hidden';
			document.getElementById("hover_canvas").getContext("2d").clearRect(0, 0, document.getElementById("hover_canvas").width, document.getElementById("hover_canvas").height);
		});
	}
	
	
//where the magic happens	
$(document).ready(function () {
	hover_over_header();
	
	document.getElementById("hoverEffectContainer").addEventListener("mousemove", function (e) { HoverHeader(document.getElementById('mouse_hex'),$(this),e); }, false);
	
});



