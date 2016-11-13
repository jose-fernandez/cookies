function init(){
	if(checkCookie()){
		background(getCookie("bg"));
		fontSize(getCookie("fs"));
		fontColor(getCookie("fc"));
		user(getCookie("un"));
	}else{
	document.getElementById("submit").addEventListener("click",function(){
		if(checkCookie()){
			bg(getCookie("bg"));
			fontSize(getCookie("fs"));
			fontColor(getCookie("fc"));
			user(getCookie("un"));
		}else{
			createCookies();
			init();
		}
	});
	}
	document.getElementById("deleteCookie").addEventListener("click", function(){
		if (checkCookie()){
			deleteCookie(getCookie("un"));
		}else{
			document.getElementById("text").innerHTML="No existen Cookies";
		}
	});
}

function createCookies(){
	var a = new Date();
	a.setMinutes(a.getMinutes()+5);
	var name = document.getElementsByName("name")[0].value;
	var bg = document.getElementsByName("bg")[0].value;
	var fontSize = document.getElementsByName("fs")[0].value;
	var fontColor = document.getElementsByName("fc")[0].value;
	if(name != "" && name != null){
		setCookie("un", name);
		setCookie("expires", a.toUTCString());
		setCookie("fs", fontSize);
		setCookie("fc", fontColor);
		if(bg.length>0){
			background(bg);
			setCookie("bg", bg);
		}
		document.getElementById("text").innerHTML="";
	}
}

function setCookie(id, value){
	document.cookie = `${id}=${value};`;
}

function deleteCookie(x){
	document.cookie = `un=${x}; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    console.log(ca);
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        if(c[0]==" "){
 			if (c.substring(1, 4)==name) 
         	   return c.substring(4, c.length);
        }else if (c.substring(0, 3)==name) {
            return c.substring(3, c.length);
        }
    }
    return "";
}

function checkCookie(){
	var x=getCookie("un");
	if(x!=""){
		return true;
	}else{
		return false;
	}
}

function fontSize(x){
	document.getElementById("p").style.fontSize=x;
}

function fontColor(x){
	document.getElementById("p").style.color=x;
}

function user(x){
	if(x != ""){
		alert(`Bienvenido de nuevo, ${x}`);
	}else{
		return false;
	}
}

function background(x){
	if(x!=""){
		document.body.style.backgroundColor = `${x}`;
	}
}

window.onload=function(){
	init();
};