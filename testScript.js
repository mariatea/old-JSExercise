
function testFunction(){
	var text;
	text = "Testing";
	document.getElementById("demo").innerHTML = text;
	document.getElementById("calculation").innerHTML = calculate(document.getElementById("randomNo").innerHTML);
}

function calculate(x){
	return x*x;
}

window.addEventListener('load', function (){

	function objectTest(){
		var person = {
			firstName:"John", 
			lastName:"X", 
			age:30, 
			id:1,
			returnAll: function(){return this.id + " " + this.firstName + " " + this.lastName + " " + this.age;
						}
		};
			document.getElementById("objectDemo").innerHTML = person.returnAll();
	}

	objectTest();

	//todo prototypes
})
