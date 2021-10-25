var caja = document.getElementById("goTop");
var logo = document.getElementById("logo");

caja.addEventListener("click", function(){
	document.documentElement.scrollTop=0;
});

window.addEventListener("scroll", function(){
	if(document.documentElement.scrollTop > 50){
		caja.style.display="flex";

	}else{
		caja.style.display="none";
	}
});