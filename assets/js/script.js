var caja = document.getElementById("goTop");

caja.addEventListener("click", function(){
	document.documentElement.scrollTop=0;
});

window.addEventListener("scroll", function(){
	if(document.documentElement.scrollTop > 100){
		caja.style.display="flex";
	}else{
		caja.style.display="none";
	}
});