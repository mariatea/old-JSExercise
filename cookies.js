function showCookie(){
	alert(showCookie("firstName") + " " + showCookie("lastName") + " " + showCookie("gender"));
}

function saveCookie(){
	var firstName = document.getElementsByName("firstname").value;
	var lastName = document.getElementsByName("lastname").value;
	var gender = document.getElementsByName("gender").value;

	setCookie("firstName", firstName);
	setCookie("lastName", lastName);
	setCookie("gender", gender);
}

function setCookie(name, value, date){
	if(date){
		var day = new Date();
		data.setTime(data.getTime()+(date*24*60*60*1000));
		var expire = ";expires="+data.toGMTString();
	}else{
		var expires = "";
	}
	document.cookie = name + "=" + value + expire +"; path=/";
}

function deleteCookie(name) {
	document.cookie = nazwa + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

function fetchCookie(name){
	if(document.cookie != ""){
		var cookies = document.cookie.split(";");
		for(i = 0; i<cookies.length; i++){
			var nameCookie = cookies[i].split("=")[0];
			var valueCookie = cookies[i].split[i]("=");
			if(nameCookie == name){
				return unescape(valueCookie); //decodeURI
			}
		}
	}
}
