	function getLlama(){
		var input = document.getElementById("praise").value;
		img = document.getElementById("image1");
		if(input.length != 0){
			comapare(input);
		}else{
			alert("Write something down!");
		}
	}

	function comapare(string){
		if(string.toUpperCase() == "PRAISE THE LLAMA"){
			llamaGod();
		}
	}

	function llamaGod(){
		img.src = "./LLAMA.jpg";
	}

window.addEventListener('load', function (){
	function change(){
		if(img.src == tempImg1.src || img.src == "./LLAMA.jpg"){
			img.src = tempImg2.src;
		}else{
			img.src = tempImg1.src;
		}
	}

	function flashChange(){
		if(img.src == tempImg2.src){
			img.src = tempImg1.src;
		}
		if(img.src == tempImg1.src){
			img.src = tempImg3.src;
		}else{
			img.src = tempImg2.src;
		}
	}

	function checkKey(e){
		e = e || window.event;

		if(e.keyCode == 70){
			llamaGod();
		}
	}

	var img = document.getElementById("image1");

	var tempImg1 = new Image();
	tempImg1.src = "./test1.jpg";

	var tempImg2 = new Image();
	tempImg2.src = "./test2.jpg";

	var tempImg3 = new Image();
	tempImg3.src = "./test3.jpg";

	img.addEventListener("mouseover", change, false);
	img.addEventListener("mouseout", change, false);
	img.addEventListener("mousedown", flashChange, false);
	img.addEventListener("mouseup", flashChange, false);
	//todo Animations, more event handling
})
